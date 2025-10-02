import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Blog() {
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
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
              Blog
            </h1>
            <p className="mb-12 text-center text-muted-foreground">
              Thoughts on web development, tech, and building products
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {blogs.map((blog) => (
                <motion.div key={blog.slug} variants={item} whileHover={{ x: 8 }}>
                  <Link to={`/blog/${blog.slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h2 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
                              {blog.title}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              {blog.subtitle}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={blog.date}>
                            {new Date(blog.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
