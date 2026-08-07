import { motion } from 'framer-motion';
import { Clock, Calendar, Tag, CheckCircle2, Circle, ExternalLink, Lightbulb, Target, Package, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { ChallengeDay } from '@/types';

const difficultyTone = {
  Easy: 'success',
  Medium: 'warning',
  Hard: 'danger',
} as const;

export function ChallengeHeader({ challenge }: { challenge: ChallengeDay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-primary/15 via-surface to-surface border border-primary/30 p-5"
    >
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/20 rounded-full blur-[70px]" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">
            Day {challenge.day}
          </span>
          <Badge tone="primary">
            <Tag size={10} /> {challenge.category}
          </Badge>
        </div>

        <h1 className="text-2xl font-bold text-text font-display leading-tight mb-4">
          {challenge.title}
        </h1>

        <div className="flex items-center gap-3 flex-wrap">
          <Badge tone={difficultyTone[challenge.difficulty]}>{challenge.difficulty}</Badge>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <Clock size={14} /> {challenge.estimatedTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <Calendar size={14} /> Today
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ChallengeDescription({ challenge }: { challenge: ChallengeDay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-5"
    >
      <div className="bg-surface border border-border rounded-[24px] p-5">
        <p className="text-sm text-text leading-relaxed">{challenge.description}</p>
      </div>

      <Section icon={<Target size={18} className="text-primary-400" />} title="Learning Objectives">
        <ul className="space-y-2.5">
          {challenge.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
              <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<Package size={18} className="text-accent-400" />} title="Deliverables">
        <ul className="space-y-2.5">
          {challenge.deliverables.map((d, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0 mt-2" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<Code2 size={18} className="text-success" />} title="Requirements">
        <ul className="space-y-2.5">
          {challenge.requirements.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
              <Circle size={14} className="text-muted-2 flex-shrink-0 mt-1" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section icon={<ExternalLink size={18} className="text-primary-400" />} title="Helpful Resources">
        <div className="space-y-2">
          {challenge.resources.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 bg-surface-2 border border-border rounded-xl px-4 py-3 hover:border-primary/40 transition-colors group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs font-medium text-primary-400 uppercase">{res.type}</span>
                <span className="text-sm text-text truncate">{res.title}</span>
              </div>
              <ExternalLink size={14} className="text-muted-2 group-hover:text-primary-400 flex-shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      </Section>

      <Section icon={<Lightbulb size={18} className="text-warning" />} title="Tips">
        <div className="space-y-2.5">
          {challenge.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-warning/5 border border-warning/20 rounded-xl px-3 py-2.5">
              <Lightbulb size={14} className="text-warning flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted">{tip}</span>
            </div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface border border-border rounded-[24px] p-5">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-base font-bold text-text font-display">{title}</h3>
      </div>
      {children}
    </div>
  );
}
