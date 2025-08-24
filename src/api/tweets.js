// src/api/tweets.js
import { apiClient } from "../utils/apiClient";

export const postTweet = async (content) => {
  const { data } = await apiClient.post("/api/v1/tweets", { content });
  return data; // returns the created tweet object
};
