import './MainContentBlog.css'
import Toline from '../../../comp/Toline';
import BlogComponent from './BlogComponent';
import { BlogComponentDATA } from '../../../DATA';
export default function MainContentBlog(){
    return(
        <section className="sectionMainContentBlog">
            <Toline text="Our blog." clase={"sectionMainContentBlog_topBTNliNE"} btn_text="Go to our blog"/>
            <div class="sectionMainContentBlogPerent">
            <div class="angry-grid">
            <div id="item-0">&nbsp;</div>
             {BlogComponentDATA.map((item)=>(<BlogComponent text={item.text} img={item.img}  description={item.descripion} data={item.data} ID={item.ID} />))}
            </div>
            <div className='blogComponet'>
            </div>
            </div>
        </section>
    );
}