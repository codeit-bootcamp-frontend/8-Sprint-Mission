"use client";

import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Search from "@/assets/images/icons/ic_search.svg";
import Image from "next/image";

interface SearchFormProps {
  initialValue?: string;
}

export default function SearchForm({ initialValue = "" }: SearchFormProps) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const router = useRouter();
    if (!value) {
      router.push("/boards");
      return;
    }
    router.push(`/articles?keyword=${value}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputContainer>
        <Image src={Search} alt="검색" width="24" />
        <StyledInput
          name="keyword"
          value={value}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleChange}
        />
      </StyledInputContainer>
    </StyledForm>
  );
}

// styled-components
const StyledForm = styled.form`
  width: 1054px;
  height: 42px;
  border-radius: 12px;
  padding: 9px 20px 9px 16px;
  background-color: #f3f3f6;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #9ca3af;
`;
