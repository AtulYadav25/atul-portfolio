import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = ["Next.js", "React", "Node", "MongoDB", "Redis", "TypeScript"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="mx-auto max-w-[980px] px-4 py-20 sm:px-6 sm:py-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.h1
          variants={item}
          className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi — I'm Atul.
          <br />
          <span className="text-foreground">
            I build reliable, beautiful full-stack web apps.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          I'm a Full-Stack Developer specializing in modern web apps with Next.js, Tailwind,
          and scalable backends. I build production-ready products that ship fast and scale
          well — from clean UI to robust APIs.
        </motion.p>

        <motion.div
          variants={item}
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground sm:px-4 sm:py-1.5 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Connect with me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
