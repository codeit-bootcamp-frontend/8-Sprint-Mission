import './Additem.css';
import { useEffect, useState } from "react";
import FileInput from "../components/FileInput";

function AddItem() {

    const [values, setValues] = useState({
        productName: '',
        introduction: '',
        price: 0,
        tag: '',
        imgFile: null,
    });

    const [isButtonDisabled, SetisButtonDisabled] = useState(true);

    useEffect(() => {
        const allInput = values.introduction && values.price && values.productName && values.tag;
        if (allInput) {
            SetisButtonDisabled(false);
        }
        else {
            SetisButtonDisabled(true);
        }

    }, [values])

    const handleChange = (name, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        console.log(name, value);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='productTitle'>
                <h1>상품 등록하기</h1>
                <button className={isButtonDisabled ? "button disabledButton" : "button enabledButton"} type="submit" disabled={isButtonDisabled}>등록</button>
            </div>
            <h2>상품 이미지</h2>
            <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
            <h2>상품명</h2>
            <input name="productName" value={values.productName} onChange={handleInputChange} placeholder="상품명을 입력해주세요" className="productInput" />
            <h2>상품소개</h2>
            <textarea name="introduction" value={values.introduction} onChange={handleInputChange} placeholder="상품 소개를 입력해주세요" className="productInput productTextArea"></textarea>
            <h2>판매가격</h2>
            <input name="price" value={values.price === 0 ? '' : values.price} type="number" onChange={handleInputChange} placeholder="판매 가격을 입력해주세요" className="productInput" />
            <h2>태그</h2>
            <input name="tag" value={values.tag} onChange={handleInputChange} placeholder="태그를 입력해주세요" className="productInput" />

        </form>
    )
}

export default AddItem;