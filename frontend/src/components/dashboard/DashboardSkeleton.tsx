import { motion } from 'framer-motion';
import { Card, Skeleton } from '@/components/ui/Card';

export function DashboardSkeleton() {
  return (
    <div className="px-4 py-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-[24px]" />
      <Skeleton className="h-40 w-full rounded-[24px]" />
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-32 rounded-[24px]" />
        <Skeleton className="h-32 rounded-[24px]" />
      </div>
      <Skeleton className="h-64 w-full rounded-[24px]" />
      <Skeleton className="h-48 w-full rounded-[24px]" />
      <Skeleton className="h-40 w-full rounded-[24px]" />
    </div>
  );
}
