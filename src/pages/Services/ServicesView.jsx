import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "../../components";
import { SWM_USER_DATA } from "../../services/CONSTANTS";
import { ServiceDetails } from "../../utils/serviceDetails";
import NotAllowed from "./NotAllowed";
import ComingSoon from "./ComingSoon";
import ServicesComp from "./ServicesComp";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "../../redux/slices/userEmail.slice";
import { GetAllUserSchedule } from "../../services";

const ServicesView = () => {
  const [openModal, setOpenModal] = useState(false);
  const [comingSoonModal, setcomingSoonModal] = useState(false);
  const { pathname } = useLocation();
  const data = localStorage.getItem(SWM_USER_DATA);
  const [isAuth, setIsAuth] = useState(true);

  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const getSchedule = useCallback(() => {
    if (user) {
      dispatch(GetAllUserSchedule(user?.id));
    }
  }, [user]);

  useEffect(() => {
    getSchedule();
  }, [getSchedule]);

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
              comingSoonModal={comingSoonModal}
              setcomingSoonModal={setcomingSoonModal}
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
      {comingSoonModal && (
        <Modal
          content={<ComingSoon />}
          setOpenModal={() => setcomingSoonModal(false)}
        />
      )}
    </div>
  );
};

export default ServicesView;
