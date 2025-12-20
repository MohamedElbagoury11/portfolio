import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./mailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, _subject, message } = req.body;

      if (!email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      await sendContactEmail({ firstName, lastName, email, _subject, message });

      return res.status(200).json({ message: "Email sent" });
    } catch (err: any) {
      console.error("Error sending contact email:", err?.message || err);
      return res.status(500).json({ message: "Failed to send email" });
    }
  });

  return httpServer;
}
