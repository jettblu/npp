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
            src="/detour/2024/instructor headshots/DC Headshot.jpg"
            width={100}
            height={100}
            alt="David Charles"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              David Charles
            </h1>
            <p className="">
              David Charles, PhD, works as a professional improvisational
              practitioner, deviser, author, and improv scholar. A New Zealander
              by birth, David has called central Florida home since 2003, where
              he has served as a Professor of Theatre and Dance, Departmental
              Chair, Producing Director of the historic Annie Russell, and
              Founding Artistic Director of Rollins Improv Players at Rollins
              College. He is a former Equity improviser with Walt Disney World’s
              Comedy Warehouse and a proud ensemble member, instructor, and
              director at the region’s preeminent improv venue, Sak Comedy Lab.
            </p>
            <p>
              His Improv Dictionary: An A to Z of Improvisational Terms,
              Techniques, and Tools with Routledge hits the shelves in April.
              Original improvisational works include: (Your) Opera in a Trunk,
              Variations on a Theme, The Lost Comedies of William Shakespeare,
              Upton Abbey: An Improvised Comedy of English Manors, Murder We
              Wrote, and Lights Up: The Improvised Rock Opera. For more about
              David's career and projects, and to access his comprehensive
              online Game Library, visit{" "}
              <a
                href="www.improvdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 underline"
              >
                www.improvdr.com
              </a>
              .{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2024/instructor headshots/FB Headshot.jpg"
            width={100}
            height={100}
            alt="Fred Brown"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              Fred Brown
            </h1>
            <p className="">
              Fred Brown graduated from the Pig Iron School / University of the
              Arts in Philadelphia with an MFA in Devised Performance. Prior to
              that, he worked as a Latin and Greek teacher, holding an
              undergraduate degree in Classical Philology from Harvard
              University. He has been involved in performing, directing, and
              coaching improv comedy since 2013. He has participated in improv
              festivals across the US and Canada.
              <p>
                For six years, he was part of weekly improv comedy shows in
                Philadelphia, primarily with the teams The Future and Dream
                Tank. He also instructed improv at the Philly Improv Theater,
                catering to beginners seeking to broaden their skills and
                advanced improvisers aiming to refine their craft.
              </p>
              <p>
                At one point, he was hired to recite Duchamp’s manifesto in a
                men’s bathroom at the Philadelphia Museum of Art.
              </p>
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2024/instructor headshots/JP Headshot.jpg"
            width={100}
            height={100}
            alt="Jonathan Pitts"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              Jonathan Pitts
            </h1>
            <p className="">
              Jonathan Pitts is an award-winning international improv theatre
              artist and storyteller. He's performed and/or taught in 26
              countries and 104 cities. He's the former Executive Director of{" "}
              <span className="font-bold">Chicago Improv Productions</span>;
              Co-Founder/Producer -
              <span className="font-bold">Chicago Improv Festival</span>;
              Creator/Producer -{" "}
              <span className="font-bold">College Improv Tournament</span>;
              Founder/Producer -{" "}
              <span className="font-bold">Teen Comedy Fest</span>;
              Founder/Producer -{" "}
              <span className="font-bold">Chicago Podcast Festival</span>;
              Creator/Director of improv theatre productions The Oracle; The
              Silent Movie; and Storybox Theatre. He taught, coached, and
              directed at{" "}
              <span className="font-bold">The Second City Training Center</span>
              for 16 years. He’s a contributing writer to Anne Libera's book,
              "The Second City Improv Almanac''. He’s written the forward to two
              books on improv: Improv Shaman and On Directing Improv. He’s been
              interviewed for several improv books and has been a guest on many
              podcasts. He’s also the narrator for the feature film He Went That
              Way which was released worldwide in September 2023.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2024/instructor headshots/RG Headshot.webp"
            width={100}
            height={100}
            alt="Ryan Goodman"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              Ryan Goodman
            </h1>
            <p className="">
              Ryan Goodwin is a 28-year old, Orlando-based musician whose
              current credits include music director & keyboardist for bands
              such as Wish Radio and Queen K & the Vibe; music director at SAK
              Comedy Lab; and performing at Universal Studios Orlando. He is the
              former keyboardist of Raspberry Pie and has composed for musicals
              seen at the Orlando Fringe Festival, including Buggin' Out: A
              Small Musical (2018), and Ladies Room: The Musical (2019).
            </p>
            <p>
              Since 2010, he has been producing electronic music under the name
              Metablip, and has releases on Spotify & Bandcamp. His latest
              project, Goon Reunion, is also now on Spotify and other streaming
              platforms.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <Image
            src="/detour/2024/instructor headshots/SL Headshot.webp"
            width={100}
            height={100}
            alt="Shaun Landry"
            className={`rounded-md h-64 w-64 object-cover`}
          />
          <div className="flex flex-col space-y-1">
            <h1 className="text-4xl font-bold text-detourSecondaryBlue">
              Shaun Landry
            </h1>
            <p className="">
              Shaun Landry founded The Ledge Theatre in Los Angeles, which does
              improvisation, sketch, poetry, and storytelling and is more geared
              specifically to diversity in theater. She was a member of The
              Second City Chicago, Geese Theatre Company (drama therapy in
              prisons and penitentiaries), and Co-Founded The San Francisco
              Improv Festival. She performs with improv and life partner Hans
              Summers as Landry and Summers. As a SAG Actor, she can be seen in
              the movies Milk, Read You Like A Book, and BAD CGI SHARKS. She can
              be read in the book Whose Improv Is It Anyway? Beyond The Second
              City about diversity in improvisational theater.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
