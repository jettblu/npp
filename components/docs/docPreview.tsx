import { DocType, DocTypeEnum, getDocEnumFromString } from "@/docs/types";
import Link from "next/link";

type Props = {
  doc: DocType;
};

const DocListItemPreview = ({ doc }: Props) => {
  const { slug, title, lastUpdate } = { ...doc };
  const docTypeEnum = getDocEnumFromString(doc.category);
  let urlBase = "";
  let urlAs = "";
  switch (docTypeEnum) {
    case DocTypeEnum.Game:
      urlBase = "/learn/games/[slug]";
      urlAs = `/learn/games/${slug}`;
      break;
    case DocTypeEnum.Skill:
      urlBase = "/learn/skills/[slug]";
      urlAs = `/learn/skills/${slug}`;
      break;
    case DocTypeEnum.Form:
      urlBase = "/learn/forms/[slug]";
      urlAs = `/learn/forms/${slug}`;
      break;
    default:
      urlBase = "/games/[slug]";
      urlAs = `/learn//games/${slug}`;
      break;
  }
  const formattedDate = new Date(lastUpdate.replace(/-/g, "/")).toDateString();
  const listItemId = `${title}ListPreview`;
  const listItemTitleId = `${title}Title`;

  return (
    <Link as={urlAs} href={urlBase}>
      <div
        id={listItemId}
        className="rounded-md px-2 py-4 hover:cursor-pointer hover:bg-gray-500/10 hover:dark:bg-gray-900 text-slate-200 dark:text-slate-700"
      >
        <div className="flex flex-row space-x-2">
          <h1
            id={listItemTitleId}
            className="text-xl font-semibold hover:underline"
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default DocListItemPreview;
