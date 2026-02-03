import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { ThreeSteps } from "@/components/three-steps";
import { Services } from "@/components/services";
import { Solutions } from "@/components/solutions";
import { WhyUs } from "@/components/why-us";
import { Industries } from "@/components/industries";
import { Testimonials } from "@/components/testimonials";
import { BookCTA } from "@/components/book-cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <ThreeSteps />
      <Services />
      <Solutions />
      <WhyUs />
      <Industries />
      <Testimonials />
      <BookCTA />
      <Contact />
      <Footer />
    </main>
  );
}
