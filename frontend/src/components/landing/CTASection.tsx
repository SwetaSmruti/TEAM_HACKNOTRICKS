import { motion } from "framer-motion";
import { ArrowRight, Flame, GitBranch, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/Button";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-md overflow-hidden rounded-[28px] border border-primary/30 bg-gradient-to-br from-primary/20 via-surface to-accent/15 p-8 text-center"
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/30 blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">
            <Flame size={14} className="text-warning" />
            <span className="text-xs font-medium text-text">
              Day 1 starts today
            </span>
          </div>

          <h2 className="font-display text-3xl font-bold leading-tight text-text">
            Your future self
            <br />
            will thank you
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted">
            60 days from now, you'll have a portfolio, a coding streak, and a
            habit that can transform your career.
          </p>

          <div className="mt-7">
            <Button
              size="lg"
              fullWidth
              onClick={() => navigate("/dashboard")}
            >
              Commit Now — It's Free
              <ArrowRight size={20} />
            </Button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-5 text-xs text-muted-2">
            <span className="flex items-center gap-1.5">
              <GitBranch size={14} />
              GitHub
            </span>

            <span className="flex items-center gap-1.5">
              <Link2 size={14} />
              LinkedIn
            </span>

            <span className="flex items-center gap-1.5">
              <Flame size={14} />
              Streaks
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}