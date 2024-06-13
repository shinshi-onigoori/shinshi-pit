import React from "react";

export default function layout ({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-full">
        {children}
    </div>
  );
}
