// import { useQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";

export const useCourse = () => {
    const {
        data: courses = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["courses"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/course`);
            return res.json();
        },
    });

    return [courses,refetch,loading];
};

 