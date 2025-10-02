import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
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
    <section id="projects" className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Projects
        </h2>
        <p className="mb-12 text-center text-muted-foreground">Selected work</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex -space-x-2">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background transition-transform hover:scale-110 hover:z-10"
                        title={tech}
                      >
                        <img
                          src={`https://skillicons.dev/icons?i=${tech}`}
                          alt={tech}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 p-6 pt-0">
                  {project.liveUrl && (
                    <Button size="sm" variant="default" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View live
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
