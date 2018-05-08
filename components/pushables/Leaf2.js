import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "202px", right: "-9%", top: "20px", zIndex: 3
}

const medPos = {
  width: "150px", height: "120px", right: "-20%", top: "60px", zIndex: 3
}

const smallPos = {
  width: "90px", height: "82px", right: "-6%", top: "20px", zIndex: 3
}

const routeAnimation = [
  {
    rotate: '8deg',
    delay: 0,
    duration: 300,
    easing: 'easeOutQuad',
    direction: 'alternate',
    elasticity: 600,
  },
  {
    rotate: '-5deg',
    delay: 0,
    duration: 200,
    easing: 'easeOutQuad',
    direction: 'alternate',
    elasticity: 600,
  },
  {
    rotate: '0deg',
    delay: 0,
    duration: 100,
    easing: 'linear',
    elasticity: 600,
  },
]

const Leaf2 = () => (
  <Pushable image="leaf_2.png" position={pos} smallPosition={smallPos} medPosition={medPos} transformOrigin="top left" routeAnimation={routeAnimation} />
)

export default Leaf2
