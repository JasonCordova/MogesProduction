import './index.css';

const CircleVideo = (props) => {

    return (
        <div className="video-container">
            <div className="video-wrapper">
                <video preload="true">
                    <source src={props.src}></source>
                </video>
            </div>
        </div>
    );

};

export default CircleVideo;