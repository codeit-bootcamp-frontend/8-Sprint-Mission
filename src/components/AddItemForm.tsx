import { useState, useRef, useEffect, ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from "react";
import { ReactComponent as IconColorX} from "../assets/ic_X.svg"
import { ReactComponent as IconGrayX} from "../assets/ic_grayX.svg"
import { ReactComponent as IconPlus} from "../assets/ic_plus.svg"
import "./AddItemForm.css";

interface FormValues {
    images: string | null;
    tags: string[];
    price: string;
    description: string;
    name: string;
}

const INITIAL_VALUES: FormValues = {
    images: null,
    tags: [],
    price: '',
    description: '',
    name: '',
}

function AddItemFormHeader({ values }: { values: FormValues }) {

    const { tags, price, description, name } = values;
    const isValid = tags[0] && price && description && name;

    return (
        <div className="add-item-header">
            <span>상품 등록하기</span>
            <button disabled={!isValid}>등록</button>
        </div>
    )
}

function FileInputSection({ onChange, valuesImages }: { onChange: (name: string, value: any) => void, valuesImages: string | null}) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPrieview] = useState<string | null>(null);
    
    const handleInputChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file = target.files ? target.files[0] : null;
        if(inputRef.current) onChange(inputRef.current.name, file);
    }

    const handleClearClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!inputRef.current) return;
        inputRef.current.value = '';
        onChange(inputRef.current.name, null);
    }

    useEffect(() => {
        if(!valuesImages) return;
        const imgArr: string[] = [valuesImages];
        const imgBlob = new Blob(imgArr)
        const imgURL = URL.createObjectURL(imgBlob);
        setPrieview(imgURL);

        return () => {
            setPrieview(null);
            URL.revokeObjectURL(imgURL);
        }
    }, [valuesImages]);
    
    return (
        <section className="input-section">
            <p>상품 이미지</p>
            <div className="images-container">
                <label className="file-input image-card">
                    <input name="images" type="file" ref={inputRef} onChange={handleInputChange} />
                    <div className="file-input-placeholder">
                        <IconPlus />
                        이미지 등록
                    </div>
                </label>
                {preview && <div className="image-card">
                    <img src={preview} className="preview-image" alt="이미지 미리보기" />
                    <button className="clear-button" onClick={handleClearClick}><IconColorX /></button>
                </div>}
            </div>
        </section>
    )
}

function TagSection({ tags, handleChange }: { tags: string[], handleChange: (name: string, value: any) => void }) {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleEnterPress = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        if(!target.value) return;
        if(e.key === "Enter") handleTagSubmit(e);
    }

    const handleTagSubmit = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        e.preventDefault();
        let newTags = tags;
        newTags.push(target.value);
        handleChange(target.name, newTags);
        if(inputRef.current) inputRef.current.value = '';
    }

    const handleClearClick = (index: number) => {
        const newTags = [
            ...tags.slice(0, index),
            ...tags.slice(index + 1)
        ]
        if(inputRef.current) handleChange(inputRef.current.name, newTags);
    }

    const tagsList = tags.map((tag, index) => {

        return (
            <li key={tag} className="tag">
                <span>
                    {tag}
                    <button name={tag} onClick={() => handleClearClick(index)}><IconGrayX /></button>
                </span>
            </li>
        )
    })
    
    return (
        <section className="input-section">
            <p>태그</p>
            <input name="tags" placeholder="태그를 입력해주세요" onKeyDown={handleEnterPress} ref={inputRef} />
            <ul className="tags-list">
                {tagsList}
            </ul>
        </section>
    )
}

function AddItemForm() {

    const [values, setValues] = useState(INITIAL_VALUES);

    const handleChange = (name: string, value: any) => {
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }))
    }

    const handleInput = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        handleChange(target.name, target.value);
    }

    const handlePriceInput = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        if(isNaN((Number)(target.value))) return;
        handleChange(target.name, target.value ? (Number)(target.value) : target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("리퀘스트 미구현");
    }
    
    return (
        <form className="add-item-form" onSubmit={handleSubmit}>
            <AddItemFormHeader values={ values } />
            <FileInputSection onChange={ handleChange } valuesImages={values.images} />
            <section className="input-section">
                <p>상품명</p>
                <input name="name" type="text" value={values.name} onChange={handleInput} placeholder="상품명을 입력해주세요" />
            </section>
            <section className="input-section">
                <p>상품 소개</p>
                <textarea name="description" value={values.description} onChange={handleInput} placeholder="상품 소개를 입력해주세요" />
            </section>
            <section className="input-section">
                <p>판매가격</p>
                <input name="price" value={values.price} onChange={handlePriceInput} placeholder="판매 가격을 입력해주세요" />
            </section>
            <TagSection tags={values.tags} handleChange={handleChange} />
        </form>
    )
}

export default AddItemForm;