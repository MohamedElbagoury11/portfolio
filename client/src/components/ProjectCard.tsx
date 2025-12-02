import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <Button size="sm" className="flex-1 gap-2" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
