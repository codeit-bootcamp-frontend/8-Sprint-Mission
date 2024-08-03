import { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import styles from "./ItemComments.module.css";
import useAsync from "../hooks/useAsync";
import { getComments } from "../api/api";
import { ReactComponent as GoBackIcon } from '../assets/ic_back.svg';
import emptyCommentPanda from "../assets/Img_inquiry_empty.png"
import { useNavigate } from "react-router-dom";
import LoadingErrorHandler from "./LoadingErrorHandler";
import formatComparedTime from "../utils/formatComparedTime";
import Comment from "../DTO/comment";

const COMMENTS_LIMIT: number = 5;

function CommentSubmitForm() {

    const [inputContent, setInputContent] = useState('');
    
    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputContent(e.target.value);
    }
    
    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }
    
    const commentPlaceholder = "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

    return (
        <form className={styles.commentForm}>
            <label htmlFor="commentFormInput" className={styles.commentFormLabel}>문의하기</label>
            <textarea
                id="commentFormInput"
                className={styles.commentFormInput}
                name="commentFormInput"
                placeholder={commentPlaceholder}
                value={inputContent}
                onChange={handleInputChange}
            />
            <div className={styles.commentFormButtonContainer}>
                <button
                    className={styles.commentFormButton}
                    onClick={handleButtonClick}
                    disabled={!inputContent}
                >
                    등록
                </button>
            </div>
        </form>
    )
}

function EmptyCommentImage() {
    return (
        <div className={styles.emptyCommentContainer}>
            <img src={emptyCommentPanda} alt="판다는 판단을 내릴수가 없고" />
            <span className={styles.emptyCommentMessage}>아직 문의가 없습니다.</span>
        </div>
    )
}

function Comments({ comments }: { comments: Comment[] }) {

    return (
        <ul className={styles.commentsList}>
                {comments.map((comment) => {
                    const dateFormat = formatComparedTime(comment.updatedAt);

                    return (
                        <li className={styles.comment} key={comment.id}>
                            <span className={styles.commentContent}>{comment.content}</span>
                            <div className={styles.commentInfo}>
                                <img src={comment.writer.image} alt={comment.writer.nickname} className={styles.commentInfoImage} />
                                <div className={styles.commentInfoTexts}>
                                    <span className={styles.commentInfoNickname}>{comment.writer.nickname}</span>
                                    <span className={styles.commentInfoUpdatedAt}>{dateFormat}</span>
                                </div>
                            </div>
                        </li>
                    )})}
            </ul>
    )
}

function CommentsList({ itemId }: { itemId: string }) {

    const [comments, setComments] = useState<Comment[]>([]);
    const [cursor, setCursor] = useState<number>(0);
    const { isPending, error, wrappedFunction } = useAsync(getComments);
    const navigate = useNavigate();
    
    const handleLoad = useCallback (async (query: { productId: string, limit: number, cursor: number }) => {
        const result = await wrappedFunction(query);
        if (!result) return;
        setComments((prev) => [...prev, ...result.list]);
        setCursor(result.nextCursor);
    }, [wrappedFunction]);

    const handleLoadMore = async () => {
        handleLoad({ productId: itemId, limit: COMMENTS_LIMIT, cursor: cursor });
    }

    const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/items");
    }

    useEffect(() => {
        handleLoad({ productId: itemId, limit: COMMENTS_LIMIT, cursor: 0 });
    }, [handleLoad, itemId]);
    
    return (
        <>
            {!comments.length || <Comments comments={comments} />}
            {comments.length ||
                (isPending || error)
                ? <LoadingErrorHandler isLoading={isPending} error={error} />
                : <EmptyCommentImage />}
            {(cursor && !isPending) &&
                <div className={styles.loadMoreContainer}>
                    <button className={styles.loadMoreButton} onClick={handleLoadMore}>더보기</button>
                </div>
            }
            <div className={styles.goBackButtonContainer}>
                <button className={styles.goBackButton} onClick={handleGoBack}>
                    목록으로 돌아가기
                    <GoBackIcon />
                </button>
            </div>
        </>
    )
}

function ItemComments({ itemId }: { itemId: string }) {

    return (
        <section className={styles.itemComments}>
            <CommentSubmitForm />
            <CommentsList itemId={itemId} />
        </section>
    )
}

export default ItemComments;