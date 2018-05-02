import Pushable from '../Pushable';

const pos = {
  width: "300px", height: "286px", right: "-4%", bottom: "-4%", zIndex: 3,
}

const smallPos = {
  width: "200px", height: "200px", right: "-4%", bottom: "-4%",
}

const Leaf7 = () => (
  <Pushable image="leaf_7.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Leaf7
