import { addArticle } from '@lib/api/articleApi';
import { useEffect, useState } from 'react';

const useArticleForm = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [initialPreview, setInitialPreview] = useState<string>();

  const submitArticle = async () => {
    await addArticle({ content: content, image: image, title: title });
  };

  const handleImageChange = (name: string, file: File | null) => {
    if (file) setImageFile(file);
  };

  useEffect(() => {
    setImage(
      'https://www.cnet.com/a/img/resize/63164aed1c819325f515756528001de66fb32125/hub/2023/04/26/df7eabee-9cbb-4196-bdfa-96ab61794591/samsung-galaxy-book-3-ultra-02.jpg?auto=webp&fit=crop&height=675&width=1200'
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
