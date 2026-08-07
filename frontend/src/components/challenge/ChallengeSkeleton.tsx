import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';

export function ChallengeSkeleton() {
  return (
    <div className="px-4 py-6 space-y-4">
      <Skeleton className="w-8 h-8 rounded-lg" />
      <Skeleton className="h-40 w-full rounded-[24px]" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-48 w-full rounded-[24px]" />
    </div>
  );
}
