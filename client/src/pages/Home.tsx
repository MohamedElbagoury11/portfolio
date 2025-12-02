import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Download, Code2, Smartphone, Database } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[85vh] flex flex-col justify-center items-start gap-8 relative">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-4xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="px-4 py-2 rounded-full glass-panel text-primary font-medium text-sm inline-flex items-center gap-2 border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for freelance work
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-7xl md:text-9xl font-heading font-bold mb-6 leading-tight tracking-tight">
            Building <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400 animate-gradient-x">
              Digital Dreams
            </span>
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            I'm <strong className="text-foreground font-semibold">Mido Mahmoud</strong>, a Flutter Developer & UI Engineer. 
            I craft fluid, high-performance mobile experiences that feel alive.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full h-16 px-10 text-lg gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                View My Work <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="rounded-full h-16 px-10 text-lg gap-2 border-2 border-border hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              Download CV <Download className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Cards Decoration */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="relative w-[500px] h-[600px]">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 glass-panel p-6 rounded-3xl border-white/20 w-64"
            >
              <Code2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">Scalable architecture and maintainable solutions.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-40 left-0 glass-panel p-6 rounded-3xl border-white/20 w-64 backdrop-blur-xl bg-white/60 dark:bg-black/60"
            >
              <Smartphone className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Mobile First</h3>
              <p className="text-sm text-muted-foreground">Native performance with Flutter & Dart.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-20 right-20 glass-panel p-6 rounded-3xl border-white/20 w-64"
            >
              <Database className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Backend Ready</h3>
              <p className="text-sm text-muted-foreground">Seamless integration with Firebase & APIs.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full mt-auto border-t border-border/40 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "20+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Active Support" },
            ].map((stat, index) => (
              <div key={index} className="group cursor-default">
                <h3 className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-heading">{stat.number}</h3>
                <p className="text-muted-foreground group-hover:translate-x-2 transition-transform duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
