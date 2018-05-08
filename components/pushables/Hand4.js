import Pushable from '../Pushable';

const pos = {
  width: "260px", height: "260px", right: "-4%", top: "30%",
}

const medPos = {
  width: "120px", height: "200px", right: "-5%", top: "30%",
}

const smallPos = {
  width: "100px", height: "120px", right: "-10%", top: "30%",
}

const xSmallPos = {
  width: "80px", height: "60px", right: "-10%", top: "50%",
}

const routeAnimation = [
  {
    rotate: '-10deg',
    translateY: -10,
    translateX: -20,
    delay: 0,
    duration: 200,
    easing: 'easeOutQuad'
  },

  {
    rotate: '0deg',
    translateY: 0,
    translateX: 0,
    delay: 0,
    duration: 400,
    easing: 'easeInQuad'
  },
]

const Hand4 = () => (
  <Pushable image="hand_4.png" position={pos} smallPosition={smallPos} medPosition={medPos} xSmallPosition={xSmallPos} routeAnimation={routeAnimation} transformOrigin="top right" />
)

export default Hand4
