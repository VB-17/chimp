import axios from "axios";

export const sendEmail = async (email) => {
  const response = await axios.post("/api/sendEmail", email);
  return response.data;
};
