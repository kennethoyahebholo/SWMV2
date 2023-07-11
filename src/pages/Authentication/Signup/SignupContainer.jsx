import * as Yup from "yup";
import { Auth } from "../../../components";
import { useFormik } from "formik";
import SignupView from "./SignupView";
import { SIGNUP_SUCCESS } from "../../../routes/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/slices/auth.slice";

export const SignupContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
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
      setIsLoading(true);
      console.log(details);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Registered Successfully");
        navigate(SIGNUP_SUCCESS);
      }, 3000);

      // void dispatch(
      //   register({
      //     email: details.email,
      //     phoneNumber: details.phone.toString(),
      //     password: details.password,
      //   })
      // )
      //   .unwrap()
      //   .then((res) => {
      //     console.log(res);
      //     if (res?.statusCodeValue === 400) {
      //       toast.error(res.body);
      //       return;
      //     }
      //     if (res && res?.statusCodeValue === 200) {
      //       navigate(SIGNUP_SUCCESS);
      //       return;
      //     }
      //   });
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
        isLoading={isLoading}
        handlePhoneInputChange={handlePhoneInputChange}
      />
    </Auth>
  );
};
