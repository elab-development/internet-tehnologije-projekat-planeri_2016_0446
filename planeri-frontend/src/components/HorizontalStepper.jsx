import React, { useState } from "react";

export default function HorizontalStepper({ steps, setSteps, setCurrentStep }) {
  const isFirstStep = (currentStepIndex) => {
    return currentStepIndex === 0;
  };

  const changeStep = (stepId) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step, index) => {
        if (step.id === stepId) {
          return { ...step, isActive: true };
        } else {
          return { ...step, isActive: index < stepId - 1 ? true : false };
        }
      });
    });
  };

  return (
    <div className="flex flex-row w-2/3 h-20 justify-center items-center">
      {steps.map((step, index) => (
        <div className="flex flex-row h-full justify-center items-center">
          {!isFirstStep(index) && (
            <div className="flex relative">
              <div className={`h-[2px] w-20 bg-[#FFECA1]`}></div>
              <div
                className={`absolute h-[2px] bg-orange-400 ${
                  step.isActive ? "fill-next-animation" : "fill-prev-animation"
                }`}
              ></div>
            </div>
          )}
          <div
            onClick={() => {
              changeStep(step.id);
              setCurrentStep(step);
            }}
            className={`relative flex col w-16 h-16 justify-center items-center rounded-full border-4 ${
              step.isActive ? "border-orange-400" : "bg-[#FFECA1]"
            } ${
              step.isActive
                ? "fill-border-focus-animation"
                : "fill-border-unfocus-animation"
            } bg-white`}
          >
            {step.isActive && (
              <div className="absolute -translate-y-12 text-xl">
                {step.label}
              </div>
            )}
            <p className="text-xl">{step.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
