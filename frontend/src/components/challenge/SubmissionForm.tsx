import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Link2, Image, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { submitChallenge } from '@/services/api';
import { SuccessModal } from './SuccessModal';

interface SubmissionFormProps {
  day: number;
  xpReward: number;
  alreadySubmitted: boolean;
}

export function SubmissionForm({ day, xpReward, alreadySubmitted }: SubmissionFormProps) {
  const [form, setForm] = useState({
    githubRepo: '',
    githubCommit: '',
    linkedinPost: '',
    reflection: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState<{ xpEarned: number; newStreak: number; message: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.githubRepo.trim()) e.githubRepo = 'GitHub repo URL is required';
    else if (!form.githubRepo.includes('github.com')) e.githubRepo = 'Enter a valid GitHub URL';
    if (!form.githubCommit.trim()) e.githubCommit = 'Commit URL is required';
    if (!form.linkedinPost.trim()) e.linkedinPost = 'LinkedIn post URL is required';
    else if (!form.linkedinPost.includes('linkedin.com')) e.linkedinPost = 'Enter a valid LinkedIn URL';
    if (!form.reflection.trim()) e.reflection = 'Please write a reflection';
    else if (form.reflection.trim().length < 20) e.reflection = 'Reflection must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await submitChallenge({ day, ...form });
      setResult({ xpEarned: res.xpEarned, newStreak: res.newStreak, message: res.message });
      setSuccess(true);
    } catch {
      setErrors({ form: 'Submission failed. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (alreadySubmitted && !success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-surface border border-success/30 rounded-[24px] p-6 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-success/15 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={28} className="text-success" />
        </div>
        <h3 className="text-lg font-bold text-text font-display mb-2">Already Submitted!</h3>
        <p className="text-sm text-muted mb-5">
          You have completed Day {day}. Come back tomorrow for the next challenge.
        </p>
        <Button variant="secondary" fullWidth onClick={() => (window.location.hash = '#/dashboard')}>
          Back to Dashboard
        </Button>
      </motion.div>
    );
  }

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        onSubmit={handleSubmit}
        className="bg-surface border border-border rounded-[24px] p-5 space-y-4"
      >
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-text font-display">Submit Your Work</h3>
          <span className="text-xs text-primary-400 font-semibold">+{xpReward} XP</span>
        </div>

        <FormField
          label="GitHub Repository URL"
          icon={<GitBranch size={16} className="text-muted" />}
          placeholder="https://github.com/username/repo"
          value={form.githubRepo}
          onChange={(v) => setForm({ ...form, githubRepo: v })}
          error={errors.githubRepo}
        />

        <FormField
          label="GitHub Commit URL"
          icon={<GitBranch size={16} className="text-muted" />}
          placeholder="https://github.com/username/repo/commit/..."
          value={form.githubCommit}
          onChange={(v) => setForm({ ...form, githubCommit: v })}
          error={errors.githubCommit}
        />

        <FormField
          label="LinkedIn Post URL"
          icon={<Link2 size={16} className="text-muted" />}
          placeholder="https://linkedin.com/posts/..."
          value={form.linkedinPost}
          onChange={(v) => setForm({ ...form, linkedinPost: v })}
          error={errors.linkedinPost}
        />

        <div>
          <label className="text-sm font-medium text-text mb-1.5 block">Daily Reflection</label>
          <textarea
            value={form.reflection}
            onChange={(e) => setForm({ ...form, reflection: e.target.value })}
            placeholder="What did you learn today? What challenged you? How will you improve tomorrow?"
            rows={4}
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted-2 focus:border-primary/50 transition-colors resize-none"
            aria-label="Daily reflection"
          />
          {errors.reflection && <p className="text-xs text-danger mt-1">{errors.reflection}</p>}
          <p className="text-[10px] text-muted-2 mt-1">{form.reflection.length} characters</p>
        </div>

        <div>
          <label className="text-sm font-medium text-text mb-1.5 block">Screenshot (Optional)</label>
          <div className="border-2 border-dashed border-border rounded-xl p-5 text-center hover:border-primary/40 transition-colors cursor-pointer">
            <Image size={24} className="text-muted-2 mx-auto mb-2" />
            <p className="text-xs text-muted">Tap to upload a screenshot</p>
            <p className="text-[10px] text-muted-2 mt-1">PNG, JPG up to 5MB</p>
          </div>
        </div>

        {errors.form && (
          <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-xl px-3 py-2">{errors.form}</p>
        )}

        <Button type="submit" size="lg" fullWidth loading={submitting}>
          {submitting ? 'Submitting...' : 'Submit Challenge'}
          {!submitting && <Send size={18} />}
        </Button>
      </motion.form>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
        result={result}
        day={day}
      />
    </>
  );
}

function FormField({
  label,
  icon,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-text mb-1.5 block">{label}</label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2">{icon}</div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-surface-2 border rounded-xl pl-11 pr-4 py-3 text-sm text-text placeholder:text-muted-2 focus:border-primary/50 transition-colors ${
            error ? 'border-danger/50' : 'border-border'
          }`}
          aria-label={label}
        />
      </div>
      {error && <p className="text-xs text-danger mt-1">{error}</p>}
    </div>
  );
}
