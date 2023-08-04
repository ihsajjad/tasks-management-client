import axios from "axios";

const useAxios = () => {
  const axiosFetch = axios.create({
    baseURL: "https://tasks-management-server.vercel.app/",
  });

  return { axiosFetch };
};

export default useAxios;
