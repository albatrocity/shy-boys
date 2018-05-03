
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
        padding-bottom: 800px;
        overflow: visible;
      }
      @media (max-width: 700px) {
        .container-inner {
          max-width: 280px;
          padding-bottom: 400px;
        }
      }
    `}</style>
    <div className='container-inner'>{ children }</div>
  </div>
)

export default Container
