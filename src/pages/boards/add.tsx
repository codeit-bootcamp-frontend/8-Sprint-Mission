import { postArticle, PostArticleProps } from "@/axios/articles";
import BlueButton from "@/components/@shared/BlueButton";
import GlobalNavBar from "@/components/@shared/GlobalNavBar";
import GrayInput from "@/components/@shared/inputs/GrayInput";
import React from "react";
import FileInput from "@/components/@shared/inputs/FileInput";
import GrayTextarea from "@/components/@shared/inputs/GrayTextarea";
import uploadImage from "@/axios/images";

interface TextInputProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function TextInput({ onInputChange }: TextInputProps) {
  return (
    <>
      <div className="mb-[16px] md:mb-[24px]">
        <label
          className="block text-[14px] font-bold text-gray-800 mb-[12px] md:text-[18px]"
          htmlFor="title"
        >
          *제목
        </label>
        <GrayInput onChange={onInputChange} id="title" placeholder="제목을 입력해주세요" />
      </div>
      <div className="mb-[16px] md:mb-[24px]">
        <label
          className="block text-[14px] font-bold text-gray-800 mb-[12px] md:text-[18px]"
          htmlFor="content"
        >
          *내용
        </label>
        <div className="h-[200px] md:h-[282px]">
          <GrayTextarea onChange={onInputChange} id="content" placeholder="내용을 입력해주세요" />
        </div>
      </div>
    </>
  );
}

export default function AddBoard() {
  const [articleValues, setArticleValues] = React.useState<PostArticleProps>({
    image: null,
    content: "",
    title: "",
  });
  const [currentImgFile, setCurrentImgFile] = React.useState<File | null>(null);
  const [previewImg, setPreviewImg] = React.useState<string | null>(null);

  /**
   * text input change 이벤트 핸들러
   * text input 값을 articleValues에 최신화 함
   */
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentTargetId = e.target.id;
    const currentValue = e.target.value;

    setArticleValues((prevArticleValues) => ({
      ...prevArticleValues,
      [currentTargetId]: currentValue,
    }));
  };

  /**
   * image file input change 이벤트 핸들러
   * image file input 값을 currentImgFile에 최신화 함
   */
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentImgFiles = e.target.files;

    if (!currentImgFiles) return;

    setCurrentImgFile(currentImgFiles[0]);
  };

  // useEffect를 이용해서 file을 preview 이미지로 생성
  React.useEffect(() => {
    if (!currentImgFile) return;

    const previewImgUrl = URL.createObjectURL(currentImgFile);
    setPreviewImg(previewImgUrl);

    return () => URL.revokeObjectURL(previewImgUrl);
  }, [currentImgFile]);

  /**
   * preview img의 이미지 제거 버튼 클릭시 동작하는 핸들러
   */
  const handleDelBtnClick = () => {
    setPreviewImg(null);
    setCurrentImgFile(null);
  };

  /**
   * submit 버튼을 눌렀을때 동작하는 이벤트 핸들러
   */
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 현재 이미지 파일 (currentImgFile) 값이 있는 경우 file을 url로 변경해주는 api 요청
    // 이후에 받아온 url을 articleValues의 image 값으로 함
    if (currentImgFile) {
      try {
        const imgUrl = await uploadImage({ imageFile: currentImgFile });
        setArticleValues((prevArticleValues) => ({ ...prevArticleValues, image: imgUrl }));
      } catch (error) {
        console.log(error);
        return;
      }
    }

    // 받아온 이미지 url및 text input 값을 이용해서 게시글 업로드 요청
    const { image, content, title } = articleValues;

    try {
      const postedArticle = await postArticle({ image, content, title });
      if (postedArticle) {
        const { id } = postedArticle;
        window.location.href = `/boards/${id}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GlobalNavBar />
      <div className="mt-[16px] mx-[16px] md:mx-[24px] xl: w-auto xl:w-[1200px] xl:mt-[24px] xl:mx-auto">
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <div className="mb-[24px] md:mb-[32px] flex justify-between items-center h-[42px]">
            <h2 className="text-[20px] font-bold text-gray-800">게시글 쓰기</h2>
            <div className="w-[72px] h-full">
              <BlueButton
                type="submit"
                disabled={articleValues.content === "" || articleValues.title === ""}
              >
                등록
              </BlueButton>
            </div>
          </div>
          <TextInput onInputChange={handleTextInputChange} />
          <FileInput
            onDelBtnClick={handleDelBtnClick}
            previewImg={previewImg}
            onChange={handleFileInputChange}
          />
        </form>
      </div>
    </>
  );
}
