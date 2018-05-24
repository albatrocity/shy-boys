import Link from "next/link";
import Head from "next/head";
import ImageSlider from "./ImageSlider";

const PostView = ({ title, content, publishedAt, slug, images = [] }) => {
  return (
    <article className="post">
      <style jsx>{`
        .post {
          margin-bottom: 2em;
          padding-bottom: 2em;
          border-bottom: 1px solid #2e6f92;
        }
        .post header cite {
          font-style: normal;
          font-family: "Fredoka One", cursive;
        }
        .post-title {
          margin-bottom: 0;
        }
        header {
          margin-bottom: 1em;
        }
        header a {
          text-decoration: none;
        }
        header cite a {
          text-decoration: underline;
        }
      `}</style>
      <header>
        {images.length > 0 && (
          <section className="images">
            <ImageSlider images={images} />
          </section>
        )}
        <Link as={`/posts/${slug}`} href={`/post?slug=${slug}`}>
          <a>
            <h1 className="post-title">{title}</h1>
          </a>
        </Link>
        <cite>
          <Link as={`/posts/${slug}`} href={`/post?slug=${slug}`}>
            <a>{new Date(publishedAt).toLocaleDateString()}</a>
          </Link>
        </cite>
      </header>
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default PostView;
