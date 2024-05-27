import './MainContentPropduct.css'

export default function MainContentPropductBtn({imgs , texts , Click}){
    return(<>
    <div className="sectionMainContentPropductBtn">
        <button onClick={Click}>
        <img src={imgs} alt={texts} />
        <p>{texts}</p>
        </button>
    </div>
    </>);
}