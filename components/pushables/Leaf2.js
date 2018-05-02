import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "202px", right: "-9%", top: "2%", zIndex: 3
}

const smallPos = {
  width: "90px", height: "82px", right: "-6%", top: "2%", zIndex: 3
}

const Leaf2 = () => (
  <Pushable image="leaf_2.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Leaf2
