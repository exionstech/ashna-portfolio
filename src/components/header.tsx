import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion } from "framer-motion";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      const matchingLink = links.find((link) =>
        location.hash.includes(link.id)
      );
      if (matchingLink) {
        setActiveSection(matchingLink.id);
      } else {
        setActiveSection("home");
      }
    } else if (location.pathname === "/about") {
      setActiveSection("about");
    }
  }, [location.pathname, location.hash, setActiveSection]);

  const handleClick = (e: any, link: any) => {
    e.preventDefault();
    if (
      link.id === "about" ||
      link.id === "skills" ||
      link.id === "experience"
    ) {
      if (location.pathname !== "/about") {
        navigate("/about");
        setTimeout(() => {
          smoothScrollTo({ e, id: link.id });
          setActiveSection(link.id);
        }, 100);
      } else {
        smoothScrollTo({ e, id: link.id });
        setActiveSection(link.id);
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          smoothScrollTo({ e, id: link.id });
          setActiveSection(link.id);
        }, 100);
      } else {
        smoothScrollTo({ e, id: link.id });
        setActiveSection(link.id);
      }
    }

    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="relative z-[99]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-[#f4f3ee] border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] md:w-[41rem] md:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium transition-colors sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center text-black dark:text-white"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className="flex w-full items-center justify-center px-3 py-3 uppercase transition"
                href={link.id === "about" ? "/about" : `/#${link.id}`}
                onClick={(e) => handleClick(e, link)}
              >
                {link.name}

                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
