import styles from "./ErrorScreen.module.css";
import pandaIsConfused from "../assets/Img_inquiry_empty.png"

function ErrorScreen({ error }) {

    return (
        <div className={styles.errorComponent}>
            <img src={pandaIsConfused} alt="열일하는 판다" />
            {error.message
                ? <span className={styles.errorMessage}>{error.message}</span>
                : <span className={styles.errorMessage}>요청을 수행하는데 오류가 발생했습니다.</span>}
        </div>
    )
}

export default ErrorScreen;