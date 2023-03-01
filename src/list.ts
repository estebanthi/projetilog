interface ListOwner {
    notifyListUpdate(action: string, item: any): void;
  }
  
class List<T> extends HTMLElement {

private _owner: ListOwner;
private _items: T[];

constructor(owner: ListOwner) {
    super();
    this._owner = owner;
    this._items = [];

    // Observer for changes in the list
    const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
        // Check if an item was added
        if (mutation.addedNodes.length > 0) {
            const addedItem = mutation.addedNodes[0];
            const index = Array.from(this.children).indexOf(addedItem as Element);
            this._owner.notifyListUpdate('add', this._items[index]);
        }
        // Check if an item was removed
        else if (mutation.removedNodes.length > 0) {
            const removedItem = mutation.removedNodes[0];
            const index = Array.from(this.children).indexOf(removedItem as Element);
            this._owner.notifyListUpdate('remove', this._items[index]);
        }
        }
    });
    });

    // Observe changes to the list
    observer.observe(this, { childList: true });
}

connectedCallback() {
    this.render();
}

get items(): T[] {
    return this._items;
}

set items(items: T[]) {
    this._items = items;
    this.render();
}
  
render() {
    this.innerHTML = '';
    this._items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.toString();
    this.appendChild(li);
    });
}
}
  