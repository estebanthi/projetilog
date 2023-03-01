interface ListOwner<T> {
    onAdd(item: T): void;
    onRemove(item: T): void;
    onUpdate(item: T): void;
}

class GenericList<T> {
    private items: T[] = [];
    private owner: ListOwner<T>;

    constructor(owner: ListOwner<T>) {
        this.owner = owner;
    }

    add(item: T) {
        this.items.push(item);
        this.owner.onAdd(item);
    }

    remove(item: T) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.owner.onRemove(item);
        }
    }

    update(item: T) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items[index] = item;
            this.owner.onUpdate(item);
        }
    }

    getAllItems(): T[] {
        return this.items;
    }
}
