import React, { useState } from "react";
import QR from "../images/Qrcode.png";
const QrCode = () => {
  return (
    <div className="container">
      <h2 className="text-center">Scan Qr Code</h2>
      <div className="qrImage">
        <img src={QR} alt="QR" />
      </div>
    </div>
  );
};

export default QrCode;
