import React, { useRef, useEffect } from "react";
import { Button } from "primereact/button";
import Lottie from "react-lottie";
import * as phredy from "../assets/lottie/phred.json";
import gsap from "gsap";

const Home = (props) => {
  return (
    <section
      id={props.id}
      className="bg-gold flex md:h-screen flex-col"
      style={{
        marginTop: -65,
      }}
    >
      <div className="flex h-full flex-col md:flex-row">
        <div className="w-full md:w-7/12 grid place-items-center  h-2/4 md:h-full order-2 pb-20 md:pb-0">
          <div className="flex flex-col mx-5">
            <div>
              <span className="bg-darkGold p-3 rounded-md">👋🏿 Hello there</span>
            </div>
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5">
                I'm Fred,
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-6xl  font-bold mb-5">
                A Frontend Developer
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-6xl  font-bold mb-5">
                & A UI UX Designer
              </h1>
            </div>
            <div className="mt-3 space-x-4">
              <a href="#work">
                <Button label="View My Work" />
              </a>
              <a
                href={`mailto:${"apps.fred.adu@gmail.com"}?subject=${
                  encodeURIComponent("Request For Service") || ""
                }&body=${encodeURIComponent("Hi Fred,") || ""}`}
              >
                <Button label="Contact Me" className="p-button-outlined" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 grid place-items-center mt-10 md:mt-0 p-14   h-2/4 md:h-full  ">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: phredy,
            }}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
