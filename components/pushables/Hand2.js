import Pushable from '../Pushable';

const pos = {
  width: "300px", height: "300px", left: "-5%", top: "-4%",
}

const medPos = {
  width: "160px", height: "120px", left: "-3%", top: "-1%",
}

const smallPos = {
  width: "100px", height: "100px", left: "-3%", top: "-1%",
}

const routeAnimation = [
  {
    rotate: '10deg',
    translateY: -10,
    delay: 0,
    duration: 200,
    easing: 'easeOutQuad'
  },
  {
    rotate: '-10deg',
    delay: 0,
    translateY: -10,
    duration: 200,
    easing: 'linear'
  },
  {
    rotate: '0deg',
    translateY: 0,
    delay: 0,
    duration: 300,
    easing: 'easeInOutBack'
  },
]

const Hand2 = () => (
  <Pushable image="hand_2.png" position={pos} smallPosition={smallPos} medPosition={medPos} routeAnimation={routeAnimation} transformOrigin="0 0 0" />
)

export default Hand2
