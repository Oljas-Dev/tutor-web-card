import type { ReactNode } from "react";

interface SmallBlockTypes {
  styles?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function SmallBlock({
  styles,
  onClick,
  children,
}: SmallBlockTypes) {
  return (
    <div
      className={`${styles} flex justify-center items-center w-10 h-10 bg-jade 
    border border-r-0 border-b-0 border-t-reflection border-l-reflection  rounded-lg shadow-dark`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
