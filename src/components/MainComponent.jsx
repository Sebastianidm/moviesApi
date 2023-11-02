
import React from "react";
import { Fade } from "react-awesome-reveal";

const MainComponent = () => {
  return (
    
    <div className="bg-cyan-700 text-white  p-8 h-96  ">
        <Fade>
      <h1 className="text-6xl font-bold mb-4">Bienvenido a MovieCenter</h1>
      
      <p className="text-3xl">
      Explora y disfruta de las películas más populares del año. Sumérgete en el fascinante mundo del cine y descubre las historias que han cautivado a audiencias de todo el mundo.
      </p>
      </Fade>
    </div>
  );
};

export default MainComponent;
