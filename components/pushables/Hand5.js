import Pushable from '../Pushable';

const pos = {
  width: "120px", height: "118px", left: "3%", bottom: "-1%", zIndex: 2,
}

const medPos = {
  width: "100px", height: "80px", left: "2%", bottom: "-1%", zIndex: 2,
}

const smallPos = {
  width: "80px", height: "60px", left: "2%", bottom: "-1%", zIndex: 5,
}

const xSmallPos = {
  width: "70px", height: "50px", left: "2%", bottom: "-1%", zIndex: 5,
}

const routeAnimation = [
  {
    rotate: '-45deg',
    translateY: 80,
    duration: 300,
    easing: 'easeOutQuad',
  },
  {
    rotate: '5deg',
    translateY: -10,
    translateX: -10,
    duration: 200,
    easing: 'linear',
  },
  {
    rotate: '0deg',
    translateY: 0,
    translateX: 0,
    duration: 300,
    easing: 'easeOutCubic',
  }
]

const Hand4 = () => (
  <Pushable image="hand_5.png" position={pos} smallPosition={smallPos} medPosition={medPos} xSmallPosition={xSmallPos} routeAnimation={routeAnimation} />
)

export default Hand4
