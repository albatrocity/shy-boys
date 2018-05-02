import React, { Component } from 'react';
import { setupPushables, handleMouseMove, handleTouchMove } from '../lib/pushables';
import Pushable from './Pushable';
import Leaf3 from './pushables/Leaf3';
import Leaf4 from './pushables/Leaf4';
import Leaf6 from './pushables/Leaf6';
import Leaf7 from './pushables/Leaf7';
import Circle1 from './pushables/Circle1';
import Circle2 from './pushables/Circle2';
import Circle3 from './pushables/Circle3';
import Circle4 from './pushables/Circle4';
import Hand2 from './pushables/Hand2';
import Hand3 from './pushables/Hand3';
import Hand4 from './pushables/Hand4';
import Hand5 from './pushables/Hand5';

class AnimationArea extends Component {
  componentDidMount() {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", setupPushables);
    setupPushables();
  }

  render() {
    return (
      <div>
        <div className='background-interactive'>
          <style jsx>{`
            .background-interactive {
              width: 100%;
              height: 100%;
              overflow: hidden;
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
            }
          `}</style>
          <Leaf3 />
          <Leaf4 />
          <Leaf6 />
          <Leaf7 />
          <Circle1 />
          <Circle2 />
          <Circle3 />
          <Circle4 />
          <Hand2 />
          <Hand3 />
          <Hand4 />
          <Hand5 />
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default AnimationArea
