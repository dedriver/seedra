import './MainContent.css'
import MainContetnAction from './mainContetnAction/MainContetnAction'
import MainContentPropduct from './mainContentPropduct/MainContentPropduct'
import MainContentBlog from './mainContentBlog/MainContentBlog';
import Flick from '../MainPageSlider/Flick';
import SeesdaHelp from './SeesdaHelp/SeesdaHelp';
export default function MainContent(){
    return(<section className='sectionMainContent'>
    <MainContetnAction/>
    <MainContentPropduct/>
    <MainContentBlog/>
    <div className='da'>
         <Flick/>
    </div>
    <SeesdaHelp/>
    </section>
    )
}