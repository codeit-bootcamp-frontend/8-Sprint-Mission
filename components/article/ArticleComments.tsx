import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import getCommentsByArticleId from '@/lib/api/getCommentsByArticleId';
import { useRouter } from 'next/router';
import { ArticleComment } from '@/types/Article';
import postArticleComment from '@/lib/api/postArticleComment';
import TextAreaElement from '../elements/TextAreaElement';
import SubmitButton from '../elements/button/SubmitButton';
import CommentList from '../comments/CommentList';
import BackLinkButton from '../elements/BackLinkButton';

function ArticleComments() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState<ArticleComment[]>([]);

  const validationSubmit = input;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await postArticleComment(id as string, {
      content: input,
    });
    if (!data.id) return;
    setComments(prev => [data, ...prev]);
    setInput('');
  };

  useEffect(() => {
    const fetchCommentsByArticleId = async () => {
      if (id) {
        const { data } = await getCommentsByArticleId(id as string, {
          limit: 3,
        });
        setComments(data.list);
      }
    };
    fetchCommentsByArticleId();
  }, [id]);

  return (
    <>
      <form
        className="flex flex-col font-lg-16px-semibold"
        onSubmit={handleSubmit}
      >
        <label htmlFor="comment">댓글달기</label>
        <TextAreaElement
          className="mt-[9px] h-[104px] px-6 py-4 tablet:h-[104px]"
          onChange={handleInputChange}
          value={input}
          placeholder="댓글을 입력해주세요"
          name="comment"
        />
        <SubmitButton className="mt-4 self-end" isActive={!!validationSubmit}>
          등록
        </SubmitButton>
      </form>
      <CommentList
        imageWhenEmpty="/empty_reply.png"
        textWhenEmpty={
          <>
            <span>아직 댓글이 없어요,</span>
            <span>지금 댓글을 달아보세요!</span>
          </>
        }
        comments={comments}
      />
      <BackLinkButton className="mt-8 self-center" />
    </>
  );
}

export default ArticleComments;
