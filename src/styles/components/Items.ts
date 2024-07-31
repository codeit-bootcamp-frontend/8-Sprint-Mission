import styled from "styled-components";
import media from "../styled/media";
import { Box, Flex } from "../styled";

const Grid = styled(Box)`
  display: grid;
`;

const ItemGrid = styled(Grid)`
  justify-content: center;
  column-gap: 24px;
  overflow: hidden;
  ${media.tablet`
		grid-auto-rows: 0;
	`}
`;

export const BestGrid = styled(ItemGrid)`
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  margin-top: 16px;
  ${media.tablet`
		grid-template-columns: repeat(2, 1fr);
	`}
  ${media.mobile`
		grid-template-columns: repeat(1, 1fr);
	`}
`;

export const ItemWrap = styled.div`
  margin-top: ${({ mt = 0 }) => mt + "px"};
  margin-bottom: ${({ mb = 0 }) => mb + "px"};
`;

export const SellGrid = styled(ItemGrid)`
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  ${media.tablet`
		grid-template-columns: repeat(3, 1fr);
		column-gap: 16px;
	`}
  ${media.mobile`
		grid-template-columns: repeat(2, 1fr);
		column-gap: 8px;
	`}
`;

export const BestImage = styled.img`
  width: 282px;
  border-radius: 16px;
  ${media.tablet`
		width: 336px;
	`}
  ${media.mobile`
		width: 343px;
	`}
`;

export const SellImage = styled.img`
  width: 221px;
  border-radius: 16px;
  ${media.mobile`
		width: 168px;
	`}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 6px;
  margin-top: 16px;
`;

export const Favorite = styled(Flex)`
  justify-content: start;
  gap: 4px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
`;

export const Price = styled.strong`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  text-align: left;
`;

export const Count = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  text-align: left;
`;
