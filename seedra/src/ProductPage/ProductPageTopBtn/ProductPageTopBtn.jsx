import './ProductPageTopBtn.css'

export default function ProductPageTopBtn({Click , imgs , texts}){
    return(
        <div className="sectionMainContentPropductBtns">
        <button onClick={Click}>
        <img src={imgs} alt={texts} />
        <p>{texts}</p>
        </button>
    </div>
    )
}