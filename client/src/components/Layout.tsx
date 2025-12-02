import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/soft_abstract_glassmorphism_background.png";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 dark:opacity-20"
        />
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-28 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
