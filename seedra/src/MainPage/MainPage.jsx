import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPageHeder from "./mainPageHeder/mainPageHeder";
import FooerMaunPage from "./fooerMaunPage/FooerMaunPage";
import MainContent from "./mainContent/MainContent";
import './mainPage.css';
import ProductPageMain from '../ProductPage/ProductPageMain';
export default function MainPage() {
    return (
        <Router>
            <section className="sectionMainPage">
                <MainPageHeder />
                <Routes>
                <Route path="/home" element={<MainContent />} />
                    <Route path="/" element={<MainContent />} />
                    <Route path="/all-products" element={<ProductPageMain/>} />
                    <Route path="/about" element={<div>About Page</div>} />
                    <Route path="/our-blog" element={<div>Our Blog Page</div>} />
                    <Route path="/contacts" element={<div>Contacts Page</div>} />
                </Routes>
                <FooerMaunPage />
            </section>
        </Router>
    );
}
