interface ListOwner {
    onAdd(item): void;
    onRemove(item): void;
    onUpdate(item): void;
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
        this.items.forEach(item => {
            const div = document.createElement('div');
            const button = document.createElement('button');
            button.innerText = 'Supprimer';
            button.addEventListener('click', () => this.remove_(item));
            div.innerText = item.toString();
            div.appendChild(button);
            this.appendChild(div);
        });
    }
}

customElements.define('my-list', List);