import Image from "next/image";
import ProfileImage from "../../../public/images/i-profile.png";
import LikeIcon from "../../../public/images/i-like-big.png";
import LikeIconOn from "../../../public/images/i-like-on.png";
import MoreButton from "../../../public/images/i-menu.png";
import BackIcon from "../../../public/images/i-back.png";
import InputTextArea from "@/components/ui/InputTextArea";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, LinkButton } from "@/styles/ButtonStyle";
import CommentCard from "@/components/boards/CommentCard";
import { getArticlesDetail } from "@/api/api";
import { ArticlesDetail } from "@/types/articleType";
import { useRouter } from "next/router";
import { ArticlesCommentQuery, ArticlesCommentList } from "@/types/commentType";
import { getArticlesComment } from "../../api/api";
import NotComment from "../../components/ui/NotComment";

const TEXTAREA_CONTENT = {
  id: "comment",
  label: "댓글달기",
  placeholder: "댓글을 입력해주세요.",
};

export default function BoardDetailPage() {
  const router = useRouter();
  const { query } = router;
  const [textareaText, setTextareaText] = useState("");
  const [articlesDetail, setArticlesDetail] = useState<ArticlesDetail | null>(
    null
  );
  const [commentList, setCommentList] = useState<ArticlesCommentList[]>([]);
  const [commentQuery, setCommentQuery] = useState<ArticlesCommentQuery>({
    articleId: 0,
    limit: 10,
    cursor: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleDetailLoad = async () => {
      if (query.id) {
        const articleId = Number(query.id);
        try {
          setLoading(true);
          const list = await getArticlesDetail({ articleId });
          setArticlesDetail(list);
        } catch (err) {
          setError("데이터를 가져오는데 실패했습니다.");
        } finally {
          setLoading(false);
        }
      }
    };

    handleDetailLoad();
  }, [query.id]);

  useEffect(() => {
    if (query.id) {
      const articleId = Number(query.id);
      if (!isNaN(articleId)) {
        setCommentQuery((prev) => ({
          ...prev,
          articleId,
        }));
      }
    }
  }, [query.id]);

  useEffect(() => {
    const handleCommentLoad = async (option: ArticlesCommentQuery) => {
      if (option.articleId) {
        try {
          setLoading(true);
          const { list } = await getArticlesComment(option);
          setCommentList(list);
        } catch (err) {
          setError("데이터를 가져오는데 실패했습니다.");
        } finally {
          setLoading(false);
        }
      }
    };
    handleCommentLoad(commentQuery);
  }, [commentQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <h2 className="text-[36px]">데이터를 불러오고 있습니다.</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-lvh">
        <h2 className="text-[36px]">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-[32px] mb-[130px] max-w-[1200px] px-[20px] w-full">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-[15px]">
        <div className="flex justify-between items-center mb-[20px]">
          <h2 className="text-[20px] font-bold text-gray-800">
            {articlesDetail?.title}
          </h2>
          <button>
            <Image
              width={3}
              height={13}
              src={MoreButton.src}
              alt="메뉴 아이콘"
            />
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center border-r border-gray-200  pr-[32px] mr-[32px]">
            <Image
              className="mr-[16px]"
              width={40}
              height={40}
              src={ProfileImage.src}
              alt="프로필 이미지"
            />
            <p className="text-[14px] font-medium mr-[8px] text-gray-600">
              {articlesDetail?.writer.nickname}
            </p>
            <span className="text-[14px] font-normal text-gray-400">
              2024.01.02
            </span>
          </div>
          <button className="flex justify-between items-center h-[40px] px-[12px] rounded-[35px] border border-gray-200">
            {articlesDetail?.isLiked ? (
              <Image
                className="mr-[5px]"
                width={26.8}
                height={23.3}
                src={LikeIconOn.src}
                alt="하트 아이콘"
              />
            ) : (
              <Image
                className="mr-[5px]"
                width={26.8}
                height={23.3}
                src={LikeIcon.src}
                alt="하트 아이콘"
              />
            )}
            <span className="text-[16px] font-medium text-gray-500">
              {articlesDetail?.likeCount}
            </span>
          </button>
        </div>
      </div>

      {/* 본문 영역 */}
      <div className="mt-[24px] mb-[32px]">
        <p className="text-[18px] font-normal text-gray-800">
          {articlesDetail?.content}
        </p>
      </div>

      {/* 댓글 작성 영역 */}
      <div>
        <InputTextArea
          value={textareaText}
          height="104px"
          setTextareaText={setTextareaText}
          content={TEXTAREA_CONTENT}
        />
        <div className="flex justify-end mt-[16px]">
          <StyledButton disabled={textareaText === "" ? true : false}>
            등록
          </StyledButton>
        </div>
      </div>

      {/* 댓글 리스트 영역 */}
      <div className="mt-[40px] mb-[64px]">
        {commentList.length > 0 ? (
          commentList.map((comment) => {
            return <CommentCard key={comment.id} comment={comment} />;
          })
        ) : (
          <NotComment />
        )}
      </div>

      <div className="flex justify-center">
        <StyledLinkButton href="/boards" radius={true}>
          목록으로 돌아가기
          <Image
            className="ml-[10px]"
            width={19}
            height={16}
            src={BackIcon.src}
            alt="뒤로가기 아이콘"
          />
        </StyledLinkButton>
      </div>
    </div>
  );
}

const StyledButton = styled(Button)`
  width: 74px;
  height: 42px;
  background-color: var(--blue-color);

  &:disabled {
    background-color: var(--gray400-color);
  }
`;

const StyledLinkButton = styled(LinkButton)`
  width: auto;
  padding: 0 40px;
`;
