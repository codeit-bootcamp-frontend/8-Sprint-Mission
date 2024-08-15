import Image from "next/image"
import { useRouter } from "next/router"
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { postArticle, uploadImage } from "@/pages/api/apis"
import ArticlePost from "@/DTO/articlePost"
import styles from "@/styles/Addboard.module.css"

const INITIAL_FORM_DATA: ArticlePost = {
  image: '',
  content: '',
  title: '',
}

export default function Addboard() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');

  const router = useRouter();
  
  const isButtonDisabled = (formData.title.length <= 0) || (formData.content.length <= 0)

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(e.target.name, e.target.value);
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange("image", e.target.value);
    if(e.target.files) {
      setImageFile(e.target.files[0]);
      const imgURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(imgURL);
    }
  }

  const handleCancelPreview = () => {
    handleChange("image", '');
    setImageFile(null);
    setImagePreview('');
  }

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("access_token") ?? '';
    let submitForm = formData;
    if(imageFile) {
      const imgUploadRes = await uploadImage(imageFile, accessToken);
      const imgUrl = imgUploadRes.url;
      submitForm = {
        ...submitForm,
        image: imgUrl
      };
    }
    const result = await postArticle(submitForm, accessToken);
    if(!result) {
      alert("게시글 등록 실패");
      return;
    }
    router.push(`/boards/${result.id}`);
  }

  const handleSubmitButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    handleSubmit();
  }

  useEffect(() => {
    return (() => {
      URL.revokeObjectURL(formData.image);
    })
  }, [formData.image])

  return (
    <main className={styles.addboardMain}>
      <div className={styles.addboardHead}>
        <h1 className={styles.addboardHeadTitle}>게시글 쓰기</h1>
        <button className={styles.addboardButton} disabled={isButtonDisabled} onClick={handleSubmitButtonClick}>등록</button>
      </div>
      <form className={styles.addboardForm}>
        <label className={styles.addboardFormLabel}>
          <h2 className={styles.addboardFormLabelText}>*제목</h2>
          <input name="title" value={formData.title} className={styles.addboardFormInput} placeholder="제목을 입력해주세요" onChange={handleInputChange} />
        </label>
        <label className={styles.addboardFormLabel}>
          <h2 className={styles.addboardFormLabelText}>*내용</h2>
          <textarea name="content" value={formData.content} className={styles.addboardFormTextarea} placeholder="내용을 입력해주세요" onChange={handleInputChange} />
        </label>
        <div className={styles.addboardFormLabel}>
          <h2 className={styles.addboardFormLabelText}>이미지</h2>
          <div className={styles.addboardFormImagesContainer}>
            <label>
              <input type="file" name="image" value={formData.image} className={styles.addboardFormFileInput} onChange={handleImageChange} />
              <div className={styles.addboardFormFileInputPlaceholder}>
                <div className={styles.plusIconContainer}>
                  <Image fill src="/images/ic_plus.svg" alt="추가" />
                </div>
                <span>이미지 등록</span>
              </div>
            </label>
            {imagePreview &&
              <div className={styles.addboardFormImagePreviewContainer}>
                <Image fill src={imagePreview} style={{objectFit: "contain"}} alt="이미지 미리보기" />
                <div className={styles.cancelPreviewIconContainer} onClick={handleCancelPreview}>
                  <Image fill src="/images/ic_X.svg" alt="없애기" />
                </div>
              </div>
            }
          </div>
        </div>
      </form>
    </main>
  )
}