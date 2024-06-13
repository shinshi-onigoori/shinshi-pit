import React from "react";
import PitFrame from "../_components/pit-frame";
import SampleToolbar from "./_components/toolbar";


export default function layout ({ children }: { children: React.ReactElement }) {
  return (
    <PitFrame name={"ツールバーナビゲーション"}>
      {children}
      <SampleToolbar />
    </PitFrame>
  );
}
