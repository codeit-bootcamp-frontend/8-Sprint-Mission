import Image from 'components/@shared/Image';
import React, { useState } from 'react';
import eyeCloseImg from 'assets/images/auth/visibility-off.png';
import eyeOpenImg from 'assets/images/auth/visibility-on.png';
import styled from 'styled-components';

interface PasswordInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
}

function PasswordInput({ id, name, value, onChange, autoComplete = 'on', placeholder = '' }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleEyeClick = () => {
    console.log(isVisible);
    setIsVisible(prevState => !prevState);
  };

  return (
    <StyledPasswordWrapper>
      <input
        id={id}
        type={isVisible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      <i onClick={handleEyeClick}>
        {isVisible ? (
          <Image src={eyeOpenImg} alt={'눈 보임 이미지'} height={'100%'} width={'100%'} />
        ) : (
          <Image src={eyeCloseImg} alt={'눈 가림 이미지'} height={'100%'} width={'100%'} />
        )}
      </i>
    </StyledPasswordWrapper>
  );
}

export default PasswordInput;

const StyledPasswordWrapper = styled.div`
  position: relative;

  & i {
    position: absolute;
    right: 1.6rem;
    top: 0;
    bottom: 0;

    margin: auto 0;
    height: 2.4rem;
    width: 2.4rem;

    cursor: pointer;
  }
`;
