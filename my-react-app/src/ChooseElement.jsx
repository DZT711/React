import { useState } from "react";
const InitItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];
export default function ChooseElement() {
    const [items] = useState(InitItems);
    const [selectedId, setSelectedId] = useState(InitItems[0].id);
    const selectedItem = items.find(item => item.id === selectedId);
    return (
        <div>
            <h1>Choose an item</h1>
                <ul>
                    {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        {' '}
                        <button onClick={() => {
                        setSelectedId(item.id);
                            }}>
                                Choose
                        </button>
                    </li>
                    ))}
                </ul>
                <p>You picked {selectedItem?.name}.</p>
        </div>
    );
    
}