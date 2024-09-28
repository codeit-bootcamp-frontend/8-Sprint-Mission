import errImg from '@assets/images/image/img_default.png';

interface ImageCardProps {
  imageSrc: string;
  imgDefault?: string;
  isRoundEdged?: boolean;
  isRound?: boolean;
}

function ImageCard({
  imageSrc,
  imgDefault,
  isRoundEdged = false,
  isRound = false,
}: ImageCardProps) {
  return (
    <div className="w-full h-full">
      <img
        src={imageSrc || imgDefault}
        className={`w-full h-full object-cover
          ${isRoundEdged ? 'rounded-2xl' : ''}
          ${isRound ? 'rounded-full' : ''}
        `}
        alt="상품 사진"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = errImg.src;
        }}
      />
    </div>
  );
}

export default ImageCard;
