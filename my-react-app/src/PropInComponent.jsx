import './card.css';
function Avatar() {
    return (
        <img className="avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            width={100} 
            height={100}
        />
    );
}
function AvatarWithParameters({ person, size }) {
    return (
        <img className="avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt={person.name}
            width={size} 
            height={size}
        />
    );
}
function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}
export default function PropInComponent() {
    return (
        <div className="prop-in-component">
            <div>
                <h1>Props in React Component</h1>
                <Avatar />
            </div>
            <div className="avatar-container">
                <AvatarWithParameters 
                    person={{  name: "John Doe" }} 
                    size={40} 
                />
                <AvatarWithParameters 
                    person={{  name: "Jane Smith" }} 
                    size={50} 
                />
            </div>
            <div className="card-container">
                <Card>
                    <Avatar/>
                </Card>
            </div>
        </div>
    );
}