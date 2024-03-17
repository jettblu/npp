import Image from "next/image";

export default function SocialFooter() {
  return (
    <div className="fixed bottom-0 md:py-2 py-4 w-full bg-white/80">
      <div className="float-right mr-8">
        <div className="flex flex-row space-x-3 md:space-x-6 ">
          {/* show email icon */}
          <a
            href="mailto:noparkingplayers@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/social/email.png"
              width={40}
              height={40}
              alt="Email icon"
              className="hover:cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/noparkingplayers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/social/instagram.png"
              width={38}
              height={38}
              alt="Email icon"
              className="hover:cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
