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
    <>
      <label htmlFor="image-file">
        <Image
          width={48}
          height={48}
          src="/icon/plus.png"
          alt="file input button"
        />
        <p>이미지 등록</p>
      </label>
      {preview && (
        <div>
          <Image
            className=""
            width={282}
            height={282}
            src={preview}
            alt="preview"
          />
          <Image
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
        id="image-file"
        name="image"
        type="file"
        onChange={handleFileInputChange}
      />
    </>
  );
}

export default FileInput;
