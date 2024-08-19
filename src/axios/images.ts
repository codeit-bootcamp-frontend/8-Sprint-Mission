import axiosInstance from "./instance";

interface UploadImageProps {
  imageFile: File;
}

export default async function uploadImage({ imageFile }: UploadImageProps) {
  // image file을 form data로 변경
  const formDataForSubmit = new FormData();
  formDataForSubmit.append("image", imageFile);

  try {
    const res = await axiosInstance.post("/images/upload", formDataForSubmit, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
}
