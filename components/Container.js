
const Container = ({children}) => (
  <div>
    <style jsx>{`
      margin: 0;
      height: 100%;
      width: 100%;
      overflow: auto;
      position: absolute;
      .container-inner {
        max-width: 600px;
        margin: 0 auto;
        position: relative;
        padding-top: 200px;
        padding-bottom: 200px;
        overflow: visible;
      }
      @media (max-width: 600px) {
        .container-inner {
          max-width: 280px;
        }
      }
    `}</style>
    <div className='container-inner'>{ children }</div>
  </div>
)

export default Container
