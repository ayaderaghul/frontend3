// src/components/NewTweetForm.jsx
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTweet } from "../api/tweets";

export default function NewTweetForm() {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postTweet,
    onSuccess: () => {
      // Clear the input
      setContent("");
      // Refetch the home timeline
      queryClient.invalidateQueries({ queryKey: ["homeTimeline"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    mutation.mutate(content);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
        rows={3}
        style={{ width: "100%" }}
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Posting..." : "Tweet"}
      </button>
      {mutation.isError && <p style={{ color: "red" }}>Failed to post tweet.</p>}
    </form>
  );
}
