import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({
  name,
  label,
  type = "text",
  placeholder = "",
  validation,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {errors[name] && (
          <p className="text-sm text-strawberry-red mt-1 font-medium">
            {errors[name]?.message}
          </p>
        )}
      </div>

      <input
        {...register(name, validation)}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`border border-gray-300 rounded-lg w-full p-3 mt-2 ${
          errors[name] ? "border-red-500" : ""
        }`}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
