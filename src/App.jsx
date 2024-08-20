import "./App.css";

import QrCodeReader from "./components/QrCodeReader";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>QR Code Reader</h1>
          <QrCodeReader />
        </header>
      </div>
    </>
  );
}

export default App;
