import './FooerMaunPage.css';
import logo from './hederLogo.png'
import Inst from './insta.png'
import Face from './face.png'

export default function FooerMaunPage(){
    return(
        <section className='sectoinFooerMaunPage'>
                <div className='sectoinFooerMaunPage__content'>
                    <div className='sectoinFooerMaunPage__contentLinks'>
                        <div className='LINKS'>
                            <a href="#" style={{margin : "0"}}>ALL PRODUCTS</a><a href="#">ABOUT SEEDRA</a><a href="#">ABOUT SEEDRA</a>
                        </div>
                        <div className='logo'><img src={logo} alt="logo" /></div>
                        <div className='LINKS2'>
                            <a href="#" >Terms&Conditions</a><a href="#" style={{margin : "0"}}>Privacy Policy</a>
                        </div>
                    </div>
                    <div className='sectoinFooerMaunPage__contentLine'></div>
                    <div className='sectoinFooerMaunPage__contentIcons'>
                        <div className='sectoinFooerMaunPage__contentIconsimg'><img src={Inst} alt="inst" /><img src={Face} alt="face" /></div>
                        <div> <p>All rights reserved</p></div>
                    </div>
                </div>
        </section>
    );
}