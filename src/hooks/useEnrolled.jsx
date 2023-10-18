import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
// import { AuthContext } from "../authentication/AuthProvider";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const useEnrolled = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    refetch: isEnrollRefetch,
    data: enrolled = [],
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["enrolleds", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/coursepayinfo?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [enrolled, isEnrollRefetch, isError, isLoading, error];
};

export default useEnrolled;
