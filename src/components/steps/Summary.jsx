import React from "react";
import StepHeader from "../StepHeader";
import { useFormContext } from "react-hook-form";
import { addons, plans } from "../../staticDara";

function Summary({ setActiveStep }) {
  const { watch } = useFormContext();
  const formData = watch();

  const selectedAddons = addons
    .filter((addon) => formData.addons?.includes(addon.value))
    .map(({ title, price }) => {
      return { title, price };
    });
  const selectedPlan = plans.find(
    (plan) => plan.name.toLowerCase() === formData.plan
  );

  const total =
    (formData.isYearly ? selectedPlan.amount * 10 : selectedPlan.amount) +
    selectedAddons.reduce((total, feature) => {
      const price = parseInt(feature.price.replace(/[^0-9.-]+/g, ""));
      return total + price;
    }, 0);

  return (
    <>
      <StepHeader
        title={"Finishing up"}
        description={"Double-check everything looks OK before confirming"}
      />
      <div className="bg-magnolia p-4 rounded-lg mt-6">
        <div className="flex justify-between items-center border-b border-cool-gray pb-6 mb-6">
          <div>
            <p className="text-marine-blue font-medium">
              {selectedPlan.name}{" "}
              <span> {formData.isYearly ? "(Yearly)" : null}</span>
            </p>
            <span
              className="underline text-sm font-medium text-cool-gray cursor-pointer hover:text-purplish-blue transition duration-300"
              onClick={() => setActiveStep(2)}
            >
              Change
            </span>
          </div>
          <p className="text-marine-blue font-medium">
            {formData.isYearly
              ? `$${selectedPlan.amount * 10}/yr`
              : `$${selectedPlan.amount}/mo`}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {selectedAddons.map(({ title, price }) => (
            <div
              key={title}
              className="flex justify-between items-center text-sm"
            >
              <p className="text-cool-gray">{title}</p>
              <p className="text-marine-blue">{price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-[15px]  py-[30px]">
        <p>
          Total <span>{formData.isYearly ? "(per year)" : "(per month)"}</span>
        </p>
        <p className="text-purplish-blue font-semibold">
          ${total} {formData.isYearly ? "/yr" : "/mo"}
        </p>
      </div>
    </>
  );
}

export default Summary;
