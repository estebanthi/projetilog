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
list.add("item 1");
list.remove_("Item 1");
list.update("Item 2");
document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
    list.add("Item 1");
});
const removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", () => {
    const items = list.getAllItems();
    if (items.length > 0) {
        const item = items[items.length - 1];
        list.remove_(item);
    }
});
//# sourceMappingURL=list.js.map