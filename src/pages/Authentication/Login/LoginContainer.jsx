import * as Yup from "yup";
import { useFormik } from "formik";
import { Auth } from "../../../components";
import LoginView from "./LoginView";
// import { JOB_ROLES } from "../../../routes/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../../../routes/CONSTANTS";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/auth.slice";
import { useQuery } from "../../../hooks";
import { getUserByEmail } from "../../../redux/slices/user.slice";
import { setUserEmail } from "../../../redux/slices/userEmail.slice";
import { SWM_USER_EMAIL } from "../../../services/CONSTANTS";

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
      void dispatch(login(details))
        .unwrap()
        .then((resp) => {
          const email = JSON.parse(resp?.config?.data)?.email;
          dispatch(getUserByEmail(email));
          localStorage.setItem(SWM_USER_EMAIL, JSON.stringify(email));
          // dispatch(setUserEmail(email));
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
