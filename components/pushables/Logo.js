import Pushable from '../Pushable';

const pos = {
  width: "220px", height: "87px", left: "35%", top: "100px", zIndex: 1,
}

const medPos = {
  width: "180px", height: "77px", left: "15%", top: "100px", zIndex: 1,
}

const smallPos = {
  width: "180px", height: "67px", left: "26%", top: "80px", zIndex: 1,
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
    rotate: '0deg',
    translateY: 0,
    delay: 0,
    duration: 400,
    easing: 'easeInOutBack'
  },
]

const Logo = () => (
  <Pushable image="shy_boys.png" position={pos} smallPosition={smallPos} medPosition={medPos} routeAnimation={routeAnimation} />
)

export default Logo
