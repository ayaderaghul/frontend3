// src/api/timeline.js
import { apiClient } from "../utils/apiClient"; // axios instance

export const fetchHomeTimeline = async () => {
  const { data } = await apiClient.get("/api/v1/tweets/timeline");
  return data;
};