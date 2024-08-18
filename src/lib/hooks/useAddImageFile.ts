import { useState } from 'react';

const useAddImageFile = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [initialPreview, setInitialPreview] = useState<string>();

  const handleImageChange = (name: string, file: File | null) => {
    if (file) setImageFile(file);
  };

  return { imageFile, initialPreview, handleImageChange, setInitialPreview };
};

export default useAddImageFile;
