import React, { useEffect, useState } from "react";

import StepHeader from "../StepHeader";
import RadioInput from "../inputs/RadioInput";
import { useFormContext } from "react-hook-form";
import { plans } from "../../staticDara";

function SelectPlan() {
  const {
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const formData = watch();
  const [isYearly, setIsYearly] = useState(formData.isYearly);

  return (
    <>
      <StepHeader
        title={"Select your plan"}
        description={"You have the option of monthly or yearly billing."}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {plans.map((plan) => {
          return (
            <RadioInput
              key={plan.id}
              name="plan"
              value={plan.name.toLowerCase()}
              label={plan.name}
              icon={plan.icon}
              amount={plan.amount}
              isYearly={isYearly}
              validation={{ required: "Please select a plan" }}
            />
          );
        })}
      </div>
      <p className="text-sm text-strawberry-red mt-3 font-medium h-2">
        {errors.plan && errors.plan?.message}
      </p>
      <div className="bg-magnolia p-4 rounded-lg mt-6 flex items-center justify-center gap-3">
        <p className={`${isYearly ? "text-cool-gray" : "text-marine-blue"}`}>
          Monthly
        </p>
        {/* add toggle component to toggle between monthly and yearly */}
        <label className="switch">
          <input
            readOnly
            checked={formData.isYearly || isYearly}
            type="checkbox"
            onClick={() => {
              setValue("isYearly", !isYearly);
              setIsYearly(!isYearly);
            }}
          />
          <span className="slider round"></span>
        </label>
        <p className={`${!isYearly ? "text-cool-gray" : "text-marine-blue"}`}>
          Yearly
        </p>
      </div>
    </>
  );
}

export default SelectPlan;
