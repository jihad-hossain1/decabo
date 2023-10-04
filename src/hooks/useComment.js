// import { useQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";

export const useComment = () => {
    const {
        data: comments = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["comments"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/comments`);
            return res.json();
        },
    });

    return [comments,refetch,loading];
};

 