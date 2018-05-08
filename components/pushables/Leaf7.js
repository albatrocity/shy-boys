import Pushable from '../Pushable';

const pos = {
  width: "300px", height: "286px", right: "-4%", bottom: "-4%", zIndex: 3,
}

const medPos = {
  width: "220px", height: "210px", right: "-7%", bottom: "-4%",
}

const smallPos = {
  width: "150px", height: "150px", right: "-4%", bottom: "-4%", zIndex: 0,
}

const xSmallPos = {
  width: "100px", height: "100px", right: "-8%", bottom: "-4%", zIndex: 0,
}

const routeAnimation = [
  {
    rotate: '10deg',
    translateY: -10,
    delay: 0,
    duration: 300,
    easing: 'easeOutQuad'
  },
  {
    rotate: '0deg',
    translateY: 0,
    delay: 0,
    duration: 500,
    easing: 'easeInOutBack'
  },
]

const Leaf7 = () => (
  <Pushable image="leaf_7.png" position={pos} smallPosition={smallPos} medPosition={medPos} xSmallPosition={xSmallPos} routeAnimation={routeAnimation} />
)

export default Leaf7
