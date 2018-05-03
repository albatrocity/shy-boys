import Head from 'next/head';
import Layout from '../components/Layout';
import { setupPushables, handleMouseMove } from '../lib/pushables';
import fetch from 'isomorphic-unfetch';
import PostsView from '../components/PostsView';
import Pagination from '../components/Pagination';
import { apiUrl } from '../config/urls';


const Page = ({ page }) => (
  <Layout>
    <Head>
      <meta property="og:title" content={`${page.title} - Shy Boys`} />
      <meta property="og:site_name" content="Shy Boys" />
      <title>{page.title} - Shy Boys</title>
    </Head>
    { page.images.length > 0 &&
      <section className='images'>
        <ImageSlider images={page.images} />
      </section>
    }
    <section dangerouslySetInnerHTML={{ __html: page.content }} />
  </Layout>
)

Page.getInitialProps = async (context) => {
  const res = await fetch(`${apiUrl}/pages/${context.query.slug}`)
  const json = await res.json()
  return { page: json }
}

export default Page
