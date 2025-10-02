export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with cart, payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    techStack: ["react", "nodejs", "mongodb", "tailwindcss"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/AtulYadav25",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task manager with drag-and-drop interface.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    techStack: ["nextjs", "typescript", "postgresql", "tailwindcss"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/AtulYadav25",
  },
  {
    id: "3",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics and engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    techStack: ["react", "nodejs", "redis", "vite"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/AtulYadav25",
  },
  {
    id: "4",
    title: "Weather Forecast App",
    description: "Real-time weather forecasting with interactive maps and alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    techStack: ["react", "typescript", "tailwindcss"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/AtulYadav25",
  },
];
