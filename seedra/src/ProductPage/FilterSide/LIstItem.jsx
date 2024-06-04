import React, { useState } from "react";

export default function ListItem({ slogan, items, children }) {
  const [hoverItem, setHoverItem] = useState(false);

  function handleHoverItem() {
    setHoverItem((item) => !item);
  }

  return (
    <div className="FilterSideItem">
      <div className="SloganLIne" >
        <p className="Slogan">{slogan}</p>
        <span className={hoverItem ? "arowAnimation" : "arow"} onClick={handleHoverItem}>&#x25BC;</span>
      </div>
      <div className={hoverItem ? "ItemText" : "ItemTextHover"}>
        {children} 
      </div>
      <div className={hoverItem ? "iTEMlINE" : "iTEMlINEHover"}></div>
    </div>
  );
}