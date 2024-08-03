import styles from "./LoadingScreen.module.css";
import pandaIsConfused from "../assets/Img_inquiry_empty.png"

function LoadingScreen() {

    return (
        <div className={styles.loadingComponent}>
            <img src={pandaIsConfused} alt="열일하는 판다" />
            <span className={styles.loadingMessage}>불러오는중...</span>
        </div>
    )
}

export default LoadingScreen;