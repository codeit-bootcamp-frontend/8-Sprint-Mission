import { useRef, useState } from "react";

import visibilityIcon from '../../core/assets/icons/visibility/visibility.svg';
import disvisibilityIcon from '../../core/assets/icons/visibility/disvisibility.svg';


const usePasswordVisibility = () => {
    const [icon, setIcon] = useState<string>(visibilityIcon);
    const ref = useRef<HTMLInputElement>(null);
    const handlePasswordVisibility = () => {
        if (ref.current){
            ref.current.type = ref.current.type === 'text'?'password' : 'text';
            setIcon((prev) => prev === visibilityIcon ? disvisibilityIcon : visibilityIcon);
        }
    }
    return {ref, icon, handlePasswordVisibility};
}

export default usePasswordVisibility;