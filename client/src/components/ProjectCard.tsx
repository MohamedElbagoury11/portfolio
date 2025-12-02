import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, image, tags, demoUrl, repoUrl, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/20 shadow-xl"
      >
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
          <motion.img
            src={image}
            alt={title}
            style={{ transform: "translateZ(50px)" }}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-20 bg-background/40 backdrop-blur-xl">
          <h3 
            style={{ transform: "translateZ(50px)" }}
            className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors"
          >
            {title}
          </h3>
          <p 
            style={{ transform: "translateZ(30px)" }}
            className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed"
          >
            {description}
          </p>
          
          <div 
            style={{ transform: "translateZ(40px)" }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/10 px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div 
            style={{ transform: "translateZ(60px)" }}
            className="flex gap-3 mt-auto"
          >
            {demoUrl && (
              <Button size="sm" className="flex-1 gap-2 rounded-xl shadow-lg shadow-primary/20" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </Button>
            )}
            {repoUrl && (
              <Button size="sm" variant="outline" className="flex-1 gap-2 rounded-xl hover:bg-primary/5" asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
