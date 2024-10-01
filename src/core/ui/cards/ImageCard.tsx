import errImg from '@assets/images/image/img_default.png';

interface ImageCardProps {
  imageSrc: string;
  imgDefault?: string;
  round: 'edge' | 'round' | 'flat';
}

function ImageCard({ imageSrc, imgDefault, round = 'flat' }: ImageCardProps) {
  return (
    <div className="w-full h-full">
      <img
        src={imageSrc || imgDefault}
        className={`w-full h-full object-cover
          ${round === 'edge' ? 'rounded-2xl' : ''}
          ${round === 'round' ? 'rounded-full' : ''}
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
