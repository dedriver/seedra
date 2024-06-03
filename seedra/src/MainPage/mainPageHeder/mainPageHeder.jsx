import React from 'react';
import { Link } from 'react-router-dom';
import hederLogo from './hederLogo.png';
import intagrame from './insta.png';
import facebook from './face.png';
import baket from './baket.png';
import heart from './heart.png';
import './mainPageHeder.css';

export default function MainPageHeder() {
    return (
        <section className="mainPageHeder">
           <div className="mainPageHederlogo">
                <Link to="/home"> <img src={hederLogo} alt="hederLogo" /></Link>
            </div>
            <div className="mainPageHederlinks">
                <ul>
                    <li><Link to="/all-products">ALL PRODUCTS</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/our-blog">OUR BLOG</Link></li>
                    <li><Link to="/contacts">CONTACTS</Link></li>
                </ul>
            </div>
            <div className="mainPageHedericon-Input">
                <div className="mainPageHedericon">
                    <img src={intagrame} alt="intagrame" />
                    <img src={facebook} alt="facebook" />
                </div>
                <div className="mainPageHederinput">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="mainPageHederbarket">
                    <img src={baket} alt="baket" />
                    <img src={heart} alt="heart" />
                </div>
            </div>
        </section>
    );
}
 