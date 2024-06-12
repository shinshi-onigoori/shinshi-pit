import React from "react";
import PitFrame from "../_components/pit-frame";
import Toolbar from "./_components/toolbar";


export default function ({ children }: { children: React.ReactElement }) {
  return (
    <PitFrame name={"ツールバーナビゲーション"}>
      {children}
      <Toolbar />
    </PitFrame>
  );
}
