import { useState } from "react";
import star from './star.png';
import activeStar from './activeStar.png'
export default function Star(){
    const [activeStarts , setActiveStarts] = useState(false);
    function handleActiveStar(){
        setActiveStarts(true)
    }
    return(
        <img onClick={handleActiveStar} src={activeStarts ? activeStar :star } alt="star" />
    );
}