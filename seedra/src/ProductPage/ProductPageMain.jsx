import React, { useState } from 'react';
import './ProductPage.css';
import ProductPageMainSearchlne from './ProductPageMainSearchlne/ProductPageMainSearchlne';
import ProductPageTopBtn from './ProductPageTopBtn/ProductPageTopBtn';
import { sectionMainContentPropductBtnDATA, BoxProduct } from '../DATA';
import Product from '../MainPage/mainContent/mainContentPropduct/product/Product';
import { BoxProductBig } from '../DATA';
import FilterSide from './FilterSide/FilterSide';
export default function ProductPageMain() {
  const [search, setSearch] = useState('');

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const filteredProducts = BoxProductBig.filter((item) => 
    item.keyWords.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="ProductPageMain">
      <ProductPageMainSearchlne handleSearch={handleSearch} />
      <div className="itemLines">
        {sectionMainContentPropductBtnDATA.map((item) => (
          <ProductPageTopBtn    
            key={item.text} // Ensuring key is unique
            imgs={item.imgs}
            texts={item.text}
            Click={() => setSearch(item.keyWords)}
          />
        ))}
      </div>
      <div className='Sides'>
        <div className="FilerSide">
          <FilterSide/>
        </div>
      <div className='ProductSide' >
<div className="prodctBlok">
        <div className="prodctBlokGrid">
          {filteredProducts.map((item) => (
            <Product 
              key={item.id} // Ensure each key is unique
              imges={item.img} 
              text={item.text} 
              cost={item.cost} 
              descripionImg={item.descripionImg} 
              handleSearch = {handleSearch}
            />
          ))}
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
