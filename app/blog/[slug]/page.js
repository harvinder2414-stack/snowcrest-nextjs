import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "../../../lib/posts";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | Snow Crest Hotels`, description: post.excerpt };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <>
      <section className="page-banner" style={{ height: "32vh", minHeight: "240px" }}>
        <img src={post.image || "/images/img-af5b5a939f.jpg"} alt={post.title} />
        <div className="wrap page-banner-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
          </div>
          <h1>{post.title}</h1>
        </div>
      </section>

      <article className="blog-single">
        <div className="blog-date">
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <div className="entry-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <div className="wrap" style={{ maxWidth: "760px", paddingBottom: "60px" }}>
        <Link className="btn btn-dark" href="/contact#contact">Plan Your Stay at Luxe Vista</Link>
      </div>
    </>
  );
}
