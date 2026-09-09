import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Journal — Luxe Vista by Snow Crest",
  description: "Travel notes on Dalhousie, Khajjiar, and the surrounding hills from Luxe Vista by Snow Crest.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">From the hills</p>
          <h1>The journal</h1>
          <p>Travel notes on Dalhousie, Khajjiar, and the surrounding hills — updated as we go.</p>
        </div>
      </section>

      <section className="section section--linen-soft">
        <div className="container">
          {posts.length === 0 && <p>No posts yet — check back soon.</p>}
          {posts.map((post) => (
            <div key={post.slug} className="post-row">
              <div className="post-date">
                {post.date &&
                  new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
              </div>
              <div>
                <h3>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {post.title}
                  </Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-link" style={{ marginTop: "0.75rem", display: "inline-flex" }}>
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
