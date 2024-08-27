import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";

type FormRules = {
  email: string;
  password: string;
};

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
  name: string;
  className: string;
  hideBtn?: boolean;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions<FormRules>;
  errorMsg?: string;
  changeValue?: (name: string, value: string) => void;
}

interface Tag {
  id: string;
  name: string;
}

interface TagInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  className?: string;
  tags: Tag[];
  changeValue: (name: string, newTags: Tag[]) => void;
}

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  className?: string;
  variant: string;
  label?: string;
  changeValue: (name: string, value: string) => void;
}

export type {
  FileInputProps,
  InputProps,
  TagInputProps,
  TextAreaInputProps,
  Tag,
};
