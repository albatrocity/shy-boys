
const Container = ({children}) => (
  <div>
    <style jsx>{`
      margin: 0;
      height: 100%;
      width: 100%;
      overflow: auto;

      .container-inner {
        max-width: 600px;
        margin: 0 auto;
        position: relative;
        padding-top: 200px;
        padding-bottom: 800px;
        overflow: visible;
      }
      @media (max-width: 1024px) {
        .container-inner {
          max-width: 460px;
          padding-bottom: 100px;
        }
      }
      @media (max-width: 420px) {
        .container-inner {
          max-width: 280px;
          padding-bottom: 100px;
        }
      }
    `}</style>
    <div className='container-inner'>{ children }</div>
  </div>
)

export default Container
