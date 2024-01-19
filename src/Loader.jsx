import React from "react";
import Lottie from "react-lottie";
import loading from "./assets/loading.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };
  return (
    <section className="loader">
      <Lottie options={defaultOptions} height={300} width={300} />
    </section>
  );
};

export default Loader;
