import axios from "axios";

const baseURL = "https://volunteer-app-project.herokuapp.com/api/";

export const fetchBusinessesHandler = (token) =>
  axios({
    url: `${baseURL}/businesses`,
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const signUpBusinessHandler = (data) =>
  axios({
    method: "post",
    url: `${baseURL}/signup/business`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const loginBusinessHandler = (data) =>
  axios({
    method: "post",
    url: `${baseURL}/login/business`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const logoutBusinessHandler = () =>
  axios({
    url: `${baseURL}/logout/business`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const findCurrentBusinessByNameHandler = (token, businessName) =>
  axios({
    url: `${baseURL}/users/currentBusiness/${businessName}`,
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const findCurrentBusinessByIdHandler = (id) =>
  axios({
    url: `${baseURL}/users/business/${id}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const updateBusinessHandler = (data, businessName) =>
  axios({
    method: "put",
    url: `${baseURL}/updated/business/${businessName}`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const deleteBusinessHandler = (id) =>
  axios({
    method: "delete",
    url: `${baseURL}/business/${id}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const createBusinessPostHandler = (data, id) =>
  axios({
    method: "post",
    url: `${baseURL}/users/post/business/${id}`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
