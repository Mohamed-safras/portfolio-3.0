"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { groq } from "next-sanity";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "../sanity/sanity";
import { Project } from "@/interface/project";
import { EXPERIENCE_GROQ } from "@/sanity/queries";

const RecentProjects = () => {
  const [newProjects, setNewProjects] = useState<Project[]>([]);

  const getProject = async () => {
    try {
      const response = await client.fetch(groq`${EXPERIENCE_GROQ}`);
      setNewProjects(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
        {newProjects.map(
          ({
            _id,
            livelink,
            sourcelink,
            techstacks,
            title,
            description,
            thumbnail,
          }) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[380px] w-[80vw]"
              key={_id}
            >
              <PinContainer title={sourcelink} href={sourcelink}>
                <div className="relative flex items-center justify-center sm:w-[380px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image layout="fill" src="/bg.png" alt="bgimg" />
                  </div>
                  <Image
                    layout="fill"
                    src={`${thumbnail}`}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {techstacks.map((url, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          layout="fill"
                          src={`${url}`}
                          alt="icon5"
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={livelink || ""}
                    target="_blank"
                    className="flex justify-center items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Link>
                </div>
              </PinContainer>
            </div>
          )
        )}
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[380px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item?.link} href={item?.link}>
              <div className="relative flex items-center justify-center sm:w-[380px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image layout="fill" src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  layout="fill"
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        layout="fill"
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={item?.link || ""}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
