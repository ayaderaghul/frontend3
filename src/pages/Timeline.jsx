// src/pages/HomeTimeline.jsx
import { useQuery } from "@tanstack/react-query";
import { fetchHomeTimeline } from "../api/timeline";
import TweetCard from "../components/TweetCard";
import NewTweetForm from '../components/NewTweetForm'


export default function HomeTimeline() {
  const { data: tweets, isLoading, isError } = useQuery({
    queryKey: ["homeTimeline"],
    queryFn: fetchHomeTimeline,
  });
  console.log('hello from timeline')
  if (isLoading) return <p>Loading timeline...</p>;
  if (isError) return <p>Failed to load timeline.</p>;

  return (
    <div>
      <h1>Home Timeline</h1>
      <NewTweetForm />
      {tweets.length === 0 && <p>No tweets yet.</p>}
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}
