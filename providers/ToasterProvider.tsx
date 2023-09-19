"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        error: {
          iconTheme: {
            primary: "#ff7782",
            secondary: "#edeffd",
          },
          style: {
            background: "#181a1b",
            color: "#edeffd",
          },
        },
        success: {
          iconTheme: {
            primary: "#41f1b6",
            secondary: "#edeffd",
          },
          style: {
            background: "#181a1b",
            color: "#edeffd",
          },
        },
      }}
    />
  );
};

export default ToasterProvider;
