import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import ecommerceImg from "@assets/generated_images/e-commerce_mobile_app_mockup.png";
import taskImg from "@assets/generated_images/task_management_app_mockup.png";
import fitnessImg from "@assets/generated_images/fitness_app_mockup.png";

export default function Projects() {
  const projects = [
    {
      title: "TradeLoop - Retail Management App",
      description: "TradeLoop helps retailers efficiently manage their orders, traders, and buyers in one platform. Users can create detailed orders, track their status from pending to delivered, notify buyers, and automatically generate invoices with total purchase, sales, and profit. I designed and developed the app to streamline retail operations with a clean, intuitive interface and smooth workflow.",
      image: ecommerceImg,
      tags: ["Flutter", "Firebase", "Supabase Storage", "bloc","clean architecture"],
      demoUrl: "#",
      repoUrl: "https://github.com/MohamedElbagoury11/Orders-Management"
    },
    {
      title: "law Office Management Web and Mobile App",
      description: "Law Office Management helps law firms streamline case and client management. Lawyers can create, update, and track cases, while owners assign tasks and monitor performance. I developed the app with a clean, intuitive interface and robust backend to make law office operations efficient and transparent.",
      image: taskImg,
      tags: ["Flutter", "Bloc", "firebase", "Local Notifications", "clean architecture","Supabase Storage"],
      demoUrl: "#",
      repoUrl: "https://github.com/MohamedElbagoury11/LawOfficeMangment"
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
