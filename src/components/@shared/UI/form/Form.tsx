import React from "react";

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

function Form({ children, onSubmit, className }: FormProps) {
  return (
    <form className={`${className} gap-6 flex flex-col`} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
