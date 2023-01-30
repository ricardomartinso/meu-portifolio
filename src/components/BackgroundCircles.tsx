import React from "react";
import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center z-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2 }}
    >
      <div className=" border border-[#333] rounded-full h-[200px] w-[200px] absolute animate-ping mt-52"></div>
      <div className=" border border-[#333] rounded-full h-[300px] w-[300px] absolute animate-ping mt-52"></div>
      <div className=" border border-[#333] rounded-full h-[500px] w-[500px] absolute animate-ping mt-52"></div>
      <div className=" border border-primary opacity-20 rounded-full h-[580px] w-[580px] absolute mt-52"></div>
      <div className=" border border-primary opacity-20 rounded-full h-[720px] w-[720px] absolute mt-52"></div>
    </motion.div>
  );
}

export default BackgroundCircles;
