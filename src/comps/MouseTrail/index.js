import {useEffect, useState, useRef} from 'react';
import './index.css';

const MouseTrail = () => {

    const mouseCursor = useRef();
    const [cords, setCords] = useState({x: "50", y: "50"});
    const [interact, setInteract] = useState(false);

    useEffect(() => {

    const updateTrail = (e) => {
      setInteract(e.target.closest("[data-interact]") != null);
      mouseCursor.current.animate({top: `${cords.y}px`, left: `${cords.x}px`}, {duration: 100, fill: "forwards"});   
      setCords({x: e.clientX, y: e.clientY});
    };

    window.addEventListener('mousemove', updateTrail);

    return () => {
      window.removeEventListener('mousemove', updateTrail);
    };

    }, [cords]);

    return (
        <div className="cursor-wrapper">
            <div ref={mouseCursor} id='cursor' className={interact ? "interact" : ''}></div>
        </div>
    );

}

export default MouseTrail;