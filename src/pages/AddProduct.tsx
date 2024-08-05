import styled from 'styled-components';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageRegistration from 'components/addItem/ImageRegistration';
import AddProductInputSection from 'components/addItem/AddProductInputSection';
import RegistrationHeader from 'components/addItem/RegistrationHeader';
import { IFormValue, IImagePreview, ITag } from 'types/@shared/addProductTypes';
import { MEDIA_QUERY_SIZE } from ' constants/information/mediaQuerySize';
import useAllFieldFilled from 'hooks/form/useAllFieldFilled';

function AddProduct() {
  const [addProductFormValue, setAddProductFormValue] = useState<IFormValue>({
    imgFiles: [],
    title: '',
    description: '',
    price: '',
    tag: '',
  });
  const [tagList, setTagList] = useState<ITag[]>([]);

  const needToFilledFields = {
    title: addProductFormValue.title,
    description: addProductFormValue.description,
    price: addProductFormValue.price,
  };
  const isSubmitActive = useAllFieldFilled(needToFilledFields) && tagList.length > 0;
  const [imagePreviewList, setImagePreviewList] = useState<IImagePreview[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {
    const { value, name, files } = event.target as HTMLInputElement;

    if (name === 'image') {
      if (files && files[0]) {
        // 상위 if와 합치지 않은 이유는 image input 과정에서 잘못된 값이 들어올 수도 있을 거라 생각이 들었음
        const file = files[0];
        setAddProductFormValue(prevState => ({ ...prevState, [name]: [...prevState.imgFiles, file] }));
        const imageUrl = URL.createObjectURL(file);
        setImagePreviewList(prevState => [...prevState, { id: uuidv4(), imgUrl: imageUrl }]);

        // 아래 내용이 없으면 같은 파일을 연속하여 중복 선택 시, 변화를 감지하지 못함
        (event.target as HTMLInputElement).value = '';
      }
    } else {
      setAddProductFormValue(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleReturnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글 입력 시 2번 입력되는 것을 막기위함
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      const newTag: ITag = { id: uuidv4(), tagContent: addProductFormValue.tag };
      setTagList(prevState => [...prevState, newTag]);
      setAddProductFormValue(prevState => ({ ...prevState, ['tag']: '' }));
    }
  };

  const handleRemoveClick = (event: React.MouseEvent<HTMLElement>) => {
    const { category, id, url } = (event.target as HTMLElement).dataset;

    if (category === 'preview' && url) {
      setImagePreviewList(prevState => prevState.filter(preview => preview.id !== id));
      URL.revokeObjectURL(url); // 사용하지 않는 메모리 제거
    } else if (category === 'tag') {
      setTagList(prevState => prevState.filter(tag => tag.id !== id));
    }
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // formValue 가공해서 서버로 전송하면 됨
    event.preventDefault();
  };

  return (
    <StyledAddProductForm onSubmit={handleSubmitForm}>
      <RegistrationHeader isSubmitActive={isSubmitActive} />
      <ImageRegistration
        previewList={imagePreviewList}
        handleInputChange={handleInputChange}
        handleRemoveClick={handleRemoveClick}
      />
      <AddProductInputSection
        formValue={addProductFormValue}
        tagList={tagList}
        handleInputChange={handleInputChange}
        handleReturnKeyDown={handleReturnKeyDown}
        handleRemoveClick={handleRemoveClick}
      />
    </StyledAddProductForm>
  );
}

export default AddProduct;

const StyledAddProductForm = styled.form`
  margin: 0 auto;
  padding: 2.4rem 0;
  max-width: var(--container-width);

  & fieldset {
    margin-bottom: 2.4rem;
  }

  @media ${MEDIA_QUERY_SIZE.underTablet} {
    padding: 2.4rem 2.6rem 0 2.6rem;
  }
  @media ${MEDIA_QUERY_SIZE.mobile} {
    padding: 2.4rem 2.6rem 0 2.6rem;
  }
`;
