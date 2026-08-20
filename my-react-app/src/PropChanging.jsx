import { useEffect, useState } from 'react'

export default function PropChanging({ color }) {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            
            <p style={{color: color}}>Time: {time}</p>
        </div>
    );
}