import HorizontalStepper from "../components/HorizontalStepper";
import StepContent from "../components/StepContent";
import usePersonalizeData from "../hooks/usePersonalizeData";

export default function Personalize() {
  const { steps, setSteps, currentStep, setCurrentStep } = usePersonalizeData();

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-y-3 p-5">
      <HorizontalStepper
        steps={steps}
        setSteps={setSteps}
        setCurrentStep={setCurrentStep}
      />
      <StepContent content={currentStep.content} />
    </div>
  );
}
