import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/services/mockData';

export function Testimonials() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-md mx-auto">
        <SectionHeading
          eyebrow="Success Stories"
          title="Students Who Made It"
          subtitle="Real outcomes from students who committed to 60 days."
          center
        />
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-surface border border-border rounded-2xl p-5"
            >
              <Quote size={28} className="absolute top-4 right-4 text-primary/20" />
              <p className="text-sm text-text leading-relaxed pr-8">{t.text}</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-text">{t.name}</p>
                  <p className="text-xs text-success">{t.role}</p>
                </div>
                <span className="text-xs text-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  {t.xp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
