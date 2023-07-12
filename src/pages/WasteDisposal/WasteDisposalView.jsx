import React from "react";
import { Button, FormInput, FormSelect, Loader } from "../../components";

const WasteDisposalView = ({
  formik,
  isLoading,
  binRequestOption,
  locationOption,
}) => {
  const pickUpDays = {
    2: "Mondays",
    3: "Tuesdays",
    4: "Wednesdays",
    5: "Thursdays",
  };
  return (
    <div className="w-full m-auto max-w-[1000px] px-4">
      <h1 className="text-center text-[35px] font-bold mb-[1rem] mt-3">
        Waste Disposal
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div>
          <FormSelect
            size="lg"
            options={binRequestOption}
            id="binRequest"
            name="binRequest"
            placeholder="Choose"
            value={formik.values.binRequest}
            touched={formik.touched.binRequest}
            onChange={formik.handleChange}
            errors={formik.errors.binRequest}
            className="w-full "
            label="Bin Request"
          />
        </div>
        {formik?.values?.binRequest === "1" && (
          <div className="dropInField">
            <FormInput
              size="lg"
              type="number"
              id="binQuantity"
              name="binQuantity"
              value={formik.values.binQuantity}
              touched={formik.touched.binQuantity}
              onChange={formik.handleChange}
              errors={formik.errors.binQuantity}
              className="w-full"
              label="Quantity of Bins"
            />
          </div>
        )}

        <div>
          <FormSelect
            size="lg"
            options={locationOption}
            id="location"
            name="location"
            message={
              formik?.values?.location
                ? pickUpDays[formik?.values?.location]
                : false
            }
            placeholder="Select Location"
            value={formik.values.location}
            touched={formik.touched.location}
            onChange={formik.handleChange}
            errors={formik.errors.location}
            className="w-full "
            label="Location"
          />
        </div>

        {formik?.values?.location && (
          <div className="dropInField">
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
        )}
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

export default WasteDisposalView;
