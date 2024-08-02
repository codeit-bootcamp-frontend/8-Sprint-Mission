import styled from "styled-components";
import { Container } from "src/styles/styled";

export const ProductContainer = styled(Container)`
  color: ${({ theme }) => theme.gray800};
  padding-top: 16px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    width: 343px;
    height: 343px;
  }
  @media (min-width: 1200px) {
    width: 486px;
    height: 486px;
  }
`;

export const Name = styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
`;

export const Price = styled.h2`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
`;

export const VerticalBar = styled.div<{
  my?: number;
  mt?: number;
  mb?: number;
}>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: ${({ my }) => my + "px 0"};
  margin-top: ${({ mt }) => mt + "px"};
  margin-bottom: ${({ mb }) => mb + "px"};
`;

export const Description = styled.p`
  width: 344px;
  height: 156px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  text-overflow: ellipsis;
`;

export const TagList = styled.ul``;

export const Tag = styled.li``;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

export const HorizentalBar = styled.div`
  width: 1px;
  height: 60%;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin-right: 12px;
`;

export const Button = styled.button<{
  w?: number;
  h?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => w + "px"};
  height: ${({ h }) => h + "px"};
  background-color: transparent;
  border: 0;
`;

export const Favorite = styled(Button)`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  gap: 6px;
  border-radius: 35px;
  border: 1px solid #e5e7eb;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-align: left;
`;

export const Heart = styled.img`
  width: 20px;
  height: 17px;
`;

export const CommentArea = styled.textarea`
  width: 343px;
  height: 129px;
  padding: 16px 24px;
  gap: 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray100};
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const CommentSubmit = styled(Button)`
  align-self: end;
  padding: 12px 23px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray400};
  color: white;
`;

export const ReturnButton = styled(Button)`
  margin: 40px auto 65px;
  padding: 12px 64px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.bgColors.blue};
`;

export const ContentTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
`;

export const ProfileName = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #4b5563;
`;

export const CreateDate = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray400};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
`;

export const CommentContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray800};
`;
