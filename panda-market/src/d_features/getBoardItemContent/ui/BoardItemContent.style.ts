import { colors } from '@/f_shared';

import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.coolGray[200]};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: ${colors.coolGray[800]};

  /* pretendard/xl-20px-bold */
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 160% */
`;

export const WriterContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 2rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
`;

export const WriterInfo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-right: 2rem;
  border-right: 1px solid ${colors.coolGray[200]};
  gap: 1rem;
`;

export const WriterName = styled.p`
  color: ${colors.secondary[600]};

  /* pretendard/md-14px-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
`;

export const CreatedAt = styled.span`
  color: ${colors.coolGray[400]};

  /* pretendard/md-14px-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  color: ${colors.secondary[800]};

  /* pretendard/2lg-18px-regular */

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 144.444% */
`;
