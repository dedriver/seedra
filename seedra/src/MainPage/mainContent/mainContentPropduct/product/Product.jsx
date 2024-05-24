import './Product.css';
import hert from './hert.png'
import activeHearts from  './activeHear.png'
import buket from '../../../mainPageHeder/baket.png'
import Star from './Star';
import { useState } from 'react';
export default function Product({imges , text , cost , descripionImg}){
    const [activeHeart , setctivehearts] = useState(false);

    function handleActiveHeart(){
        setctivehearts(active => !active);
    }

    return(
        <div className='boxProduct' >
            <div className="like" onClick={handleActiveHeart}>
                <button  ><img   src={ activeHeart ? activeHearts : hert}  alt="hert"/></button>
            </div>
            <div className='boxProductImg'>
                <img src={imges} alt={descripionImg} />
            </div>
            <div className="boxProductStarLine">
                <div className='star'><Star /><Star /><Star /><Star /><Star /></div>
                <div className='numer'><p>(123)</p></div>
            </div>
            <div className='boxProductText'>
                <p>{text}</p>
            </div>
              <div className="bueLine">
                <div className='boxProductCost'>
                    <p>{cost}</p>
                </div>
                <button><img src={buket}alt="buket" /></button>
              </div>
        </div>
    );
}