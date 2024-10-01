import { addArticle } from '@lib/api/article.api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useArticleForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [initialPreview, setInitialPreview] = useState<string>();

  const submitArticle = async () => {
    await addArticle({ content: content, image: image, title: title }).then(
      (res) => {
        router.reload();
      }
    );
  };

  const handleImageChange = (name: string, file: File | null) => {
    if (file) setImageFile(file);
  };

  useEffect(() => {
    setImage(
      'https://flexible.img.hani.co.kr/flexible/normal/640/427/imgdb/original/2023/1226/20231226501610.jpg'
    );
  }, []);

  return {
    setTitle,
    setContent,
    setImage,
    submitArticle,
    imageFile,
    initialPreview,
    handleImageChange,
    setInitialPreview,
  };
};

export default useArticleForm;
