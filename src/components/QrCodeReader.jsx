// src/QrCodeReader.js
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import jsQR from "jsqr";

const QrCodeReader = () => {
  const [qrCodeData, setQrCodeData] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);

        const imageData = context.getImageData(0, 0, img.width, img.height);
        const code = jsQR(
          imageData.data,
          imageData.width,
          imageData.height,
          {}
        );

        if (code) {
          setQrCodeData(code.data);
        } else {
          setQrCodeData("No QR code found");
        }
      };
    };

    reader.readAsDataURL(file);
  }, []);

  const handleCopy = async () => {
    try {
      // Check if we have permission to write to the clipboard
      const permissionStatus = await navigator.permissions.query({
        name: "clipboard-write",
      });
      if (
        permissionStatus.state === "granted" ||
        permissionStatus.state === "prompt"
      ) {
        // Attempt to copy text
        await navigator.clipboard.writeText(qrCodeData);
      } else {
        console.log("Clipboard access denied");
        // Request permission to write to the clipboard
      }
    } catch (error) {
      console.error("Error copying text to clipboard: ", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
      {qrCodeData && (
        <div style={styles.result}>
          <p>QR Code Data:</p>
          <p style={styles.data}>{qrCodeData}</p>
          <button style={styles.copyButton} onClick={handleCopy}>
            Copy
          </button>
        </div>
      )}
    </>
  );
};

const styles = {
  dropzone: {
    border: "2px dashed #cccccc",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center",
    width: "100%",
  },
  result: {
    border: "2px solid #333333",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center",
    width: "100%",
  },
  data: {
    color: "green",
    backgroundColor: "#111",
  },
};

export default QrCodeReader;
