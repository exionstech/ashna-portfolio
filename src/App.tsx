// import { ReactNode } from "react";
import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import ActiveSectionContextProvider from "@/common/stores/active-section";
import Projects from "./components/projects";
import Contacts from "./components/contact";

function App() {
  return (
    <ActiveSectionContextProvider>
      <Header />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </div>
    </ActiveSectionContextProvider>
  );
}

export default App;
