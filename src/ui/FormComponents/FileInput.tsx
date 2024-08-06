import {
  MouseEvent,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  InputHTMLAttributes,
} from "react";
import styles from "./FileInput.module.css";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value?: string | number | readonly string[];
  previewImg?: string | null;
  changeValue: (name: string, value: File | null) => void;
  className?: string;
}

export default function FileInput({
  id,
  name,
  previewImg,
  changeValue,
  value,
  className,
  ...props
}: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imgValue = e.target.files?.[0] || null;
    setFile(imgValue);
    changeValue(name, imgValue);
  };

  const handleRemoveImage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const imgInputNode = imgInputRef.current;
    if (!imgInputNode) return;

    setFile((prev) => (prev = null));
    changeValue(name, null);
  };

  useEffect(() => {
    if (!file) return;
    const nextPreviewImg = URL.createObjectURL(file);
    console.log(nextPreviewImg);
    setPreview(nextPreviewImg);
    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreviewImg);
    };
  }, [file]);

  return (
    <div className={styles.previewImgContainer}>
      <label htmlFor={id} className={styles.fileLabel}>
        <span>이미지 등록</span>
      </label>
      <input
        className={styles.fileInput}
        id={id}
        {...props}
        ref={imgInputRef}
        onChange={handleChange}
      />
      {preview && (
        <div className={styles.previewImg}>
          <img src={preview} alt="이미지 미리보기" />
          <button className={styles.imgRemoveBtn} onClick={handleRemoveImage} />
        </div>
      )}
    </div>
  );
}
