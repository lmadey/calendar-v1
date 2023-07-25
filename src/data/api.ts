const API_BASE_URL = "http://localhost:3000";

export const getApiData = async <T>(endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    alert(error);
  }
};

export const deleteApiData = async <T>(endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    alert(error);
  }
};

export const postApiData = async <T extends object, R>(
  endpoint: string,
  data: T
) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const responseData = await response.json();
    return responseData as R;
  } catch (error) {
    alert(error);
  }
};
