import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const Form3 = ({ data, updateData, setValidateFunction }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validate = () => {
      const newErrors = {};

      if (!data.countryCode) {
        newErrors.countryCode = "Country Code is required";
      } else if (!["+91", "+1"].includes(data.countryCode)) {
        newErrors.countryCode = "Country Code must be +91 or +1";
      }

      if (!data.phoneNumber) {
        newErrors.phoneNumber = "Phone Number is required";
      } else if (!/^\d{10}$/.test(data.phoneNumber)) {
        newErrors.phoneNumber = "Phone Number must be 10 digits";
      }

      if (!data.acceptTermsAndCondition) {
        newErrors.acceptTermsAndCondition = "You must accept the terms and conditions";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    setValidateFunction(() => validate);
  }, [data, setValidateFunction]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    updateData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="space-y-4">
      <FormControl isRequired isInvalid={errors.countryCode}>
        <FormLabel className="text-lg">Country Code:</FormLabel>
        <Select
          placeholder="Select Country Code"
          name="countryCode"
          value={data.countryCode || ""}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-300 px-3"
        >
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </Select>
        {errors.countryCode && <p className="text-red-500">{errors.countryCode}</p>}
      </FormControl>
      <FormControl isRequired isInvalid={errors.phoneNumber}>
        <FormLabel className="text-lg">Phone Number:</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="tel"
            name="phoneNumber"
            value={data.phoneNumber || ""}
            onChange={handleChange}
            className="rounded-md border-2 border-gray-300 px-3 py-2"
            placeholder="Phone number"
          />
        </InputGroup>
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
      </FormControl>
      <FormControl
        isRequired
        isInvalid={errors.acceptTermsAndCondition}
        className="flex items-center space-x-2"
      >
        <Checkbox
          name="acceptTermsAndCondition"
          isChecked={data.acceptTermsAndCondition || false}
          onChange={handleChange}
          className="h-4 w-4 rounded-md border-gray-300 text-blue-600 shadow-sm focus:border-blue-600 focus:ring-blue-600"
        />
        <FormLabel className="text-lg" marginBottom="0">
          Accept Terms and Conditions
        </FormLabel>
        {errors.acceptTermsAndCondition && (
          <p className="text-red-500">{errors.acceptTermsAndCondition}</p>
        )}
      </FormControl>
    </div>
  );
};

Form3.propTypes = {
  data: PropTypes.shape({
    countryCode: PropTypes.string,
    phoneNumber: PropTypes.string,
    acceptTermsAndCondition: PropTypes.bool,
  }).isRequired,
  updateData: PropTypes.func.isRequired,
  setValidateFunction: PropTypes.func.isRequired,
};

export default Form3;
