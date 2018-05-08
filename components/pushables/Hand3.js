import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "140px", right: "120px", bottom: "0", zIndex: 1,
}

const medPos = {
  width: "140px", height: "100px", right: "50px", bottom: "-2%",
}

const smallPos = {
  width: "80px", height: "60px", right: "-20px", bottom: "20%", zIndex: 2,
}

const xSmallPos = {
  display: "none"
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

const Hand3 = () => (
  <Pushable image="hand_3.png" position={pos} smallPosition={smallPos} medPosition={medPos} xSmallPosition={xSmallPos} routeAnimation={routeAnimation} />
)

export default Hand3
