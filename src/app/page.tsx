import Counter from "@/components/Counter";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Team from "@/components/Team";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <Layout title="Zohar Media Portfolio - Home">
      <Hero />
      <ServicesSection />
      {/* <WorkSection /> */}
      <PortfolioShowcase />

      {/* <Gallery /> */}

      <Counter />

      <Team />

      {/* <AboutSection /> */}
      <CallToAction />
    </Layout>
  );
}
