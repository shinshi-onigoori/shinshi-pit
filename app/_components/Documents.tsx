import Link from "next/link";
import { pitContents } from "../pitContents";

//Document単体のコンポーネント
const Document = ({ id, name, description, link, type,}: pitContentType) => {
  return (
    <>
      {type == "Demo" && (
        <Link href={link} as={`pit/${name}`} key={name}>
          <div className="text-white dark:text-white p-10 border rounded-lg border-zinc-800 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-900 shadow-black dark:shadow-black shadow-md">
            <div className="text-xl">{name}</div>
            <div className="text-slate-400 dark:text-slate-400 mt-5">{description}</div>
          </div>
        </Link>
      )}
      {type == "App" && (
        <Link href={link}>
          <div className="text-white dark:text-white p-10 border rounded-lg border-zinc-800 bg-zinc-900 shadow-black shadow-md">
            <div className="text-xl">{name}</div>
            <div className="text-slate-400 dark:text-slate-400 mt-5">{description}</div>
          </div>
        </Link>
      )}
    </>
  );
};

//Documentsコンポーネント
export default function Documents() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {pitContents.map((pitContentData: pitContentType) => (
        <Document
          id={pitContentData.id}
          name={pitContentData.name}
          description={pitContentData.description}
          link={pitContentData.link}
          type={pitContentData.type}
        />
      ))}
    </div>
  );
}
