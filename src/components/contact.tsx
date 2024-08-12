import "@/styles/fonts.css";

import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import SubmitBtn from "./submit-btn";
import { Socials } from "./socials";

const Contacts = () => {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className="gotu text-5xl font-semibold">Reach Out</h1>
      <div>
        <div className="w-[min(100%,38rem)] px-4 montserrat">
          <p className="mb-14 mt-6 text-gray-700 dark:text-white/80">
            Please contact me directly at{" "}
            <a className="underline" href="mailto:ashna@gmail.com">
              aashnakochhar07@gmail.com
            </a>{" "}
            or through this form.
          </p>
          <Socials />
          <form
            className="mt-10 flex flex-col dark:text-black"
          >
            <input
              className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="my-3 h-52 resize-none rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <div className="flex justify-center">
              <SubmitBtn />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
