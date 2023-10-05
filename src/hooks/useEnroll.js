
import { useQuery } from "@tanstack/react-query";

export const useEnroll = () => {
    const {
        data: enrolls = [],
        isLoading: isEnrollLoading,
        refetch: isEnrollRefetch,
    } = useQuery({
        queryKey: ["enrolls"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/enroll`);
            return res.json();
        },
    });

    return [enrolls,isEnrollRefetch,isEnrollLoading];
};