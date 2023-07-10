import * as Yup from "yup";
import { Auth } from "../../../components";
import { useFormik } from "formik";
import SignupView from "./SignupView";
import { SIGNUP_SUCCESS } from "../../../routes/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const SignupContainer = () => {
  const Navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      // lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      // firstName: Yup.string().required("Please enter your first name."),
      // lastName: Yup.string().required("Please enter your Last name."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^\+?(?:\d){10,14}$/, "Invalid phone number"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (details) => {
      console.log(details);
      console.log("+", `234${parseInt(details?.phone, 10)}`);
      toast.success("Account Created Successfully");
      Navigate(SIGNUP_SUCCESS);
    },
  });

  const handlePhoneInputChange = (value) => {
    setPhoneNumber(value);
    formik.setFieldValue("phone", value);
  };

  return (
    <Auth message="Join our Smart Waste Management Vision and Make a Difference in Your Community">
      <SignupView
        formik={formik}
        loading={false}
        handlePhoneInputChange={handlePhoneInputChange}
      />
    </Auth>
  );
};
