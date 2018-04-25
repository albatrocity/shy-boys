import "./main.css";
import anime from "animejs";
import "./main.css";

let pushables = [];
let lastCursorPos = { x: 0, y: 0 };
const minDelta = 5;
const hitPadding = 20;
const limit = 100;
var inThrottle;
var throttles = {};

const setupPushables = () => {
  const els = Array.prototype.slice.call(
    document.querySelectorAll(".pushable")
  );
  pushables = els.map((x, i) => ({
    rect: x.getBoundingClientRect(),
    el: x,
    id: i
  }));

  throttles = pushables.reduce((mem, x) => {
    mem[x.id] = false;
    return mem;
  }, {});
};

const deltaDirection = (prev, current, over, under) => {
  const diff = Math.abs(prev - current);
  // console.log(diff);
  return diff > minDelta ? (prev < current ? over : under) : undefined;
};

const calculateDelta = (prev, current) => {
  const x = prev.x - current.x;
  const y = prev.y - current.y;
  const xDirection = deltaDirection(prev.x, current.x, "left", "right");
  const yDirection = deltaDirection(prev.y, current.y, "down", "up");
  return {
    velocity: Math.abs(x + y),
    xDirection,
    yDirection
  };
};

const handlePush = (id, el, delta, pointerPos) => {
  const { xDirection, yDirection, velocity } = delta;
  const animation = {
    targets: el,
    duration: 400,
    easing: "easeOutQuad",
    elasticity: 1800
  };
  const match = pushables.find(p => p.el === el);
  const matchCenter = {
    x: match.rect.x + match.rect.width / 2,
    y: match.rect.y + match.rect.height / 2
  };
  const velValue = (velocity > 50 ? 50 : velocity) / 2;
  if (xDirection === "right") {
    animation.translateX = [{ value: -1 * velValue * 1 }, { value: 0 }];
    if (pointerPos.y < matchCenter.y) {
      animation.rotate = [{ value: `-${velValue}deg` }, { value: "0deg" }];
    } else {
      animation.rotate = [{ value: `${velValue}deg` }, { value: "0deg" }];
    }
  }
  if (xDirection === "left") {
    animation.translateX = [{ value: velValue * 1 }, { value: 0 }];
    if (pointerPos.y >= matchCenter.y) {
      animation.rotate = [{ value: `-${velValue}deg` }, { value: "0deg" }];
    } else {
      animation.rotate = [{ value: `${velValue}deg` }, { value: "0deg" }];
    }
  }
  if (yDirection === "up") {
    animation.translateY = [{ value: -1 * velValue * 1 }, { value: 0 }];
    if (pointerPos.x >= matchCenter.x) {
      animation.rotate = [{ value: `-${velValue}deg` }, { value: "0deg" }];
    } else {
      animation.rotate = [{ value: `${velValue}deg` }, { value: "0deg" }];
    }
  }
  if (yDirection === "down") {
    animation.translateY = [{ value: velValue * 1 }, { value: 0 }];
    if (pointerPos.x >= matchCenter.x) {
      animation.rotate = [{ value: `${velValue}deg` }, { value: "0deg" }];
    } else {
      animation.rotate = [{ value: `-${velValue}deg` }, { value: "0deg" }];
    }
  }

  if (!throttles[id]) {
    anime(animation);
    throttles[id] = true;
    setTimeout(() => (throttles[id] = false), limit);
  }
};

const isWithinBounds = (pos, testPos, modifier) =>
  pos >= testPos + hitPadding && pos <= testPos + hitPadding + modifier;

function handleMouseMove(e) {
  const delta = calculateDelta(lastCursorPos, e);
  lastCursorPos = { x: e.x, y: e.y };
  const { x: mouseX, y: mouseY } = e;
  const hits = pushables
    .filter(node => {
      const {
        rect: { x, y, height, width }
      } = node;
      return (
        isWithinBounds(mouseX, x, width) && isWithinBounds(mouseY, y, height)
      );
    })
    .forEach(function(x) {
      handlePush(x.id, x.el, delta, lastCursorPos);
    });
}

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", setupPushables);
setupPushables();
