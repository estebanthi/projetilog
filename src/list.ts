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
        this.innerHTML = `
            <ul>
                ${this.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;
    }
}


customElements.define('my-list', List);

const list = new List({
    onAdd(item) {
        console.log(`Added item: ${item}`);
    },
    onRemove(item) {
        console.log(`Removed item: ${item}`);
    },
    onUpdate(item) {
        console.log(`Updated item: ${item}`);
    }
});

list.add("Item 1");
list.add("Item 2");
list.add("Item 3");
list.remove_("Item 1");
list.update("Item 2");


document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
