import { useDropdown } from '@/f_shared/lib';
import { match } from 'ts-pattern';

import ArrowDown from '@/f_shared/assets/icons/ic_arrow_down/ic_arrow_down.svg';
import KebabIcon from '@/f_shared/assets/icons/ic_kebab/ic_kebab.svg';

import * as S from './Dropdown.style';
import React from 'react';

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
            data-name={e.id}
          >
            {e.item}
          </S.Content>
        );
      })}
    </S.ContentsWrapper>
  );
};

type DropdownMode = 'button' | 'kebab';

interface DropdownBtnProps {
  mode: DropdownMode;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type DropdownBtnMatchType =
  | { type: 'button'; children: React.ReactNode }
  | { type: 'kebab'; children: React.ReactNode };

const DropdownBtn = ({ mode, children, onClick }: DropdownBtnProps) => {
  const dropdownButton: DropdownBtnMatchType = { type: mode, children };
  const DButton = match(dropdownButton)
    .with({ type: 'button' }, ({ children }) => (
      <S.DownBtn onClick={onClick}>{children}</S.DownBtn>
    ))
    .with({ type: 'kebab' }, ({ children }) => (
      <S.DownKebab onClick={onClick}>{children}</S.DownKebab>
    ))
    .exhaustive();
  return <>{DButton}</>;
};

interface DropdownProps {
  mode?: DropdownMode;
  children?: React.ReactNode;
  contentList: Content[];
  onContentClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type BtnContentType = { type: 'button' } | { type: 'kebab' };

export const Dropdown = ({
  mode = 'button',
  children,
  contentList,
  onContentClick,
}: DropdownProps) => {
  const { isOpen, closeRef, handleClick, handleContentClick } = useDropdown({
    onContentClick,
  });
  const btnContentMatch: BtnContentType = { type: mode };
  const buttonContent = match(btnContentMatch)
    .with({ type: 'button' }, () => (
      <S.Container>
        <S.Title>{children}</S.Title>
        <S.IconWrapper>
          <ArrowDown />
        </S.IconWrapper>
      </S.Container>
    ))
    .with({ type: 'kebab' }, () => <KebabIcon />)
    .exhaustive();
  return (
    <S.Wrapper ref={closeRef}>
      <DropdownBtn mode={mode} onClick={handleClick}>
        {buttonContent}
      </DropdownBtn>

      <DropdownContents
        contentList={contentList}
        isOpen={isOpen}
        onClick={handleContentClick}
      />
    </S.Wrapper>
  );
};
