import { useState } from "react";
import "./styles/App.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import FormSection from "./components/FormSection";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "",
      isYearly: false,
      addons: [],
    },
  });

  const handleStepChange = async (direction, e) => {
    e.preventDefault();

    if (direction === 1) {
      const isValid = await methods.trigger();
      if (isValid) {
        setActiveStep((prevStep) => prevStep + direction);
      }
    } else {
      setActiveStep((prevStep) => prevStep + direction);
    }
  };

  const handleSubmitForm = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        console.log("Form Submitted:", {
          personalInfo: {
            name: methods.getValues().name,
            email: methods.getValues().email,
            phone: methods.getValues().phone,
          },
          plan: {
            name: methods.getValues().plan,
            isYearly: methods.getValues().isYearly,
          },
          addons: methods.getValues().addons,
        });

        navigate("/success");
      }, 2000);
    }
  };

  return (
    <div className="bg-magnolia h-screen flex items-center justify-center md:py-4">
      <div className="grid grid-cols-3 bg-magnolia md:bg-white md:p-4 md:rounded-lg shadow-lg max-w-[900px] w-full mx-auto h-full">
        <Sidebar activeStep={activeStep} />

        <FormSection
          methods={methods}
          setActiveStep={setActiveStep}
          handleSubmitForm={handleSubmitForm}
          handleStepChange={handleStepChange}
          activeStep={activeStep}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
