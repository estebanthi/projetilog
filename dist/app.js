//Ce script crée une instance de la classe "List" en utilisant l'objet "Library" comme implémentation de l'interface "ListOwner".
//Ensuite, il ajoute l'instance de la classe "List" créée à la fin du corps du document HTML lors de la fin du chargement de la page.
const list = new List(Library);
addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(list);
});
//La fonction "fillList" parcourt un tableau de livres "books" et ajoute chaque livre à l'instance de la classe "List".
const fillList = () => {
    books.forEach(book => list.add(book));
};
fillList();
//La méthode "logItems" de l'objet "Library" est appelée pour enregistrer tous les éléments de la liste.
Library.logItems();
//# sourceMappingURL=app.js.map