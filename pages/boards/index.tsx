import PrimaryButton from "@/components/primarybutton";
import styled from "styled-components";
import arrowdownIcon from "@/images/arrow_down.png";
import sortIcon from "@/images/ic_sort.png";
import searchIcon from "@/images/search.png";
import Image from "next/image";
import { getArticles } from "@/pages/util/api";
import { useEffect, useState } from "react";
import BestBoardItemList from "@/components/bestboarditemlist";
import BoardItemList from "@/components/boarditemlist";
import Head from "next/head";
import { BoardItemType } from "@/interfaces/boardItem";
import Link from "next/link";

export default function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [boards, setBoards] = useState<BoardItemType[]>([]);
  const [bestBoards, setBestBoards] = useState<BoardItemType[]>([]);
  const [selectedOption, setSelectedOption] = useState("recent");
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가

  useEffect(() => {
    async function fetchArticles() {
      const nextBoards = await getArticles(1, 30, selectedOption);
      setBoards(nextBoards);
    }
    fetchArticles();
  }, [selectedOption]);

  useEffect(() => {
    async function fetchBestArticles() {
      const nextBestBords = await getArticles(1, 3, "like");
      setBestBoards(nextBestBords);
    }

    fetchBestArticles();
  }, []);

  const handleSelectClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // 검색어 포함 게시글 필터링
  const filteredBoards = boards.filter((board) =>
    board.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Head>
        <title>게시글</title>
      </Head>
      <Title>Best 게시글</Title>
      <BestBoardItemList boards={bestBoards} />
      <ListContainer>
        <Title>게시글</Title>
        <Link href={"/addboard"}>
          <PrimaryButton>글쓰기</PrimaryButton>
        </Link>
      </ListContainer>
      <ListContainer>
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleSearchChange}
        />
        <SelectWrapper onClick={handleSelectClick}>
          <ResponsiveSelect>
            <Select className="desktop">
              <Image src={arrowdownIcon} alt="arrowdown" />
              {selectedOption === "recent" ? <>최신순</> : <>좋아요순</>}
            </Select>
            <Select className="mobile">
              <Image src={sortIcon} alt="sortIcon" />
            </Select>
          </ResponsiveSelect>
          {isOpen && (
            <Options>
              <Option
                onClick={() => {
                  handleOptionClick("recent");
                }}
              >
                최신순
              </Option>
              <Option
                onClick={() => {
                  handleOptionClick("like");
                }}
              >
                좋아요순
              </Option>
            </Options>
          )}
        </SelectWrapper>
      </ListContainer>
      <BoardItemList boards={filteredBoards} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 12px;
  background-color: #f3f4f6;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 9px 20px 9px 45px;
  outline: none;
  background-image: url(${searchIcon.src});
  background-repeat: no-repeat;
  background-position: 15px center; /* 이미지 위치 조절 */
  background-size: 24px 24px; /* 이미지 크기 조절 */
`;
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Select = styled.div`
  width: 130px;
  height: 42px;
  border-radius: 12px;
  border: solid 1px #9ca3af;
  padding: 12px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 376px) {
    padding: 9px;
    width: 42px;
  }
`;

const Options = styled.div`
  width: 130px;
  height: 84px;
  border-radius: 12px;
  border: solid 1px #9ca3af;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  margin-top: 50px;
`;

const Option = styled.button`
  background-color: #ffffff;
  height: 44px;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #9ca3af;

  &:last-child {
    border-bottom: none;
  }
`;

const ResponsiveSelect = styled.div`
  position: relative;

  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 376px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;
