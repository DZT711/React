import { useRef } from "react";

export default function Dogs() {
    const firstDogRef = useRef(null);
    const secondDogRef = useRef(null);
    const thirdDogRef = useRef(null);
    
    function handleScrollFirstDog(){
        firstDogRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    
    function handleScrollSecondDog(){
        secondDogRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    
    function handleScrollThirdDog(){
        thirdDogRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return(
        <div style={styles.container}>
            {/* Thanh Nav với CSS màu sắc bắt mắt, hiện đại */}
            <nav style={styles.nav}>
                <button 
                    style={{ ...styles.button, background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)' }} 
                    onClick={handleScrollFirstDog}
                >
                    🐶 Neo
                </button>
                <button 
                    style={{ ...styles.button, background: 'linear-gradient(135deg, #4E65FF, #92EFFD)' }} 
                    onClick={handleScrollSecondDog}
                >
                    🐶 Millie
                </button>
                <button 
                    style={{ ...styles.button, background: 'linear-gradient(135deg, #11998e, #38ef7d)' }} 
                    onClick={handleScrollThirdDog}
                >
                    🐶 Bella
                </button>
            </nav>

            {/* Khung chứa ảnh giữ nguyên link gốc của bạn */}
            <div style={styles.scrollContainer}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Neo"
                            ref={firstDogRef}
                            style={styles.image}
                        />
                    </li>
                    <li style={styles.li}>
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA0EAABBAEEAQIEBAUEAwAAAAABAAIDEQQFEiExQRNRBiJhcTJCgZEUFSOhsQdSYuE0Q8H/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBQT/xAAjEQACAgEEAgMBAQAAAAAAAAAAAQIRAwQSITEUURMyYUEi/9oADAMBAAIRAxEAPwD0MJwFLYpBoVpArPSbnwrdqW1AFVHyl5U3ClEIASYqYHCekAVqQU9qfaECI2mIUqSQBENSpWBMRygCICYhSPChRPlADhiYhTCRagCAHKltThtBPSAEAnISCYoGMWpVwlaRcPdAEC3lJS4PlJAiaSXSSBjJWlSYtvtAhHlMGqQbSR+yBi8KF8qXNJAIEIFODfScC+lm6hq8OMHiN49UA/YKE8kYdlkMcpukaVKO4Lhc/wCK8uG2tlaSPzBopAQfF+pvBLZWhvuWgqtZ0y56aSdHpVp7AHK80m+MNQjbzkCz/wAAs8fFOpCQyNyXX9UfMhePI9aIvpMGFeMZvxZrEhs5snHQbwoYnxvrMLrdlvfz06lL5Pwj8Ptntfi6SXGaN8fYGRC055McgAvaOyhx/qNjOyzEMVwiBrdfKfyIi8bR3hoeUlm6VrGHqcYfjSA/Q9rTA9uR7qaaZBpoikBaspKkCIUoOjtXfokfsgAcR/VJXEfRJFgIj7/snDDaD/mkR8pDU4vdc71MfZ0ePL0HhifZ9ln/AMzj90/8yZ7peTH2Px5B+z7JbFnHU2e6Q1EHpR8uHsa00vRo7E3p0gP5gPdMc9tEk0l5cfY/FkUa7njDiMUR+d/5r6C4DVMxxDrur/crpdVniyJS4vtxXI61KD8jeeeSFySy/JI0cOJY4dHP5bpJngWeSi42hjQ1vVJom+rL8os9LpsbSsaPG9TJkpx6apzyKKHHHbs5PIcOe7HuhHSP9v2W5qTcdzi1rhQ9lizxPb+Au2/ZWY2mUZVQFI482hpSRyEQ4HyoPjLhwuhHE+wAZMkM1tcaPdoz1hLEMhg+YcODTSGyYuOlDBftlcx3ThyE6C6NbTNay8GcSY7vTcD4K73Rf9T3Nd6Oq47HAChJHwV5jW2Tn3VE3yvBBNfdNCZ9JaFr+n63Dvw5Ru8sceQtah7hfM+iazkaVksmx3FpH916ppXxvFnwtO4RzV8zHFQlkcSUcakeh/L7hK2+SFxcnxK+Lgj/ALVMnxRLt4pVeT+FnjHc74x5CS87d8UZO4/K1JPyQ8cHhznOIslbOFIHt4WAxjR0G/ujcXKENixf3WbkXHBox/TeDGkchL0x4/ygW6kwAAkKxuoRnyFz1IstBQjA5UkMM2M9uA/VS/i4q/EFGmS6L7rwsbVs0sErPV9Nw/DflaTckOJDLd9vCzdTLZD+Eep566U4RbfQ1JLlmBDPOXOkldbQ21mZuQXEgUPqrdTzG4xdGyzfaw5sgvHAWjhwVyzlz6ldILgyWwSA7qBItE6jq0k03ptf8jRQNrBedyGnLtwIJ4V8sMW7ZzR1UkaePNt1Fvqlxb9Bdo7UpnB39IP2HxtpYONJJ6gdaPdqEzObuuEnjd8Eo54tf6IzxEAHgGr4UInNAo8oaXJe+Qv8lJkhcbPauSZzSab4LMmEO5HlZ00Rhk9RvhaDnHaTaHedzHtPYUkQYiz1GNlHFjlDZHAukYz5YGtQk55pOxEYwCOf2U/WfE+2GiOqVbTRTyc1XaKA9A+D5zqOC+OenGEgtJ7+y3n4Tb/CFw/wdLLi6gzYbbJwQu69V5JJ91m6mLU+DR07TjyUnCbfQSV/qu9klRci7ajlh/E+7kxdk3+ZdwdJh/2t/ZQOkR10P0Cl5KIvA/ZxW/K93o/CjnlALi6l0n8pjvpXx6eGdNCi86aBYWjnZopmDgu/RNjNyZpWRh5buNW49Lpzhg8FoTxaa3fbaBAtRWYm8YKMVk2MYcTJY5rTT3tPO5cnng+tNHjZXqFg+ZrStqKObTp8t8pbtyJRsA4r3KwMHT8vD1efI2tfC8Oa4u8AqzFPm2SyY3SRnZbH+i2Vzv3WXa2cvGkc92+TeLNccIU4wonih5WlCSkrMvLFxlRnOivlVGAuPaPI4dR7+ihSmVgwjLRx4VEziRytNjbuxf3VGZAKBaPvSAYC0KwKBNEpNPKYi4dIbuRzPNq8HhDv/wDNj/RCBl0hqTb7Ug5vxI1/5vuh3NsoEUsHzBW7f6jfunbGSeFq6FpMupZrIWNJHbnVwAiUlFWxxTk6R0Hwhpj5Cc144bw0fVdOIHhaeDiR4uMzHjbTGCgiPQZfSxc2fdI18WJRiY3oPSW4IG10kqvkZZtROxSgSqw9NZtVUSL2t8qRqlSH0E7X88ooCdK3GFy17hVggqyE1K0/VCFLowNUwyXPJebbdA9LNy8eR+M0WfnH5Quo+IMXY5x/3eyx24s5h2ysMbR+E+4VpdjkpRRjx6bvxi0ePAPKwsuP0LB9+l3+Fi017RtI+vlcvr2nytcd7SNw4Whpp3wZurhTtHLHlxUCQ0q6QBj9vXjlUyDi64PC7jgEyYc0VVPLYItRMTq+qre0hvfPlAAzjzwnaRaZ7fm7tMKBTEXAqmUgZcZPVq0EIXJdUrXe3+UCYXyXG1EtG5XxvbMwOFdcptlkUgdBOmYL83IbFE0uLjS9T+HtEi0fEDGgOmcPnef8Lnv9PsXGaZZzI1+S3gDw0Fdo6RraWXq8zctqNDS4lt3EtouwnPCp9dvumM48ELPpnaWFx9gkqfVCSKASi51doeTIrjyq7c89kqdBYWHj3Tb6KoY1wPKk5rq7SAvE9fRT/iAOb/6QQBNgqiQuBrlNIT6Oi19n8V/CBnIe0chYupRZrh6Ya4gcBFabnlwZFkglsXLD7fRdDJJhzxteH1xyptFUcjx8UcFp8mfi5B2xuewXuYe6+i2cxsGowstocHNIvy37rXe7BYDukY17r+Ynn9EEGQyiR0Lml54c5qlCbi7QTrJ2ee6zpbIZSQN203SyXQB8dCwus+JmSQ7iw7nAW4hce7NyIJi0xhpPO13la2PJuRnThtYO+N0ZILSSovh+XdYukXHqLcrIZFLEWX5A6QWpziKRzG8gHseVaVAsjKF1SGvlTny9zAA3kqgFx6KZEt3qmT5u1Oimc0pgPGXQgFhpWvyXSxhg+Xwa8qlzuKpNBfJIQFnW/AuU6LP9IGgRz9V3kk5J7Xmnwq0/ziH5toJ5K9JbDyebWXrElNM0tI/8kC8k92rozYop2w0iYYhQsLibOxFHzDpJFloBoBJKxgbY2bqJv7ohnptHYVjMZ13SaTFd7IchES9vhImxwmGM4FXMxz5S4ApjbufynliHdIpkOwqZg3pWBmCmdIvDymshkjLqefwkqUmGLVYxQDfZUtwUjl9Z0zKz8g/1w1hPL2Or+yUejyYBE+Hn5IlA8usE/ULSymyb3RhooGyoAuAI5o/VWb3VFqxxfJkTajqMzXxZ7Y5ufx7dpRcDsCXFbHNFG18Y/wDYL3fqismJpgeaFkLCyGepGbBsKccj/gpYYNdAGrZGKXuGHG0vH5Wilz0ztzjY/dafpPGVGA07t/f0Rmt6Oxg9WHgOF2u+OdKkzOyaW02jl3Ri7pMG+wV8jC0kFvSqXWZ7VECmcCpUSm7QIqLSrom+/acDlTA57QAbpbizNi297l6lpsrcmEbXNMg7HsvMdHx5JsuMt+UX2tjRdZl0vVntmIczcQ61zanFvXB1afJsdM9IZASOlc2Cm1ylh52PkQRyRyN2uHHKMsFYslJOmaO++gT0SkinECqSUQ3MoY5OTaHDqKsDrNIJ0TpPwByFS+SuEvUtqKFReC3yrG7CO1lF0nqcuoIpsgDe7Q4iaCnAKsAA9BU+u0cFM7I2tJCEh0ZubUWTMSDt9kMz+oQW/hJTZGQ/LbkOY0/IfdUaXllzvSaOVY06OmD4L8obW0AbQ8+JG6ADjdVojOLq57Wech/qWfygIVkgJuO2IOkIDnBnFi0Zitjz8VzJKAYRtH37VeU7ex4b4/xSq0aZsIjJPDhSt5cbK39qOf1jTnY8zyer4+yxZYatd5q0LJ5CHdbbBXJZuK6KRxBscrQ02a1TMzWYNr3Iyy1w8JiwexU91OF9qyU2/wCRddnAkU7do3HpO2vxUKTPNd8InFhMpExFMb490CNPBlEEDWnuwb+iwtTyzJqEz4zTS5aGoSGJtg0HDcsBxL3FxN2mRZp4eqZEZaGzvbz0CV3mhfG7menBmttn+/yvM4+HBHRSUKtVZMMJrlF2PLKLPbodSiy2CSF4ISXH/DGsY+Pp/pPkawg+T2ksyWk56NFaiNHXvcbS3urvpOkuU6AWSZ+7tITPPlJJMCErjXadkji3tMkpCJNcS61DUZHRYcjmGjSSSS7Gc5oU8kmTOxziWkWQp6ZI5mrsa08FxH9imSVsu2XQ6NnOJB4QBA2E+bSSVUeiwFySWQTFvdf/ABY2LM8Rxi+gkkr4dMoyfZGzObLD/wAaWLqbQWH7kpJKWD7Cz/RnN5AHrs+6vy2hkpLRVNHSZJai/hhvpghcXyndzwtWJxhgYGVRFEJklMrAtXeTjsJ9ysrz+idJMRKP8Ktb0kkhgWNJA4cf3SSSSGf/2Q=="
                            alt="Millie"
                            ref={secondDogRef}
                            style={styles.image}
                        />
                    </li>
                    <li style={styles.li}>
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Bella"
                            ref={thirdDogRef}
                            style={styles.image}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f7f9fc',
        minHeight: '100vh',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '30px',
        position: 'sticky',
        top: '20px',
        zIndex: 10,
    },
    button: {
        border: 'none',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '25px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    scrollContainer: {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        overflowX: 'auto',
        border: '3px solid #e1e8ed',
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    },
    ul: {
        display: 'flex',
        listStyle: 'none',
        padding: '20px',
        margin: '0',
        gap: '20px',
        scrollSnapType: 'x mandatory',
    },
    li: {
        flexShrink: 0,
        scrollSnapAlign: 'center',
    },
    image: {
        width: '350px',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }
};