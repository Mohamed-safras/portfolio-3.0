"use client";

import React, { useEffect, useState } from "react";
import { client } from "../sanity/sanity";

import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { Companies, TestimonialItem } from "@/interface/testimonials";
import { groq } from "next-sanity";
import { COMPANIES, TESTIMONIALS_GROQ } from "@/sanity/queries";
import Image from "next/image";

const Clients = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>();
  const [companies, setCompanies] = useState<Companies[]>();
  const [isTestimonialsLoading, setIsTestimonialsLoading] =
    useState<boolean>(false);
  const [hasTestimonialsError, setHasTestimonialsError] = useState<string>("");

  const [isCompaniesLoading, setIsCompaniesLoading] = useState<boolean>(false);
  const [hasCompaniesError, setHasCompaniesError] = useState<string>("");

  const getTestimonials = async () => {
    try {
      setIsTestimonialsLoading(true);
      const res = await client.fetch(groq`${TESTIMONIALS_GROQ}`);

      setTestimonials(res);
      setIsTestimonialsLoading(false);
    } catch (error: any) {
      setHasTestimonialsError(error.message);
    }
  };

  const getCompanies = async () => {
    try {
      setIsCompaniesLoading(true);
      const res = await client.fetch(groq`${COMPANIES}`);
      console.log(res);
      setCompanies(res);
      setIsCompaniesLoading(false);
    } catch (error: any) {
      setHasCompaniesError(error.message);
    }
  };

  useEffect(() => {
    getTestimonials();
    getCompanies();
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {!isTestimonialsLoading && (
          <div className="max-h-fit h-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        )}

        {!isCompaniesLoading && (
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-lg:mt-10">
            {companies?.map(({ company_logo, _id }) => (
              <React.Fragment key={_id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  {company_logo.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo}
                      alt={logo}
                      width={0}
                      height={0}
                      className={index === 0 ? "md:w-10 w-5" : "md:w-24 w-20"}
                    />
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
