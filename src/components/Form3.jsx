import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
      <div className="flex flex-col space-y-1">
        <label className="text-lg">Country Code:</label>
        <select
          name="countryCode"
          value={data.countryCode || ""}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-300 px-3 py-2"
        >
          <option value="">Select Country Code</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <p className="text-red-500">{errors.countryCode}</p>}
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-lg">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={data.phoneNumber || ""}
          onChange={handleChange}
          className="rounded-md border-2 border-gray-300 px-3 py-2"
        />
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="acceptTermsAndCondition"
          checked={data.acceptTermsAndCondition || false}
          onChange={handleChange}
          className="h-4 w-4 rounded-md border-gray-300 text-blue-600 shadow-sm focus:border-blue-600 focus:ring-blue-600"
        />
        <label className="text-lg">Accept Terms and Conditions</label>
      </div>
      {errors.acceptTermsAndCondition && (
        <p className="text-red-500">{errors.acceptTermsAndCondition}</p>
      )}
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
