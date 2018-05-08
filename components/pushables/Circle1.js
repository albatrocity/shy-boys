import Pushable from '../Pushable';

const pos = {
  width: "270px", height: "256px", left: "4%", bottom: "-4%", zIndex: 2,
}

const medPos = {
  width: "160px", height: "160px", left: "4%", bottom: "-4%", zIndex: 2,
}

const smallPos = {
  width: "120px", height: "120px", left: "2%", bottom: "-10%",
}

const xSmallPos = {
  width: "100px", height: "100px", left: "2%", bottom: "-10%",
}

const Circle1 = () => (
  <Pushable image="circle_red_1.png" position={pos} smallPosition={smallPos} smallPosition={smallPos} medPosition={medPos} xSmallPosition={xSmallPos} />
)

export default Circle1
