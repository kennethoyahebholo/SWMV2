import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "../../components";
import { ServiceDetails } from "../../utils/serviceDetails";
import NotAllowed from "./NotAllowed";
import ServicesComp from "./ServicesComp";

const ServicesView = () => {
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
      <h1 className="text-center text-[35px] font-bold mb-[6.5rem] mt-3">
        OUR SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between w-full h-full place-items-center max-w-[70rem] m-auto gap-6">
        {ServiceDetails?.map((data) => {
          return (
            <ServicesComp
              key={data.id}
              data={data}
              openModal={openModal}
              setOpenModal={setOpenModal}
              isAuth={isAuth}
            />
          );
        })}
      </div>
      {openModal && (
        <Modal
          content={<NotAllowed title="education" />}
          setOpenModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default ServicesView;
