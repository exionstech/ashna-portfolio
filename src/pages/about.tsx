import ActiveSectionContextProvider from "@/common/stores/active-section";
import AboutHero from "@/components/about/hero";
import { StorySection } from "@/components/about/story";
import Header from "@/components/header";
import Skills from "@/components/skills";

export const AboutPage = () => {
  return (
    <ActiveSectionContextProvider>
      <Header />
      <div className="flex flex-col gap-5">
      <AboutHero />
      <StorySection />
      <Skills />
      </div>
    </ActiveSectionContextProvider>
  );
};
