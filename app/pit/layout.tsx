import React from "react";
import Toolbar from "../_components/toolbar";

export default function layout ({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-full">
        {children}
    </div>
  );
}
