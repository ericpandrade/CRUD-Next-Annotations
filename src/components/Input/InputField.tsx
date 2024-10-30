import { Input } from "@/components/ui/input";
import {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEvent,
} from "react";
import { UseFormRegister } from "react-hook-form";

type IProps = {
  type?: HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
  stateWatchKey?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
};

export const InputField = ({
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  stateWatchKey,
  onKeyDown,
  register,
}: IProps) => {
  return (
    <>
      {stateWatchKey && register ? (
        <Input
          type={type}
          value={value}
          {...register(stateWatchKey)}
          onBlur={onBlur}
          autoFocus
          placeholder={placeholder}
          className={className}
        />
      ) : (
        <Input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          autoFocus
          placeholder={placeholder}
          className={className}
        />
      )}
    </>
  );
};
