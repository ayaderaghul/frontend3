// src/components/TweetCard.jsx
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { ChatBubbleOutline, Repeat, FavoriteBorder, BarChart } from "@mui/icons-material";

export default function TweetCard({ tweet }) {
  return (
    <Box sx={{ borderBottom: "1px solid #ddd", p: 2 }}>
      {/* Username + time */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
        <Typography variant="subtitle2" fontWeight="bold">
          <Link to={`/profile/${tweet.user?.username}`} style={{ textDecoration: "none", color: "inherit" }}>
            @{tweet.user?.username}
          </Link>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {formatDistanceToNow(new Date(tweet.created_at), { addSuffix: true })}
        </Typography>
      </Box>

      {/* Tweet content */}
      <Typography sx={{ mb: 1, textAlign: "left" }}>
        {tweet.content}
      </Typography>

      {/* Action buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", maxWidth: 300 }}>
        <IconButton size="small"><ChatBubbleOutline fontSize="small" /></IconButton>
        <IconButton size="small"><Repeat fontSize="small" /></IconButton>
        <IconButton size="small"><FavoriteBorder fontSize="small" /></IconButton>
        <IconButton size="small"><BarChart fontSize="small" /></IconButton>
      </Box>
    </Box>
  );
}
