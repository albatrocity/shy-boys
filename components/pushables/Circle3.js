import Pushable from '../Pushable';

const pos = {
  width: "260px", height: "204px", right: "3%", top: "-3%",
}

const medPos = {
  width: "220px", height: "120px", right: "-15%", top: "-1%",
}

const smallPos = {
  width: "120px", height: "80px", right: "-15%", top: "-1%",
}

const Circle3 = () => (
  <Pushable image="circle_yellow_2.png" position={pos} smallPosition={smallPos} medPosition={medPos} />
)

export default Circle3
