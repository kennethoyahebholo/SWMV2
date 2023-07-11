import React from "react";
import Select from "react-select";

const Dropdown = ({
  options,
  size = "md",
  className = "",
  isMulti,
  placeholder,
  ...props
}) => {
  const getSize = (size) => {
    switch (size) {
      case "sm":
        return "py-2 px-[12px]";
      case "md":
        return "";
      case "lg":
        return "py-5 px-[28px]";

      default:
        return "";
    }
  };

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: "1.5px solid #333333",
      borderRadius: "6px",
      minHeight: "40px",
      ":hover": {
        border: "1.5px solid #333333",
      },
    }),
    option: (styles) => {
      return { ...styles, color: "#8692A6]" };
    },
    placeholder: (provided) => ({
      ...provided,
      fontWeight: "600",
      color: "#9CA3AF",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
    }),
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "#004B9D",
        color: "red",
        padding: "3px",
        borderRadius: "3px",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return { ...styles, color: "#FFFFFF", fontSize: "8px" };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#FFFFFF",
        cursor: "pointer",
        ":hover": {
          color: "#FFFFFF",
        },
      };
    },
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#004B9D",
      "&:hover": {
        color: "#004B9D",
      },
    }),
  };

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
  };

  const customInput = ({ className, ...props }) => (
    <div className={`relative ${className} w-full`}>
      <input
        {...props}
        placeholder={placeholder}
        className={`${getSize(size)} w-full outline-none`}
      />
    </div>
  );

  const customPlaceholder = () => <span className=""></span>;

  return (
    // <Select
    //   className={`${className} text-base bg-white placeholder:text-[#8692A6]`}
    //   {...props}
    //   options={options}
    //   isMulti={isMulti}
    //   onChange={handleChange}
    //   styles={colorStyles}
    //   components={{ Input: customInput, Placeholder: customPlaceholder }}
    // />
    <Select
      className={`${className} text-base bg-white placeholder:text-[#8692A6]`}
      {...props}
      name="dropdownValue"
      options={options}
      // components={{ Input: customInput, Placeholder: customPlaceholder }}
      // value={options.find((option) => option.value === values.dropdownValue)}
      onChange={handleChange}

      // onBlur={handleBlur("dropdownValue")}
    />
  );
};

export default Dropdown;
