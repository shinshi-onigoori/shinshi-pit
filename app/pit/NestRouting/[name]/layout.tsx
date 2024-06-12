import React from "react";
import PitFrame from "../../_components/pit-frame";


export default function layout ({ children }: { children: React.ReactElement }) {
  return (
    <PitFrame name={"ネストルーティング"}>
      {children}
    </PitFrame>
  );
}