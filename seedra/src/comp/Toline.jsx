
export default function Toline({clase , text ,btn_text}){
    return(<div className={clase}>
                <div className="sectionMainContentPropduct_topBTNliNE_txt"><p>{text}</p></div>
                <div className='sectionMainContentPropduct_topBTNliNE_btn'><button>{btn_text}</button></div>
            </div>
        
    );
}

