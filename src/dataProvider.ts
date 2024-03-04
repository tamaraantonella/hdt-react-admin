import crudProvider from "ra-data-nestjsx-crud";
import { fetchUtils } from "react-admin";

interface HttpClientOutput {
  status: number;
  headers: Headers;
  body: string;
  json: any;
}

const httpClient = async (
  url: string,
  options: fetchUtils.Options = {}
): Promise<HttpClientOutput> => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  } else if (options.headers instanceof Headers) {
    options.headers.set("Accept", "application/json");
  } else if (Array.isArray(options.headers)) {
    options.headers.push(["Accept", "application/json"]);
  } else {
    options.headers.Accept = "application/json";
  }

  const token = localStorage.getItem("token");
  if (token) {
    if (options.headers instanceof Headers) {
      options.headers.set("Authorization", `Bearer ${token}`);
    } else if (Array.isArray(options.headers)) {
      options.headers.push(["Authorization", `Bearer ${token}`]);
    } else {
      options.headers.Authorization = `Bearer ${token}`;
    }
  }
  const response = await fetchUtils.fetchJson(url, options);

  return {
    status: response.status,
    headers: response.headers,
    body: response.body,
    json: response.json,
  };
};

export const dataProvider = crudProvider(import.meta.env.VITE_SERVER_URL, httpClient);
