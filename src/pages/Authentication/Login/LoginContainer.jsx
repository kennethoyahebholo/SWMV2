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
      email_phone: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      // email: Yup.string()
      //   .email("Invalid email address")
      //   .required("Email is required"),
      email_phone: Yup.string()
        .required("Field is required")
        .matches(
          /^(?:\+?\d{10,14}|[\w\.-]+@[\w\.-]+\.\w{2,4})$/,
          "Invalid field value"
        ),
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
    <Auth message="Welcome Back">
      <LoginView formik={formik} />
    </Auth>
  );
};
