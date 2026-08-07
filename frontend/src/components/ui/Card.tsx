import { type HTMLAttributes, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, hover, glow, className = '', ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -3 } : undefined}
      className={`bg-surface border border-border rounded-[var(--radius-card)] ${glow ? 'shadow-[var(--shadow-glow)]' : 'shadow-[var(--shadow-soft)]'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className = '', ...props }: SkeletonProps) {
  return <div className={`skeleton rounded-xl ${className}`} {...props} />;
}
