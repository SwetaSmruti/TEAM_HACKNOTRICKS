import { forwardRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref' | 'children'> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/30',
  secondary: 'bg-surface-2 text-text hover:bg-surface-3 border border-border',
  ghost: 'bg-transparent text-muted hover:text-text hover:bg-white/5',
  success: 'bg-success text-white hover:brightness-110 shadow-lg shadow-success/30',
  danger: 'bg-danger text-white hover:brightness-110',
  outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
};

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm rounded-xl gap-1.5',
  md: 'px-5 py-3 text-sm rounded-2xl gap-2',
  lg: 'px-6 py-4 text-base rounded-2xl gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, loading, className = '', children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        disabled={disabled || loading}
        className={`inline-flex items-center justify-center font-semibold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none select-none ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
