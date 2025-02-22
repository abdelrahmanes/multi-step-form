import React from "react";
import StepHeader from "../StepHeader";
import FormInput from "../inputs/FormInput";

function YourInfo() {
  return (
    <>
      <StepHeader
        title={"Personal Info"}
        description={"Please provide your name, email adress and phone number."}
      />
      <div className="">
        <FormInput
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          type="text"
          validation={{
            required: "This field is required",
          }}
        />
        <FormInput
          name="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="text"
          validation={{
            required: "This field is required",
          }}
        />
        <FormInput
          name="phone"
          label="Phone Number"
          placeholder="e.g. +1 123 456 7890"
          type="text"
          validation={{
            required: "This field is required",
          }}
        />
      </div>
    </>
  );
}

export default YourInfo;
