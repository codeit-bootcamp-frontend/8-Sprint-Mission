import { useState, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./FileInput.module.scss";
import Icon from "@/components/ui/Icon";

// Props 타입 정의
interface FileInputProps {
  label: string;
  name: string;
  value: File | null; // File 객체 또는 null
  onChange: (name: string, file: File | null) => void; // 파일 변경 시 호출되는 콜백 함수
}

function FileInput({ label, name, value, onChange }: FileInputProps) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleDelete = () => {
    setImagePreviewUrl("");
  };

  return (
    <div className="input-group">
      <label className={styles["input-label"]}>{label}</label>
      <div className={styles["image-add-wrap"]}>
        <label
          className={styles["image-add-btn"]}
          aria-label="이미지 등록 버튼"
        >
          <input
            id="image-upload"
            className="sr-only"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
          <Icon type="plus" size="lg" />
          <span>이미지 등록</span>
        </label>
        {imagePreviewUrl && (
          <div className={styles["image-add-box"]}>
            <Image src={imagePreviewUrl} alt="상품 이미지" fill />
            <button
              type="button"
              onClick={handleDelete}
              className={styles["btn-delete"]}
              aria-label="이미지 제거 버튼"
            >
              <Icon type="remove" size="md" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileInput;
