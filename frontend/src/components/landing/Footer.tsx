import { GitBranch, Link2, Heart, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 px-5 py-10">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">AB</span>
            </div>
            <span className="font-bold text-text font-display">ABTalks</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted hover:text-text hover:bg-white/10 transition-colors">
              <GitBranch size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted hover:text-text hover:bg-white/10 transition-colors">
              <Link2 size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted hover:text-text hover:bg-white/10 transition-colors">
              <Send size={16} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p className="text-muted-2 text-xs font-semibold uppercase mb-2">Challenge</p>
            <ul className="space-y-1.5">
              <li><a href="#how" className="text-muted hover:text-text transition-colors">How it works</a></li>
              <li><a href="#timeline" className="text-muted hover:text-text transition-colors">Timeline</a></li>
              <li><a href="#benefits" className="text-muted hover:text-text transition-colors">Benefits</a></li>
            </ul>
          </div>
          <div>
            <p className="text-muted-2 text-xs font-semibold uppercase mb-2">Community</p>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-muted hover:text-text transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-muted hover:text-text transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted hover:text-text transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-border flex items-center justify-center gap-1.5 text-xs text-muted-2">
          <span>Built with</span>
          <Heart size={12} className="text-danger fill-danger" />
          <span>for Indian students</span>
        </div>
      </div>
    </footer>
  );
}
