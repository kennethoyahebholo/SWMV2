import React from "react";
import { Button, FormInput, FormSelect, Loader } from "../../components";

// bin: "",
// bag: "",

const WasteRecycling = ({ formik, isLoading, genderOption }) => {
  return (
    <div className="w-full m-auto max-w-[1000px] px-4">
      <h1 className="text-center text-[35px] font-bold mb-[1rem] mt-3">
        Waste Recycling
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div>
          <FormInput
            size="lg"
            type="text"
            id="pickupAddress"
            name="pickupAddress"
            value={formik.values.pickupAddress}
            touched={formik.touched.pickupAddress}
            onChange={formik.handleChange}
            errors={formik.errors.pickupAddress}
            className="w-full"
            label="Pickup Address"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="text"
            id="pickupAddress"
            name="pickupAddress"
            value={formik.values.pickupAddress}
            touched={formik.touched.pickupAddress}
            onChange={formik.handleChange}
            errors={formik.errors.pickupAddress}
            className="w-full"
            label="Pickup Date"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="text"
            id="pickupAddress"
            name="pickupAddress"
            value={formik.values.pickupAddress}
            touched={formik.touched.pickupAddress}
            onChange={formik.handleChange}
            errors={formik.errors.pickupAddress}
            className="w-full"
            label="Bins"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="text"
            id="pickupAddress"
            name="pickupAddress"
            value={formik.values.pickupAddress}
            touched={formik.touched.pickupAddress}
            onChange={formik.handleChange}
            errors={formik.errors.pickupAddress}
            className="w-full"
            label="Bags"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="number"
            id="quantityOfBagsOrBins"
            name="quantityOfBagsOrBins"
            value={formik.values.quantityOfBagsOrBins}
            touched={formik.touched.quantityOfBagsOrBins}
            onChange={formik.handleChange}
            errors={formik.errors.quantityOfBagsOrBins}
            className="w-full"
            label="Quantity of Bins or Bags"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="number"
            id="quantityOfBagsOrBins"
            name="quantityOfBagsOrBins"
            value={formik.values.quantityOfBagsOrBins}
            touched={formik.touched.quantityOfBagsOrBins}
            onChange={formik.handleChange}
            errors={formik.errors.quantityOfBagsOrBins}
            className="w-full"
            label="Bins Quantity"
          />
        </div>
        <div className="flex items-center justify-center py-10">
          <Button
            type="submit"
            variant="full"
            size="lg"
            className="text-[12px]"
          >
            {isLoading ? <Loader /> : "Schedule Appointment"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WasteRecycling;
