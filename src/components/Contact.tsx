import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AtulYadav25",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/atulyadav25",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/atulcode",
      color: "hover:text-foreground",
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="contact" className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">
          Contact me
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 flex justify-center gap-6"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              variants={item}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground transition-colors ${social.color}`}
              aria-label={social.name}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-8 w-8" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="mb-6 text-sm text-muted-foreground">
            Prefer connecting on GitHub/LinkedIn — or click the button to email me
          </p>
          <Button size="lg" asChild>
            <a
              href="mailto:atulyadav@example.com"
              className="inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Send me an email
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
