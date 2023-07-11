import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import WasteDisposalView from "./WasteDisposalView";
import { Landing } from "../../components";
import { toast } from "react-toastify";

export const WasteDisposalContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const formik = useFormik({
    initialValues: {
      pickupAddress: "",
      quantityOfBagsOrBins: "",
      binRequest: "",
      location: "",
    },
    validationSchema: Yup.object().shape({
      pickupAddress: Yup.string().required("Pickup Address is required"),
      quantityOfBagsOrBins: Yup.string().required(
        "Quantity of Bins is required"
      ),
      binRequest: Yup.string().required("Bin Request is required"),
      location: Yup.string().required("Location is required"),
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

  const binRequestOption = [
    {
      value: 0,
      label: "No",
    },
    {
      value: 1,
      label: "Yes",
    },
  ];

  const locationOption = [
    {
      value: "ikeja",
      label: "Ikeja",
    },
    {
      value: "surulere",
      label: "Surulere",
    },
    {
      value: "yaba",
      label: "Yaba",
    },
  ];

  return (
    <Landing>
      <WasteDisposalView
        formik={formik}
        isLoading={isLoading}
        binRequestOption={binRequestOption}
        locationOption={locationOption}
      />
    </Landing>
  );
};
