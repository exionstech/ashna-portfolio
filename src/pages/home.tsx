import ActiveSectionContextProvider from "@/common/stores/active-section"
import Contacts from "@/components/contact"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"


export const HomePgae = () => {
    return (
        <ActiveSectionContextProvider>
        <Header />
        <div className="flex flex-col">
          <Hero />
          <Projects />
          <Skills />
          <Contacts />
        </div>
      </ActiveSectionContextProvider>
    )
}
