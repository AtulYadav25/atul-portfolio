import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
}

export function GitHubActivity() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);

  useEffect(() => {
    // Generate mock data for GitHub activity (52 weeks)
    const mockData: ContributionDay[] = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      mockData.push({
        date: date.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 10),
      });
    }
    setContributions(mockData);
  }, []);

  const getIntensity = (count: number) => {
    if (count === 0) return "bg-muted/50";
    if (count <= 3) return "bg-[#0e4429] dark:bg-[#0e4429]";
    if (count <= 6) return "bg-[#006d32] dark:bg-[#006d32]";
    if (count <= 8) return "bg-[#26a641] dark:bg-[#26a641]";
    return "bg-[#39d353] dark:bg-[#39d353]";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.001,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="mx-auto max-w-[980px] px-4 py-12 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          GitHub Activity
        </h2>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Recent GitHub activity — consistent commits & OSS contributions
        </p>

        <div className="overflow-x-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-grid grid-flow-col grid-rows-7 gap-1 sm:gap-1.5"
          >
            {contributions.map((day, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`h-2.5 w-2.5 rounded-[2px] border border-border/20 ${getIntensity(day.count)} sm:h-3 sm:w-3`}
                title={`${day.date}: ${day.count} contributions`}
                aria-label={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
