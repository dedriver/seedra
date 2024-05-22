import MainPageHeder from "./mainPageHeder/mainPageHeder";
import FooerMaunPage from "./fooerMaunPage/FooerMaunPage";
import MainContent from "./mainContent/MainContent";
import './mainPage.css'
export default function MainPage(){
    return(
        <section className="sectionMainPage">
        <MainPageHeder />
            <MainContent/>
        <FooerMaunPage />
        </section>
    );
}