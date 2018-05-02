import Pushable from '../Pushable';

const pos = {
  width: "300px", height: "286px", left: "4%", bottom: "-4%", zIndex: 2,
}

const smallPos = {
  width: "120px", height: "120px", left: "2%", bottom: "-10%",
}

const Circle1 = () => (
  <Pushable image="circle_red_1.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Circle1
