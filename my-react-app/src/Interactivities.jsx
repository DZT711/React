function Toolbar({onPlayVideo, onUploadVideo, onDownloadVideo}) {
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
    return (
        <div>
            <h1>Video Player</h1>
            <Toolbar
                onPlayVideo={() => alert('Playing video...')}
                onUploadVideo={() => alert('Uploading video...')}
                onDownloadVideo={() => alert('Downloading video...')}
            />
            <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
        </div>
    );
}