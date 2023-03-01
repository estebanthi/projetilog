interface ListOwner {
    logItems(): void;
    onAdd(item): void;
    onRemove(item): void;
    onUpdate(item): void;
    addDefault(): any;

    items: any[];
}

class List extends HTMLElement {
    private items: any[] = [];
    private owner: ListOwner;

    constructor(owner: ListOwner) {
        super();
        this.owner = owner;
    }

    add(item: any) {
        this.items.push(item);
        this.owner.onAdd(item);
        this.render();
    }

    remove_(item: any) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.owner.onRemove(item);
        }
        this.render();
    }

    update(item: any) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items[index] = item;
            this.owner.onUpdate(item);
        }
        this.render();
    }

    getAllItems(): any[] {
        return this.items;
    }

    render() {
        this.innerHTML = '';

        const btnAdd = document.createElement('button');
        btnAdd.innerText = 'Ajouter';
        btnAdd.addEventListener('click', () => this.add(this.owner.addDefault()));
        this.appendChild(btnAdd);

        this.items.forEach(item => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.innerText = 'Supprimer';
            button.addEventListener('click', () => this.remove_(item));
            li.innerText = item.toString();
            li.appendChild(button);
            this.appendChild(li);
        });
    }
}

customElements.define('my-list', List);