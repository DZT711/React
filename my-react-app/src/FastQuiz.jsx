import { useState } from 'react'
export default function FastQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    function handleChange(e) {
        setAnswer(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setError(err);
            setStatus('typing');
        }
    }
    return (
        <div>
            <h2>Quiz</h2>
            <p>What is the capital of Vietnam?</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleChange} disabled={status === 'submitting'} />
                <br />
                <button type="submit" disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
                {error && <p style={{ color: 'red' }}>{error.message}</p>}
            </form>
        </div>
    );
}
function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() !== 'hanoi') {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}


