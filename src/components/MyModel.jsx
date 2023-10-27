import React from "react";
import Results from "./Sheet.jsx"

const MyModel = ({ visible, onClose, props}) => {
  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose();
  };
  if (!visible) return null;
  return (
    <div
    id="container"
      onClick={handleOnClose}
      className=" fixed bg-black bg-opacity-30 backdrop-blur-sm  inset-0 flex items-center justify-center "
    >
      <div className="bg-white p-2 rounded-lg">{totalsgpa}</div>
    </div>
  );
};

export default MyModel;
