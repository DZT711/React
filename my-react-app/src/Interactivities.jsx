import { useState } from "react";
import { ImgData } from "./ImgData";
function Toolbar({ onPlayVideo, onUploadVideo, onDownloadVideo }) {
    return (
        <div className="toolbar">
        <button onClick={onPlayVideo}>Play Video</button>
        <button onClick={onUploadVideo}>Upload Video</button>
        <button onClick={onDownloadVideo}>Download Video</button>
        </div>
    );
}
function Button({ children, onClick }) {
    return (
        <button onClick={onClick}>{children}</button>
    );
}
export default function App() {
    const [images, setImages] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = images < ImgData.length - 1;
    function handleNextClick() {
        if (hasNext) {
            setImages(images + 1);
        }
        else {
            setImages(0);
        }
    }
    function handleShowMore() {
        setShowMore(!showMore);
    }
    let sculpture = ImgData[images];
    return (
        <div>
            <h1>Video Player</h1>
            <Toolbar
                onPlayVideo={() => alert('Playing video...')}
                onUploadVideo={() => alert('Uploading video...')}
                onDownloadVideo={() => alert('Downloading video...')}
            />
            <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
            <h1>Image Gallery</h1>
            <div className="image-gallery">
                <button onClick={handleNextClick}>Next Image</button>
                <div className="image-container">
                    <h2>{sculpture.name}</h2>
                    <h2> by </h2>
                    <h2>{sculpture.artist}</h2>
                    <button onClick={handleShowMore}>{showMore ? 'Show Less' : 'Show More'} details</button>
                    {showMore && (
                        <div className="image-details">
                            <p>{sculpture.description}</p>
                        </div>
                    )}
                    <br />
                    <img src={sculpture.url} alt={sculpture.alt} />
                </div>
            </div>
        </div>
    );
}
