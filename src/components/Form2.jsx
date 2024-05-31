import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const Form2 = ({ data, updateData, setValidateFunction }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const validate = () => {
      const newErrors = {};
      if (!data.firstName) {
        newErrors.firstName = "First Name is required";
      } else if (!/^[A-Za-z]{2,50}$/.test(data.firstName)) {
        newErrors.firstName = "First Name must be alphabetic and between 2 to 50 characters";
      }

      if (!data.lastName) {
        newErrors.lastName = "Last Name is required";
      } else if (!/^[A-Za-z]{2,50}$/.test(data.lastName)) {
        newErrors.lastName = "Last Name must be alphabetic and between 2 to 50 characters";
      }

      if (!data.address) {
        newErrors.address = "Address is required";
      } else if (data.address.length < 10) {
        newErrors.address = "Address must be at least 10 characters long";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    setValidateFunction(() => validate);
  }, [data, setValidateFunction]);

  return (
    <div className="flex flex-col space-y-4">
      <FormControl isRequired isInvalid={errors.firstName}>
        <FormLabel className="text-lg">First Name:</FormLabel>
        <Input
          placeholder="First Name"
          type="text"
          name="firstName"
          value={data.firstName || ""}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-300 px-3 py-2"
        />
        {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
      </FormControl>
      <FormControl isRequired isInvalid={errors.lastName}>
        <FormLabel className="text-lg">Last Name:</FormLabel>
        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          value={data.lastName || ""}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-300 px-3 py-2"
        />
        {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
      </FormControl>
      <FormControl isRequired isInvalid={errors.address}>
        <FormLabel className="text-lg">Address:</FormLabel>
        <Textarea
          placeholder="Address"
          name="address"
          value={data.address || ""}
          onChange={handleChange}
          rows={3}
          className="rounded-md border-2 border-gray-300 px-3 py-2"
        />
        {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
      </FormControl>
    </div>
  );
};

Form2.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  updateData: PropTypes.func.isRequired,
  setValidateFunction: PropTypes.func.isRequired,
};

export default Form2;
