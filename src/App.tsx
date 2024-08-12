
import Header from "./components/header";
import Hero from "./components/hero";
import ActiveSectionContextProvider from "@/common/stores/active-section";

import Contacts from "./components/contact";
import Projects from "./components/projects";

function App() {
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
}

export default App;
