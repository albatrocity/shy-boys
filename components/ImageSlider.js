import Slick from "react-slick";

const options = {
  infinite: false,
}

const ImageSlider = ({images}) => (
  <Slick {...options} >
    { images.map(x => <img key={x.public_id} src={x.url} />) }
  </Slick>
)

export default ImageSlider
