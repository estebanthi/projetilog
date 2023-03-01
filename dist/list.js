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
//# sourceMappingURL=list.js.map