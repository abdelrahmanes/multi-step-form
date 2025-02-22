import React from "react";
import success from "../assets/icon-thank-you.svg";

function CompletionMessage() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img src={success} className="my-6" />
      <h1 className="text-4xl font-bold text-center text-marine-blue">
        Thank you!{" "}
      </h1>
      <p className="text-center mt-4 text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}

export default CompletionMessage;
