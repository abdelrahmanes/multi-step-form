import React from "react";

function StepHeader({ title, description }) {
  return (
    <div className="mb-5">
      <h1 className="text-marine-blue font-medium text-3xl tracking-wider">
        {title}
      </h1>
      <p className="text-cool-gray ">{description}</p>
    </div>
  );
}

export default StepHeader;
