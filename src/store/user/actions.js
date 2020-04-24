import GET_USERS from "./types";

export const getUsers = () => ({
  type: GET_USERS,
  payload: [{id: 1, name: "Furkan"}]
});