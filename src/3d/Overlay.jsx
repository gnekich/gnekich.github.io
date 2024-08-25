import versionString from "../version";

export default function Overlay() {
  return (
    <div className="container">
      <div className="main-title">
        {/* <h1>Welcome</h1> */}

        <div className="buttons">
          <p>
            <a href="https://github.com/gnekich">GitHub</a>
          </p>
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
        </div>

        <footer>{versionString}</footer>
      </div>
    </div>
  );
}
