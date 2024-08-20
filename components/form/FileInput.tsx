import { useState, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./FileInput.module.scss";
import Icon from "@/components/ui/Icon";

interface FileInputProps {
  label: string;
  imagePreviewUrl: string;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onImageDelete: () => void;
}

function FileInput({
  label,
  imagePreviewUrl,
  onImageChange,
  onImageDelete,
}: FileInputProps) {
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
            onChange={onImageChange}
            accept="image/*"
          />
          <Icon type="plus" size="lg" />
          <span>이미지 등록</span>
        </label>
        {imagePreviewUrl && (
          <div className={styles["image-add-box"]}>
            <Image src={imagePreviewUrl} alt="이미지" fill />
            <button
              type="button"
              onClick={onImageDelete}
              className={styles["btn-delete"]}
              aria-label="이미지 제거 버튼"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileInput;
