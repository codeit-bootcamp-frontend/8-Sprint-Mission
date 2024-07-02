import React from "react";
import styled from "styled-components";

import tagX from "../../assets/images/ic_tagX.png";

function Tagbox({ tags, onClick }) {
  return (
    <TagsWrapper>
      {tags.map((tag, i) => {
        return (
          <span key={Date.now() + i ** 2}>
            {tag}
            <button type="button" onClick={() => onClick(i)}>
              <img src={tagX} />
            </button>
          </span>
        );
      })}
    </TagsWrapper>
  );
}

const TagsWrapper = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  font-weight: 400;
  span {
    background-color: var(--gray-50);
    padding: 12px 12px 12px 16px;
    align-items: center;
    height: 48px;
    display: flex;
    border-radius: 26px;
  }
  button {
    display: inline-block;
  }
`;

export default Tagbox;
