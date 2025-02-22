import React from "react";
import { useFormContext } from "react-hook-form";
import StepHeader from "../StepHeader";
import { addons } from "../../staticDara";

function AddOns() {
  const { register, watch } = useFormContext();

  return (
    <>
      <StepHeader
        title={"Pick add-ons"}
        description={"Add-ons help enhance your gaming experience."}
      />
      <div className="mt-6">
        {addons.map((addon) => {
          const isSelected = watch("addons")?.includes(addon.value);

          return (
            <div
              key={addon.id}
              className={`${
                isSelected ? "bg-magnolia" : "bg-transparent "
              } p-4 rounded-lg mt-6 border border-light-gray flex justify-between items-center`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={addon.value}
                  value={addon.value}
                  {...register("addons")}
                  className="mr-4 w-4 h-4"
                />
                <label htmlFor={addon.value}>
                  <h3 className="text-marine-blue font-medium">
                    {addon.title}
                  </h3>
                  <p className="text-cool-gray">{addon.description}</p>
                </label>
              </div>
              <p className="text-marine-blue font-medium">{addon.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AddOns;
