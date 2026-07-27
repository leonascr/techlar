import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Cases />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
