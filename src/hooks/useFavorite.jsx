import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
// import { AuthContext } from "../authentication/AuthProvider";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const useFavorite = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    refetch: isFavFetch,
    data: favorite = [],
    isError: isFavError,
    isLoading: isFavLoading,
    error,
  } = useQuery({
    queryKey: ["favorites", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/favorite?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [favorite, isFavFetch, isFavError, isFavLoading, error];
};

export default useFavorite;
