import { getAllDocs } from "@/docs";
import { DocTypeEnum } from "@/docs/types";
import DocListItemPreview from "../docs/docPreview";

export default function SidebarKnowledge() {
  const gameDocs = getAllDocs({
    docEnum: DocTypeEnum.Game,
  });
  return (
    <div className="h-full flex flex-col w-60 bg-black text-white fixed left-0 top-20 px-4">
      <div className="min-h-[2vh]"></div>
      <h1 className="text-2xl font-bold mb-2 text-white mb-8">Knowledge</h1>
      <p className="text-gray-400">Games</p>
      {gameDocs.map((doc) => (
        <DocListItemPreview key={doc.slug} doc={doc} />
      ))}
    </div>
  );
}
