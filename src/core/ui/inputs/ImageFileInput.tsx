import { useEffect, useRef, useState } from 'react';
import ImgDeafault from '@assets/images/image/img_default.png';
import { cn } from '@/lib/utils';

interface ImageFileInputProps {
  className?: string;
  name: string;
  value: Blob | MediaSource;
  initialPreview: string;
  onChange: (name: string, value: any) => void;
}

function ImageFileInput({
  className = '',
  name,
  value,
  initialPreview,
  onChange,
}: ImageFileInputProps) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0] || null;
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className={cn('flex justify-start items-center', className)}>
      <label
        htmlFor="input-image-file"
        className={cn(
          'inline-flex justify-center items-center w-[168px] h-[168px] mr-2 rounded-xl bg-gray-100 md:w-[162px] md:h-[162px] md:mr-4 xl:w-[282px] xl:h-[282px] xl:mr-6',
          className
        )}
      >
        <div className="inline-flex flex-col items-center">
          <div className="text-gray-400 text-base font-normal leading-6">
            이미지 등록
          </div>
        </div>
      </label>
      <input
        className="hidden"
        type="file"
        id="input-image-file"
        name="imgFile"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <>
          <div
            className={
              'inline-flex justify-center items-center w-[168px] h-[168px] mr-2 rounded-xl bg-gray-100 md:w-[162px] md:h-[162px] md:mr-4 xl:w-[282px] xl:h-[282px] xl:mr-6'
            }
          >
            <img
              src={(preview || ImgDeafault) as string}
              className="w-full h-full rounded-xl"
              alt="상품 미리보기"
            />
          </div>
          <button
            className={
              'relative -top-[60px] -left-[40px] opacity-70 hover:opacity-100 focus:opacity-100 md:-top-[60px] md:-left-[45px] xl:-top-[110px] xl:-left-[60px]'
            }
            onClick={handleClearClick}
          />
        </>
      )}
    </div>
  );
}

export default ImageFileInput;
