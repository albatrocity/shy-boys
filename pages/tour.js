import Head from "next/head";
import Layout from "../components/Layout";
import Shows from "../components/Shows";
import { setupPushables, handleMouseMove } from "../lib/pushables";
import { apiUrl } from "../config/urls";

const Tour = ({ shows }) => (
  <Layout>
    <Head>
      <title>Tour - Shy Boys</title>
      <meta
        key="description"
        name="description"
        content="Shy Boys Tour Dates"
      />
    </Head>
    <Shows data={shows} />
  </Layout>
);

Tour.getInitialProps = async ({ req }) => {
  const showsRes = await fetch(`${apiUrl}/shows`);
  const shows = await showsRes.json();
  return { shows };
};

export default Tour;
