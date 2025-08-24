// src/components/TweetCard.jsx
import { formatDistanceToNow } from "date-fns";
import {Link} from 'react-router-dom'

export default function TweetCard({ tweet }) {
  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "1rem" }}>
      <div style={{ fontWeight: "bold" }}>
        <Link to={`/profile/${tweet.user?.username}`}>
            @{tweet.user?.username}
        </Link>
      </div>
      <div>{tweet.content}</div>
      <div style={{ fontSize: "0.8rem", color: "#555" }}>
        {formatDistanceToNow(new Date(tweet.created_at), { addSuffix: true })}
      </div>
    </div>
  );
}
