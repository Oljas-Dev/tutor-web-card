import type { ReactNode } from "react";

interface SmallBlockTypes {
  styles?: string;
  children: ReactNode;
}

export default function SmallBlock({ styles, children }: SmallBlockTypes) {
  return (
    <div
      className={`text-jet flex justify-center items-center w-10 h-10 bg-jade 
    border border-r-0 border-b-0 border-t-reflection border-l-reflection  rounded-lg shadow-dark ${styles}`}
    >
      {children}
    </div>
  );
}
