interface ListOwner<T> {
    onAdd(item: T): void;
    onRemove(item: T): void;
    onUpdate(item: T): void;
}

class List<T> extends HTMLElement {
    private items: T[] = [];
    private owner: ListOwner<T>;

    constructor(owner: ListOwner<T>) {
        super();
        this.owner = owner;
    }

    add(item: T) {
        this.items.push(item);
        this.owner.onAdd(item);
        this.render();
    }

    remove_(item: T) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.owner.onRemove(item);
        }
        this.render();
    }

    update(item: T) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items[index] = item;
            this.owner.onUpdate(item);
        }
        this.render();
    }

    getAllItems(): T[] {
        return this.items;
    }

    render() {
        console.log('rendering list');
        this.innerHTML = '';
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.toString();
            this.appendChild(li);
        });
    }
}

customElements.define('my-list', List);