import TagButton from "core/tags/TagButton";
import { useState } from "react";
import { styled } from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  color: #1f2937;
  padding-left: 10px;
  & placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #9ca3af;
  }
`;

const TagSection = styled.ul`
  display: flex;
  gap: 12px;
`;

interface AddItemTagInputProps {
  tagList: string[];
  onAdd: (newTag: string) => void;
  onDelete: (item: string) => void;
}
const AddItemTagInput = ({
  tagList,
  onAdd,
  onDelete,
}: AddItemTagInputProps) => {
  const [tagText, setTagText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagText !== "" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onAdd(tagText);
      setTagText("");
    }
  };

  const handleDeleteTag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const eventTargetParent = (e.target as HTMLElement)
      .parentNode as HTMLElement;
    onDelete(eventTargetParent.innerText);
  };
  return (
    <>
      <Input
        type="text"
        value={tagText}
        onKeyDown={handleSubmit}
        onChange={handleChange}
        placeholder="태그를 입력해주세요"
      />
      <TagSection onClick={handleDeleteTag}>
        {tagList.map((element) => (
          <li key={element}>
            <TagButton>{element}</TagButton>
          </li>
        ))}
      </TagSection>
    </>
  );
};

export default AddItemTagInput;
