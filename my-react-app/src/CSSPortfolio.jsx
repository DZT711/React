const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["Reading", "Traveling", "Gaming"],
    theme: {
        backgroundColor: "#f0f0f0",
        color: "#333",
        padding: "20px",
        borderRadius: "5px",
    }
};

export default function CSSPortfolio() {
    return (
        <div style={person.theme}>
            <h1>{person.name}</h1>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
            <h2>Hobbies:</h2>
            <ul>
                {person.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}