import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export function GitHubActivity() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const username = "AtulYadav25";
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        const data = await response.json();
        
        // Transform the API response to our format
        const contributionData: ContributionDay[] = [];
        let total = 0;
        data.contributions.forEach((contribution: any) => {
          contributionData.push({
            date: contribution.date,
            count: contribution.count,
            level: contribution.level,
          });
          total += contribution.count;
        });
        
        setContributions(contributionData);
        setTotalContributions(total);
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
        // Fallback to empty array on error
        setContributions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getMonthLabels = () => {
    const months: { label: string; offset: number }[] = [];
    const today = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const monthLabel = date.toLocaleDateString('en-US', { month: 'short' });
      // Calculate approximate week offset (each month is roughly 4.3 weeks)
      const weekOffset = (11 - i) * 4.3;
      months.push({ label: monthLabel, offset: weekOffset });
    }
    
    return months;
  };

  const getIntensity = (level: number) => {
    if (level === 0) return "bg-muted/50";
    if (level === 1) return "bg-[#0e4429] dark:bg-[#0e4429]";
    if (level === 2) return "bg-[#006d32] dark:bg-[#006d32]";
    if (level === 3) return "bg-[#26a641] dark:bg-[#26a641]";
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
        className="w-full"
      >
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          GitHub Activity
        </h2>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          {loading ? (
            "Loading activity..."
          ) : contributions.length > 0 ? (
            `${totalContributions} contributions in the last year`
          ) : (
            "Unable to load GitHub activity"
          )}
        </p>

        {!loading && contributions.length > 0 && (
          <div className="flex justify-center">
            <div className="inline-block">
              {/* Month labels */}
              <div className="mb-2 flex gap-1 pl-8 text-xs text-muted-foreground sm:gap-1.5">
                {getMonthLabels().map((month, index) => (
                  <div
                    key={index}
                    className="w-[10px] sm:w-[12px]"
                    style={{ marginLeft: index === 0 ? '0' : `${month.offset * 2.5}px` }}
                  >
                    {month.label}
                  </div>
                ))}
              </div>

              {/* Contribution grid */}
              <div className="flex gap-2">
                {/* Day labels */}
                <div className="flex flex-col justify-around text-xs text-muted-foreground">
                  <div>Mon</div>
                  <div>Wed</div>
                  <div>Fri</div>
                </div>

                {/* Grid */}
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
                      className={`h-2.5 w-2.5 rounded-[2px] border border-border/20 ${getIntensity(day.level)} sm:h-3 sm:w-3`}
                      title={`${day.date}: ${day.count} contributions`}
                      aria-label={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Legend */}
              <div className="mt-4 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="h-2.5 w-2.5 rounded-[2px] border border-border/20 bg-muted/50 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-[2px] border border-border/20 bg-[#0e4429] sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-[2px] border border-border/20 bg-[#006d32] sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-[2px] border border-border/20 bg-[#26a641] sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-[2px] border border-border/20 bg-[#39d353] sm:h-3 sm:w-3" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
