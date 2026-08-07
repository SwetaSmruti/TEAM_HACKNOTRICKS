import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Flame, ArrowRight, PartyPopper } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  result: { xpEarned: number; newStreak: number; message: string } | null;
  day: number;
}

export function SuccessModal({ open, onClose, result, day }: SuccessModalProps) {
  const navigate = useNavigate();

  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-center pt-2">
        {/* Confetti burst */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-br from-success to-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-success/30"
        >
          <PartyPopper size={36} className="text-white" />
        </motion.div>

        {/* Animated rings */}
        <div className="relative">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
            >
              <div className="w-20 h-20 rounded-3xl border-2 border-success/30" />
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-text font-display mb-2"
        >
          Day {day} Complete!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-muted mb-6"
        >
          {result?.message}
        </motion.p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-primary/10 border border-primary/30 rounded-2xl p-4"
          >
            <Zap size={22} className="text-primary-400 mx-auto mb-1" />
            <p className="text-2xl font-bold text-text font-display">+{result?.xpEarned}</p>
            <p className="text-xs text-muted">XP Earned</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-warning/10 border border-warning/30 rounded-2xl p-4"
          >
            <Flame size={22} className="text-warning mx-auto mb-1" />
            <p className="text-2xl font-bold text-text font-display">{result?.newStreak}</p>
            <p className="text-xs text-muted">Day Streak</p>
          </motion.div>
        </div>

        <Button size="lg" fullWidth onClick={() => navigate('/dashboard')}>
          Continue Tomorrow
          <ArrowRight size={20} />
        </Button>
      </div>
    </Modal>
  );
}
