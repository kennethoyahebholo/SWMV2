import * as Yup from "yup";
import { Auth } from "../../../components";
import { useFormik } from "formik";
import SignupView from "./SignupView";
import { SIGNUP_SUCCESS } from "../../../routes/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignupContainer = () => {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      // lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      // firstName: Yup.string().required("Please enter your first name."),
      // lastName: Yup.string().required("Please enter your Last name."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
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
      toast.success("Account Created Successfully");
      Navigate(SIGNUP_SUCCESS);
    },
  });

  return (
    <Auth
      message="Join our Volunteer Team and Make a Difference in Your Community"
      google_message="Join With Google"
      linkedIn_message="Join With Linkedin"
    >
      <SignupView formik={formik} loading={false} />
    </Auth>
  );
};
