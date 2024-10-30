import { Button as ButtonComponent } from "@/components/ui/button";

interface IProps {
  action?: () => void;
  icon?: React.ReactNode;
  label?: string;
  variant?:
    | "link"
    | "outline"
    | "ghost"
    | "default"
    | "destructive"
    | "secondary"
    | null
    | undefined;
  size?: "default" | "icon" | "sm" | "lg" | null | undefined;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({
  action,
  icon,
  label,
  variant = "default",
  size = "default",
  className,
  type = "button",
}: IProps) => {
  return (
    <ButtonComponent
      variant={variant}
      size={size}
      onClick={action}
      className={className}
      type={type}
    >
      <div className="flex justify-between items-center">
        {label}
        {icon}
      </div>
    </ButtonComponent>
  );
};
