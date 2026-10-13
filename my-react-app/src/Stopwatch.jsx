import {useState,useRef} from 'react';
export default function Stopwatch() {
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);


    function handleStart() {
        setTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => { setNow(Date.now()); }, 10);
    }
    function handleStop() {
        clearInterval(intervalRef.current);
    }
    let seconds = 0;
    if (time && now != null) {
        seconds = ((now - time) / 1000);
    }

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {seconds.toFixed(3)} seconds</p>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop} >Stop</button>

        </div>
    );
}