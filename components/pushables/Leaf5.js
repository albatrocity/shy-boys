import Pushable from "../Pushable";

const pos = {
  width: "280px",
  height: "300px",
  left: "-20%",
  top: "-80px",
  zIndex: 2
};

const medPos = {
  width: "180px",
  height: "224px",
  left: "-20%",
  top: "-40px",
  zIndex: 2
};

const smallPos = {
  width: "100px",
  height: "115px",
  left: "30px",
  top: "-20px",
  zIndex: 2
};

const routeAnimation = [
  {
    rotate: "-10deg",
    translateY: 20,
    delay: 0,
    duration: 250,
    easing: "easeOutQuad"
  },
  {
    rotate: "0deg",
    translateY: 0,
    delay: 0,
    duration: 300,
    elasticity: 900,
    easing: "easeOutQuad"
  }
];

const Leaf5 = () => (
  <Pushable
    image="leaf_5.png"
    position={pos}
    smallPosition={smallPos}
    medPosition={medPos}
    transformOrigin="top left"
    routeAnimation={routeAnimation}
  />
);

export default Leaf5;
