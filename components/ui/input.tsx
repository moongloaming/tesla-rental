import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
  return <input className="border rounded p-2 w-full" {...props} />;
};
