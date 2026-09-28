export default function Btn(){
    function handleClick() {
        alert("F#ck you");
    }   
    return (
        <div>
            <div className="">

            <h1>Trigger Alert Btn</h1>
            <button onClick={handleClick}>Click Me</button>
            </div>
            <div className="">
                <h1>Form Input</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form Submitted");
                }}>
                    <input type="text" placeholder="Enter your name" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}