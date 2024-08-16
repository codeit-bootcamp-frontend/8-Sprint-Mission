import { useEffect, useRef, useState, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import styles from "./FileInput.module.scss";
import inputImg from "@/public/img/product/sample2.png";
import Icon from "@/components/ui/Icon";

// Props 타입 정의
interface FileInputProps {
  label: string;
  name: string;
  value: File | null; // File 객체 또는 null
  onChange: (name: string, file: File | null) => void; // 파일 변경 시 호출되는 콜백 함수
}

function FileInput({ label, name, value, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string>(
    value ? URL.createObjectURL(value) : inputImg
  );
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(!!value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      onChange(name, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setPreview(reader.result as string);
          setIsBoxVisible(true);
        }
      };
      reader.readAsDataURL(file);
    } else {
      onChange(name, null);
      setPreview(inputImg);
      setIsBoxVisible(false);
    }
  };

  const handleImageError = () => {
    setPreview(inputImg);
  };

  useEffect(() => {
    if (value) {
      setPreview(URL.createObjectURL(value));
      setIsBoxVisible(true);
    } else {
      setPreview(inputImg);
      setIsBoxVisible(false);
    }
  }, [value]);

  return (
    <div className="input-group">
      <label className={styles["input-label"]}>{label}</label>
      <div className={styles["image-add-wrap"]}>
        <label
          className={styles["image-add-btn"]}
          aria-label="이미지 등록 버튼"
        >
          <input
            ref={inputRef}
            name={name}
            className="sr-only"
            type="file"
            onChange={handleChange}
            accept="image/jpeg,image/png"
          />
          <Icon type="plus" size="lg" />
          <span>이미지 등록</span>
        </label>
        {isBoxVisible && (
          <div className={styles["image-add-box"]}>
            <Image src={preview} alt="상품 이미지" onError={handleImageError} />
            <Icon type="remove" size="md" alt="이미지 제거 버튼" />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileInput;
