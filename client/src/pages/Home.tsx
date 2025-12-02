import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col justify-center items-start gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full glass-panel text-primary font-medium text-sm mb-6 inline-block">
            👋 Welcome to my portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Mido Mahmoud</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Flutter Developer & Problem Solver crafting beautiful, high-performance mobile experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                View My Work <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg gap-2 border-2 hover:bg-primary/5">
              Download CV <Download className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-12 border-t border-border/40 pt-12">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <h3 className="text-3xl font-bold text-foreground">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
