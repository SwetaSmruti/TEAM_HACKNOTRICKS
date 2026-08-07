import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { benefits } from '@/services/mockData';
import * as Icons from 'lucide-react';

export function Benefits() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-md mx-auto">
        <SectionHeading
          eyebrow="Why It Works"
          title="What You Gain in 60 Days"
          subtitle="This is not just a challenge. It is a career accelerator."
        />
        <div className="grid grid-cols-1 gap-3">
          {benefits.map((benefit, i) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 items-start bg-surface border border-border rounded-2xl p-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Icon size={20} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text font-display">{benefit.title}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
