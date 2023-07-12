import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import WasteRecyclingView from "./WasteRecyclingView";
import { Landing } from "../../components";
import { toast } from "react-toastify";

export const WasteRecyclingContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const formik = useFormik({
    initialValues: {
      pickupAddress: "",
      pickUpDate: "",
      bin: "",
      bag: "",
      quantityOfBagsOrBins: "",
      binQuantity: "",
    },
    validationSchema: Yup.object().shape({
      pickupAddress: Yup.string().required("Pick Up Address is required"),
      pickUpDate: Yup.string().required("Pick Up Date is required"),
      bin: Yup.string().required("Bin is required"),
      bag: Yup.string().required("Bag is required"),
      quantityOfBagsOrBins: Yup.string().required("First Name is required"),
      binQuantity: Yup.string().required("Bin Quantity is required"),
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
      <WasteRecyclingView
        formik={formik}
        isLoading={isLoading}
        genderOption={genderOption}
      />
    </Landing>
  );
};
