import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value?: string | number | readonly string[];
  previewImg?: string | null;
  changeValue: (name: string, value: File | null) => void;
  className?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  className: string;
  changeValue: (name: string, value: string) => void;
}

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  className?: string;
  variant: string;
  label?: string;
  changeValue: (name: string, value: string) => void;
}

export type { FileInputProps, InputProps, TextAreaInputProps };
