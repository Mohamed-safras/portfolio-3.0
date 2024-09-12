"use client";
import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "./Developer";
import { TimelineExperience } from "./TimeLineExperience";
import { Expericene } from "@/interface/experience";
import Clients from "./Clients";
import { client } from "@/sanity/sanity";
import { EXPERIENCE_GROQ } from "@/sanity/queries";
import { groq } from "next-sanity";

const Experience = () => {
  const [animationName, setAnimationName] = useState<string>("idel");
  const [experience, setExperience] = useState<Expericene[]>([]);

  const handleAnimation = (animationName: string = "idel") => {
    setAnimationName(animationName);
  };

  const getExperiences = async () => {
    try {
      const res = await client.fetch(groq`${EXPERIENCE_GROQ}`);
      console.log(res);
      setExperience(res);
    } catch (err: any) {}
  };

  useEffect(() => {
    getExperiences();
  }, []);
  return (
    <section className="py-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="heading ">
          My Work <span className="text-purple">Experience</span>
        </h3>

        <div className="grid gap-y-5 md:gap-5 lg:grid-cols-3 grid-cols-1  mt-12">
          <div className="col-span-1  rounded-lg bg-black-100 border border-black-300">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-2}
                  scale={2}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="col-span-2 rounded-lg bg-black-100 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              <TimelineExperience handleAnimation={handleAnimation} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
