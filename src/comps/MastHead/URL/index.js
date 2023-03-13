const URL = (props) => {

    return (
        <a className="nav-url" data-interact href={props.link}>
            <div className="url-link-main">{props.title}</div>
            <div className="url-link-sec">{props.title}</div>
        </a>
    );

};

export default URL;