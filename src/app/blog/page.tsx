import Link from "next/link";
import Layout from "../../components/Layout";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/img/blog/blog-1.jpg",
      date: "March 15, 2024",
      title: "The Future of Video Production",
      excerpt:
        "Exploring the latest trends and technologies shaping the video production industry.",
      category: "Video Production",
    },
    {
      id: 2,
      image: "/img/blog/blog-2.jpg",
      date: "March 10, 2024",
      title: "Web Design Trends for 2024",
      excerpt:
        "Discover the most important web design trends that will dominate this year.",
      category: "Web Design",
    },
    {
      id: 3,
      image: "/img/blog/blog-hero.jpg",
      date: "March 5, 2024",
      title: "Content Marketing Strategies",
      excerpt:
        "Effective content marketing strategies to boost your brand's online presence.",
      category: "Marketing",
    },
  ];

  return (
    <Layout title="Blog - Zohar Media Portfolio">
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>Our blog</h2>
                <div className="breadcrumb__links">
                  <Link href="/">Home</Link>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest news</span>
                <h2>From our blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                  <div className="blog__item__text">
                    <span>{post.category}</span>
                    <h5>
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h5>
                    <p>{post.excerpt}</p>
                    <div className="blog__item__date">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog__pagination">
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">Next</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
