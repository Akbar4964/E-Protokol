import Axios from "axios";
import { BASE_URL } from "../consts";

export const axiosInterceptors = Axios.create({
  baseURL: BASE_URL,
});

axiosInterceptors.interceptors.request.use((config) => {
  const authUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { token: null, islogged: false };
  if (authUser.token) {
    config.headers.Authorization = "user" + authUser.token;
  }
  return config;
});

axiosInterceptors.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
    }
    return error;
  }
);

export const API = {
  ///// GET /////
  getUsers: () => axiosInterceptors.get("/users").then((res) => res.data),
  getUsersById: () => axiosInterceptors.get("/users/").then((res) => res.data),
  getMeetings: () => axiosInterceptors.get("/meetings").then((res) => res.data),
  getMeetingsOrgan: () =>
    axiosInterceptors.get("/meetingsOrgan").then((res) => res.data),
  getMeetingsOrganById: (meetingOrganId) =>
    axiosInterceptors.get("/meetingsOrgan/" + meetingOrganId).then((res) => {
      return res.data;
    }),
  getMeetingsMatter: () =>
    axiosInterceptors.get("/meetingsMatter").then((res) => res.data),
  getMeetingsById: (meetingId) =>
    axiosInterceptors.get("/meetings/" + meetingId).then((res) => {
      return res.data;
    }),
  ///// DELETE /////
  deleteUser: (userId) =>
    axiosInterceptors.delete("/users/" + userId).then((res) => res.data),
  deleteMeeting: (meetingId) =>
    axiosInterceptors.delete("/meetings/" + meetingId).then((res) => res.data),
  deleteMeetingOrgan: (meetingOrganId) =>
    axiosInterceptors
      .delete("/meetingsOrgan/" + meetingOrganId)
      .then((res) => res.data),
  ///// POST /////
  postUser: (userData) =>
    axiosInterceptors.post("/users", userData).then((res) => res.data),
  postMeeting: (meetingData) =>
    axiosInterceptors.post("/meetings/", meetingData).then((res) => res.data),
  postMeetingOrgan: (meetingOrganData) =>
    axiosInterceptors
      .post("/meetingsOrgan", meetingOrganData)
      .then((res) => res.data),
  postMeetingMatter: (meetingMatterData) =>
    axiosInterceptors
      .post("/meetingsMatter", meetingMatterData)
      .then((res) => res.data),
  ///// PUT /////
  putMeeting: (meetingId, updatedData) =>
    axiosInterceptors
      .put("/meetings/" + meetingId, updatedData)
      .then((res) => res.data),
  ///// LOGIN /////
  loginUser: ({ logIn, password }) =>
    axiosInterceptors
      .get("/users?login=" + logIn + "&password=" + password)
      .then((res) => res.data),
};
