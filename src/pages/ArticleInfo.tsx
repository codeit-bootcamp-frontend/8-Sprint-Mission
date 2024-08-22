import React from "react";
import { useParams } from "react-router-dom";
import { getArticleId } from "core/api/articleApi";
import { ArticleId } from "core/dtos/articleDTO";
import { INITIAL_ARTICLE_ID } from "core/constants/initialValues";
import Main from "components/@shared/Layout/Main";
import LikeCount from "components/@shared/UI/LikeCount";
import useApiGet from "lib/hooks/useApiGet";
import Comments from "components/@shared/UI/Comments";
import defaultProfileImg from "assets/icons/ic_profile.png";
import TextareaInput from "components/@shared/UI/form/TextareaInput";
import FormButton from "components/@shared/UI/form/FormButton";
import Form from "components/@shared/UI/form/Form";
import { useForm, Controller } from "react-hook-form";

function ArticleInfo() {
  const { articleId } = useParams();

  const { data: articleIdData } = useApiGet<ArticleId>(
    getArticleId,
    { articleId: Number(articleId) },
    INITIAL_ARTICLE_ID
  );

  const isLoading = !articleIdData || articleIdData.id === 0;

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = async (data: { comment: string }) => {
    console.log("댓글 제출:", data.comment);
    reset();
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
      <Form onSubmit={handleSubmit(onSubmit)} className="relative">
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <TextareaInput
              htmlFor="comment"
              title="댓글달기"
              placeholder="댓글을 입력하세요."
              className="mb-20"
            />
          )}
        />
        <FormButton isFormValid={true} className="top-36 " />
        {!isLoading && (
          <Comments id={articleIdData.id} type="article" category="댓글" />
        )}
      </Form>
    </Main>
  );
}

export default ArticleInfo;
