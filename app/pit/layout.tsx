import React from "react";

export default function layout ({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-[80vh]">
        {children}
    </div>
  );
}
