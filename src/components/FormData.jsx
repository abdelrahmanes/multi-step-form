import React from "react";
import YourInfo from "./steps/YourInfo";
import SelectPlan from "./steps/SelectPlan";
import AddOns from "./steps/AddOns";
import Summary from "./steps/Summary";

function FormData({
  setActiveStep,
  activeStep,
  loading,
  goToNextStep,
  goToPreviousStep,
}) {
  return (
    <div className="h-full flex flex-col ">
      {
        {
          1: <YourInfo />,
          2: <SelectPlan />,
          3: <AddOns />,
          4: <Summary setActiveStep={setActiveStep} />,
        }[activeStep]
      }
      <div className="flex justify-between mt-auto ">
        {activeStep > 1 && (
          <button
            disabled={loading}
            onClick={(e) => goToPreviousStep(e)}
            type="button"
            className="bg-transparent text-cool-gray py-2 px-4 text-sm hover:text-marine-blue transition-colors duration-300"
          >
            Go Back
          </button>
        )}

        {activeStep < 4 ? (
          <button
            onClick={(e) => {
              goToNextStep(e);
            }}
            type="button"
            className="bg-marine-blue text-white py-[15px] px-[30px] rounded-md ms-auto"
          >
            Next Step
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="bg-purplish-blue text-white py-3 px-8 rounded-md disabled:opacity-50 "
          >
            {loading ? "Processing..." : "Confirm"}
          </button>
        )}
      </div>
    </div>
  );
}

export default FormData;
