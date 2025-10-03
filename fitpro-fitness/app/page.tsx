import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* A seção Hero corresponde ao link "Home" (#home) */}
      <section id="home">
        <Hero />
      </section>

      {/* A seção Programs corresponde ao link "Programs" (#programs) */}
      <section id="programs">
        <Programs />
      </section>

      {/* 
        A seção WhyChooseUs não tem um link no menu, o que é perfeitamente normal.
        Ela serve como conteúdo de transição na página.
      */}
      <WhyChooseUs />

      {/* A seção Testimonials corresponde ao link "About" (#about) */}
      <section id="about">
        <Testimonials />
      </section>

      {/* A seção Pricing corresponde ao link "Pricing" (#pricing) */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* O Footer é o melhor lugar para o link "Contact" (#contact) */}
      <footer id="contact">
        <Footer />
      </footer>
    </main>
  );
}
