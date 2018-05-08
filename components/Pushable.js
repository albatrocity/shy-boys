import React, { Component } from 'react';
import Router from 'next/router';
import anime from 'animejs';

class Pushable extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('NEXT', nextProps);
    return false
  }
  componentDidMount() {
    const { routeAnimation = {}, id } = this.props;
    if (Array.isArray(routeAnimation)) {
      const timeline = anime.timeline()
      routeAnimation.forEach(x => timeline.add({...x, targets: this.el}))
    } else {
      anime({...routeAnimation, targets: this.el})
    }
  }
  render() {
    const { image, position, medPosition, smallPosition, transformOrigin = 'center' } = this.props;
    const xSmall = this.props.xSmallPosition || smallPosition;
    return (
      <div className='pushable' ref={el => this.el = el}>
        <style jsx>{`
          .pushable {
            background-image: url(/static/images/${image});
            background-position: left top;
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            z-index: ${position.zIndex};
            width: ${position.width};
            height: ${position.height};
            left: ${position.left};
            top: ${position.top};
            right: ${position.right};
            bottom: ${position.bottom};
            display: ${position.display || 'block'};
            transform-origin: ${transformOrigin};
            transform-style: preserve-3D;
            transform: translate3d(0, 0, 0);

          }
          @media (max-width: 1024px) {
            .pushable {
              z-index: ${medPosition.zIndex};
              width: ${medPosition.width};
              height: ${medPosition.height};
              left: ${medPosition.left};
              top: ${medPosition.top};
              right: ${medPosition.right};
              bottom: ${medPosition.bottom};
              display: ${medPosition.display || 'block'};
            }
          }
          @media (max-width: 420px) {
            .pushable {
              z-index: ${smallPosition.zIndex};
              width: ${smallPosition.width};
              height: ${smallPosition.height};
              left: ${smallPosition.left};
              top: ${smallPosition.top};
              right: ${smallPosition.right};
              bottom: ${smallPosition.bottom};
              display: ${smallPosition.display || 'block'};
            }
          }
          @media (max-width: 320px) {
            .pushable {
              z-index: ${xSmall.zIndex};
              width: ${xSmall.width};
              height: ${xSmall.height};
              left: ${xSmall.left};
              top: ${xSmall.top};
              right: ${xSmall.right};
              bottom: ${xSmall.bottom};
              display: ${xSmall.display || 'block'};
            }
          }
        `}</style>
    </div>
  )}
}

export default Pushable
