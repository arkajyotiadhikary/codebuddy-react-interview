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

import PropTypes from "prop-types";

const Steps = ({ activeStep, setActiveStep, steps, isValidForm }) => {
  return (
    <Stepper className="mb-10 w-full" size="md" index={activeStep}>
      {steps.map((step, index) => (
        <Step
          key={index}
          onClick={() => {
            // check if the current form is valid
            if (index < activeStep) {
              setActiveStep(index);
            }
            isValidForm() && setActiveStep(index);
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
  );
};

Steps.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  steps: PropTypes.array,
  isValidForm: PropTypes.func,
};

export default Steps;
