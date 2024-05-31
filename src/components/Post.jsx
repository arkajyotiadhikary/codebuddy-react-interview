import PropTypes from "prop-types";
import { Skeleton, SkeletonText, SkeletonCircle } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const useImageLoader = (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded;
};

const Post = ({ post }) => {
  const imageLoaded = useImageLoader(post.image);
  const avatarLoaded = useImageLoader(post.avatar);
  const contentLoaded = imageLoaded && avatarLoaded;

  return (
    <div className="post mb-4 rounded-lg bg-white p-6 shadow-lg hover:cursor-pointer">
      <div className="relative h-48 w-full rounded-t-lg">
        {!imageLoaded && <Skeleton className="h-full w-full rounded-t-lg" />}
        <img
          src={post.image}
          alt={post.writeup}
          className={`h-full w-full rounded-t-lg object-cover ${imageLoaded ? "block" : "hidden"}`}
        />
      </div>
      <div className="mt-4 flex items-center">
        {!avatarLoaded && <SkeletonCircle size="12" className="mr-4" />}
        <img
          src={post.avatar}
          alt={`${post.firstName} ${post.lastName}`}
          className={`mr-4 h-12 w-12 rounded-full ${avatarLoaded ? "block" : "hidden"}`}
        />
        <div className="flex-1">
          {!contentLoaded && (
            <div>
              <Skeleton height="20px" width="60%" mb="2" />
              <SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
            </div>
          )}
          {contentLoaded && (
            <div>
              <h3 className="text-lg font-semibold">
                {post.firstName} {post.lastName}
              </h3>
              <p className="text-sm text-gray-600">{post.writeup}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    writeup: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
