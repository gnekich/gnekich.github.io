import { CameraControls, Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import SkyBox from "./3d/SkyBox";
import HolographicDevice from "./3d/HolographicDevice";
import PostProcessingEffects from "./3d/Effects";
import SceneLights from "./3d/SceneLights";
import Overlay from "./3d/Overlay";

import "./styles.css";
// import "./App.css";

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <h1>Welcome</h1>
        </header>
        <section>
          <p>
            <a href="/calendar/">Croatian Calendar</a>
          </p>
          <p>
            <a href="/emoji-to-image-via-html-canvas/">
              Emoji to image via HTML canvas
            </a>
          </p>
          <p>
            <a href="/qr/">QR Reader</a>
          </p>
          <p>
            <a href="https://neki.ch/glagoljica/">
              Glagoljica | Glagolitic UTF8 Transpiler
            </a>
          </p>
        </section>
      </div> */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 32], fov: "35" }}
        gl={{ alpha: false, stencil: false, antialias: false, depth: false }}
        dpr={1}
      >
        <SkyBox />

        <CameraControls
          dollySpeed={0.1}
          dollyToCursor={true}
          maxDistance={35}
          minDistance={6}
        />
        <SceneLights />

        <Environment preset="apartment" />
        <HolographicDevice position={[0, -3.5, 0]} />

        <PostProcessingEffects />
      </Canvas>
      <Loader />
      <Overlay />
      <Leva hidden={true} />
    </>
  );
}

export default App;
