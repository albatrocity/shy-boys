const Pushable = ({ position = {}, smallPosition = {}, image }) => {
  return (<div className='pushable'>
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
      @media (max-width: 700px) {
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
  </div>)
}

export default Pushable
