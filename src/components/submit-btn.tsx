import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import "@/styles/fonts.css";

export default function SubmitBtn() {
  return (
    <Button
      type="submit"
      className="group montserrat flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:bg-[#fae0e0] hover:text-black disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10 dark:hover:bg-darkBeige dark:hover:text-black"
    >
      Submit{" "}
      <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1" />{" "}
    </Button>
  );
}
