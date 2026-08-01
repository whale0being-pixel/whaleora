import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      style={{ 
        maxWidth: "1280px", 
        marginLeft: "auto", 
        marginRight: "auto", 
        paddingLeft: "24px", 
        paddingRight: "24px" 
      }}
      className={`w-full ${className}`}
    >
      {children}
    </div>
  );
}