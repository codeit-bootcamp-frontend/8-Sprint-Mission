import axiosInstance from "./instance";

interface UploadImageProps {
  imageFile: File;
}

export default async function uploadImage({ imageFile }: UploadImageProps) {
  try {
    const res = await axiosInstance.post("/images/upload", { image: imageFile });
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
}
