import React from "react";
import { SocialMedia } from "./SocialMedia";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

export function Header({}: Props) {
  return (
    <header className=" sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto">
      <SocialMedia />
      <Link href={"#contact"}>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <AiOutlineMail fontSize={"1.5rem"} />
          <div className=" uppercase">Entre em contato</div>
        </motion.div>
      </Link>
    </header>
  );
}
