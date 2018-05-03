import Head from 'next/head';
import Layout from '../components/Layout';
import { setupPushables, handleMouseMove } from '../lib/pushables';
import BandsInTown from '../components/BandsInTown';

const Tour = () => (
  <Layout>
    <Head>
      <title>Tour - Shy Boys</title>
    </Head>
    <BandsInTown />
  </Layout>
)

export default Tour
