import Pushable from '../Pushable';

const pos = {
  width: "200px", height: "140px", right: "120px", bottom: "0", zIndex: 1,
}

const medPos = {
  width: "140px", height: "100px", right: "50px", bottom: "-2%",
}

const smallPos = {
  width: "120px", height: "100px", right: "80px", bottom: "-2%",
}

const Hand3 = () => (
  <Pushable image="hand_3.png" position={pos} smallPosition={smallPos} medPosition={medPos} />
)

export default Hand3
