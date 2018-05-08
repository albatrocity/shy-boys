import Head from 'next/head';
import Layout from '../components/Layout';
import { setupPushables, handleMouseMove } from '../lib/pushables';
import BandsInTown from '../components/BandsInTown';

const Tour = () => (
  <Layout xSmallNoPadding={true}>
    <Head>
      <title>Tour - Shy Boys</title>
      <meta key='description' name='description' content='Shy Boys Tour Dates' />
    </Head>
    <BandsInTown />
  </Layout>
)

export default Tour
