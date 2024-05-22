import hederLogo from './hederLogo.png'
import intagrame from './insta.png'
import facebook from './face.png'
import baket from './baket.png'
import heart from './heart.png'
import './mainPageHeder.css'
export default function MainPageHeder(){
    return(<>
        <section className="mainPageHeder">
            <div className="mainPageHederlogo">
                <img src={hederLogo} alt="hederLogo" />
            </div>
            <div className="mainPageHederlinks">
                <ul>
                    <li><a href="#">ALL PRODUCTS</a></li>
                    <li><a href="#">ABOUT SEEDRA</a></li>
                    <li><a href="#">OUR BLOG</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
            </div>
            <div className='mainPageHedericon-Input'>
            <div className="mainPageHedericon">
                <img src={intagrame} alt="intagrame" />
                <img src={facebook}alt="facebook" />
            </div>
            <div className="mainPageHederinput">
                <input type="text" defaultValue={"Search"} />
            </div>
            <div className="mainPageHederbarket">
                <img src={baket} alt="baket" />
                <img src={heart } alt="heart " />
            </div>
            </div>
        </section>
    </>);
}