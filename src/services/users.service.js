import axios from "axios";
import { env } from "../configs/environment.config";
import { GET_USER, UPDATE_USER } from "./CONSTANTS";

export const GetUserByEmail = async (email) => {
  try {
    const response = await axios.get(
      `${env.API_BASE_URL}/${GET_USER}/${email}`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export const UpdateUserDetails = async ({
  firstName,
  lastName,
  otherName,
  email,
  phoneNumber,
  gender,
  address,
  id,
}) => {
  try {
    const response = await axios.put(
      `${env.API_BASE_URL}/${UPDATE_USER}/${id}`,
      {
        firstName,
        lastName,
        otherName,
        email,
        phoneNumber,
        gender,
        address,
      }
    );
    return response;
  } catch (err) {
    return err;
  }
};
