import React from "react";
import Input from "./Input";

const FormInput = ({
  id,
  label,
  errors,
  touched,
  required,
  size,
  optional,
  end,
  ...rest
}) => {
  const error = touched !== undefined && errors !== undefined;
  return (
    <div className="w-full">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          {label !== undefined && (
            <label
              htmlFor={id}
              className={`block ${
                size === "sm" ? "text-[12px]" : "text-lg"
              } text-[#000000] font-['Spectral'] mb-[6px]`}
            >
              {label}
            </label>
          )}
          {optional && (
            <small className="text-[#009D49] text-[10px]">{optional}</small>
          )}
          {required && (
            <small className="text-red-700 text-[10px]">{required}</small>
          )}
        </div>

        <Input
          end={undefined}
          size={size}
          {...rest}
          className={`${
            error ? "border-red-700 text-red-700 placeholder:text-red-700" : ""
          } w-full`}
        />
      </div>
      {error && <p className="text-red-700 text-base">{errors}</p>}
    </div>
  );
};

export default FormInput;
