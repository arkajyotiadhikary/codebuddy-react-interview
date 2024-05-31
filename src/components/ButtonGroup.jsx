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
    <Stack className="flex w-full justify-center" direction="row" spacing={5}>
      <Button onClick={handleBack} disabled={activeStep === 0} variant="outline" colorScheme="gray">
        Back
      </Button>
      <Button onClick={handleSave} colorScheme="green" variant="solid">
        Save
      </Button>
      {activeStep < steps.length - 1 && (
        <Button onClick={handleNext} colorScheme="teal" variant="solid">
          Save and Next
        </Button>
      )}
      {activeStep === steps.length - 1 && (
        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          loadingText="Submitting"
          variant="solid"
          isLoading={isLoading}
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
