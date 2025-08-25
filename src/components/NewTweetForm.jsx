// src/components/NewTweetForm.jsx
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTweet } from "../api/tweets";
import { Box, IconButton } from "@mui/material";
import { Image, Gif, Poll, EmojiEmotions, CalendarToday } from "@mui/icons-material";
import {
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
export default function NewTweetForm() {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postTweet,
    onSuccess: () => {
      setContent(""); // Clear input
      queryClient.invalidateQueries({ queryKey: ["homeTimeline"] }); // Refetch timeline
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    mutation.mutate(content);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        borderBottom: "1px solid #e6ecf0",
        padding: "12px 16px",
      }}
    >
      {/* Profile picture placeholder */}
      <div
        style={{
          flexShrink: 0,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          marginRight: "12px",
        }}
      />

      {/* Input + buttons */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          rows={3}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: "16px",
            lineHeight: "20px",
            padding: "8px 0",
          }}
        />

        {/* Action icons row */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
          <Box>
            <IconButton size="small"><Image fontSize="small" /></IconButton>
            <IconButton size="small"><Gif fontSize="small" /></IconButton>
            <IconButton size="small"><Poll fontSize="small" /></IconButton>
            <IconButton size="small"><EmojiEmotions fontSize="small" /></IconButton>
            <IconButton size="small"><CalendarToday fontSize="small" /></IconButton>
          </Box>

        <Button
          type="submit"
          disabled={mutation.isLoading || !content.trim()}
          sx={{
            backgroundColor: "#1d9bf0",
            color: "#fff",
            borderRadius: "9999px",
            padding: "6px 16px",
            fontWeight: 500,
            fontSize: "15px",
            cursor: mutation.isLoading || !content.trim() ? "not-allowed" : "pointer",
            opacity: mutation.isLoading || !content.trim() ? 0.5 : 1,
            textTransform: "none", // no uppercase
            "&:hover": {
              backgroundColor: "#1a8cd8",
            },
          }}
        >
          {mutation.isLoading ? "Posting..." : "Tweet"}
        </Button>
        </Box>

        {mutation.isError && (
          <p style={{ color: "red", marginTop: "6px" }}>Failed to post tweet.</p>
        )}
      </Box>
    </form>
  );
}
