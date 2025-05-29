export const getData = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // signal: AbortController.signal,
  });
  const data = await response?.json();
  return data;
};
