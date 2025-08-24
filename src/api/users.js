// src/api/users.js
import { apiClient } from "../utils/apiClient";

export const fetchUserProfile = async (username) => {
  const { data } = await apiClient.get(`/api/v1/users/${username}`);
  return data; // { username, followers: [], followees: [], isFollowing: true/false }
};

export const followUser = async (userId) => {
  console.log('in api users', userId)
  const { data } = await apiClient.post('/api/v1/users/follow', {userIdToFollow: userId });
  return data;
};

export const unfollowUser = async (userId) => {
  const { data } = await apiClient.delete('/api/v1/users/follow', { data: {userIdToUnfollow: userId }});
  return data;
};
