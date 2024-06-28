import { useEffect, useRef, useState } from "react";
import './FileInput.css';

function FileInput({ name, value, onChange }) {
    const inputRef = useRef();
    const [preview, setPreview] = useState();

    const handleChange = (e) => {

        const nextValue = e.target.files[0];
        onChange(name, nextValue);
    };

    const handleClearClick = () => {
        const inputNode = inputRef.current;

        if (!inputNode) return;

        inputNode.value = '';
        setPreview(null);
        onChange(name, null);

    }

    useEffect(() => {
        if (!value) return;

        const nextpreview = URL.createObjectURL(value);
        setPreview(nextpreview);

    }, [value])

    return <div className="fileInputWrapper">

        <input id="fileInput" className="fileInput" type="file" ref={inputRef} onChange={handleChange} />
        <label htmlFor="fileInput" className="fileInputButton" >
            <span className="fileInputCustom">이미지 등록</span>
        </label>
        {preview &&
            <div className="imgPreviewWrapper">
                <img src={preview} alt="이미지 미리보기" className="previewImg" />
                <button type="button" className="imgRemoveButton" onClick={handleClearClick}>x</button>

            </div>}
    </div>

}

export default FileInput;