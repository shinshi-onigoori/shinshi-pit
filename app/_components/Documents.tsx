import Link from "next/link";
import { pitContents } from "../pitContents";
import { FC } from "react";

type DocumentProps = {
  pitContentType: pitContentType;
};

//Document単体のコンポーネント
const Document: FC<DocumentProps> = (pitContentType) => {
  return (
    <>
      <Link
        href={pitContentType.pitContentType.link}
        key={pitContentType.pitContentType.name}
      >
        <div className="text-white dark:text-white p-10 border rounded-lg border-zinc-800 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-900 shadow-black dark:shadow-black shadow-md">
          <div className="text-xl">{pitContentType.pitContentType.name}</div>
          <div className="text-slate-400 dark:text-slate-400 mt-5">
            {pitContentType.pitContentType.description}
          </div>
        </div>
      </Link>
    </>
  );
};

//Documentsコンポーネント
export default function Documents({
  inputType,
}: {
  inputType?: "component" | "animation" | "Demo" | "App" | "art";
}) {
  const pickUpPitContentsData = function () {
    if (!inputType) {
      return pitContents;
    } else {
      return pitContents.filter((filterData) => filterData.type === inputType);
    }
  };

  return (
    <div className="mb-28 grid gap-4 lg:grid-cols-2">
      {pickUpPitContentsData().map((pitContentData: pitContentType) => (
        // eslint-disable-next-line react/jsx-key
        <Document
          pitContentType={{
            id: pitContentData.id,
            name: pitContentData.name,
            description: pitContentData.description,
            link: pitContentData.link,
            type: pitContentData.type,
          }}
        />
      ))}
    </div>
  );
}
