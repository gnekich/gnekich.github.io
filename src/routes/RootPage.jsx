/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useTranslation } from "react-i18next";

import { OrbitControls, Environment, Loader, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";

import SkyBox from "./../3d/SkyBox";
// import HolographicDevice from "./3d/HolographicDevice";
import PostProcessingEffects from "./../3d/Effects";
import SceneLights from "./../3d/SceneLights";
import Overlay from "./../3d/Overlay";
import Drone from "./../3d/DJI_Mavic_S2_1k";

import Footer from "../components/Footer";

// import "./../styles.css";

function RootPage() {
  const { t } = useTranslation();

  const holographicControlsOptions = {
    fresnelAmount: { value: 0.06, min: 0.0, max: 1.0, label: "Fresnel Amount" },
    fresnelOpacity: {
      value: 1.0,
      min: 0.0,
      max: 1.0,
      label: "Fresnel Opacity",
    },
    scanlineSize: { value: 8.0, min: 1.0, max: 15, label: "Scanline size" },
    hologramBrightness: { value: 1.2, min: 0.0, max: 2, label: "Brightness" },
    signalSpeed: { value: 0.45, min: 0.0, max: 2, label: "Signal Speed" },
    hologramOpacity: { value: 1.0, min: 0.0, max: 1.0, label: "Holo Opacity" },
    hologramColor: { value: "#51a4de", label: "Holo Color" },
    enableBlinking: false,
    blinkFresnelOnly: true,
    enableAdditive: true,
    enabled: true,
  };

  const holographicControls = useControls(holographicControlsOptions);

  return (
    <React.Fragment>
      <div className="h-full w-screen">
        <div className="grid h-full">
          <div className="h-full w-full">
            <Canvas
              shadows
              camera={{ position: [0, 7, 20], fov: "35" }}
              gl={{
                alpha: false,
                stencil: false,
                antialias: false,
                depth: false,
              }}
              dpr={1}
            >
              <SkyBox />

              <OrbitControls
                maxDistance={32}
                minDistance={10}
                // autoRotate={true} // Enable auto-rotation
                autoRotateSpeed={0.5} // Adjust the speed of auto-rotation
              />
              <SceneLights />

              <Environment preset="apartment" />
              {/* <HolographicDevice position={[0, -3.5, 0]} /> */}

              <group position={[0, -3, 0]} rotation={[0, 0.4, 0]}>
                <Float
                  rotationIntensity={0.3}
                  floatIntensity={10}
                  speed={2}
                  floatingRange={[-0.03, 0.03]}
                >
                  <Drone holographicControls={holographicControls} />
                </Float>
              </group>

              <PostProcessingEffects />
            </Canvas>
            <Loader />
            {/* <Overlay /> */}
            <Leva hidden={true} />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default RootPage;
