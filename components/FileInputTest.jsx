// 1. useRef를 사용해 파일 input 요소에 직접 접근
// 2. useRef의 current라는 속성을 이용해 handleFileChange라는 함수에서 파일 정보에 접근하고 그것을 file 변수에 할당
// 3. URL.createObjectURL(file)을 이용해 파일의 임시 url 생성 및 imagePreview에 할당
// 4. revokeObjectURL(imagePreview)을 handleClearPreview 함수에 넣어 클릭했을 경우 파일 메모리를 해제할 수 있도록 함
// 5. 각 요소를 알맞은 HTML 요소에 넣고 스타일링함

import { useState, useRef } from "react";

function FileInputTest() {
  const [imagePreviews, setImagePreviews] = useState(null);
  const inputRef = useRef(null); // ref객체: current라는 속성 가짐, input에 넣을 예정

  const handleFileChange = () => {
    // 2. useRef의 current라는 속성을 이용해 handleFileChange라는 함수에서 파일 정보에 접근하고 그것을 file 변수에 할당

    // inputRef.current가 null인지 확인
    if (!inputRef.current) return;

    // FileList를 배열로 변환
    const files = Array.from(inputRef.current.files);
    // 3. URL.createObjectURL(file)을 이용해 파일의 임시 url 생성 및 imagePreview에 할당
    if (files.length > 0) {
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const handleDelete = (previewUrl) => {
    // 선택된 파일의 미리보기 URL 해제
    URL.revokeObjectURL(previewUrl);

    // 나머지 미리보기 목록 필터링
    setImagePreviews((prev) => prev.filter((url) => url !== previewUrl));
  };

  return (
    <>
      {/* 1. useRef를 사용해 파일 input 요소에 직접 접근*/}
      <input
        onChange={handleFileChange}
        type="file"
        accept="image/png, image/jpeg"
        ref={inputRef}
        multiple
      ></input>
      {imagePreviews &&
        imagePreviews.map((previewUrl, index) => (
          <div key={index}>
            <img src={previewUrl} alt={`미리보기 이미지 ${index}`} />
            {/*이미지가 있을 때만 버튼 보이게 하기*/}
            {imagePreviews ? (
              <button onClick={() => handleDelete(previewUrl)}>X</button>
            ) : null}
          </div>
        ))}
    </>
  );
}

export default FileInputTest;
