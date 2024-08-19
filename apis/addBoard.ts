import axios from "@/lib/axios";

interface Params<T> {
  data: T;
  token: string;
}

export const postNewArticle = async ({ data, token }: Params<object>) => {
  const res = await axios.post("/articles", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const postUploadImage = async ({ data, token }: Params<File>) => {
  const formData = new FormData();
  formData.append("image", data);
  try {
    const res = await axios.post("/images/upload", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
