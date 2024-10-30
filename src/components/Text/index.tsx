type IProps = {
  className?: string;
  message: string;
};

export const Text = ({ className, message }: IProps) => {
  return <p className={className}>{message}</p>;
};
