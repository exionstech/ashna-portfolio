import ActiveSectionContextProvider from "@/common/stores/active-section";
import AboutHero from "@/components/about/hero";
import Header from "@/components/header";

export const AboutPage = () => {
  return (
    <ActiveSectionContextProvider>
      <Header />
      <AboutHero />
    </ActiveSectionContextProvider>
  );
};
