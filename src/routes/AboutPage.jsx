import React from "react";

import Footer from "../components/Footer";
import { versionString } from "../version";

export default function AboutPage() {
  return (
    <React.Fragment>
      <div className="h-full w-screen flex items-center justify-center">
        <div className="grid h-full w-full items-center justify-center">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1>Links</h1>

            <p>
              <a href="https://github.com/gnekich">GitHub</a>
            </p>
            <p>
              <a href="https://linkedin.com/in/gnekich/">LinkedIn</a>
            </p>

            <h1>Projects</h1>
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

            <h1>Misc</h1>
            <p>{versionString}</p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
