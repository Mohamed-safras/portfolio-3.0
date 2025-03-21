import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import TypeWriter from "./TypeWriter";
import MagicButton from "./ui/MagicButton";
import { MdArrowOutward } from "react-icons/md";
import { personalInfo } from "@/data";
import Profile from "../public/myprofile.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="relative my-20 z-10 flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-[#E4ECFF] text-xs tracking-widest font-normal text-center uppercase max-w-80 md:text-base ">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            words="Building high performant and scalable Full Stack Applications using"
            className="text-3xl font-bold text-center md:text-4xl lg:text-5xl"
          >
            <span className="text-[#CBACF9] inline">
              <TypeWriter
                strings={[
                  "Frontend - React JS, Next JS",
                  "Backend - Node JS, Nest JS, Spring Boot, AWS",
                ]}
                loop={true}
                autoStart={true}
              />
            </span>
          </TextGenerateEffect>
          <h4 className="text-[#E4ECFF] font-normal text-sm text-center  mb-5 md:tracking-widest md:text-base lg:text-base">
            Hi! I&apos;m {personalInfo.name}, a Software Engineer based in Sri
            Lanka.
          </h4>
          <div className="md:max-w-48 md:max-h-48 max-w-18 max-h-18 m-2">
            <Image src={Profile} alt="profile" className="rounded-full" />
          </div>
          <a href="#contact">
            <MagicButton
              title={"Let's talk"}
              icon={<MdArrowOutward />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
