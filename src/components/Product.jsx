import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getApiProducts } from './getApi';
import KebabIconImg from '../assets/images/icon/btn_icon/ic_kebab_menu.png';
import FavoriteIconImg from '../assets/images/icon/btn_icon/ic_favorite.png';
// @media screen and (max-width: 1199px) and (min-width: 768px) {}
// @media screen and (min-width: 1200px) {}
const Main = styled.main`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailsContainer = styled.section`
  width: 100%;
  padding: 16px 16px 0px 16px;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    display: flex;
    padding: 24px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    width: 1200px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  filter: opacity(0.5) drop-shadow(0 0 0 #228b22);
  border-radius: 12px;
  @media screen and (min-width: 1200px) {
    width: 486px;
    height: 486px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray200);
  @media screen and (max-width: 1199px) and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  margin-top: 16px;
  font-size: 16px;
  color: var(--gray800);
  font-weight: 600;
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--gray800);
  margin: 8px 0px 16px;
`;
const MiniTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray600);
  margin-top: 16px;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
  margin: 8px 0px 24px;
`;
const Tag = styled.li`
  border-radius: 26px;
  background-color: var(--gray100);
  padding: 6px 16px;
  margin: 8px 8px 0px 0px;
  font-size: 16px;
  font-weight: 400;
  color: var(--gray800);
`;
const FavoriteBox = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray500);
  border-radius: 35px;
  margin: 24px 0px;
  border: 1px solid var(--gray200);
  padding: 4px 12px;
  gap: 10px;
`;

function Product() {
  const { selectItem } = useParams();
  const [items, setItems] = useState([]);
  const [alltags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favoriteCount, images, name, description, price } = items;
  const [korPrice, setKorPrice] = useState('');
  // 상품 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getApiProducts(selectItem);
        setItems(result);
        setAllTags(result.tags);
        const won = price.toLocaleString('ko-KR');
        setKorPrice(won);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectItem, price]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <DetailsContainer>
        <ImageWrapper>
          <Image src={images} alt="상품 이미지" width="340px" height="340px" />
        </ImageWrapper>
        <TitleContainer>
          <TitleBox>
            <Title>{name}</Title>
            <img src={KebabIconImg} alt="케밥 메뉴 아이콘" width="24px" height="24px" />
          </TitleBox>
          <Price>{korPrice}원</Price>
        </TitleContainer>
        <MiniTitle>상품 소개</MiniTitle>
        <Text>{description}</Text>
        <MiniTitle>상품 태그</MiniTitle>
        <ul>
          {alltags ? alltags.map((tag, index) => <Tag key={tag + index}>{`#${tag}`}</Tag>) : <></>}
        </ul>
        <FavoriteBox>
          <img src={FavoriteIconImg} alt="좋아요 하트 아이콘" width="24px" height="24px" />
          {favoriteCount}
        </FavoriteBox>
      </DetailsContainer>
    </Main>
  );
}

export default Product;
