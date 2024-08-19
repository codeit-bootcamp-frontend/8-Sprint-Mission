import Image from 'next/image';
import router from 'next/router';
import Button from './button/Button';

type Props = {
  className?: string;
};

function BackLinkButton({ className = '' }: Props) {
  const handleButtonClick = () => {
    router.back();
  };

  return (
    <Button onClick={handleButtonClick} className={className}>
      목록으로 돌아가기{' '}
      <Image
        width={24}
        height={24}
        src="/icon/arrow_turn_back.png"
        alt="turn_back"
      />
    </Button>
  );
}

export default BackLinkButton;
