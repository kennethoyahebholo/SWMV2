import React from "react";
import { Button, FormInput, FormSelect, Loader } from "../../components";

const WasteDisposalView = ({
  formik,
  isLoading,
  binRequestOption,
  locationOption,
}) => {
  return (
    <div className="w-full m-auto max-w-[1000px] px-4">
      <h1 className="text-center text-[35px] font-bold mb-[1rem] mt-3">
        Waste Disposal
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
            id="quantityOfBagsOrBins"
            name="quantityOfBagsOrBins"
            value={formik.values.quantityOfBagsOrBins}
            touched={formik.touched.quantityOfBagsOrBins}
            onChange={formik.handleChange}
            errors={formik.errors.quantityOfBagsOrBins}
            className="w-full"
            label="Quantity of Bins"
          />
        </div>
        <div>
          <FormSelect
            size="lg"
            type="text"
            options={binRequestOption}
            id="binRequest"
            name="binRequest"
            placeholder="Choose"
            // value={formik.values.gender}
            touched={formik.touched.binRequest}
            onChange={formik.handleChange}
            errors={formik.errors.binRequest}
            className="w-full "
            label="Bin Request"
          />
        </div>

        <div>
          <FormSelect
            size="lg"
            type="text"
            options={locationOption}
            id="location"
            name="location"
            placeholder="Select Location"
            // value={formik.values.gender}
            touched={formik.touched.location}
            onChange={formik.handleChange}
            errors={formik.errors.location}
            className="w-full "
            label="Location"
          />
        </div>
        <div>
          <FormInput
            size="lg"
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            touched={formik.touched.address}
            onChange={formik.handleChange}
            errors={formik.errors.address}
            className="w-full"
            label="Address"
          />
        </div>
        <div className="flex items-center justify-center py-10">
          <Button
            type="submit"
            variant="full"
            size="lg"
            className="text-[12px]"
          >
            {isLoading ? <Loader /> : "Update"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WasteDisposalView;
