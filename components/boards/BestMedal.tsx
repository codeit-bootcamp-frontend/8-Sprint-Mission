import Image from 'next/image';

function BestMedal() {
  return (
    <div className="flex h-[32px] w-[102px] items-center justify-center gap-[5px] rounded-b-[16px] bg-primary-100">
      <Image width={16} height={16} src="/yellow_medal.png" alt="best" />
      <span className="text-white font-lg-16px-semibold">Best</span>
    </div>
  );
}

export default BestMedal;
