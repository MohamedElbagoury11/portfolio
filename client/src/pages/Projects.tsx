import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import ecommerceImg from "@assets/generated_images/e-commerce_mobile_app_mockup.png";
import taskImg from "@assets/generated_images/task_management_app_mockup.png";
import fitnessImg from "@assets/generated_images/fitness_app_mockup.png";

export default function Projects() {
  const projects = [
    {
      title: "ShopFlow - E-commerce App",
      description: "A full-featured e-commerce application built with Flutter. Features include product browsing, cart management, secure checkout integration with Stripe, and real-time order tracking.",
      image: ecommerceImg,
      tags: ["Flutter", "Firebase", "Stripe", "Provider"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "TaskMaster - Productivity Tool",
      description: "A sleek task management app designed to boost productivity. Includes features like drag-and-drop organization, dark mode, cloud sync, and smart reminders.",
      image: taskImg,
      tags: ["Flutter", "Bloc", "SQLite", "Local Notifications"],
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      title: "FitTrack - Social Fitness",
      description: "A social fitness tracking application that lets users track workouts, share progress with friends, and compete in challenges. Integrated with Google Maps API for route tracking.",
      image: fitnessImg,
      tags: ["Flutter", "Google Maps API", "Rest API", "GetX"],
      demoUrl: "#",
      repoUrl: "#"
    }
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of my recent work in mobile application development. 
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
