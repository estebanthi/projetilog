//Ce projet consiste en la définition d'une classe "List" qui étend la classe "HTMLElement" pour créer une liste d'éléments. 
//La classe List est conçue pour être utilisée avec une implémentation de l'interface "ListOwner".

interface ListOwner {
    logItems(): void;
    onAdd(item): void;
    onRemove(item): void;
    onUpdate(item): void;
    addDefault(): any;
    modify(item): any[];

    items: any[];
}

//La classe List contient des méthodes pour ajouter, supprimer et mettre à jour des éléments dans la liste. 
//Elle contient également une méthode pour récupérer tous les éléments de la liste. 
//Enfin, elle contient une méthode "render" qui génère et affiche la liste d'éléments dans le DOM.


class List extends HTMLElement {
    private items: any[] = [];
    private owner: ListOwner;

    constructor(owner: ListOwner) {
        super();
        this.owner = owner;
    }

    //La méthode "add" ajoute un élément à la liste et déclenche la méthode "onAdd" de l'interface ListOwner.

    add(item: any) {
        this.items.push(item);
        this.owner.onAdd(item);
        this.render();
    }

    //La méthode "remove_" supprime un élément de la liste et déclenche la méthode "onRemove" de l'interface ListOwner.

    remove_(item: any) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.owner.onRemove(item);
        }
        this.render();
    }

    //La méthode "update" met à jour un élément de la liste et déclenche la méthode "onUpdate" de l'interface ListOwner.
    update(index: number, item: any) {
        if (index !== -1) {
            this.items[index] = item;
            this.owner.onUpdate(item);
        }
        this.render();
    }

    //La méthode "getAllItems" retourne tous les éléments de la liste.

    getAllItems(): any[] {
        return this.items;
    }

    //La méthode "render" crée un bouton "Ajouter" qui permet d'ajouter un nouvel élément à la liste. 
    //Elle crée ensuite un élément de liste pour chaque élément dans la liste et y ajoute un bouton "Supprimer" qui permet de supprimer l'élément correspondant.

    render() {
        this.innerHTML = '';

        const btnAdd = document.createElement('button');
        btnAdd.innerText = 'Ajouter';
        btnAdd.addEventListener('click', () => this.add(this.owner.addDefault()));
        this.appendChild(btnAdd);

        this.items.forEach(item => {
            const li = document.createElement('li');
            const div = document.createElement('div');

            const button = document.createElement('button');
            button.innerText = 'Supprimer';
            button.addEventListener('click', () => this.remove_(item));

            const modifyButton = document.createElement('button');
            modifyButton.innerText = 'Modifier';
            modifyButton.addEventListener('click', () => this.update(this.owner.modify(item)));

            li.innerText = item.toString();
            div.appendChild(modifyButton);
            div.appendChild(button);
            li.appendChild(div);
            this.appendChild(li);
        });
    }
}


//La méthode "customElements.define" est utilisée pour définir le composant "my-list".


customElements.define('my-list', List);