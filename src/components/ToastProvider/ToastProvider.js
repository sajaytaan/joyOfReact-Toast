import React from "react";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  function handleToast(e) {
    e.preventDefault();
    const id = Math.random();
    const newToast = { message, variant, id };
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
    setMessage("");
    setVariant("notice");
  }

  const value = {
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    setToasts,
    handleToast,
    VARIANT_OPTIONS,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
