import BackgroundLayout from "@/components/BackgroundLayout";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <BackgroundLayout>
    <Hero />
    <SocialLinks />
    <Skills />
    <ProjectsSection />
    </BackgroundLayout>
  );
}
