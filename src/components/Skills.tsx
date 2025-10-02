import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["html", "css", "javascript", "tailwindcss", "react", "nextjs", "vite", "typescript"],
  },
  {
    title: "Backend",
    skills: ["nextjs", "nodejs"],
  },
  {
    title: "Database",
    skills: ["redis", "mongodb", "postgresql", "supabase", "firebase", "expressjs"],
  },
  {
    title: "Tools",
    skills: ["git", "docker", "photoshop", "postman"],
  },
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Skills
        </h2>

        <div className="grid gap-12 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-4 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill}`}
                        alt={skill}
                        className="h-full w-full object-cover"
                        title={skill}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground capitalize">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
