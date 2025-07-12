import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="border rounded p-4 shadow">{children}</div>;
};

export const CardContent: FC<CardProps> = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};
