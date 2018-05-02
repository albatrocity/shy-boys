import Pushable from '../Pushable';

const pos = {
  width: "260px", height: "260px", right: "-4%", top: "30%",
}

const smallPos = {
  width: "100px", height: "120px", right: "-10%", top: "30%",
}

const Hand4 = () => (
  <Pushable image="hand_4.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Hand4
