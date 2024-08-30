"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { useState } from "react";

const Grid = () => {
  const [isTechStackPopUp, setIsTechStackPopUp] = useState(false);
  const handelTechStackPopUp = () => {
    setIsTechStackPopUp((prev) => !prev);
  };
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              spareImg,
              titleClassName,
            },
            i
          ) => (
            <BentoGridItem
              id={id}
              key={i}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}
              handelClick={handelTechStackPopUp}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
