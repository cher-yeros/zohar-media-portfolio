import About from "@/components/About";
import Team from "@/components/Team";
import Link from "next/link";
import Layout from "../../components/Layout";
import Testimonial from "@/components/Testimonial";
import Counter from "@/components/Counter";

export default function page() {
  return (
    <Layout title="About Us - Zohar Media Portfolio">
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: "url(/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>About us</h2>
                <div className="breadcrumb__links">
                  <Link href="/">Home</Link>
                  <span>About</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      <Testimonial />

      <Counter />

      {/* Team Section */}
      <Team />
    </Layout>
  );
}
