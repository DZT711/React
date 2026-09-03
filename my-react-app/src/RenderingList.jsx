

function Cup({guest }) {

    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    const cups = [];
    for (let i = 1; i <= 10; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return (
        <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
            <div className="tea-set">
                <h1>Tea Set</h1>
                <ul>{cups}</ul>
            </div>
        </>
    );
}