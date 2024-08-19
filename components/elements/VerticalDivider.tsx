import cn from '@/lib/utils';

type Props = {
  className?: string;
};
function VerticalDivider({ className }: Props) {
  return <div className={cn('h-[1px] w-full bg-[#DFDFDF]', className)} />;
}

export default VerticalDivider;
