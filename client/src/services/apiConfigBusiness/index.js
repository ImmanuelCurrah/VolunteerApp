import axios from 'axios';

const baseURL = 'https://volunteer-app-project.herokuapp.com/api/';

//get businesses
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

//sign up businesses
export const signUpBusinessHandler = (data) =>
  axios({
    method: 'post',
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

//login business
export const loginBusinessHandler = (data) =>
  axios({
    method: 'post',
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

//logout business
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

// fins business by name
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

// find business by id
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

// update business
export const updateBusinessHandler = (data, businessName) =>
  axios({
    method: 'put',
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

// create businesss post
export const createBusinessPostHandler = (data, id) =>
  axios({
    method: 'post',
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

//delete business account
export const deleteBusinessHandler = (id) =>
  axios({
    method: 'delete',
    url: `${baseURL}delete/business/${id}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

//delete business post
export const deleteBusinessPost = (id, postId) =>
  axios({
    method: 'delete',
    url: `${baseURL}delete/business/${id}/${postId}`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

// get comment
export const fetchComment = (token, businessId, postId) =>
  axios({
    method: 'get',
    url: `${baseURL}/post/${businessId}/${postId}`,
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });

// post comment
export const postCommentHandler = (token, data, businessId, postId) =>
  axios({
    method: 'post',
    url: `${baseURL}/post/${businessId}/${postId}`,
    headers: { Authorization: `${token}` },
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
