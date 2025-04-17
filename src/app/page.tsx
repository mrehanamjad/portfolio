import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialLinks />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
