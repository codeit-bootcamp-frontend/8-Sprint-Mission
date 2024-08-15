import { useEffect, useState } from 'react';

interface PreviewProps {
  value: File | null;
}

export const usePreview = ({ value }: PreviewProps) => {
  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview('');
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return { preview };
};
