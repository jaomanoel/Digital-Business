import React from "react";

interface LineProps {
  props?: string;
}

const Line: React.FC<LineProps> = ({ props }) => {
  return <div className={`w-100 h-8 rounded-full bg-purple ${props}`}></div>;
};

export { Line };
