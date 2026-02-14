interface SpokknLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

const sizes = {
  sm: "text-lg",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl",
};

const SpokknLogo = ({ className = "", size = "md", variant = "dark" }: SpokknLogoProps) => {
  const textColor = variant === "dark" ? "text-foreground" : "text-primary-foreground";
  
  return (
    <span className={`${sizes[size]} font-extrabold tracking-tight ${textColor} ${className}`}>
      spo
      <span className="text-primary">&lt;&gt;</span>
      n
    </span>
  );
};

export default SpokknLogo;
