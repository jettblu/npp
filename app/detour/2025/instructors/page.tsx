import Image from "next/image";
import { Oswald, Open_Sans } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: "variable" });
const open_sans = Open_Sans({ subsets: ["latin"], weight: "variable" });

export default function Instructors() {
  return (
    <div
      className={`bg-detourPrimaryLight min-h-[100vh] -mt-4 -mb-8 pb-4 px-2 ${open_sans.className}`}
    >
      <h1
        className={`text-6xl text-left font-bold text-detourSecondaryDark max-w-5xl mx-auto ${oswald.className}`}
      >
        Meet The Instructors
      </h1>
      <div className="max-w-5xl mx-auto flex flex-row h-[8px]">
        <div className="bg-detourPrimaryYellow w-full" />
      </div>
      <div className="flex flex-col space-y-3 max-w-5xl mx-auto prose-xl text-detourPrimaryDark">
        <div className="flex flex-col space-y-2 mt-2 text-detourPrimaryDark">
          <Image
            src="/detour/2025/instructor headshots/James Dugan.png"
            width={100}
            height={100}
            alt="James Dugan"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              James Dugan
            </h1>
            <p className="">
              James Dugan was born in Northern California but moved to Chicago
              to learn what this whole "winter" thing is. In his nearly 20 years
              of improv experience he has performed for The Second City, iO, The
              Annoyance, and any other stage in Chicago that will give him the
              chance. He currently can be seen with Clued In at Second City,
              Hitchcocktails at The Annoyance, The Armando and Whirled News
              Tonight at iO, and all over the country with his duo Jaymes
              Gretchky.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2025/instructor headshots/Gretchen Eng.png"
            width={100}
            height={100}
            alt="Gretchen Eng"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              Gretchen Eng
            </h1>
            <p className="">
              Gretchen Eng has worked in the Chicago comedy community since her
              salad days in the Second City Teen Ensemble. Following a brief
              stint studying classical voice and doing sketch comedy at Vassar
              College, she has been a producer and performer at iO for ten
              years, specifically with Devil's Daughter, The Armando Diaz
              Experience, and in her duo Jaymes Gretchky. She is a professor in
              Roosevelt University's Chicago College of Performing Arts, teaches
              all levels of the training center at iO, coaches, and designs
              curricula for an array of corporate, non-profit, and educational
              organizations as the Director of Professional Development and
              Partnerships for the theater.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2025/instructor headshots/Andi Sharavsky.png"
            width={100}
            height={100}
            alt="Andi Sharavsky"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              Andi Sharavsky
            </h1>
            <p className="">
              Andi Sharavsky has performed musical improv with such headlining
              groups as The Deltones, The Musical Armando, and Fraudway at iO
              Chicago; ImprovAcadia, Infinite Sundaes - The Second City Training
              Center’s musical house ensemble; and Anarchy: An Improvised Rock
              Opera. Andi served as a contributor for The Onion News Network,
              The Chicago Tribune, Reductress, McSweeney’s, Splitsider, and
              BuzzFeed.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2025/instructor headshots/David Yontz.png"
            width={100}
            height={100}
            alt="David Yontz"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              David Yontz
            </h1>
            <p className="">
              David Yontz (Music Director) has been slinging musical goofs in
              Chicago since 2010, both as a solo act and as music director for
              countless sketch and improv shows at such venues as The Second
              City, iO Chicago, Comedy Sportz, and The Annoyance. His accolades
              include winning the Deli Magazine Chicago Artist of the Month poll
              in October 2013 and receiving an artist grant from The City of
              Chicago Department of Cultural Affairs and Special Events in 2015
              and 2019. He wants everybody to know that he feels fortunate to be
              turning his dreams into his profession, and needs $2.25 to take
              the bus home after the show.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
