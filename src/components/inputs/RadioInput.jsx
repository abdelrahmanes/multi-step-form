import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const RadioInput = ({
  name,
  value,
  label,
  icon,
  validation,
  amount,
  isYearly,
}) => {
  const {
    register,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
  } = useFormContext();

  const handleRadioChange = () => {
    setValue(name, value);
    clearErrors(name);
  };

  const isSelected = watch(name) === value;
  return (
    <div
      className={`flex items-center p-[15px] md:h-[160px]  border rounded-md cursor-pointer 
       ${isSelected && "border-marine-blue bg-magnolia"}
       hover:bg-gray-100 transition-all duration-200`}
    >
      <input
        type="radio"
        id={value}
        value={value}
        {...register(name, validation)}
        className="hidden"
        onChange={handleRadioChange}
      />
      <label
        htmlFor={value}
        className={`flex md:flex-col md:h-full md:justify-between curosr-pointer w-full gap-4 md:gap-0`}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center `}
        >
          <img src={icon} alt={label} />{" "}
        </div>
        <div className="flex flex-col">
          <span className="tracking-wider font-semibold text-marine-blue">
            {label}
          </span>
          <span className="text-sm font-medium text-cool-gray">
            {`$${isYearly ? `${amount * 10}/yr` : `${amount}/mo`}`}
          </span>
          {isYearly && (
            <span className="text-sm font-medium text-cool-gray">
              2 months free
            </span>
          )}
        </div>
      </label>
    </div>
  );
};

export default RadioInput;
