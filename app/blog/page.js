import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "Blog | Snow Crest Hotels",
  description: "Notes on Dalhousie, Khajjiar, and staying in the hills around Banikhet — from the team at Snow Crest Hotels.",
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <>
      <section className="page-banner">
        <img src="/images/img-af5b5a939f.jpg" alt="Snow Crest Blog" />
        <div className="wrap page-banner-content">
          <div className="breadcrumb"><Link href="/">Home</Link> / Blog</div>
          <h1>The Snow Crest Journal</h1>
          <p>Notes on Dalhousie, Khajjiar, and staying in the hills around Banikhet.</p>
        </div>
      </section>

      <div className="wrap">
        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <img src={post.image || "/images/img-af5b5a939f.jpg"} alt={post.title} />
                </Link>
                <div className="blog-body">
                  <div className="blog-date">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3><Link href={`/blog/${post.slug}`} style={{ color: "inherit" }}>{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                  <Link className="read-more" href={`/blog/${post.slug}`}>Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-posts"><p>No blog posts yet — check back soon.</p></div>
        )}
      </div>
    </>
  );
}
