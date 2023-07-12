import axios from "axios";

import env from "../configs";

import {
  ALL_WASTE_SCHEDULE,
  WASTE_DISPOSAL,
  WASTE_RECYCLING,
} from "./CONSTANTS";

export const ScheduleWasteDisposal = async ({ binRequestDto, scheduleDto }) => {
  return await axios
    .post(`${env.API_BASE_URL}/${WASTE_DISPOSAL}`, {
      binRequestDto,
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
  binQuantity,
}) => {
  return await axios
    .post(`${env.API_BASE_URL}/${WASTE_RECYCLING}`, {
      pickupAddress,
      pickUpDate,
      bin,
      bag,
      quantityOfBagsOrBins,
      binQuantity,
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
