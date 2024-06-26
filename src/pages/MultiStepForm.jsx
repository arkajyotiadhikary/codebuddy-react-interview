import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import ButtonGroup from "../components/ButtonGroup";
import Steps from "../components/Steps";

const steps = [
  { title: "Contact Info", description: "Email and password" },
  { title: "Personal Info", description: "Name and address" },
  { title: "Additional Info", description: "Phone and terms" },
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

  const { mutate, isLoading } = useMutation(
    async (submitData) => {
      const response = await fetch("https://codebuddy.review/submit", {
        method: "POST",
        body: JSON.stringify(submitData),
      });
      return response.json();
    },
    {
      onSuccess: (data) => {
        if (data.message === "Success") {
          navigate("/posts");
        }
      },
      onError: (error) => {
        console.error("Submission error", error);
      },
    },
  );

  const handleSubmit = () => {
    if (isValidForm()) {
      const { acceptTermsAndCondition, ...submitData } = formData;
      acceptTermsAndCondition && mutate(submitData);
    }
  };

  return (
    <div className="mt-10 flex  flex-col items-center space-y-8 p-4 md:p-8">
      <div className="flex w-full flex-col space-y-6 md:max-w-[600px]">
        {/* stepper */}
        <Steps
          activeStep={activeStep}
          steps={steps}
          setActiveStep={setActiveStep}
          isValidForm={isValidForm}
        />

        {activeStep === 0 && (
          <Form1 data={formData} updateData={setFormData} setValidateFunction={setValidators} />
        )}
        {activeStep === 1 && (
          <Form2 data={formData} updateData={setFormData} setValidateFunction={setValidators} />
        )}
        {activeStep === 2 && (
          <Form3 data={formData} updateData={setFormData} setValidateFunction={setValidators} />
        )}
        {/* Buttons */}
        <ButtonGroup
          handleBack={handleBack}
          handleNext={handleNext}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
          activeStep={activeStep}
          steps={steps}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default MultiStepForm;
