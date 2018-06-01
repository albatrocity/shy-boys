import Release from "./Release";

const Releases = ({ data }) => (
  <section className="releases">
    <style jsx>{`
      .releases {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    `}</style>
    {data.length && data.map(x => <Release key={x._id} {...x} />)}
  </section>
);

export default Releases;
