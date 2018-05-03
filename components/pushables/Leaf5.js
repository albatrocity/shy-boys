import Pushable from '../Pushable';

const pos = {
  width: "280px", height: "314px", left: "-20%", top: "-4%", zIndex: 2
}

const smallPos = {
  width: "140px", height: "204px", left: "-20%", top: "-2%", zIndex: 2
}

const Leaf5 = () => (
  <Pushable image="leaf_5.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Leaf5
