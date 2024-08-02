import { InputHTMLAttributes, useState } from "react";
import styles from "./TagInput.module.css";

interface Tag {
  id: string;
  name: string;
}

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  className?: string;
  tags: Tag[];
  changeValue: (name: string, newTags: Tag[]) => void;
}

export default function TagInput({
  id,
  name,
  label,
  className,
  tags,
  changeValue,
  ...props
}: TagInputProps) {
  const [tagValue, setTagValue] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setTagValue(value);
  };

  const handleAddTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    if (e.key !== "Enter" || tagValue === "") return;
    const existingTag =
      tags && tags.some((tag) => tag.name === tagValue.trim());
    if (existingTag) {
      return setTagValue("");
    }
    const newTag = {
      id: `${value}-${Math.random().toString(36).substring(2, 9)}`,
      name: tagValue.trim(),
    };
    const newTags = [...tags, newTag];
    changeValue("tag", newTags);
    setTagValue("");
  };

  const handleRemoveTag = (list: Tag) => {
    const updateTag = tags.filter((item) => item.id !== list.id);
    changeValue("tag", updateTag);
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${className ? className : ""}`}
        id={id}
        {...props}
        value={tagValue}
        onChange={handleChangeInput}
        onKeyDown={handleAddTags}
      />
      <div className={styles.tagContainer}>
        <ul className={styles.tagList}>
          {tags &&
            tags.map((tag) => (
              <li key={tag.id} id={tag.id}>
                <span className={styles.tagTitle}>{tag.name}</span>
                <i
                  onClick={() => handleRemoveTag(tag)}
                  className={styles.tagRemoveBtn}
                ></i>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
