import { ADDITEM_FEIELDSET_LIST } from ' constants/infomations/addItemList';
import React from 'react';
import { Fragment } from 'react/jsx-runtime';
import styled from 'styled-components';
import { StyledAddItemSubTitle, smallTextStyle } from 'styles/addItem/textStyles';
import { inputStyle, placeholderStyle } from 'styles/auth/formStyles';
import { IFormValue } from 'types/addItemFormValueTypes';
import { ITag } from 'types/addItemTagTypes';
import TagList from './TagList';

interface InputSectionProps {
  formValue: IFormValue;
  tagList: ITag[];
  handleInputChange: (event: React.ChangeEvent<HTMLElement>) => void;
  handleReturnKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemoveClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function InputSection({
  formValue,
  tagList,
  handleInputChange,
  handleReturnKeyDown,
  handleRemoveClick,
}: InputSectionProps) {
  return (
    <StyledAddItemInputSection>
      {ADDITEM_FEIELDSET_LIST.map(fieldset => (
        <Fragment key={fieldset.name}>
          <fieldset>
            <StyledAddItemSubTitle htmlFor={fieldset.name}>{fieldset.subTitle}</StyledAddItemSubTitle>
            <input
              id={fieldset.name}
              name={fieldset.name}
              value={formValue[fieldset.name]}
              onChange={handleInputChange}
              placeholder={fieldset.placeholder}
              onKeyDown={fieldset.name === 'tag' ? handleReturnKeyDown : undefined}
            />
            {fieldset.name === 'tag' && <TagList tagList={tagList} handleRemoveClick={handleRemoveClick} />}
          </fieldset>
        </Fragment>
      ))}
    </StyledAddItemInputSection>
  );
}
export default InputSection;

const StyledAddItemInputSection = styled.section`
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
    padding-top: 1.6rem;
  }
`;
