import React from "react";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import app1 from "../assets/talkertive-mom.svg";
import app2 from "../assets/justis.svg";
import app3 from "../assets/claims.svg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";

export const Work = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      className="bg-gold flex  flex-col pt-10 px-3 md:px-10 lg:px-20"
    >
      <div className="mt-5 md:mt-10">
        <h1 className="text-2xl font-medium pt-5">Featured Works</h1>
      </div>

      <div className="flex flex-row justify-between  rounded-lg p-3 md:p-10 bg-lighterGold my-5">
        <div className="flex flex-col justify-center  w-1/2">
          <p className="px-3 text-xl md:text-2xl lg:text-4xl mb-5">
            Talkative Mom
          </p>
          <span className="font-light px-5 md:text-lg mb-5 hidden lg:block">
            Ghana’s 1st Mom App with a first of its kind Mom-Specific search
            engine. It includes exciting features like Mom's blog, Listings, and
            a mom-specific shop
          </span>
          <span className="px-3 flex flex-wrap justify-start">
            <a
              className="font-light text-gray-dark hover:text-green"
              href="https://www.talkativemom.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </span>
        </div>
        <div className="flex flex-col w-3/4">
          <Image src={app1} />
        </div>
      </div>

      <div className="flex flex-row rounded-lg p-3 md:p-10 bg-lighterGold my-5">
        <div className="flex flex-col justify-center  w-1/2">
          <p className="px-3 text-xl md:text-2xl lg:text-4xl mb-5">
            Justis Portal Africa
          </p>
          <span className="font-light px-5 md:text-lg mb-5 hidden lg:block">
            A project for Just transitions within formal and informal sectors in
            over 4 different african countries
          </span>
          <span className="px-3 flex flex-wrap justify-start">
            <a
              className="font-light text-gray-dark hover:text-green"
              href="https://greenafricaportal.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </span>
        </div>
        <div className="flex flex-col w-3/4">
          <Image src={app2} />
        </div>
      </div>

      <div className="flex flex-row rounded-lg p-3 md:p-10 bg-lighterGold my-5">
        <div className="flex flex-col justify-center  w-1/2">
          <p className="px-3 text-xl md:text-2xl lg:text-4xl mb-5">
            Busy Projects
          </p>
          <span className="font-light px-5 md:text-lg mb-5 hidden lg:block">
            Highlighted is the busy website however a pletora of projects were
            undertaken with Busy Internet Ghana of which the public website is the most noticable
          </span>
          <span className="px-3 flex flex-wrap justify-start">
            <a
              className="font-light text-gray-dark hover:text-green"
              href="https://donewelllife.com.gh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </span>
        </div>
        <div className="flex flex-col w-3/4">
          <Image src={app3} />
        </div>
      </div>
    </section>
  );
});
