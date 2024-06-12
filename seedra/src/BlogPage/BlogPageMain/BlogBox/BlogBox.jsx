import './BlogBox.css'
import clock from '../clock.png'
export default function BlogBox({img, data, text ,description}){
    return(
       <div className="BlogBox">
         <div className="BlogBoxData">
                <img src={clock} alt="" />
                <p>{data}</p>
            </div>
            <div className="BlogBoxText">
                <p>{text}</p>
            </div>
            <div className="BlogBoxDes">
                <p>{description}</p>
            </div>
            <div className="BlogBoxBtn">
                <button><p>Read</p></button>
            </div>        
            <div className="BlogBoxImg">
                <img src={img} alt={text} />
            </div>            
       </div>
    );
}