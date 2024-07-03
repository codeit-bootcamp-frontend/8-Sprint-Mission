import { useState } from "react";
import styles from "./ItemComments.module.css";

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

function ItemComments() {

    return (
        <section className={styles.itemComments}>
            <CommentSubmitForm />
        </section>
    )
}

export default ItemComments;