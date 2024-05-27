import "./MainContentPropduct.css";
import MainContentPropductBtn from "./MainContentPropductBtn";
import Product from "./product/Product";
import { sectionMainContentPropductBtnDATA } from "../../../DATA";
import { BoxProduct } from "../../../DATA";
import { useState } from "react";
export default function MainContentPropduct() {
  const [item , setItem] = useState(BoxProduct);
  const [search , setSearch] = useState('');

  function hendkeSearch(item){
      setSearch(item)
  }


  const filterProduct = item.filter((item) => item.keyWords.toLowerCase().includes(search.toLowerCase()));


  return (
    <section className="sectionMainContentPropduct">
      <div className="sectionMainContentPropduct_topBTNliNE">
        <div className="sectionMainContentPropduct_topBTNliNE_txt">
          <p>Our products.</p>
        </div>
        <div className="sectionMainContentPropduct_topBTNliNE_btn">
        <button onClick={() =>  setSearch('') }>View all</button>
        </div>
      </div>
      <div className="itemLine">
        {sectionMainContentPropductBtnDATA.map((item) => (
          <MainContentPropductBtn
            imgs={item.imgs}
            texts={item.text}
            Click={()=>hendkeSearch(item.text)}
          />
        ))}
      </div>
      <div className="flexPeranr">
        <div class="parent">
          {filterProduct.map((item) => (
            <Product
              imges={item.img}
              text={item.text}
              descripionImg={item.descripionImg}
              cost={item.cost}
              key={item.keyWords}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
