import { FaLocationArrow } from "react-icons/fa6";

import { personalInfo, socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="w-full py-20" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-0 min-h-60">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={500}
          height={500}
          className="w-full opacity-50"
        />
      </div>

      <div className="flex h-full flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href={`mailto:${personalInfo.email}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm mb-10 md:font-normal font-light">
          Copyright © {date} {personalInfo.name}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link href={info.link} target="_blank" key={info.id}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
