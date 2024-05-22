import './mainContetnAction.css'
import fire from './fire.png'
import img1 from './howe.png'
export default function MainContetnAction(){
    return(
        <>
        <section className="sectionMainContetnAction">
             <div className='sectionMainContetnAction_A'><div className="MainContetnAction_MainText">
                <p>SEEDRA Basil Seeds for <br/> Indoor and Outdoor Planting</p>
             </div> 
            <div className='MainContetnAction_MainDescription'>
                <p>Be sure of our quality - the freshest batches of this season. Non-GMO, <br/> Heirloom - our seeds were tested and have the best germination ratings. <br/>Your easy growing experience is our guarantee</p>
            </div>
            <div className='MainContetnAction_costLine'>
                <div className='fireIcon'>
                        <img src={fire} alt="fire" />
                    </div> 
                <div className='MainContetnAction_cost'>$12.56</div>
                <div className='MainContetnAction_Newcost'>$15.56</div>
            </div>
            <div className='MainContetnAction_ButonLine'>
                <div className='MainContetnAction_Buton'>
                    <button>Add to card</button>
                </div>
                <div className='MainContetnAction_Buton'>
                    <button>Discover</button>
                </div>
            </div>
            </div>
            <div className="sectionMainContetnAction_B">
                <img src={img1} alt="img1" />
            </div>
        </section>
        
        <section className='sectionMainContetnSeds'>
            <div className='sectionMainContetnSeds_mainText'>
                <p>We sell seeds </p>
            </div>
            <div className='sectionMainContetnSeds_mainDescription'>
                <p>that always sprout and gardening supplies which never break  </p>
            </div>
        </section>
        </>
    );
}