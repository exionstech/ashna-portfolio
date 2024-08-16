import ActiveSectionContextProvider from "@/common/stores/active-section";
import Contacts from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export const HomePgae = () => {
  return (
    <ActiveSectionContextProvider>
      <Header />
      <div className="flex flex-col">
        <Hero />
        <Projects />
        <Contacts />
      </div>
    </ActiveSectionContextProvider>
  );
};
