import Contact from "@/components/widgets/Contact";
import Testimonials from "@/components/widgets/Testimonials";
import Portfolio from "@/components/widgets/Portfolio";
import Intro from "@/components/widgets/Intro";
import Hero from "@/components/widgets/Hero";
import ServicesMain from "@/components/widgets/ServiceMain";
import OurTeam from "@/components/widgets/OurTeam";

export default function Home() {
  return (
    <main className="">
      <div>
        <Intro />
        <Hero />
        <ServicesMain/>
        <OurTeam />
        <Portfolio />
        <Testimonials />
        <Contact />

      </div>
    </main>
  );
}
