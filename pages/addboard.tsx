import AddButton from "@/components/Buttons/AddButton";
import TextInput from "@/components/Inputs/TextInput";
import FileInput from "@/components/Inputs/FileInput";

function AddBoard() {
  const INPUT_CONTENTS = [
    {
      name: "title",
      label: "*제목",
      placeholder: "제목을 입력해주세요",
      isTextArea: false,
    },
    {
      name: "content",
      label: "*내용",
      placeholder: "내용을 입력해주세요",
      isTextArea: true,
    },
  ];

  // const [inputValues, setInputValues] = useState({
  // });

  // const handleValueChange = (name: string, value: string | File) => {
  //   setInputValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  // const isFormComplete = () => {
  //   const { imgFile, ...restValues } = inputValues;
  //   const isAllInputFill = Object.values(restValues).every(
  //     (inputValue) => inputValue !== ""
  //   );
  //   return isAllInputFill;
  // };

  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">게시글 쓰기</h3>
        <AddButton buttonText="등록" isFormComplete={true} />
      </div>
      <section>
        {INPUT_CONTENTS.map((content, index) => {
          return (
            <TextInput
              key={index}
              content={content}
              // onChange={handleValueChange}
            />
          );
        })}
        <FileInput
          name="image"
          label="이미지"
          // onChange={handleValueChange}
        />
      </section>
    </main>
  );
}

export default AddBoard;
