import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getApiProductsComments } from "@/pages/api/getApi";
import { useRouter } from "next/router";
import Image from "next/image";
import S from "@/components/ProductComments.module.css";

const PLACEHOLDERTEXT =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

interface ButtonProps {
  $pass?: boolean;
}

interface ItemsListType<T> {
  list: T[];
}

function ProductComments() {
  const router = useRouter();
  const id = router.query["id"];
  const [items, setItems] = useState<ItemsListType<any>>({ list: [] });
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState("");
  const [pass, setPass] = useState(false);

  const onClickReturn = () => {
    router.push(`/items`);
  };

  // 댓글 인풋의 입력값 파악
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValues(value);
  };

  // TODO: 스프린트 미션에 API POST 관련 기능 요구 시 추가 예정, 현재는 테스트를 위한 코드
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
      return <div>{hourgap}시간 전;</div>;
    } else {
      return <div>{minutegap}분 전</div>;
    }
  };

  // 상품 댓글 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const result = await getApiProductsComments(id);
          setItems(result);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // 입력값 감지 후 조건 충족 시 등록 버튼 활성화
  useEffect(() => {
    function validation() {
      const valueCheck = values.length > 0;
      return valueCheck;
    }
    const isValid = validation();
    setPass(isValid);
  }, [values]);

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
              className={`${S.commentSubmitButton} ${pass ? S.pass : ""}`}
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
          <div className={S.commentContainer}>
            {items.list ? (
              items.list.map((item) => (
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
                      src={item.writer.image}
                      alt="사용자 프로필 이미지"
                      className={S.userProfileImage}
                      width={40}
                      height={40}
                    />
                    <div className={S.userInfo}>
                      <p className={S.userName}>{item.writer.nickname}</p>
                      <div className={S.timeAgo}>{getTimegap(item.updatedAt)}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={S.emptyComment}>
                <Image
                  src="/images/logo/gray_panda.png"
                  alt="댓글이 없는 경우 이미지"
                  width={200}
                  height={200}
                />
                아직 문의가 없습니다.
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

export default ProductComments;
