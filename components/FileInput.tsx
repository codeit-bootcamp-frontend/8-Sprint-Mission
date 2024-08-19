import { ChangeEvent, useEffect, useRef, useState } from "react";
import style from "./FileInput.module.css";
import Xbutton from "@/image/icons/ic_X.svg";

interface FileInputProps {
  id: string;
  name: string;
  value: File | null;
  onChange: (name: string, file: File | null) => void;
}

function FileInput({ name, value, onChange }: FileInputProps) {
  const [preview, setPreview] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue =
      e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(undefined);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className={style.fileInputcontainer}>
      <input
        id="imgFile"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <>
          <button onClick={handleClearClick} className={style.button}>
            <Xbutton alt="취소버튼" />
          </button>
          <img src={preview} alt="" className={style.inputImage} />
        </>
      )}
    </div>
  );
}

export default FileInput;
