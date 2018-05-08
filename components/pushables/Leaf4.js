import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "245px", left: "4%", top: "35%",
}

const medPos = {
  width: "120px", height: "200px", left: "2%", top: "30%",
}

const smallPos = {
  width: "75px", height: "200px", left: "-2%", top: "15%",
}

const xSmallPos = { display: "none" }

const routeAnimation = {
  rotate: '2deg',
  direction: 'alternate',
  duration: 400,
  delay: 0,
  easing: 'easeInQuad',
}

const Leaf4 = () => (
  <Pushable image="leaf_4.png" position={pos} smallPosition={smallPos} medPosition={medPos} routeAnimation={routeAnimation} xSmallPosition={xSmallPos} />
)

export default Leaf4
