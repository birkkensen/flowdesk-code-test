const callApi = async <T>({
  method = 'GET',
  url,
}: {
  method?: string;
  url: string;
}): Promise<T | undefined> => {
  const response = await fetch(url, {
    method,
  });

  try {
    return await response.json();
  } catch (err) {
    console.error('API', err);

    return undefined;
  }
};

export const get = async <T>(url: string) =>
  await callApi<T | undefined>({ url });
