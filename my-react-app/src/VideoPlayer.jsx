import { useState, useRef, useEffect } from 'react';

function Player({ src, isPlaying }) {
    const ref = useRef(null);
    
    useEffect(() => {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline/>;
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    
    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <Player 
                isPlaying={isPlaying} 
                src="https://videocdn.cdnpk.net/videos/c556b2e1-8192-45a0-84d5-06060dc8fc6c/horizontal/previews/magnific_watermarked/large.mp4" 

            />
        </div>
    );
}