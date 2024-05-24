import clock from './clock.png'

export default function BlogComponent({img , data , text ,description ,ID}){
    return(
        <div className="BlogComponent" id={ID}>
            <div className="a">
            <div className="BlogComponentData">
                <img src={clock} alt="clock" />
                <p>{data}</p>
            </div>
            <div className="BlogComponentText">
                <p>{text}</p>
            </div>
            <div className="BlogComponentDescription">
                <p>{description}</p>
            </div>
            <div className="BlogComponentBtn">
                <button><p>Read</p></button>
            </div>          

            </div>
            <div className="blogImeg"><img src={img} alt="capust" /></div>
        </div>
    );
}