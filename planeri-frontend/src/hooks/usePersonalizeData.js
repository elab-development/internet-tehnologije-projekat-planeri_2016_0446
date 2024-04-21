import { useEffect, useState } from "react";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";

export default function usePersonalizeData() {
  const [steps, setSteps] = useState([
    { id: 1, label: "", isActive: true, content: <></> },
    { id: 2, label: "", isActive: false, content: <></> },
    { id: 3, label: "", isActive: false, content: <></> },
    { id: 4, label: "", isActive: false, content: <></> },
  ]);

  const [currentStep, setCurrentStep] = useState(steps[0]);

  // Step 1
  const [selectedPlanerType, setSelectedPlanerType] = useState(null);
  const [selectedPlanerSize, setSelectedPlanerSize] = useState(null);

  const handlePlanerTypeChange = (event) => {
    setSelectedPlanerType(event.target.value);
  };

  const handlePlanerSizeChange = (event) => {
    setSelectedPlanerSize(event.target.value);
  };

  //Step 2
  const [selectedCoverType, setSelectedCoverType] = useState(null);
  const [selectedCoverDesign, setSelectedCoverDesign] = useState(null);
  const [selectedFrontPage, setSelectedFrontPage] = useState(false);

  const handleCoverTypeChange = (event) => {
    setSelectedCoverType(event.target.value);
  };

  const handleCoverDesignChange = (event) => {
    setSelectedCoverDesign(event.target.value);
  };

  const handleFrontPageChange = (event) => {
    setSelectedFrontPage(event.target.value);
  };
  //Step 3
  const [showDatePicker, setShowDatePicker] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPlanerLayout, setSelectedPlanerLayout] = useState(null);
  const [selectedDailyPlanerType, setSelectedDailyPlanerType] = useState(null);
  const [selectedPageNumber, setSelectedPageNumber] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePlanerLayoutChange = (event) => {
    setSelectedPlanerLayout(event.target.value);
  };

  const handlePageNumberChange = (event) => {
    setSelectedPageNumber(event.target.value);
  };

  const handleDailyPlanerTypeChange = (event) => {
    setSelectedDailyPlanerType(event.target.value);
  };
  //Step 4
  const [showNotes, setShowNotes] = useState(null);
  const [selectedNoteType, setSelectedNoteType] = useState(null);
  const [selectedPageLayout, setSelectedPageLayout] = useState(null);

  const handleNoteTypeChange = (event) => {
    setSelectedNoteType(event.target.value);
  };

  const handlePageLayoutChange = (event) => {
    setSelectedPageLayout(event.target.value);
  };

  const finishCustomization = () => {
    const planer = {
      planerType: selectedPlanerType,
      planerSize: selectedPlanerSize,
      coverType: selectedCoverType,
      coverDesign: selectedCoverDesign,
      frontPage: selectedFrontPage,
      date: selectedDate,
      dailyPlanerType: selectedDailyPlanerType,
    };
  };

  //////////////////////////////////////////

  const nextStep = (currentStep) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step, index) => {
        if (step.id === currentStep + 1) {
          return { ...step, isActive: true };
        } else {
          return { ...step, isActive: index < currentStep ? true : false };
        }
      });
    });
    setCurrentStep((prev) => {
      return {
        ...prev,
        id: currentStep + 1,
      };
    });
  };

  const prevStep = (currentStep) => {
    setSteps((prevSteps) => {
      return prevSteps.map((step, index) => {
        if (step.id === currentStep - 1) {
          return { ...step, isActive: true };
        } else {
          return { ...step, isActive: index < currentStep - 1 ? true : false };
        }
      });
    });
    setCurrentStep((prev) => {
      return {
        ...prev,
        id: currentStep - 1,
      };
    });
  };

  useEffect(() => {
    switch (currentStep.id) {
      case 1:
        setCurrentStep((prev) => {
          return {
            ...prev,
            content: (
              <Step1
                step={prev.id}
                nextStep={nextStep}
                selectedPlanerType={selectedPlanerType}
                handlePlanerTypeChange={handlePlanerTypeChange}
                selectedPlanerSize={selectedPlanerSize}
                handlePlanerSizeChange={handlePlanerSizeChange}
              />
            ),
          };
        });
        break;

      case 2:
        setCurrentStep((prev) => {
          return {
            ...prev,
            content: (
              <Step2
                step={prev.id}
                nextStep={nextStep}
                prevStep={prevStep}
                selectedPlanerType={selectedPlanerType}
                selectedCoverType={selectedCoverType}
                handleCoverTypeChange={handleCoverTypeChange}
                selectedCoverDesign={selectedCoverDesign}
                handleCoverDesignChange={handleCoverDesignChange}
                selectedFrontPage={selectedFrontPage}
                handleFrontPageChange={handleFrontPageChange}
              />
            ),
          };
        });
        break;

      case 3:
        setCurrentStep((prev) => {
          return {
            ...prev,
            content: (
              <Step3
                step={prev.id}
                nextStep={nextStep}
                prevStep={prevStep}
                selectedPlanerType={selectedPlanerType}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
                selectedPlanerLayout={selectedPlanerLayout}
                handlePlanerLayoutChange={handlePlanerLayoutChange}
                selectedPageNumber={selectedPageNumber}
                handlePageNumberChange={handlePageNumberChange}
                selectedDailyPlanerType={selectedDailyPlanerType}
                handleDailyPlanerTypeChange={handleDailyPlanerTypeChange}
              />
            ),
          };
        });
        break;

      case 4:
        setCurrentStep((prev) => {
          return {
            ...prev,
            content: (
              <Step4
                step={prev.id}
                prevStep={prevStep}
                selectedPlanerType={selectedPlanerType}
                showNotes={showNotes}
                setShowNotes={setShowNotes}
                selectedNoteType={selectedNoteType}
                handleNoteTypeChange={handleNoteTypeChange}
                selectedPageLayout={selectedPageLayout}
                handlePageLayoutChange={handlePageLayoutChange}
                finishCustomization={finishCustomization}
              />
            ),
          };
        });
        break;

      default:
        setCurrentStep((prev) => {
          return { ...prev, content: <></> };
        });
        break;
    }
  }, [
    currentStep.id,
    selectedPlanerType,
    selectedPlanerSize,
    selectedCoverType,
    selectedCoverDesign,
    selectedFrontPage,
    showDatePicker,
    selectedDate,
    selectedDailyPlanerType,
    selectedPlanerLayout,
    selectedPageNumber,
    showNotes,
    selectedNoteType,
    selectedPageLayout,
  ]);

  return {
    steps,
    setSteps,
    currentStep,
    setCurrentStep,
  };
}