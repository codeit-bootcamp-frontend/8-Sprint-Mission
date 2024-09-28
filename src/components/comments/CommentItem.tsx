import ImageCard from '@core/ui/cards/ImageCard';

interface CommentItemProps {
  profileImageSrc: string;
  nickname: string;
  content: string;
  updatedAt: string;
}

export default function CommentItem({
  profileImageSrc,
  nickname = 'nickname',
  content = 'content',
  updatedAt = '0시간 전',
}: CommentItemProps) {
  return (
    <div className="flex flex-col w-full justify-center items-start">
      <p className="w-full text-base font-normal leading-[140%] text-gray-800">
        {content}
      </p>
      <div className="flex mt-6">
        <div className="w-10 h-10">
          <ImageCard
            imageSrc={profileImageSrc}
            imgDefault={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYO97QZyLAUdjVTXl8n2tzoce2lBmZMBf1g&s'
            }
            isRound={true}
          />
        </div>
        <div className="ml-2">
          <div className="mb-1 text-sm font-normal text-gray-600">
            {nickname}
          </div>
          <div className="text-xs font-normal text-gray-400">{updatedAt}</div>
        </div>
      </div>
    </div>
  );
}
