import './MainContentPropduct.css'

export default function MainContentPropductBtn({imgs , texts}){
    return(<>
    <div className="sectionMainContentPropductBtn">
        <img src={imgs} alt={texts} />
        <p>{texts}</p> 
    </div>
    </>);
}