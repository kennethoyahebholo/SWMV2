import Dropdown from "./Dropdown";

const FormSelect = ({
  id,
  label,
  errors,
  touched,
  required,
  optional,
  size,
  placeholder,
  ...rest
}) => {
  const error = touched !== undefined && errors !== undefined;
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between">
        {label !== undefined && (
          <label
            htmlFor={id}
            className={`block ${
              size === "base" ? "text-[12px]" : "text-lg font-SpectralSemiBold"
            } text-[#000000] font-['Spectral'] mb-[6px]`}
          >
            {label}
          </label>
        )}
        {optional && (
          <small className="text-[#009D49] font-LatoRegular text-[10px]">
            Optional
          </small>
        )}
        {required && (
          <small className="text-red-700 text-[10px]">Required</small>
        )}
      </div>

      <Dropdown
        size={size}
        placeholder={placeholder}
        {...rest}
        className={`${
          error ? "border-red-700 text-red-700 placeholder:text-red-700" : ""
        } w-full`}
      />
      {errors && <p className="text-red-700 text-base ">{errors}</p>}
    </div>
  );
};

export default FormSelect;
