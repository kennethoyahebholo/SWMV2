import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import WasteRecyclingView from "./WasteRecyclingView";
import { Landing } from "../../components";
import { toast } from "react-toastify";
import { scheduleWasteRecycling } from "../../redux/slices/services.slice";
import { useDispatch, useSelector } from "react-redux";

export const WasteRecyclingContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      pickUpDate: "",
      binOrBag: "",
      quantityOfBagsOrBins: "",
      category: "",
      location: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      pickUpDate: Yup.string().required("Pick Up Date is required"),
      binOrBag: Yup.string().required("Required"),
      quantityOfBagsOrBins: Yup.string().required("First Name is required"),
      category: Yup.string().required("Category is required"),
      location: Yup.string().required("Location is required"),
      address: Yup.string().required("Pickup Address is required"),
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

      void dispatch(
        scheduleWasteRecycling({
          pickUpDate: details?.pickUpDate,
          bin: details?.binOrBag === "bin" ? true : false,
          bag: details?.binOrBag === "bag" ? true : false,
          quantityOfBagsOrBins: details?.quantityOfBagsOrBins,
          categoryId: details?.category?.id,
          refLocationId: details?.location,
          pickupAddress: details?.address,
          userId: user?.id,
        })
      )
        .unwrap()
        .then((res) => {
          console.log(res);
          if (res?.statusCodeValue === 400) {
            toast.error(res.body);
            return;
          }
          if (res && res?.statusCodeValue === 200) {
            // navigate(SIGNUP_SUCCESS);
            return;
          }
        });
    },
  });

  const binOrBagOption = [
    {
      value: "",
      title: "Select Option",
    },
    {
      value: "bin",
      title: "Bin",
    },
    {
      value: "bag",
      title: "Bag",
    },
  ];

  const categoryOption = [
    {
      value: "",
      title: "Select Category",
    },
    {
      value: "1",
      title: "Pet/Bottles",
    },
    {
      value: "2",
      title: "Paper/Cardboard/Cartons",
    },
    {
      value: "3",
      title: "Cans/Metals",
    },
    {
      value: "4",
      title: "Nylon",
    },
  ];

  const locationOption = [
    {
      value: "",
      title: "Select Location",
    },
    {
      value: "2",
      title: "Alimosho",
    },
    {
      value: "3",
      title: "Lagos",
    },
    {
      value: "4",
      title: "Somolu",
    },
    {
      value: "5",
      title: "Ikorodu",
    },
  ];

  return (
    <Landing>
      <WasteRecyclingView
        formik={formik}
        isLoading={isLoading}
        locationOption={locationOption}
        categoryOption={categoryOption}
        binOrBagOption={binOrBagOption}
      />
    </Landing>
  );
};
