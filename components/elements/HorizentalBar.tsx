import cn from '@/lib/utils';
import React from 'react';

function HorizentalBar({ className }: { className?: string }) {
  return <div className={cn('h-full w-[1px] bg-secondary-200', className)} />;
}

export default HorizentalBar;
