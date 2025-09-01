import Counter from "@/components/Counter";
import Gallery from "@/components/Portfolio";
import Team from "@/components/Team";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ServicesSection from "../components/ServicesSection";
import WorkSection from "../components/WorkSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";

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
