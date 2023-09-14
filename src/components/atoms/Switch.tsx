import React from "react";

interface SwitchProps {
  children?: string;
}

const Switch = ({ children }: SwitchProps) => {
  return (
    <label className="flex justify-between items-center p-2 text-xl relative">
      {children}
      <input
        type="checkbox"
        className="appearance-none peer absolute 
                left-0 top-0 w-full h-full rounded-md"
      />
      <span
        className="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 
                bg-gray-300 rounded-full
                after:w-5 after:h-5 after:bg-white 
                after:rounded-full after:shadow-md
                after:duration-300 peer-checked:after:translate-x-3"
      ></span>
    </label>
  );
};

export default Switch;
