import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinay K N — Systems Engineer | Workflow Automation & BPM" },
      {
        name: "description",
        content:
          "Vinay K N is a Systems Engineer specializing in K2 workflow automation, BPM, SQL Server, and ServiceNow. Building reliable enterprise automation that scales.",
      },
      { property: "og:title", content: "Vinay K N — Systems Engineer | Workflow Automation & BPM" },
      {
        property: "og:description",
        content:
          "Portfolio of Vinay K N — K2 Five, SmartForms, SmartObjects, SQL Server, ServiceNow, and OCI AI Foundations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vinay K N — Systems Engineer" },
      {
        name: "twitter:description",
        content: "Workflow Automation & BPM Engineer — K2, SQL Server, ServiceNow.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
