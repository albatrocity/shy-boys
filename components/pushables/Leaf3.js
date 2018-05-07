import Pushable from '../Pushable';

const pos = {
  width: "175px", height: "400px", left: "4%", top: "25%",
}

const medPos = {
  width: "100px", height: "320px", left: "30px", top: "50%",
}

const smallPos = {
  width: "100px", height: "300px", left: "-30px", top: "50%",
}

const Leaf3 = () => (
  <Pushable image="leaf_3.png" position={pos} smallPosition={smallPos} medPosition={medPos} />
)

export default Leaf3
