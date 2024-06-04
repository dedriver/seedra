import './FilterSide.css';
import { useState } from 'react';
import ListItem from './LIstItem';
import { BoxProductBig } from '../../DATA';

export default function FilterSide({ list1, list2, list3, list4, checked, clk }) {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [value, setValue] = useState(false);
    function handleFilterToggle() {
        setFilterVisible(!isFilterVisible);
    }

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
      };

    return (
        <div className="FilterSide">
            <p className='adas' onClick={handleFilterToggle}>
                Filter
            </p>
            <div className="iTEMlINE"></div>
            {isFilterVisible && (
                <div className="FilterSideBox">
                    <ListItem slogan="Seed type">
                        <div className="list1Item">
                            <input type="checkbox" onChange={list1} /> <p>Hybrid</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list2} /> <p>Open Pollinated</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list3} /> <p>Organic Seeds</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list4} /> <p>Pelleted Seed</p>
                        </div>
                    </ListItem>
                    <ListItem slogan="Featured">
                        <div className="list1Item">
                            <input type="checkbox" onChange={list1} /> <p>Hybrid</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list2} /> <p>Open Pollinated</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list3} /> <p>Organic Seeds</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list4} /> <p>Pelleted Seed</p>
                        </div>
                    </ListItem>
                    <ListItem slogan="Growing Conditions">
                        <div className="list1Item">
                            <input type="checkbox" onChange={list1} /> <p>Hybrid</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list2} /> <p>Open Pollinated</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list3} /> <p>Organic Seeds</p>
                        </div>
                        <div className="list1Item">
                            <input type="checkbox" onChange={list4} /> <p>Pelleted Seed</p>
                        </div>
                    </ListItem>
                    <ListItem slogan={'Price'}>
                        <p>from</p>
                        <input type="text" />
                        <p>to</p>
                        <input type="text"  value={value}/>
                        <input type="range" value={value} onChange={handleChange} />
                    </ListItem>
                </div>
            )}
        </div>
    );
}
