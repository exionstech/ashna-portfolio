// import { ReactNode } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import ActiveSectionContextProvider from "@/common/stores/active-section";

function App() {
  return (
    <ActiveSectionContextProvider>
      <Header />
      <Hero />
    </ActiveSectionContextProvider>
  );
}

export default App;
