import axios from "axios";

const baseURL = "https://volunteer-app-project.herokuapp.com/api/";

export const fetchAllMessages = () =>
  axios({
    url: `${baseURL}/messages`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const createMessageHandler = (data) =>
  axios({
    method: "post",
    url: `${baseURL}/messages/create`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
