import './BlogPageMain.css'
import ProductPageMainSearchlne from '../../ProductPage/ProductPageMainSearchlne/ProductPageMainSearchlne';
import BlogBox from './BlogBox/BlogBox';
import { BlogBigComponentDATA } from '../../DATA';
import img1 from './strawbery.png'

export default function BlogPageMain(){
    return(
        <section className='sectionBlogPageMain'>
            <div className='startBlog'>
                <div className="startBlogtext">
                    <h1>Welcome to our blog</h1>
                </div>
                <div className="startBlogdecripto">
                    <p>Here you can find a lot of interesting and useful information that you <br />need in gardening and creating a beautiful garden</p>
                </div>
            </div>
            <div className='BlogSearchlne'>
                <ProductPageMainSearchlne/>
            </div>
            <div className='flexBlog-container'>
                <div class="Blog-container">
            {
                BlogBigComponentDATA.map((item)=>(
                    <BlogBox text={item.text} description={item.descripion} data={item.data} clock={item.clock} img={img1}/>
                ))
            }
            </div>
            </div>
            
        </section>
    );
}