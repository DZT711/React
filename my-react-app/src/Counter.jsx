import { useState } from 'react';
function MyBtn(){
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>Clicked {count} times</button>
    );

}
function MyBtn2({ count, onClick }) {
    return (
        <button onClick={onClick}>Clicked {count} times</button>
    );
}
export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <MyBtn />
            <h1>Counters that update together</h1>
            <button onClick={handleClick}>Clicked {count} times</button> 
            <br />
            <button onClick={handleClick}>Clicked {count} times</button>
        </div>
    );
}