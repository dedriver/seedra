import './ProductPageMainSearchlne.css';

export default function ProductPageMainSearchlne({ handleSearch }) {
    return (
        <div className="ProductPageMainSearchInputs">
            <div className='INPUTS'>
                <input
                    className="ProductPageMainSearchInput"
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                />
            </div>
            <div className="ProductPageMainSearchList">
                <form action="">
                    <label htmlFor="sort" className="sort-label">
                        {/* Additional form elements can go here */}
                    </label>
                </form>
            </div>
        </div>
    );
}
