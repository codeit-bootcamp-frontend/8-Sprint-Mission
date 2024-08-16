import { colors } from '@/f_shared/config';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.coolGray[200]};
  cursor: pointer;

  &:hover {
    border-radius: 12px;
    outline: 1px solid ${colors.secondary[500]};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Content = styled.p`
  color: ${colors.coolGray[800]};

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

export const SubContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1 0 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProfileImageWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

export const Nickname = styled.p`
  color: ${colors.secondary[600]};

  /* pretendard/md-14px-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;

export const CreatedAt = styled.div`
  color: ${colors.secondary[400]};

  /* pretendard/md-14px-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

export const LikeIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const LikeCounter = styled.p`
  color: ${colors.secondary[500]};

  /* pretendard/lg-16px-regular */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 162.5% */
`;
