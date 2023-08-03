import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useLoadingTasks = () => {
  const { axiosFetch } = useAxios();

  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosFetch.get("tasks");
      return res.data;
    },
  });

  return { refetch, tasks };
};

export default useLoadingTasks;
