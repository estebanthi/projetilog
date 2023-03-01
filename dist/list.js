class List extends HTMLElement {
    constructor(owner) {
        super();
        this.items = [];
        this.owner = owner;
    }
    add(item) {
        this.items.push(item);
        this.owner.onAdd(item);
        this.render();
    }
    remove_(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.owner.onRemove(item);
        }
        this.render();
    }
    update(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items[index] = item;
            this.owner.onUpdate(item);
        }
        this.render();
    }
    getAllItems() {
        return this.items;
    }
    render() {
        this.innerHTML = this.items.map(item => `<li>${item.toString()}</li>`).join('');
    }
}
customElements.define('my-list', List);
//# sourceMappingURL=list.js.map