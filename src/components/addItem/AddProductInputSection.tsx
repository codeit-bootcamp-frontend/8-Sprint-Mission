import { ADDITEM_FIELDSET_LIST } from ' constants/information/addItemList';
import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';
import { StyledAddItemSubTitle, smallTextStyle } from 'styles/addProduct/textStyles';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import TagList from './TagList';
import { IFormValue, ITag } from 'types/@shared/addProductTypes';

interface AddProductInputSectionProps {
  formValue: IFormValue;
  tagList: ITag[];
  handleInputChange: (event: React.ChangeEvent<HTMLElement>) => void;
  handleReturnKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function AddProductInputSection({
  formValue,
  tagList,
  handleInputChange,
  handleReturnKeyDown,
  handleRemoveClick,
}: AddProductInputSectionProps) {
  return (
    <StyledAdProductInputSection>
      {ADDITEM_FIELDSET_LIST.map(fieldset => (
        <Fragment key={fieldset.name}>
          <fieldset>
            <StyledAddItemSubTitle htmlFor={fieldset.name}>{fieldset.subTitle}</StyledAddItemSubTitle>
            {fieldset.name === 'description' ? (
              <textarea
                id={fieldset.name}
                name={fieldset.name}
                value={formValue[fieldset.name]}
                onChange={handleInputChange}
                placeholder={fieldset.placeholder}
              />
            ) : (
              <input
                id={fieldset.name}
                name={fieldset.name}
                value={formValue[fieldset.name]}
                onChange={handleInputChange}
                placeholder={fieldset.placeholder}
                onKeyDown={fieldset.name === 'tag' ? handleReturnKeyDown : undefined}
              />
            )}
            {fieldset.name === 'tag' && <TagList tagList={tagList} handleRemoveClick={handleRemoveClick} />}
          </fieldset>
        </Fragment>
      ))}
    </StyledAdProductInputSection>
  );
}
export default AddProductInputSection;

const StyledAdProductInputSection = styled.section`
  & input,
  & textarea {
    ${inputStyle};
    ${smallTextStyle};
    &::placeholder {
      ${placeholderStyle};
    }
  }

  & textarea {
    height: 20rem;
    resize: none;
    border: none;
    padding-top: 1.6rem; // 다른 input들과 같은 윗패딩을 주기 위함
  }
`;
