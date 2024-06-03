import './FilterSide.css'
import { useState } from 'react'
import ListItem from './LIstItem';
export default function FilterSide(){
    const [hoverFilter , setHowerFolter] = useState(false);

function hendleFilterHover(){
    setHowerFolter(true)
}
function hendleFilterOut(){
    setHowerFolter(false)
}
    return(
        <div className="FilterSide">
            <p onMouseOver={hendleFilterHover} onMouseOut={hendleFilterOut}>Filter</p>
            <div className="iTEMlINE"></div>
            {/* <div onMouseOver={hendleFilterHover} onMouseOut={hendleFilterOut} className={hoverFilter ? 'FilterSideBoxHide' : 'FilterSideBox'}></div> */}
            <ListItem slogan={"List1"} item={"itemList1"}/>
            <ListItem slogan={"List2"} item={"itemList2"}/>
            <ListItem slogan={"List3"} item={"itemList3"}/>
            <ListItem slogan={"List4"} item={"itemList4"}/>
            <ListItem slogan={"List5"} item={"itemList5"}/>
            <ListItem slogan={"List6"} item={"itemList6"}/>
        </div>
    )
}