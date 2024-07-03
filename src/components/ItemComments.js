import { useCallback, useEffect, useState } from "react";
import styles from "./ItemComments.module.css";
import useAsync from "../hooks/useAsync";
import { getComments } from "../api/api";
import { ReactComponent as GoBackIcon } from '../assets/ic_back.svg';
import emptyCommentPanda from "../assets/Img_inquiry_empty.png"
import { useNavigate } from "react-router-dom";

function CommentSubmitForm() {

    const [inputContent, setInputContent] = useState('');
    
    const handleInputChange = (e) => {
        setInputContent(e.target.value);
    }
    
    const handleButtonClick = (e) => {
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

function Comments({ comments }) {

    return (
        <ul className={styles.commentsList}>
                {comments.map((comment) => 
                    <li className={styles.comment} key={comment.id}>
                        <span className={styles.commentContent}>{comment.content}</span>
                        <div className={styles.commentInfo}>
                            <img src={comment.writer.image} alt={comment.writer.nickname} className={styles.commentInfoImage} />
                            <div className={styles.commentInfoTexts}>
                                <span className={styles.commentInfoNickname}>{comment.writer.nickname}</span>
                                <span className={styles.commentInfoUpdatedAt}>{comment.updatedAt}</span>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
    )
}

function CommentsList({ itemId }) {

    const [comments, setComments] = useState([]);
    const [cursor, setCursor] = useState(null);
    const [isLoading, error, getCommentsAsync] = useAsync(getComments);
    const navigate = useNavigate();

    const commentsLimit = 5;
    
    const handleLoad = useCallback (async (query) => {
        const result = await getCommentsAsync(query);
        if (!result) return;
        setComments((prev) => [...prev, ...result.list]);
        setCursor(result.nextCursor);
    }, [getCommentsAsync]);

    const handleLoadMore = async () => {
        handleLoad({ productId: itemId, limit: commentsLimit, cursor: cursor });
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate("/items");
    }

    useEffect(() => {
        handleLoad({ productId: itemId, limit: commentsLimit, cursor: 0 });
    }, [handleLoad, itemId]);
    
    return (
        <>
            {comments.length ? <Comments comments={comments} /> : <EmptyCommentImage />}
            {cursor &&
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

function ItemComments({ itemId }) {

    return (
        <section className={styles.itemComments}>
            <CommentSubmitForm />
            <CommentsList itemId={itemId} />
        </section>
    )
}

export default ItemComments;