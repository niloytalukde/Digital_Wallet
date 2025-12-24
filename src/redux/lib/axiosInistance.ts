import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // optional but clean
  },
  (error) => {
    const status = error?.response?.status;

   
    if (status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error?.response?.data || error);
  }
);
