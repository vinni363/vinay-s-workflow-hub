import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vinay K N" },
      {
        name: "description",
        content:
          "About Vinay K N — K2 workflow developer at TCS with 2+ years building enterprise BPM solutions, SQL Server integrations, and OCI AI Foundations certification.",
      },
      { property: "og:title", content: "About — Vinay K N" },
      {
        property: "og:description",
        content:
          "K2 Five, SmartForms, SQL Server, ServiceNow, and OCI AI — background, skills, experience and certifications.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-28">
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
