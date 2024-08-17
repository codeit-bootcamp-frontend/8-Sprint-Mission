import styled from 'styled-components';

import { colors } from '@/f_shared/config';

export const Wrapper = styled.div`
  display: flex;
  width: 75rem;
  padding-bottom: 0.75rem;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5625rem 0.25rem;

  border-bottom: 1px solid ${colors.secondary[200]};
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1 0 0;
`;

export const CommentContent = styled.p`
  align-self: stretch;

  color: ${colors.secondary[800]};

  /* pretendard/md-14px-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 171.429% */
`;

export const WriterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 30px;
  overflow: hidden;
`;

export const WriterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const WriterName = styled.p`
  color: ${colors.secondary[600]};

  /* pretendard/xs-12px-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
`;

export const CreatedAt = styled.p`
  color: ${colors.secondary[400]};

  /* pretendard/xs-12px-regular */

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
`;
