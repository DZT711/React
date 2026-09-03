function Item({ isAvailable, name }) {
    if (isAvailable) {
        return <li className="item">{name}  ✅</li>;
    }
    return <li className="item">{name}  ❌</li>;
}

export default function ConditionalRendering() {
    return (
        <section className="shopping-list">
            <h1>Conditional Rendering</h1>
                <ul>
                    <Item isAvailable={true} name="Cabbage" />
                    <Item isAvailable={false} name="Garlic" />
                    <Item isAvailable={true} name="Apple" />
                </ul>
        </section>
    );
}
