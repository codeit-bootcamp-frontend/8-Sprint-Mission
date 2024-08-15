import { colors } from '@/f_shared/config/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 24rem;
  height: 10.5625rem;
  padding: 0rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.5rem;
  background-color: ${colors.coolGray[50]};
  cursor: pointer;

  &:hover {
    outline: 1px solid ${colors.secondary[400]};
    box-shadow: 0 4px 4px ${colors.secondary[200]};
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 21rem;
  height: 9.5625rem;
`;

export const Contents = styled.div`
  display: flex;
  width: 21rem;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const TitleWrapper = styled.div``;
export const Title = styled.p`
  color: ${colors.secondary[800]};

  /* pretendard/xl-20px-semibold */
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; /* 160% */
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.85713rem 0.75rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.375rem;
  border: 1px solid ${colors.coolGray[200]};
  background-color: ${colors.white};
`;

export const SubContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NickName = styled.p`
  margin-right: 0.5rem;

  color: ${colors.secondary[600]};

  /* pretendard/md-14px-regular */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;
export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  gap: 0.25rem;
`;
export const LikeIcon = styled.div`
  width: 1rem;
  height: 1rem;
`;
export const LikeCount = styled.p`
  color: ${colors.secondary[500]};

  /* pretendard/md-14px-regular */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;
export const CreatedAt = styled.p`
  color: ${colors.secondary[400]};

  /* pretendard/md-14px-regular */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;
