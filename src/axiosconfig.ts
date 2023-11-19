import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
 function defaultHeaders() {
  const defaultHeaders = {
    Accept: "application/json",
  };
  return defaultHeaders;
}


const account: AxiosInstance = axios.create({
  baseURL: "https://6479bf81a455e257fa63afe7.mockapi.io",
});
account.interceptors.request.use(  function (config: AxiosRequestConfig) {
  config.headers =  defaultHeaders();
  return config;
});

export { account };