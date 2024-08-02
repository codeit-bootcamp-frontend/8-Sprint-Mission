import { useState } from "react";

type Visibility = 'password' | 'text';

const usePasswordVisibility = () => {
    const [visibility, setVisibility] = useState<Visibility>('password');
    const handlePasswordVisibility = () => {
        setVisibility((prev) => prev === 'password' ? 'text' : 'password'); 
    }
    return {visibility, handlePasswordVisibility};
}

export default usePasswordVisibility;