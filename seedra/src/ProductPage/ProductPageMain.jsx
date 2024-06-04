import React, { useState } from 'react';
import './ProductPage.css';
import ProductPageMainSearchlne from './ProductPageMainSearchlne/ProductPageMainSearchlne';
import ProductPageTopBtn from './ProductPageTopBtn/ProductPageTopBtn';
import { sectionMainContentPropductBtnDATA, BoxProductBig } from '../DATA';
import Product from '../MainPage/mainContent/mainContentPropduct/product/Product';
import FilterSide from './FilterSide/FilterSide';

export default function ProductPageMain() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    Hybrid: false,
    "Open Pollinated": false,
    "Organic Seeds": false,
    "Pelleted See": false,
  });

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const handleCheckboxChange = (filter) => () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const filteredProducts = BoxProductBig.filter((item) => {
    const searchMatch = item.keyWords.toLowerCase().includes(search.toLowerCase());
    const filterMatch = Object.keys(filters).some((filter) => filters[filter] && item.SeedType.toLowerCase().includes(filter.toLowerCase()));
    return searchMatch && (!Object.values(filters).includes(true) || filterMatch);
  });

  return (
    <section className="ProductPageMain">
      <ProductPageMainSearchlne handleSearch={handleSearch} />
      <div className="itemLines">
        {sectionMainContentPropductBtnDATA.map((item) => (
          <ProductPageTopBtn    
            key={item.text}
            imgs={item.imgs}
            texts={item.text}
            Click={() => setSearch(item.keyWords)}
          />
        ))}
      </div>
      <div className='Sides'>
        <div className="FilterSide">
          <FilterSide 
              list1={handleCheckboxChange("Hybrid")}
              list2={handleCheckboxChange("Open Pollinated")}
              list3={handleCheckboxChange("Organic Seeds")}
              list4={handleCheckboxChange("Pelleted See")}
          />
        </div>
        <div className='ProductSide'>
          <div className="prodctBlok">
            <div className="prodctBlokGrid">
              {filteredProducts.map((item) => (
                <Product 
                  key={item.id}
                  imges={item.img} 
                  text={item.text} 
                  cost={item.cost} 
                  descripionImg={item.descripionImg} 
                  handleSearch={handleSearch}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
