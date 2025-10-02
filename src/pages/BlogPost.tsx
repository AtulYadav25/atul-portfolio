import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <>
        <BackgroundEffects />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground">
              Blog post not found
            </h1>
            <Button asChild>
              <Link to="/blog">Back to blog</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BackgroundEffects />
      <main className="min-h-screen">
        <div className="mx-auto max-w-[980px] px-4 py-8 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-8"
            >
              <Link to="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Button>

            <article className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
              <header className="mb-8 not-prose">
                <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
                  {blog.title}
                </h1>
                <p className="mb-4 text-lg text-muted-foreground">
                  {blog.subtitle}
                </p>
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
              </header>

              <div className="text-foreground">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="mb-4 text-3xl font-bold text-foreground">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mb-3 mt-8 text-2xl font-semibold text-foreground">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mb-2 mt-6 text-xl font-semibold text-foreground">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="mb-4 leading-7 text-foreground">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-4 ml-6 list-disc text-foreground">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="mb-2">{children}</li>
                    ),
                    code: ({ inline, children, ...props }: any) =>
                      inline ? (
                        <code
                          className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground"
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <code
                          className="block rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto"
                          {...props}
                        >
                          {children}
                        </code>
                      ),
                    pre: ({ children }) => (
                      <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>
            </article>
          </motion.div>
        </div>
      </main>
    </>
  );
}
