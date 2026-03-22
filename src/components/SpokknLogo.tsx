interface SpokknLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

const sizes = {
  sm: "h-6",
  md: "h-8 md:h-10",
  lg: "h-10 md:h-12",
};

const SpokknLogo = ({ className = "", size = "md", variant = "dark" }: SpokknLogoProps) => {
  const logoSrc = variant === "dark" ? "/logo/logo-dark.png" : "/logo/logo-light.png";
  
  return (
    <img 
      src={logoSrc}
      alt="Spokkn Logo" 
      className={`${sizes[size]} ${className}`}
    />
  );
};

export default SpokknLogo;
