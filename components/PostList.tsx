import Image from "next/image";
import SearchInput from "./SearchInput";
import DateTrimmer from "@/utils/TimeTrimmer";

const post = {
  updatedAt: "2024-08-13T11:07:29.015Z",
  createdAt: "2024-08-13T11:07:29.015Z",
  likeCount: 100,
  writer: {
    nickname: "최영선",
    id: 1,
  },
  image: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/12/09/110713388.1.jpg",
  title: "맥북 어쩌구 팝니다!! 급처분해요",
  id: 1,
};

function PostList() {
  return (
    <>
      <p>게시글</p>
      <SearchInput />
      <p>{post.title}</p>
      <Image
        unoptimized={true}
        width={72}
        height={72}
        src={post.image}
        alt="게시글 첨부 이미지"
      />
      <Image
        unoptimized={true}
        width={24}
        height={24}
        src="/image/profile_img_none.png"
        alt="가짜 프로필 이미지"
      />
      <p>{post.writer.nickname}</p>
      <Image
        unoptimized={true}
        width={20}
        height={17}
        src="/image/heart_inactive.png"
        alt="좋아요 아이콘"
      />
      <p>{post.likeCount}</p>
      <p>{DateTrimmer(post.createdAt)}</p>
    </>
  );
}

export default PostList;
