// import { useState, useEffect } from "react";
import Container from "./hero/container";
import Background from "../assets/background.jpg";
import Dialog from "./dialog";

function Hero() {
  return (
    <>
      <div className="w-full h-full">
        <img
          src={Background}
          alt="/"
          className={`w-full object-cover h-[100vh] relative`}
        />
        <Container />
        <Dialog />
      </div>
    </>
  );
}

export default Hero;
