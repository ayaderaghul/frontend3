// src/pages/ProfilePage.jsx
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUserProfile, followUser, unfollowUser } from "../api/users";
import { useAuth } from '../hooks/useAuth';

export default function ProfilePage() {
  const { username } = useParams();
  const { user: currentUser } = useAuth()
  const queryClient = useQueryClient();

  const { data: profile, isLoading, isError } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => fetchUserProfile(username),
  });


  const followMutation = useMutation({
    mutationFn: () =>
      profile.isFollowing ? unfollowUser(profile.id) : followUser(profile.id),
    onSuccess: () => {
      // Refetch profile to update follower count & button state
      queryClient.invalidateQueries({ queryKey: ["profile", username] });
    },
  });

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Failed to load profile.</p>;

  return (
    <div>
      <h1>@{profile.username}</h1>
      <p>
        Followers: {profile.followers.length} | Following: {profile.followees.length}
      </p>
      <button
        onClick={() => followMutation.mutate(profile.id)}
        disabled={followMutation.isLoading || profile.id === profile.currentUserId}      >
        {profile.isFollowing ? "Unfollow" : "Follow"}
      </button>

      <h2>Followers</h2>
      <ul>
        {profile.followers.map((f) => (
          <li key={f.follower.username}>@{f.follower.username}</li>
        ))}
      </ul>

      <h2>Following</h2>
      <ul>
        {profile.followees.map((f) => (
          <li key={f.followee.username}>@{f.followee.username}</li>
        ))}
      </ul>
    </div>
  );
}
