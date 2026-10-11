// import { useState } from "react";
// export default function ObjectFollowCursor() {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     return(
//         <div
//             onPointerMove={e =>
//                     {
//                     setPosition({ x: e.clientX, y: e.clientY });
//                     }
//                 }
//                 style={{
//                     position: "relative",
//                     width: " 100vw",
//                     height: "100vh"
//             }}>
//             <div
//                 style={{
//                     position: 'absolute',
//                     backgroundColor: 'red',
//                     borderRadius: '50%',
//                     transform: `translate(${position.x}px, ${position.y}px)`,
//                     left: -10,
//                     top: -10,
//                     width: 20,
//                     height: 20,
//                 }}
//             >

//             </div>
            
            
//         </div>
//     )
// }
import { useState, useEffect, useRef } from "react";
import "./ObjectFollowCursor.css";

export default function ObjectFollowCursor() {
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [snowflakes, setSnowflakes] = useState([]);

  const snowflakeId = useRef(0);

  // Track cursor movement
  const handlePointerMove = (e) => {
    if (!enabled) return;

    const x = e.clientX;
    const y = e.clientY;

    setPosition({ x, y });

    // Generate snowflakes around cursor
const newSnowflakes = Array.from({ length: 3 }, () => ({
  id: snowflakeId.current++,
  x: x + (Math.random() - 0.5) * 30,
  y: y + (Math.random() - 0.5) * 20,
  size: Math.random() * 10 + 5,
  duration: Math.random() * 1.5 + 1,
  drift: (Math.random() - 0.5) * 100,
  createdAt: Date.now(), // Important!
}));

setSnowflakes((prev) =>
  [...prev, ...newSnowflakes].slice(-100) );
  };

  // Remove snowflakes after animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) =>
        prev.filter((flake) => Date.now() - flake.createdAt < 2500)
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="winter-container"
      onPointerMove={handlePointerMove}
    >
      {/* Toggle button */}
      <button
        className="snow-toggle"
        onClick={() => {
          setEnabled(!enabled);
          setSnowflakes([]);
        }}
      >
        {enabled ? "❄ Snow Effect: ON" : "❄ Snow Effect: OFF"}
      </button>

      <div className="winter-content">
        <h1>❄ Winter Wonderland ❄</h1>
        <p>Move your cursor to create magical snowfall</p>
      </div>

      {/* Main cursor snowflake */}
      {enabled && (
        <div
          className="cursor-snowflake"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          ❄
        </div>
      )}

      {/* Falling snowflakes */}
      {enabled &&
        snowflakes.map((flake) => (
          <span
            key={flake.id}
            className="falling-snowflake"
            style={{
              left: flake.x,
              top: flake.y,
              fontSize: flake.size,
              "--duration": `${flake.duration}s`,
              "--drift": `${flake.drift}px`,
            }}
          >
            ❄
          </span>
        ))}
    </div>
  );
}