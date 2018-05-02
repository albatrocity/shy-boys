import Pushable from '../Pushable';

const pos = {
  width: "220px", height: "87px", left: "35%", top: "100px", zIndex: 1,
}

const smallPos = {
  width: "180px", height: "67px", left: "26%", top: "80px", zIndex: 1,
}

const Logo = () => (
  <Pushable image="shy_boys.png" position={pos} smallPosition={smallPos} smallPos={smallPos} />
)

export default Logo
