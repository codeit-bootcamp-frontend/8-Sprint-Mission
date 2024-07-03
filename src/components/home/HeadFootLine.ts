import { styled } from "styled-components";

export const HeadFootLine = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-color);
`;

export const HeadFootLineContent = styled.div`
  max-width: 120rem;
  height: 54rem;
  margin: auto;
  display: flex;
  justify-content: center;
  & img {
    display: inline-block;
    object-fit: scale-down;
    align-self: end;
    width: 70%;
    padding-top: 7.5rem;
  }
`;

export const HeadFootLineTitle = styled(HeadFootLine)`
  max-width: 38.4rem;
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5.6rem;
  word-break: keep-all;
  gap: 3.2rem;
`;
