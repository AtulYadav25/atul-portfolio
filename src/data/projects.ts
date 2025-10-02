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
    title: "Chop SUI Panda",
    description: "Full-stack + Web3 Play Platform build for SUI Ecosystem. Play games, earn tokens, and win real prizes!",
    image: "https://i.ibb.co/JRK64j8n/shareimagepanda-2.png",
    techStack: ["react", "nodejs", "mongodb", "tailwindcss"],
    liveUrl: "https://chopsuipanda.com",
    codeUrl: "https://github.com/AtulYadav25",
  },
  {
    id: "2",
    title: "Ludo Javascript Game",
    description: "A classic Ludo game implemented in JavaScript with multiplayer support to play with BOTS!.",
    image: "https://cdn.buymeacoffee.com/uploads/rewards/2024-12-07/1/120627_Thumbnail_BMC.png@1200w_0e.png",
    techStack: ["javascript", "html", "css"],
    liveUrl: "https://github.com/AtulYadav25",
    codeUrl: "https://github.com/AtulYadav25",
  },
  {
    id: "3",
    title: "Genesis Prompt",
    description: "AI-powered prompt generator to help you create effective prompts for various AI models.",
    image: "https://camo.githubusercontent.com/4570dd92e3b8545e87c74fa68776fdc8c0322c624b6336e9877ca2bf22b55a23/68747470733a2f2f692e6962622e636f2f67364459444d482f73637265656e73686f74342e706e67",
    techStack: ["react", "nodejs", "redis", "vite"],
    liveUrl: "https://github.com/AtulYadav25/genesis-prompt",
    codeUrl: "https://github.com/AtulYadav25",
  },
];
