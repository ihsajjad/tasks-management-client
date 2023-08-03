import axios from "axios";

const useAxios = () => {
  const axiosFetch = axios.create({
    baseURL: "http://localhost:5000/",
  });

  return { axiosFetch };
};

export default useAxios;
