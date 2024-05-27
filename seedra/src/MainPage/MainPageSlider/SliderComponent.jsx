import Star from "../mainContent/mainContentPropduct/product/Star"
export default function SliderComponent({img , name , data , description}) {
  return (
    <div className="SliderComponent">
        <div className="SliderComponentData">
            <div className="SliderComponentDataImg">
                <img src={img} alt="SliderComponentDataImg" />
            </div>
            <div>
            <div className="SliderComponentDataName">
                <p>{name}</p>
            </div>
            <div className="SliderComponentDataDATA"><p>
                {data}
                </p></div>
        </div></div>
        <div className="SliderComponentStars"><Star/><Star/><Star/><Star/><Star/></div>
        <div className="SliderComponentDescription">
            {description}
        </div>
    </div>
  )
}
