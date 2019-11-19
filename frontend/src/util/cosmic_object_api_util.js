import axios from "axios";

export const getCosmicObjects = () => {
  return axios.get("/api/cosmicobjects");
};