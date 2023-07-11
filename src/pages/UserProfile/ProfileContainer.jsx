import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import ProfileView from "./ProfileView";
import { Landing } from "../../components";
import { toast } from "react-toastify";

export const ProfileContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      otherName: "",
      gender: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      otherName: Yup.string().required("Other Name is required"),
      gender: Yup.string().required("Gender is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (details, { resetForm }) => {
      console.log(details);
      setIsLoading(true);
      console.log(details);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Updated Successfully");
        resetForm({ details: "" });
        // navigate(SIGNUP_SUCCESS);
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

  const genderOption = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  return (
    <Landing>
      <ProfileView
        formik={formik}
        isLoading={isLoading}
        genderOption={genderOption}
      />
    </Landing>
  );
};
