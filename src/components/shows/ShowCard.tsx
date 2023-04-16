import { NextPage } from "next";

import { IShow } from "@/shows/models";
import DateFormatter from "../time/DateFormatter";

interface Props {
  show: IShow;
}
const ShowCard: NextPage<Props> = (props) => {
  const { show } = { ...props };

  const handleShowClicked = function () {};

  return (
    <div
      className="flex flex-col md:flex-row border p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
      onClick={() => handleShowClicked()}
    >
      <img
        src={show.photoPath}
        className="h-50 w-40 object-cover"
        alt={`${show.name} show poster.`}
      />
      <div className="flex flex-col space-y-2 mt-2 px-2">
        <div className="flex flex-col">
          <div className="mb-2">
            <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
              {show.name}
            </p>
            <DateFormatter dateString={show.date} />
          </div>
          <div className="text-lg">{show.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
