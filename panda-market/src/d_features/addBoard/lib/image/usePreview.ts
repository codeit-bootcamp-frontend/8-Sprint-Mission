import { useEffect, useState } from 'react';

interface PreviewProps {
  value: File[] | null;
}

export const usePreview = ({ value }: PreviewProps) => {
  const [preview, setPreview] = useState<string>('');

  useEffect(() => {
    if (!value || value.length < 1) return;
    const nextPreview = URL.createObjectURL(value[0]);
    setPreview(nextPreview);

    return () => {
      setPreview('');
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return { preview };
};
