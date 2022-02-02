import axios from 'axios';

const baseURL = 'https://volunteer-app-project.herokuapp.com/api/';

export const fetchUsersHandler = (token) =>
  axios({
    url: `${baseURL}/users`,
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const signUpUserHandler = (data) =>
  axios({
    method: 'post',
    url: `${baseURL}/signup`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const loginUserHandler = (data) =>
  axios({
    method: 'post',
    url: `${baseURL}/login`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const logoutUserHandler = () =>
  axios({
    url: `${baseURL}/logout`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const findCurrentUserHandler = (token, userName) =>
  axios({
    url: `${baseURL}/users/currentUser/${userName}`,
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const findCurrentUserByIdHandler = (id) =>
  axios({
    url: `${baseURL}/users/${id}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const updateUserHandler = (data, userName) =>
  axios({
    method: 'put',
    url: `${baseURL}/updated/${userName}`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const deleteUserHandler = (id) =>
  axios({
    method: 'delete',
    url: `${baseURL}/${id}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

export const createUserPostHandler = (data, id) =>
  axios({
    method: 'post',
    url: `${baseURL}/users/post/${id}`,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
