import React from "react";
import { FormProvider } from "react-hook-form";
import FormData from "./FormData";
import CompletionMessage from "./CompletionMessage";
import { Route, Routes } from "react-router-dom";
function FormSection({
  methods,
  handleSubmitForm,
  handleStepChange,
  setActiveStep,
  activeStep,
  loading,
}) {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmitForm)}
        className="col-span-3 md:col-span-2 py-5 md:py-5 px-8 md:px-[70px] flex flex-col absolute top-[100px] self-center left-1/2 -translate-x-1/2 md:translate-x-0 h-[700px] w-[360px] md:h-full md:w-full   md:static bg-white md:bg-transparent rounded-lg shadow-lg md:rounded-none md:shadow-none"
        noValidate
      >
        <Routes>
          <Route
            path="/"
            element={
              <FormData
                setActiveStep={setActiveStep}
                activeStep={activeStep}
                goToNextStep={(e) => handleStepChange(1, e)}
                goToPreviousStep={(e) => handleStepChange(-1, e)}
                loading={loading}
              />
            }
          />
          <Route path="/success" element={<CompletionMessage />} />
        </Routes>
      </form>
    </FormProvider>
  );
}

export default FormSection;
