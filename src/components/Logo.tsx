import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  imgClassName?: string;
  showText?: boolean;
  variant?: "light" | "dark";
};

const Logo = ({
  imgClassName = "h-10 w-auto",
  showText = false,
  variant = "light",
  className = "",
  ...props
}: LogoProps) => (
  <div className={`flex items-center gap-3 ${className}`} {...props}>
    <img
      src={
        showText
          ? variant === "dark"
            ? "/v2-logo-primary-dark.svg"
            : "/v2-logo-primary-light.svg"
          : variant === "dark"
            ? "/v2-logo-horizontal-dark.svg"
            : "/v2-logo-horizontal.svg"
      }
      alt="ZeroOne D·O·T·S AI"
      className={`object-contain ${imgClassName}`}
      loading="lazy"
    />
  </div>
);

export default Logo;
