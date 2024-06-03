import { useState } from "react";

export default function ListItem({slogan , item}){
    const [HoverItem , setHoverItem] = useState(false);

function HandleHoverItem(){
    setHoverItem(item => !item)
}
    return(
        <div className='FilterSideItem ' >
        <div onClick={HandleHoverItem}><p className="Slogan">{slogan}</p></div>
        <div className={HoverItem ? "ItemText" : "ItemTextHover"}>
            <p>{item}</p>
            <p>{item}</p>
            <p>{item}</p>
            <p>{item}</p>
        </div>
        <div className={HoverItem ? "iTEMlINE": "iTEMlINEHover"}></div>
    </div>
    );
}