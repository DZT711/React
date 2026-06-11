const prod = [
    { title: 'Cabbage', id: 1, isFruit: false },
    { title: 'Garlic', id: 2, isFruit: false },
    { title: 'Apple', id: 3, isFruit: true }
];
export default function ShoppingList() {
    const listItems = prod.map((item) => (
        <li key={item.id} style={{color:item.isFruit?'magenta':'darkgreen'}}>{item.title}</li>
    ));
    return <ul>{listItems}</ul>;
}