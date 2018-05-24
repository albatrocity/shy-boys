import Pushable from "../Pushable";

const pos = {
  width: "270px",
  height: "107px",
  left: "30%",
  top: "60px",
  zIndex: 1
};

const medPos = {
  width: "260px",
  height: "120px",
  left: "20%",
  top: "80px",
  zIndex: 1
};

const smallPos = {
  width: "210px",
  height: "97px",
  left: "16%",
  top: "90px",
  zIndex: 1
};

const routeAnimation = [
  {
    rotate: "10deg",
    translateY: -10,
    delay: 0,
    duration: 200,
    easing: "easeOutQuad"
  },
  {
    rotate: "0deg",
    translateY: 0,
    delay: 0,
    duration: 400,
    easing: "easeInOutBack"
  }
];

const Logo = () => (
  <Pushable
    image="shy_boys.png"
    position={pos}
    smallPosition={smallPos}
    medPosition={medPos}
    routeAnimation={routeAnimation}
  />
);

export default Logo;
