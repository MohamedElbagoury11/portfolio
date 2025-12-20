import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <div className="py-12 max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss new opportunities? 
            I'm always open to chatting about tech and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:MohamedElbagoury150@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    MohamedElbagoury150@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">whatsapp</h4>
                  <p className="text-muted-foreground">01020074013</p>
                </div>
              </div>
              
              

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form 
              action="https://formsubmit.co/mohamedelbagoury150@gmail.com" 
              method="POST"
              className="glass-panel p-8 rounded-3xl space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input name="firstName" placeholder="John" className="bg-white/50 dark:bg-white/5 border-white/20" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input name="lastName" placeholder="Doe" className="bg-white/50 dark:bg-white/5 border-white/20" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input name="email" type="email" placeholder="john@example.com" className="bg-white/50 dark:bg-white/5 border-white/20" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input name="_subject" placeholder="Project Inquiry" className="bg-white/50 dark:bg-white/5 border-white/20" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea name="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-white/50 dark:bg-white/5 border-white/20" required />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl font-medium text-lg h-12 shadow-lg shadow-primary/20">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
