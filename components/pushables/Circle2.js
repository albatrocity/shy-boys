import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "91px", left: "50%", bottom: "-4%", zIndex: 3,
}

const medPos = {
  width: "150px", height: "70px", left: "50%", bottom: "-2%", zIndex: 3,
}

const smallPos = {
  width: "120px", height: "50px", left: "50%", bottom: "-2%", zIndex: 3,
}

const Circle2 = () => (
  <Pushable image="circle_blue_1.png" position={pos} smallPosition={smallPos} medPosition={medPos} />
)

export default Circle2
