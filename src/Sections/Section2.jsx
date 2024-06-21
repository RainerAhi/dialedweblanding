import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Model from "../Model";

export const Section2 = () => {

    return (
      <>
        <section className="two">
          <div className="experience" >
            <Canvas>
              <Float speed={ 0.5 } fallback >
                <Model />
              </Float>
              <Environment preset="warehouse" />
              <PerspectiveCamera makeDefault position={ [ 0, 0, 10 ] } />
            </Canvas>
          </div>
            <div className="two-content" >
            </div>
        </section>
      </>
    )
}