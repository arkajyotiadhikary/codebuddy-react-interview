import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Form1 = ({ data, updateData, setValidateFunction }) => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const validate = () => {
      console.log("validating...");
      const newErrors = {};
      if (!data.emailId) {
        newErrors.emailId = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(data.emailId)) {
        newErrors.emailId = "Email is invalid";
      }

      if (!data.password) {
        newErrors.password = "Password is required";
      } else if (
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
          data.password,
        )
      ) {
        newErrors.password =
          "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    setValidateFunction(() => validate);
  }, [data, setValidateFunction]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <FormControl isRequired isInvalid={errors.emailId}>
        <FormLabel className="text-lg">Email:</FormLabel>
        <Input
          placeholder="Email"
          type="email"
          name="emailId"
          value={data.emailId || ""}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-300 px-3 py-2"
        />
        {errors.emailId && <p className="text-sm text-red-500">{errors.emailId}</p>}
      </FormControl>
      <FormControl isRequired isInvalid={errors.password}>
        <FormLabel className="text-lg">Password:</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={data.password || ""}
            onChange={handleChange}
            className="rounded-md border-2 border-gray-300 px-3 py-2"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
      </FormControl>
    </div>
  );
};

Form1.propTypes = {
  data: PropTypes.shape({
    emailId: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  updateData: PropTypes.func.isRequired,
  setValidateFunction: PropTypes.func.isRequired,
};

export default Form1;
