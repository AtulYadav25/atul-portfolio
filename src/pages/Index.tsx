import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <GitHubActivity />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default Index;
