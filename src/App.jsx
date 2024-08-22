import { CameraControls, Environment, Loader, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import SkyBox from "./3d/SkyBox";
// import HolographicDevice from "./3d/HolographicDevice";
import PostProcessingEffects from "./3d/Effects";
import SceneLights from "./3d/SceneLights";
import Overlay from "./3d/Overlay";

import Drone from "./3d/DJI_Mavic_S2";

import "./styles.css";

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 7, 32], fov: "35" }}
        gl={{ alpha: false, stencil: false, antialias: false, depth: false }}
        dpr={1}
      >
        <SkyBox />

        <CameraControls
          //dollySpeed={0.1}
          //dollyToCursor={true}
          maxDistance={32}
          minDistance={10}
          pan={false}
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
            <Drone />
          </Float>
        </group>

        <PostProcessingEffects />
      </Canvas>
      <Loader />
      <Overlay />
      <Leva hidden={true} />
    </>
  );
}

export default App;
