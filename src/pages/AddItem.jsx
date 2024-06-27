import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "../assets/ic_plus@3x.png";
import { Flex } from "../components/styled";
import "../App.css";
import {
  Button,
  FileLabel,
  Label,
  Section,
  Input,
  Title,
  TextArea,
  FileImage,
  FileInput,
  FileWrap,
  Submit,
  Form,
  Tag,
} from "../components/styled/Additem";
import { Container } from "../components/styled";
import HomeIcon from "../assets/Img_home_01@3x.png";
import ItemFileInput from "../components/ItemFileInput";
import CancelLogo from "../assets/ic_X@3x.png";
import styled from "styled-components";

const INITIAL_VALUE = {
  imageFile: null,
  title: "",
  content: "",
  price: "",
  tag: "",
};

const Cancel = styled.img`
  width: 22px;
  height: 24px;
  cursor: pointer;
`;

function AddItem() {
  const [value, setValue] = useState(INITIAL_VALUE);
  const [tags, setTags] = useState([]);
  const { imageFile, title, content, price, tag } = value;

  const isValid =
    title !== "" && content !== "" && price !== "" && tags.length > 0;

  const onChange = (name, value) => {
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeTags = (value) => {
    setTags((prev) => [...new Set([...prev, value])]);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    onChange(name, value);
  };

  const handleEnterTags = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onChangeTags(e.target.value);
      onChange(e.target.name, "");
    }
  };

  const onCancel = (value) => {
    console.log(value);
    setTags((prevTags) => {
      const nextTags = prevTags.filter((tag) => tag !== value);
      return nextTags;
    });
  };

  return (
    <Form mt="94" mb="170">
      <Flex content="space-between" item="center">
        <Title>상품 등록하기</Title>
        <Submit isValid={isValid} disabled={!isValid} width="88" height="42">
          등록
        </Submit>
      </Flex>
      <Flex flex="column" gap="24" mt="16">
        <ItemFileInput value={imageFile} name="imageFile" onChange={onChange} />
        <Flex flex="column" gap="12">
          <Label htmlFor="title">상품명</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="상품명을 입력해주세요"
            value={title}
            onChange={handleChange}
          />
        </Flex>
        <Flex flex="column" gap="12">
          <Label htmlFor="content">상품 소개</Label>
          <TextArea
            placeholder="상품 소개를 입력해주세요"
            id="content"
            name="content"
            type="text"
            value={content}
            onChange={handleChange}
          />
        </Flex>
        <Flex flex="column" gap="12">
          <Label htmlFor="price">판매 가격</Label>
          <Input
            id="price"
            name="price"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={handleChange}
          />
        </Flex>
        <Flex flex="column" gap="12">
          <Label htmlFor="tag">태그</Label>
          <Input
            id="tag"
            name="tag"
            type="text"
            placeholder="태그를 입력해주세요"
            value={tag}
            onChange={handleChange}
            onKeyDown={handleEnterTags}
          />
          <Flex gap="12" pl="12">
            {tags.map((tag) => (
              <Tag>
                <span>{tag}</span>
                <Cancel
                  src={CancelLogo}
                  alt="cancel"
                  onClick={() => onCancel(tag)}
                />
              </Tag>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
}

export default AddItem;
