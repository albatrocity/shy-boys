import React, { Component } from 'react';
import Router from 'next/router';

class Pushable extends Component {
  componentDidMount() {
    Router.onRouteChangeStart = url => {
      console.log('route!', this.el)
    }
  }
  render() {
    const { image, position, medPosition, smallPosition } = this.props;
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
            }
          }
        `}</style>
    </div>
  )}
}

export default Pushable
