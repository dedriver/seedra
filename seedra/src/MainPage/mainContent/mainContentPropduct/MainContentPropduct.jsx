import './MainContentPropduct.css'
import MainContentPropductBtn from './MainContentPropductBtn';
import Product from './product/Product';
import { sectionMainContentPropductBtnDATA } from '../../../DATA';
import { BoxProduct } from '../../../DATA';
export default function MainContentPropduct(){
    return(
        <section className="sectionMainContentPropduct">
            <div className="sectionMainContentPropduct_topBTNliNE">
                <div className="sectionMainContentPropduct_topBTNliNE_txt"><p>Our products.</p></div>
                <div className='sectionMainContentPropduct_topBTNliNE_btn'><button>View all (12)</button></div>
            </div>
            <div className='itemLine'>
          {sectionMainContentPropductBtnDATA.map((item)=>( <MainContentPropductBtn imgs={item.imgs} texts={item.text}/>))}
          </div>
          <div className='flexPeranr'>
          <div class="parent">
          {BoxProduct.map((item)=>(<Product imges={item.img} text={item.text} descripionImg={item.descripionImg} cost={item.cost}/>))}

          </div>
          </div>
        </section>
    )
}