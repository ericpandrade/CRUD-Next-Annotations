import React from "react";

type IProps = {
  color?: string;
  message: string;
  className?: string;
};

export const Title = ({ color, message, className }: IProps) => {
  const colorText = color ? color : "text-zinc-600";
  return (
    <h1 className={`text-2xl font-bold ${colorText} ${className}`}>
      {message}
    </h1>
  );
};
