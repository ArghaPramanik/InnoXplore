import React from 'react';

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-5 right-5 p-4 bg-gray-800 text-white rounded-md shadow-md transition-all duration-300">
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-lg">
        ✖️
      </button>
    </div>
  );
};

export default Toast;
