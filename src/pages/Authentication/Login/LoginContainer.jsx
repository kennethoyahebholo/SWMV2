import * as Yup from "yup";
import { useFormik } from "formik";
import { Auth } from "../../../components";
import LoginView from "./LoginView";
// import { JOB_ROLES } from "../../../routes/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../../../routes/CONSTANTS";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/auth.slice";
import { useQuery } from "../../../hooks";

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      // email: Yup.string()
      //   .email("Invalid email address")
      //   .required("Email is required"),
      email: Yup.string()
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
      setIsLoading(true);
      console.log(details);
      // localStorage.setItem("userData", details.email);
      // setTimeout(() => {
      //   setIsLoading(false);
      //   toast.success("Successfully Logged In");
      //   navigate(SERVICES);
      // }, 3000);
      void dispatch(login(details))
        .unwrap()
        .then((resp) => {
          console.log(resp);
          const redirect = query.get("redirect");
          if (redirect) {
            //  redirect to absolute URL - possibly initiated from VC app
            if (redirect.startsWith("http")) {
              return window.location.replace(redirect);
            }
            navigate(`../${redirect}`, { replace: true });
          } else if (resp?.status === 200 || resp?.status === 201) {
            toast.success("login successfully, navigating to services");
            navigate(SERVICES);
            // if (userRole === "customer") {
            //   navigate(HOME);
            //   // window.location.reload();
            // } else {
            //   navigate(DASHBOARD);
            //   // window.location.reload();
            // }
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    },
  });

  return (
    <Auth message="Welcome Back">
      <LoginView formik={formik} isLoading={isLoading} />
    </Auth>
  );
};
