import Pushable from '../Pushable';

const pos = {
  width: "300px", height: "300px", left: "-5%", top: "-4%",
}

const smallPos = {
  width: "120px", height: "120px", left: "-3%", top: "-1%",
}

const Hand2 = () => (
  <Pushable image="hand_2.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Hand2
