import React, { useState } from "react";

// Base styles for the toast container
const baseToastStyles = {
  padding: "10px 20px",
  borderRadius: "5px",
  zIndex: 1000,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // To position icon and text
};

// Define keyframes for shake animation
const shakeKeyframes = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  }
`;

// Toast container component that includes the message and optional icon
const ToastContainer = ({ messages }) => {
  return (
    <div>
      <style>{shakeKeyframes}</style>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            ...baseToastStyles,
            background: msg.background || "white",
            color: msg.color || "black",
            ...msg.position,
            animation: msg.animation || "shake 0.2s ease forwards",
          }}
        >
          {msg.icon && <div style={{ marginRight: "10px" }}>{msg.icon}</div>}
          <div>{msg.text}</div>
        </div>
      ))}
    </div>
  );
};

// Custom hook for managing toasts
const useCustomToast = () => {
  const [messages, setMessages] = useState([]);

  // Function to show toast with message and custom options
  const showToast = (
    message,
    { position = {}, duration = 2000, background, color, icon, animation } = {}
  ) => {
    const newToast = {
      text: message,
      position: {
        position: "fixed",
        ...position, // Custom position if provided
      },
      background, // Custom background color
      color, // Custom text color
      icon, // Optional icon
      animation, // Custom animation
    };

    setMessages((prev) => [...prev, newToast]);

    // Remove the toast after the specified duration
    setTimeout(() => {
      setMessages((prev) => prev.filter((_, i) => i !== 0));
    }, duration);
  };

  return {
    showToast,
    ToastContainer: () => <ToastContainer messages={messages} />,
  };
};

export default useCustomToast;
