import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, FormInput, FormSelect, Loader, Modal } from "../../components";

const ProfileView = ({ formik, isLoading, genderOption }) => {
  const [openModal, setOpenModal] = useState(false);
  const { pathname } = useLocation();
  const data = localStorage.getItem("userData");
  const [isAuth, setIsAuth] = useState(true);

  const getActiveUser = useCallback(() => {
    if (!data) {
      setIsAuth(false);
    }
  }, [data]);

  useEffect(() => {
    getActiveUser();
  }, [getActiveUser]);

  return (
    <div className="w-full">
      <div className="w-full m-auto max-w-[1000px]">
        <h1 className="text-center text-[35px] font-bold mb-[1rem] mt-3">
          YOUR PROFILE
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-8">
          <div>
            <FormInput
              size="lg"
              type="text"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              touched={formik.touched.firstName}
              onChange={formik.handleChange}
              errors={formik.errors.firstName}
              className="w-full"
              label="First Name"
            />
          </div>
          <div>
            <FormInput
              size="lg"
              type="text"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              touched={formik.touched.lastName}
              onChange={formik.handleChange}
              errors={formik.errors.lastName}
              className="w-full"
              label="Last Name"
            />
          </div>
          <div>
            <FormInput
              size="lg"
              type="text"
              id="otherName"
              name="otherName"
              value={formik.values.otherName}
              touched={formik.touched.otherName}
              onChange={formik.handleChange}
              errors={formik.errors.otherName}
              className="w-full"
              label="Other Name"
            />
          </div>

          <div>
            <FormSelect
              size="lg"
              type="text"
              options={genderOption}
              id="gender"
              name="gender"
              // placeholder="Select Gender"
              // value={formik.values.gender}
              touched={formik.touched.gender}
              onChange={formik.handleChange}
              errors={formik.errors.gender}
              className="w-full "
              label="Gender"
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
    </div>
  );
};

export default ProfileView;
