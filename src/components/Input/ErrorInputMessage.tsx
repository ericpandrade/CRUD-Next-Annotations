type IProps = {
  message: string;
  className: string;
};

export const ErrorInputMessage = ({ message, className }: IProps) => {
  return (
    <span className={`text-red-400 font-medium text-sm ${className}`}>
      {message}
    </span>
  );
};
