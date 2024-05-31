import { Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ButtonGroup = ({
  handleBack,
  handleNext,
  handleSave,
  handleSubmit,
  activeStep,
  steps,
  isLoading,
}) => {
  return (
    <Stack direction="row" spacing={4} justify="center">
      <Button onClick={handleBack} disabled={activeStep === 0} variant="outline" colorScheme="gray">
        Back
      </Button>
      <Button onClick={handleSave} colorScheme="green">
        Save
      </Button>
      {activeStep < steps.length - 1 && (
        <Button onClick={handleNext} colorScheme="teal">
          Save and Next
        </Button>
      )}
      {activeStep === steps.length - 1 && (
        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          isLoading={isLoading}
          loadingText="Submitting"
        >
          Submit
        </Button>
      )}
    </Stack>
  );
};

ButtonGroup.defaultProps = {
  handleBack: () => {},
  handleNext: () => {},
  handleSave: () => {},
  handleSubmit: () => {},
};

ButtonGroup.propTypes = {
  handleBack: PropTypes.func,
  handleNext: PropTypes.func,
  handleSave: PropTypes.func,
  handleSubmit: PropTypes.func,
  activeStep: PropTypes.number,
  steps: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default ButtonGroup;
