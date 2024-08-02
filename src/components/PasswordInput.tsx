import styles from "./LoginForm.module.css";
import eyeIcon from "../assets/EyeIcon.png";
import eyeIconSlashed from "../assets/EyeIconSlashed.png";
import { useState } from "react";

interface Props {
    name: string;
    value: string | undefined;
    className?: string;
    placeholder?: string;
}

function PasswordInput({ name, value, className, placeholder }: Props) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleEyeClick = () => {
        setIsVisible(!isVisible);
    }
    
    return (
        <>
            <input
                name={name}
                className={className}
                placeholder={placeholder}
                type={isVisible ? "text" : "password"}
            />
            <img
                src={isVisible ? eyeIcon : eyeIconSlashed}
                className={styles.eyeIcon}
                onClick={handleEyeClick}
                alt="보이기"
            />
        </>
    )
}

export default PasswordInput;