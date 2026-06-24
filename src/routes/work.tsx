import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Vinay K N" },
      {
        name: "description",
        content:
          "Selected work by Vinay K N — K2 workflow automation projects, BPM solutions, and integrations built at TCS and beyond.",
      },
      { property: "og:title", content: "Work — Vinay K N" },
      {
        property: "og:description",
        content: "Selected projects in workflow automation, BPM, and integrations.",
      },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  useReveal();
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-28">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
