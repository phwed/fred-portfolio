import React from "react";
import { Image } from "primereact/image";
import { button } from "primereact/button";
import me from "../assets/phred.jpg";

import Lottie from "react-lottie";
import * as github from "../assets/lottie/github.json";


import facebookImg from "../assets/Facebook.svg";
import instagramImg from "../assets/Instagram.svg";
import twitterImg from "../assets/Twitter.svg";
import linkedinImg from "../assets/Linkedin.svg";

export const About = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      className="bg-gold flex lg:h-screen flex-col"
    >
      <div className="mt-20 ">
        <div className="mx-5 md:mx-10 lg:mx-20 mt-5 flex flex-col lg:flex-row gap-5 ">
          <div className="flex flex-col  w-full">
            <Image src={me} imageClassName="rounded-xl" />
          </div>
          <div className="flex flex-col p-10  w-full justify-center">
            <p className="font-light text-3xl md:text-5xl mb-10">
              Fred Adu Twum
            </p>

            <span className="text-xl md:text-2xl font-light">
              I am a Front End Developer, UI, and UX Designer living in Accra,
              Ghana. My interests range from designing friendly user interfaces
              to building software, websites, web apps, and mobile apps. I am
              also interested in music, writing, and making animations.
            </span>

            <div className="my-10">
              <a
                className="px-5 py-3 border-emerald-600 border rounded-md hover:bg-emerald-600 hover:cursor-pointer hover:text-white"
                href="https://drive.google.com/file/d/1jSMR5Rb3Vue0iB2qIUcD_eqNkk8Gcshq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                read my resume
              </a>
            </div>

            <span className="text-xl md:text-2xl font-light">
              You can reach out to me through{" "}
              <a
                className="text-emerald-600 hover:cursor-pointer"
                href="tel:233594599267"
              >
                +233 59 459 9267
              </a>{" "}
              or send a mail to{" "}
              <a
                className="text-emerald-600 hover:cursor-pointer"
                href={`mailto:${"apps.fred.adu@gmail.com"}?subject=${
                  encodeURIComponent("Request For Service") || ""
                }&body=${encodeURIComponent("Hi Phred,") || ""}`}
              >
                apps.fred.adu@gmail.com
              </a>{" "}
              or any of my social media accounts below.
            </span>

            <div className="flex flex-row gap-5 justify-around align-middle flex-wrap mt-10">
              <a
                href="https://www.linkedin.com/in/fredadutwum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedinImg} />
              </a>
              <a
                href="https://twitter.com/phredstur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitterImg} />
              </a>

              <a
                href="https://www.facebook.com/Skriptchez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebookImg} />
              </a>
              <a
                href="https://www.instagram.com/phredhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagramImg} />
              </a>
              <a
                href="https://github.com/phwed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: github,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={70}
                  width={50}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
