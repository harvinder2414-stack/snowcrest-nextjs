import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            {post.date &&
              new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
          </p>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/blog" className="text-link">
              ← Back to the journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
