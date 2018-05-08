import Pushable from '../Pushable';

const pos = {
  width: "260px", height: "260px", right: "-8%", bottom: "-10%", zIndex: 2,
}

const medPos = {
  width: "170px", height: "170px", right: "-8%", bottom: "-8%", zIndex: 2,
}

const smallPos = {
  display: "none"
}

const Circle4 = () => (
  <Pushable image="circle_pink_1.png" position={pos} smallPosition={smallPos} medPosition={medPos} />
)

export default Circle4
