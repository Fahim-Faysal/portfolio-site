import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./pages/config/Particle-config";


export default function ParticleBackground() {
      return (

            <Particles params={particlesConfig}></Particles>
      )
}