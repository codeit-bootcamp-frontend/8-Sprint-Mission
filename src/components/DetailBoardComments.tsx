import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import S from "@/components/DetailBoardComments.module.css";
import axios from "@/pages/api/axios";
const PLACEHOLDERTEXT = "댓글을 입력해 주세요";

interface ButtonProps {
  $pass?: boolean;
}

interface ItemsListType {
  id: number;
  content: string;
  createdAt: string;
  writer: {
    id: number;
    nickname: string;
    image: string;
  };
}

function DetailBoardComments() {
  const [comments, setComments] = useState<ItemsListType[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentsValues, setCommentsValues] = useState("");
  const [pass, setPass] = useState(false);
  const router = useRouter();
  const id = Number(router.query["id"]);

  // 게시판 댓글 데이터 가져오기
  async function getProduct(id: number) {
    try {
      const res = await axios.get(`/articles/${id}/comments?limit=50`);
      const nextComments = res.data.list;
      setComments(nextComments);
      setLoading(false);
    } catch (error) {
      alert("댓글 데이터 불러오기 실패");
    }
  }
  useEffect(() => {
    getProduct(id);
  }, [id]);

  const onClickReturn = () => {
    router.push(`/boards`);
  };

  // 댓글 인풋의 입력값 파악
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setCommentsValues(value);
  };

  // TODO: 스프린트 미션에 API POST 관련 기능 요구 시 추가 예정, 현재는 테스트를 위한 코드
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    if (commentsValues.length <= 0) return;
    e.preventDefault();
    console.log(commentsValues);
  };

  // 댓글 작성한 시간 변환 함수
  const getTimegap = (posting: string) => {
    const dateString = posting;
    const date = new Date(dateString);
    const timestamp = date.getTime();
    const msgap = Date.now() - timestamp;
    const minutegap = Math.floor(msgap / 60000);
    const hourgap = Math.floor(msgap / 3600000);
    const UploadDate = posting.slice(0, 10);
    if (msgap < 0) {
      return <div>0분전</div>;
    }
    if (hourgap > 24) {
      return <div>{UploadDate}</div>;
    }
    if (minutegap > 60) {
      return <div>{hourgap}시간 전</div>;
    } else {
      return <div>{minutegap}분 전</div>;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={S.main}>
      <section className={S.commentsContainer}>
        <div className={S.commentTopBox}>
          <p className={S.miniTitle}>문의하기</p>
          <textarea
            className={S.commentInput}
            placeholder={PLACEHOLDERTEXT}
            onChange={handleInputChange}
          />
          <div className={S.buttonWrapper}>
            <button
              className={`${S.commentSubmitButton} ${commentsValues.length > 0 ? S.pass : ""}`}
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
          <div className={S.commentContainer}>
            {comments.length > 0 ? (
              comments.map((item) => (
                <div key={item.id} className={S.commentBox}>
                  <div className={S.comment}>
                    <p className={S.commentText}>{item.content}</p>
                    <Image
                      src="/images/icon/btn_icon/ic_kebab_menu.png"
                      alt="케밥 메뉴 아이콘"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={S.user}>
                    <Image
                      src={item.writer.image || `/images/icon/ic_null_user_profile_image.png`}
                      alt="사용자 프로필 이미지"
                      className={S.userProfileImage}
                      width={40}
                      height={40}
                    />
                    <div className={S.userInfo}>
                      <p className={S.userName}>{item.writer.nickname}</p>
                      <div className={S.timeAgo}>{getTimegap(item.createdAt)}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={S.emptyComment}>
                <Image
                  src="/images/logo/gary_no_comment.png"
                  alt="댓글이 없는 경우 이미지"
                  width={200}
                  height={200}
                />
                아직 댓글이 없어요,
                <br />
                지금 댓글을 달아보세요!
              </div>
            )}
          </div>
        </div>
      </section>
      <div className={S.bottomButton}>
        <button className={S.returnButton} onClick={onClickReturn}>
          목록으로 돌아가기
          <Image
            src="/images/icon/btn_icon/ic_return.png"
            alt="목록으로 돌아가기 버튼"
            width={24}
            height={24}
          />
        </button>
      </div>
    </main>
  );
}

export default DetailBoardComments;
