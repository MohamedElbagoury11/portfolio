import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/soft_abstract_glassmorphism_background.png";
import { CustomCursor } from "./CustomCursor";
import { ScrollProgress } from "./ScrollProgress";
import { useEffect, useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background transition-colors duration-500">
      <CustomCursor />
      <ScrollProgress />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px] z-10" />
        <motion.img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 dark:opacity-20 scale-110"
          animate={{
            x: (mousePosition.x * 0.02),
            y: (mousePosition.y * 0.02),
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />
        
        {/* Interactive Orbs */}
        <motion.div 
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/30 blur-[120px]"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px]"
          animate={{
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
        />
      </div>

      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-grow pt-28 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
