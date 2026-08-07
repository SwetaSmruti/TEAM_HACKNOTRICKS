import { motion } from "framer-motion";
import { ArrowRight, Flame, GitBranch, Link2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { landingStats } from "@/services/mockData";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 mb-6"
        >
          <Sparkles size={14} className="text-primary-400" />
          <span className="text-xs font-medium text-muted">
            60-Day Coding Challenge
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight"
        >
          One Commit.
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
            One LinkedIn Post.
          </span>
          <br />
          Every Day.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg leading-relaxed text-muted"
        >
          Build consistency. Become recruiter-ready. Join 12,000+ Indian
          students shipping code every single day for 60 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3"
        >
          <Button
            size="lg"
            fullWidth
            onClick={() => navigate("/dashboard")}
          >
            Start the Challenge
            <ArrowRight size={20} />
          </Button>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-2">
            <span className="flex items-center gap-1.5">
              <GitBranch size={14} />
              60 commits
            </span>

            <span className="h-1 w-1 rounded-full bg-muted-2" />

            <span className="flex items-center gap-1.5">
              <Link2 size={14} />
              60 posts
            </span>

            <span className="h-1 w-1 rounded-full bg-muted-2" />

            <span className="flex items-center gap-1.5">
              <Flame size={14} />
              60 days
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-3"
        >
          {landingStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-2xl border border-border bg-surface/60 p-4 ${
                i % 2 === 1 ? "text-right" : ""
              }`}
            >
              <p className="font-display text-2xl font-bold bg-gradient-to-r from-text to-primary-300 bg-clip-text text-transparent">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}