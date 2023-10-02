export const getCourse = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/course/${id}`
    );
    const data = await response.json()
    return data;
}