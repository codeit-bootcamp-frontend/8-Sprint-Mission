import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

type Props = {
  value: Blob | MediaSource | null;
  name: string;
  onChange: (name: string, file: File | null) => void;
};

function FileInput({ value, name, onChange }: Props) {
  const [preview, setPreview] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const nextFile = e.target.files[0];
      onChange(name, nextFile);
    }
  };

  const handleFileInputCancel = () => {
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview('');
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="flex gap-[10px]">
      <label
        htmlFor="image"
        className="flex h-[168px] w-[168px] cursor-pointer flex-col items-center justify-center rounded-[8px] bg-secondary-100 py-[6px] placeholder:font-lg-16px-regular desktop:h-[282px] desktop:w-[282px]"
      >
        <Image
          width={48}
          height={48}
          src="/icon/plus.png"
          alt="file input button"
        />
        <p className="text-secondary-400 font-lg-16px-regular">이미지 등록</p>
      </label>
      {preview && (
        <div className="relative h-[168px] w-[168px] desktop:h-[282px] desktop:w-[282px]">
          <Image className="bg-cover" fill src={preview} alt="preview" />
          <Image
            className="absolute right-3 top-3"
            width={22}
            height={24}
            onClick={handleFileInputCancel}
            src="/icon/blue_X.png"
            alt="cancel"
          />
        </div>
      )}
      <input
        className="hidden"
        ref={fileInputRef}
        id="image"
        name="image"
        type="file"
        onChange={handleFileInputChange}
      />
    </div>
  );
}

export default FileInput;
