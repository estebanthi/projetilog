const list = new List(Library);
addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
const fillList = () => {
    books.forEach(book => list.add(book));
};
fillList();
Library.logItems();
//# sourceMappingURL=app.js.map