import Pushable from '../Pushable';

const pos = {
  width: "230px", height: "303px", right: "-1%", top: "-1%", zIndex: 3,
}

const medPos = {
  width: "170px", height: "280px", right: "-1%", top: "-1%",
}

const smallPos = {
  width: "100px", height: "200px", right: "-1%", top: "-1%",
}

const Leaf4 = () => (
  <Pushable image="leaf_6.png" position={pos} smallPosition={smallPos} medPosition={medPos} />
)

export default Leaf4
