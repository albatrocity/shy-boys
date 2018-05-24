import Head from "next/head";
import Layout from "../components/Layout";
import { setupPushables, handleMouseMove } from "../lib/pushables";
import fetch from "isomorphic-unfetch";
import Contact from "../components/Contact";
import { apiUrl } from "../config/urls";

const ContactPage = ({ contacts = [] }) => {
  return (
    <Layout>
      <Head>
        <title>Contact - Shy Boys</title>
      </Head>
      <style jsx>{`
        .contacts {
          padding: 1em 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
      <section className="contacts">
        {contacts
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(x => <Contact key={x._id} {...x} />)}
      </section>
    </Layout>
  );
};

ContactPage.getInitialProps = async context => {
  const res = await fetch(`${apiUrl}/contacts`);
  const json = await res.json();
  return { contacts: json };
};

export default ContactPage;
