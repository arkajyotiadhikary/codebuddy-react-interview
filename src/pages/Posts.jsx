import { useQuery } from "react-query";
import { Box, SkeletonText } from "@chakra-ui/react";
import Post from "../components/Post";
import PostSkeleton from "../components/PostSkeleton";

const fetchPosts = async () => {
  const response = await fetch("https://codebuddy.review/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  if (data && Array.isArray(data.data)) {
    return data.data;
  } else {
    throw new Error("Data received is not in the expected format");
  }
};

const Posts = () => {
  const { data: posts, isLoading, error } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return (
      <div className="posts-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <PostSkeleton key={index} />
          ))}
      </div>
    );
  }

  if (error) {
    return (
      <Box mt={8} textAlign="center" fontSize="lg" fontWeight="semibold" color="red.500">
        Error fetching posts:{" "}
        <SkeletonText noOfLines={1} isLoaded={false}>
          <span>{error.message}</span>
        </SkeletonText>
      </Box>
    );
  }

  return (
    <div className="posts-container mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
