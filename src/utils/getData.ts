export const getData = async (endpoint: string) => {
  // try {
  //   const response = await fetch(endpoint);
  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }
  //   const data = await response.json();
  //   return data as T;
  // } catch (error) {
  //   alert(error);
  // }

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
