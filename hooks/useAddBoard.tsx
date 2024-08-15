import { ChangeEvent, MouseEvent, useContext, useState } from "react";

import type { InputChangeEvent } from "@/types/alias";
import { postNewArticle, postUploadImage } from "@/apis/addBoard";
import { Context, TokenContext } from "@/context/TokenProvider";
import { useRouter } from "next/router";
const INIT_ADD_BOARD_INPUT = {
  image: "",
  content: "",
  title: "",
};

const useAddBoard = () => {
  const [inputValues, setInputValues] = useState(INIT_ADD_BOARD_INPUT);
  const { accessToken } = useContext(TokenContext) as Context;
  const router = useRouter();

  const onChangeInput = (e: InputChangeEvent) => {
    switch (e.target.name) {
      case "title":
        setInputValues((prev) => ({ ...prev, title: e.target.value }));
        break;
      case "content":
        setInputValues((prev) => ({ ...prev, content: e.target.value }));
        break;
      default:
        break;
    }
  };

  const onChangeFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const data = e.target.files[0];
    const res = await postUploadImage({ data, token: accessToken });
    setInputValues((prev) => ({ ...prev, image: res.url }));
  };

  const onSubmitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postNewArticle({ data: inputValues, token: accessToken });
    router.push("/boards");
  };

  return { onChangeInput, inputValues, onSubmitForm, onChangeFileInput };
};

export default useAddBoard;
