import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, RefreshCw } from 'lucide-react';

interface CoachMessage {
  role: 'user' | 'coach';
  content: string;
}

const coachResponses = [
  "That is a great reflection. The fact that you noticed the pattern of over-engineering shows real growth. Next time, try timeboxing your first version to 45 minutes.",
  "I love how honest this is. Struggling with async is universal. You are not behind — you are exactly where you should be. Tomorrow, try one small promise-based example before the challenge.",
  "Consistency over intensity. You showed up on a low-motivation day, and that is what builds the habit. Your future self will remember days like this more than the easy ones.",
  "Reflecting on what went wrong is just as valuable as celebrating wins. You debugged for 2 hours — that is not failure, that is learning. Add it to your LinkedIn post. Recruiters love honesty.",
  "You are building self-awareness as a developer. That is rare. Most students only share wins. Your authentic reflections will make your LinkedIn stand out to recruiters.",
];

export function AIReflectionCoach() {
  const [messages, setMessages] = useState<CoachMessage[]>([
    {
      role: 'coach',
      content: "Hi! I am your AI Reflection Coach. Share what you learned today, what challenged you, or how you are feeling about the challenge. I will help you grow from it.",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: CoachMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = coachResponses[messages.length % coachResponses.length];
      setMessages((prev) => [...prev, { role: 'coach', content: response }]);
      setTyping(false);
    }, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-primary/10 via-surface to-surface border border-primary/30 rounded-[24px] p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <h3 className="text-base font-bold text-text font-display">AI Reflection Coach</h3>
          <p className="text-[10px] text-primary-400">Premium Feature</p>
        </div>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto no-scrollbar mb-3">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-md'
                  : 'bg-surface-2 text-text rounded-bl-md border border-border'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-surface-2 border border-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-muted"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Share your reflection..."
          className="flex-1 bg-surface-2 border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-muted-2 focus:border-primary/50 transition-colors"
          aria-label="Reflection input"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="w-11 h-11 flex-shrink-0 rounded-xl bg-primary flex items-center justify-center text-white disabled:opacity-40 hover:bg-primary-600 transition-colors"
          aria-label="Send reflection"
        >
          <Send size={16} />
        </button>
      </div>
    </motion.div>
  );
}
