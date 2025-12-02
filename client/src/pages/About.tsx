import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Flutter", "Dart", "Firebase", "REST APIs", "State Management", 
    "Bloc/Cubit", "Provider", "GetX", "UI/UX Design", "Git/GitHub",
    "Clean Architecture", "TDD", "CI/CD", "App Store Deployment"
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-heading font-bold mb-8">About Me</h2>
          
          <div className="glass-panel p-8 rounded-3xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate Flutter Developer with a strong background in building cross-platform mobile applications. 
              My journey began with a curiosity for how things work, which led me to the world of software development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Over the years, I have honed my skills in Dart and the Flutter framework, delivering high-quality apps 
              that solve real-world problems. I believe in writing clean, maintainable code and creating intuitive user interfaces 
              that delight users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or solving algorithmic challenges to keep my mind sharp.
            </p>
          </div>

          <h3 className="text-2xl font-heading font-bold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge className="px-4 py-2 text-sm rounded-full bg-white/50 dark:bg-white/5 hover:bg-primary/10 text-foreground border-border shadow-sm transition-colors">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
