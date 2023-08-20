import { getAllDocs } from "@/docs";
import { DocTypeEnum } from "@/docs/types";
import DocListItemPreview from "../docs/docPreview";
import Link from "next/link";

export default function SidebarKnowledge(props: { hide: boolean }) {
  const { hide } = { ...props };
  const gameDocs = getAllDocs({
    docEnum: DocTypeEnum.Game,
  });
  const formDocs = getAllDocs({
    docEnum: DocTypeEnum.Form,
  });
  return (
    <div
      className={`${
        hide && "invisible"
      } h-full flex flex-col w-full md:w-60 bg-black text-white fixed left-0 top-20 px-4`}
    >
      <div className="min-h-[2vh]"></div>
      <Link href="/learn" className="hover:cursor-pointer">
        <h1 className="text-2xl font-bold mb-2 text-white mb-8">Knowledge</h1>
      </Link>
      <div className="flex flex-col space-y-4">
        {/* games section */}
        <div>
          <p className="text-gray-400">Games</p>
          {gameDocs.map((doc) => (
            <DocListItemPreview key={doc.slug} doc={doc} />
          ))}
        </div>
        <div>
          <p className="text-gray-400">Forms</p>
          {formDocs.map((doc) => (
            <DocListItemPreview key={doc.slug} doc={doc} />
          ))}
        </div>
      </div>
    </div>
  );
}
