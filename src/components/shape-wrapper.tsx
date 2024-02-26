"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface IShapeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ShapeWrapper = ({ children, className }: IShapeWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const measureChildren = () => {
      const child = ref.current?.firstChild as HTMLElement;
      if (child) {
        const { width, height } = child.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    measureChildren();
    window.addEventListener("resize", measureChildren);
    return () => window.removeEventListener("resize", measureChildren);
  }, [children]);

  return (
    <div
      ref={ref}
      className={cn("clip-path", className)}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      {children}
    </div>
  );
};

export default ShapeWrapper;
