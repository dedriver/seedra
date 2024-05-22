import './MainContent.css'
import MainContetnAction from './mainContetnAction/MainContetnAction'
import MainContentPropduct from './mainContentPropduct/MainContentPropduct'
export default function MainContent(){
    return(<section className='sectionMainContent'>
    <MainContetnAction/>
    <MainContentPropduct/>
    </section>
    )
}