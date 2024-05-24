import './MainContent.css'
import MainContetnAction from './mainContetnAction/MainContetnAction'
import MainContentPropduct from './mainContentPropduct/MainContentPropduct'
import MainContentBlog from './mainContentBlog/MainContentBlog'
export default function MainContent(){
    return(<section className='sectionMainContent'>
    <MainContetnAction/>
    <MainContentPropduct/>
    <MainContentBlog/>
    </section>
    )
}