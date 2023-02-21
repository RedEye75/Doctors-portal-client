import React from "react";

const ChooseSlot = ({ value, setName }) => {
  const { name } = value;

  const slots = () => {
    setName(name);
  };

  return (
    <div>
      <div className="w-[380px] ] h-[80px] mx-auto rounded-lg shadow-xl">
        <button onClick={slots}>
          <h1 className="text-[20px] mt-7 text-[#19D3AE]">{name}</h1>
        </button>
      </div>
    </div>
  );
};

export default ChooseSlot;
