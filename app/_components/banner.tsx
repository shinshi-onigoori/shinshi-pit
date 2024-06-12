import ShinshiIntroIcon from "./shinshi-intro-icon";

export default function Banner() {
  return (
    <div className="container w-full border border-zinc-600 dark:border-zinc-600 rounded-lg bg-zinc-700 dark:bg-zinc-700 text-white dark:text-white">
      <h2 className="flex w-full justify-center py-5 text-xl">
        Welcome to&nbsp;
        <code className="font-mono font-bold">Shinshi-pit!</code>
      </h2>
      <div className="flex text-sm md:text-base my-4">
        <ShinshiIntroIcon />
        <p className="ml-4">
          私の名前は <span className="font-bold">Shinshi</span><br />
          このサイトではWeb作ってみたものをゴミ箱のように管理するのを目標としている！！
          <br />
          <br />
          マークアップ、フロントエンド、バックエンドの毎日。来年からフロントエンジニア。Next.jsが一番経験値あるひよっこ。
          <span className="text-sky-400">
            <a href="https://x.com/d151005">ninoさん</a>
          </span>
          信者
        </p>
      </div>
    </div>
  );
}
