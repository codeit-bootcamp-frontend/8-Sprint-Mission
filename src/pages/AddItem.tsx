import styled from 'styled-components';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useAllFieldFilled from 'hooks/useAllFieldFilled';

import ImageRegistration from 'components/addItem/ImageRegistration';
import InputSection from 'components/addItem/InputSection';

import RegistraionHeader from 'components/addItem/RegistrationHeader';
import { IFormValue, IPreview, ITag } from 'types/@shared/addItemTypes';

function AddItem() {
  const [formValue, setFormValue] = useState<IFormValue>({
    imgfiles: [],
    title: '',
    description: '',
    price: '',
    tag: '',
  });
  const [tagList, setTagList] = useState<ITag[]>([]);

  const needToFilledFields = { title: formValue.title, description: formValue.description, price: formValue.price };
  const isSubmitActive = useAllFieldFilled(needToFilledFields) && tagList.length > 0;
  const [previewList, setPreviewList] = useState<IPreview[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {
    const { value, name, files } = event.target as HTMLInputElement;

    if (name === 'image') {
      if (files && files[0]) {
        // 상위 if와 합치지 않은 이유는 image input 과정에서 잘못된 값이 들어올 수도 있을 거라 생각이 들었음
        const file = files[0];
        setFormValue(prevState => ({ ...prevState, [name]: [...prevState.imgfiles, file] }));
        const imageUrl = URL.createObjectURL(file);
        setPreviewList(prevState => [...prevState, { id: uuidv4(), url: imageUrl }]);

        // 아래 내용이 없으면 같은 파일을 연속하여 중복 선택 시, 변화를 감지하지 못함
        (event.target as HTMLInputElement).value = '';
      }
    } else {
      setFormValue(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // formValue 가공해서 서버로 전송하면 됨
    event.preventDefault();
  };

  const handleReturnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      // 한글 입력 시 2번 입력되는 것을 막기위함
      const newTage: ITag = { id: uuidv4(), content: formValue.tag };
      setTagList(prevState => [...prevState, newTage]);
      setFormValue(prevState => ({ ...prevState, ['tag']: '' }));
    }
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLElement>) => {
    const { category, id, url } = (event.target as HTMLElement).dataset;

    if (category === 'preview' && url) {
      setPreviewList(prevState => prevState.filter(preview => preview.id !== id));
      URL.revokeObjectURL(url); // 사용하지 않는 메모리 제거
    } else if (category === 'tag') {
      setTagList(prevState => prevState.filter(tag => tag.id !== id));
    }
  };

  return (
    <StyledAddItemForm onSubmit={handleSubmitForm}>
      <RegistraionHeader isSubmitActive={isSubmitActive} />
      <ImageRegistration
        previewList={previewList}
        handleInputChange={handleInputChange}
        handleRemoveClick={handleRemoveClick}
      />
      <InputSection
        formValue={formValue}
        tagList={tagList}
        handleInputChange={handleInputChange}
        handleReturnKeyDown={handleReturnKeyDown}
        handleRemoveClick={handleRemoveClick}
      />
    </StyledAddItemForm>
  );
}

export default AddItem;

const StyledAddItemForm = styled.form`
  margin: 0 auto;
  padding: 2.4rem 0;
  max-width: var(--container-width);

  & fieldset {
    margin-bottom: 2.4rem;
  }

  @media (max-width: 1200px) {
    padding: 2.4rem 2.6rem 0 2.6rem;
  }
  @media (max-width: 768px) {
    padding: 2.4rem 2.6rem 0 2.6rem;
  }
`;
