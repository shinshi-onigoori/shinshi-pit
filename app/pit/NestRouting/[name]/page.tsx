import PitFrame from "../../_components/pit-frame";
import ToolbarNavigation from "../../toolbar-navigation/_components/toolbar";

export default function Page({
  params,
}: {
  params: { name: string; component: React.ReactNode };
}) {
  return (
    <PitFrame name={params.name}>
      {params.name == "toolbar-navigation" && <ToolbarNavigation />}
      {params.name == "炎のアニメーション作ってみたよ" && <></>}
    </PitFrame>
  );
}
