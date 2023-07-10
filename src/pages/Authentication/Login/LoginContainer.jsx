import * as Yup from "yup";
import { useFormik } from "formik";
import { Auth } from "../../../components";
import LoginView from "./LoginView";
// import { JOB_ROLES } from "../../../routes/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../../../routes/CONSTANTS";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginContainer = () => {
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        ),
    }),
    onSubmit: (details) => {
      toast.success("Successfully Logged In");
      console.log(details);
      localStorage.setItem("userData", details.email);
      setTimeout(() => {
        Navigate(SERVICES);
      }, 1000);
    },
  });

  return (
    <Auth
      message="Welcome Back"
      google_message="Continue With Google"
      linkedIn_message="Continue With Linkedin"
    >
      <LoginView formik={formik} />
    </Auth>
  );
};
