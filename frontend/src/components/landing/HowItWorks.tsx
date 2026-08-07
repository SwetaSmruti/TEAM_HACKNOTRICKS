import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { howItWorks } from '@/services/mockData';
import * as Icons from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-md mx-auto">
        <SectionHeading
          eyebrow="How It Works"
          title="Four Steps. Every Day."
          subtitle="Simple to follow. Hard to skip. That is the point."
        />
        <div className="space-y-4">
          {howItWorks.map((step, i) => {
            const Icon = Icons[step.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                  <Icon size={22} className="text-primary-400" />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-muted-2">{step.step}</span>
                    <h3 className="text-base font-bold text-text font-display">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
