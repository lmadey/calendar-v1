export const getApiData = async <T>(endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    alert(error);
  }
};
