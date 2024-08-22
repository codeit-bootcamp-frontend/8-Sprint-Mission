import React from "react";
import { useParams } from "react-router-dom";
import { getArticleId } from "core/articleApi";
import { ArticleId } from "DTO/article";
import { INITIAL_ARTICLE_ID } from "../constants";
import Main from "components/@shared/Layout/Main";
import LikeCount from "components/@shared/UI/LikeCount";
import useFetch from "lib/hooks/useFetch";
import Comments from "components/@shared/UI/Comments";
import defaultProfileImg from "assets/icons/ic_profile.png";
import TextareaInput from "components/@shared/UI/form/TextareaInput";
import FormButton from "components/@shared/UI/form/FormButton";
import useFormSubmit from "lib/hooks/useFormSubmit";
import Form from "components/@shared/UI/form/Form";

function ArticleInfo() {
  const { articleId } = useParams();

  const { data: articleIdData } = useFetch<ArticleId>(
    getArticleId,
    { articleId: Number(articleId) },
    INITIAL_ARTICLE_ID
  );

  const isLoading = !articleIdData || articleIdData.id === 0;

  const { isFormValid, formValues, handleInputChange, handleSubmit } =
    useFormSubmit();

  const onSubmit = (formValues: { [key: string]: string }) => {
    console.log("댓글 제출:", formValues);
  };

  return (
    <Main>
      <section className="flex flex-col gap-6">
        <h1 className="text-xl font-bold text-gray-800">
          {articleIdData.title}
        </h1>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-4 items-center">
            <img
              alt="작성자 프로필 이미지"
              src={defaultProfileImg}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-gray-600">{articleIdData.writer.nickname}</p>
            <p className="text-sm text-gray-400 flex items-center">
              {articleIdData.createdAt.replace(/T.*Z/, "")}
            </p>
          </div>
          <div className="border-2 border-gray-100" />
          <LikeCount
            count={articleIdData.likeCount}
            divClassName="rounded-[35px] border border-gray-200 px-3"
          />
        </div>
        <div className="border-2 border-gray-100" />
        <p>{articleIdData.content}</p>
      </section>
      <Form onSubmit={(e) => handleSubmit(e, onSubmit)} className="relative">
        <TextareaInput
          htmlFor="comment"
          title="댓글달기"
          placeholder="댓글을 입력하세요."
          onChange={handleInputChange}
          className="mb-20"
        />
        <FormButton isFormValid={isFormValid} className="top-36 " />
        {!isLoading && (
          <Comments id={articleIdData.id} type="article" category="댓글" />
        )}
      </Form>
    </Main>
  );
}

export default ArticleInfo;
