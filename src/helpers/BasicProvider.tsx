// import { useState } from "react";

import { getToken, removeToken } from "@/app/utils/auth";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiResponse<T = any> {
  data: T;
  message?: string;
  statusCode?: number;
  error?: string;
  status: number;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/";
const useApi = () => {
  const request = async (
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    endpoint: string,
    endpointType: string = "database",
    data?: any
  ) => {
    try {
      let url: string;
      if (endpointType == "database") url = `${API_URL}${endpoint}`;
      else url = endpoint;

      const config: AxiosRequestConfig = getHeaders(data);
      const response: AxiosResponse<ApiResponse> = await axios({
        method,
        url,
        data,
        ...config,
      });

      return processResponse(response);
    } catch (err) {
      //   return handleException<T>(err as AxiosError);
    }
  };
  const getRequest = async <T,>(endpoint: string, endpointType?: string) =>
    await request("GET", endpoint, endpointType);

  const postRequest = <T,>(endpoint: string, data: any) =>
    request("POST", endpoint, data);

  const putRequest = <T,>(endpoint: string, data: any) =>
    request("PUT", endpoint, data);

  const patchRequest = <T,>(endpoint: string, data: any) =>
    request("PATCH", endpoint, data);

  const deleteRequest = <T,>(endpoint: string, data?: any) =>
    request("DELETE", endpoint, data);

  const getHeaders = (data?: any): AxiosRequestConfig => {
    const headers: Record<string, string> =
      data instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" };

    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return { headers };
  };

  const processResponse = (response: ApiResponse) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    // throw new Error(response.data.message || "Unknown error");
  };

  const handleException = (response: ApiResponse) => {
    // if (error.response?.status === 401 || error.response?.status === 403) {
    //   removeToken();
    //   window.location.href = "/pages/auth/login";
    // }

    return {
      //   data: {} as T,
      //   message: error.response?.data?.message || "An error occurred",
      //   statusCode: error.response?.status,
      //   error: error.response?.data?.error || "Unknown error",
    };
  };

  return { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
};

export default useApi;
