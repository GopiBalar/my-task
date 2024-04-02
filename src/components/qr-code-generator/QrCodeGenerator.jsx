import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from "../../styles/qr-code-generator/qrCodeGenerator.module.css";

function QrCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className={styles.qrCodeContainer}>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter Your value here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleGenerateQrCode} className={styles.qrBtn}>
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
