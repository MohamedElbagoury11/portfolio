import { motion, Variants } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  type?: "zoom" | "slideUp" | "fade";
  className?: string;
  threshold?: number;
};

export function Reveal({ children, type = "zoom", className, threshold = 0.2 }: RevealProps) {
  const variants: Variants = {
    hidden:
      type === "zoom"
        ? { scale: 0.96, opacity: 0 }
        : type === "slideUp"
        ? { y: 20, opacity: 0 }
        : { opacity: 0 },
    show: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
