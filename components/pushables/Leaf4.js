import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "245px", left: "4%", top: "35%",
}

const smallPos = {
  width: "75px", height: "200px", left: "-2%", top: "15%",
}

const Leaf4 = () => (
  <Pushable image="leaf_4.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Leaf4
