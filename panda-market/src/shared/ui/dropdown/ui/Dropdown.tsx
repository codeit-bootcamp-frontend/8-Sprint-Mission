import { useState } from 'react';

import { useCloseRef } from '@/shared/lib';

import ArrowDown from '@/shared/assets/icons/ic_arrow_down/ic_arrow_down.svg';

import * as S from './Dropdown.style';

export type Content = {
  id: number | string;
  item: string;
  icon?: React.ReactNode;
};

interface DropdownContentsProps {
  contentList: Content[];
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
const DropdownContents = ({
  contentList,
  isOpen,
  onClick,
}: DropdownContentsProps) => {
  return (
    <S.ContentsWrapper $isOpen={isOpen} onClick={onClick}>
      {contentList.map((e, idx) => {
        return (
          <S.Content
            key={e.id}
            $isLast={idx === contentList.length - 1}
            data-name={e.item}
          >
            {e.item}
          </S.Content>
        );
      })}
    </S.ContentsWrapper>
  );
};

interface DropdownProps {
  children: React.ReactNode;
  contentList: Content[];
  onContentClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Dropdown = ({
  children,
  contentList,
  onContentClick,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const { ref } = useCloseRef({ isOpen, onClose: handleClose });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <S.Wrapper ref={ref}>
      <S.DownBtn onClick={handleClick}>
        <S.Container>
          <S.Title>{children}</S.Title>
          <S.IconWrapper>
            <ArrowDown />
          </S.IconWrapper>
        </S.Container>
      </S.DownBtn>
      <DropdownContents
        contentList={contentList}
        isOpen={isOpen}
        onClick={onContentClick}
      />
    </S.Wrapper>
  );
};
