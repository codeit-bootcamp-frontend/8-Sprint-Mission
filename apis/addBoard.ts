import axios from "@/lib/axios";

interface Params<T> {
  data: T;
}

export const postNewArticle = async ({ data }: Params<object>) => {
  const res = await axios.post("/articles", data);
};

export const postUploadImage = async ({ data }: Params<File>) => {
  const formData = new FormData();
  formData.append("image", data);
  try {
    const res = await axios.post("/images/upload", formData);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
