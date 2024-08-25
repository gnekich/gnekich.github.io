import { GitHub } from "./icons";

import { Link } from "react-router-dom";

import { versionString } from "../version";

const Footer = () => (
  <footer className="p-4 flex items-center justify-between w-full bg-gray z-10 relative">
    <p>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </p>
    <p className="text-xs">
      Made by{" "}
      <a
        className="underline hover:text-blue-600"
        href="https://github.com/gnekich"
        target="_blank"
        rel="noreferrer"
      >
        @gnekich
      </a>{" "}
      | {versionString}
    </p>
    <a
      href="https://github.com/gnekich/gnekich.github.io"
      target="_blank"
      rel="noreferrer"
    >
      <GitHub />
    </a>
  </footer>
);

export default Footer;
