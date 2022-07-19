import React from "react";
import { Button } from "primereact/button";

export default function Main({ children }) {
  return (
    <main className="relative bg-lightGold">
      <nav className=" sticky top-0 z-10 bg-goldAlpha p-5 md:p-5 flex  justify-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
        {/* <div className="block md:hidden">
          <Button icon="pi pi-bars" className="p-button-text p-button-raised" />
        </div> */}
        <h1 className="px-5 md:px-10 text-md md:text-xl cursor-pointer  hover:text-lg md:hover:text-3xl ease-in-out duration-300 ">
          <a href="#home"> Home</a>
        </h1>
        <h1 className="px-5 md:px-10  text-md md:text-xl cursor-pointer hover:text-lg  md:hover:text-3xl ease-in-out duration-300 ">
          <a href="#work"> Work</a>
        </h1>
        <h1 className="px-5 md:px-10  text-md md:text-xl cursor-pointer hover:text-lg  md:hover:text-3xl ease-in-out duration-300 ">
          <a href="#testimonials">Testimonials</a>
        </h1>
        <h1 className="px-5 md:px-10 text-md md:text-xl cursor-pointer hover:text-lg  md:hover:text-3xl ease-in-out duration-300 ">
          <a href="#about"> About</a>
        </h1>
      </nav>

      <div>{children}</div>
    </main>
  );
}
