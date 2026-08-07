import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { timeline } from '@/services/mockData';
import * as Icons from 'lucide-react';

export function Timeline() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-md mx-auto">
        <SectionHeading
          eyebrow="The Journey"
          title="Your 60-Day Roadmap"
          subtitle="A structured path from foundations to full-stack. Every week builds on the last."
        />
        <div className="relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((item, i) => {
            const Icon = Icons[item.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                <div className="absolute -left-8 top-1 w-7 h-7 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
                  <Icon size={14} className="text-primary-400" />
                </div>
                <div className="bg-surface border border-border rounded-2xl p-4">
                  <span className="text-xs font-semibold text-primary-400">{item.phase}</span>
                  <h3 className="text-base font-bold text-text mt-1 font-display">{item.title}</h3>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
