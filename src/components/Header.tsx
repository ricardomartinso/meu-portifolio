import React from "react";
import { SocialMedia } from "./SocialMedia";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto 
    z-20 xl:items-center"
    >
      <SocialMedia />
      <Link href={"#contact"}>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <AiOutlineMail fontSize={"1.5rem"} />
          <div className=" uppercase">Entre em contato</div>
        </motion.div>
      </Link>
    </header>
  );
}
