import { useState } from "react";
let nextId = 0;
export default function List() {
    const [name, setName] = useState("");
    const [arr, setArr] = useState([]);

    return (
        <div>
            <h1>Update Array By Using Input Bar</h1>
            <input value={name} onChange={ e=>setName(e.target.value)} />
            <button onClick={() =>
            {
                setArr([...arr, { id: nextId++, name }]);
                }
            }>Add</button>
            <ul>
                {arr.map(e => (<li key={e.id}>{e.name}{' '}
                    <button onClick={() => {
                        setArr(arr.filter(a => a.id !== e.id)
                        );
                        }}>
                        Delete
                    </button></li>  
                ))}
            </ul>
        </div>
    )
}