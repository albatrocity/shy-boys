import Pushable from '../Pushable';

const pos = {
  width: "120px", height: "118px", left: "3%", bottom: "-1%", zIndex: 2,
}

const smallPos = {
  width: "80px", height: "60px", left: "2%", bottom: "-1%", zIndex: 2,
}

const Hand4 = () => (
  <Pushable image="hand_5.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Hand4
