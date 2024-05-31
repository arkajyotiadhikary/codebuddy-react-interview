import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
} from "@chakra-ui/react";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });

  const [validators, setValidators] = useState(() => () => true);
  const navigate = useNavigate();

  const isValidForm = () => validators();

  const handleNext = () => {
    if (activeStep < steps.length - 1 && isValidForm()) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSave = () => {
    console.log("Form data saved", formData);
  };

  const handleSubmit = async () => {
    const { ...submitData } = formData;
    try {
      const response = await fetch("https://codebuddy.review/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });
      const result = await response.json();
      if (result.message === "Success") {
        navigate("/posts");
      }
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center space-y-8 p-8">
      <Stepper size="sm" index={activeStep}>
        {steps.map((step, index) => (
          <Step
            key={index}
            onClick={() => {
              if (!isValidForm()) {
                setActiveStep(index);
                //   set this step incomplete
              }
            }}
          >
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Form1 data={formData} updateData={setFormData} setValidateFunction={setValidators} />
      )}
      {activeStep === 1 && (
        <Form2 data={formData} updateData={setFormData} setValidateFunction={setValidators} />
      )}
      {activeStep === 2 && (
        <Form3 data={formData} updateData={setFormData} setValidateFunction={setValidators} />
      )}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className="rounded-md bg-gray-200 px-4 py-2"
        >
          Back
        </button>
        <button onClick={handleSave} className="rounded-md bg-blue-500 px-4 py-2 text-white">
          Save
        </button>
        {activeStep < steps.length - 1 && (
          <button onClick={handleNext} className="rounded-md bg-blue-500 px-4 py-2 text-white">
            Save and Next
          </button>
        )}
        {activeStep === steps.length - 1 && (
          <button onClick={handleSubmit} className="rounded-md bg-blue-500 px-4 py-2 text-white">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
