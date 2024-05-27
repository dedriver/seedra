import "./SeesdaHelp.css";
import girl from "./GIRL.png"
export default function SeesdaHelp() {
  return (
    <section className="sectonSeesdaHelp">
      <div className="sectonSeesdaHelp__text">
        <div className="sectonSeesdaHelp__text_Main">
          <p>Seedra helps to grow fast and efficiant</p>
        </div>
        <div className="sectonSeesdaHelp__text_Description">
          <p>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and<br/>
            professional instructions created by PhD Helga George<br/> Be sure of our
            quality - the freshest batches of this season. Non-<br/>GMO, Heirloom -
            our seeds were tested and have the best<br/> germination ratings. Your
            easy growing experience is our guarantee <br/>Spinach commom culinary
            uses: salads, soups, smoothies, lasagne,<br/> pizza, pies, risotto, and
            more <br/>Proudly sourced in the USA - our garden seeds are grown,<br/>
            harvested, and packaged in the USA. We support local farmers and<br/> are
            happy to produce this American-made product
          </p>
        </div>
      </div>
      <div className="sectonSeesdaHelp__photo">
        <img src={girl} alt="girl" />
      </div>
    </section>
  );
}
