import axios from "axios";

import env from "../configs";

import {
  ALL_WASTE_SCHEDULE,
  WASTE_DISPOSAL,
  WASTE_RECYCLING,
} from "./CONSTANTS";

export const ScheduleWasteDisposal = async ({
  binRequestDto,
  scheduleDto,
  refLocationId,
  userId,
}) => {
  return await axios
    .post(`${env.API_BASE_URL}/${WASTE_DISPOSAL}/${userId}`, {
      binRequestDto,
      refLocationId,
      scheduleDto,
    })
    .then((res) => {
      return res;
    });
};

export const ScheduleWasteRecycling = async ({
  pickupAddress,
  pickUpDate,
  bin,
  bag,
  quantityOfBagsOrBins,
  requestStatus,
  binQuantity,
  refLocationId,
  userId,
  categoryId,
}) => {
  return await axios
    .post(`${env.API_BASE_URL}/${WASTE_RECYCLING}/${userId}/${categoryId}`, {
      pickupAddress,
      pickUpDate,
      bin,
      bag,
      quantityOfBagsOrBins,
      binQuantity,
      refLocationId,
      requestStatus,
    })
    .then((res) => {
      return res;
    });
};

export const getAllUserSchedule = async (userId) => {
  const response = await axios.get(
    `${env.API_BASE_URL}${ALL_WASTE_SCHEDULE}?id=${userId}`
  );
  return response.data;
};
