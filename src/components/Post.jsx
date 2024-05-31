import PropTypes from "prop-types";
const Post = ({ post }) => {
  return (
    <div key={post.id} className="post mb-4 rounded-lg bg-white p-6 shadow-lg hover:cursor-pointer">
      <img src={post.image} alt={post.writeup} className="h-48 w-full rounded-t-lg object-cover" />
      <div className="mt-4 flex items-center">
        <img
          src={post.avatar}
          alt={`${post.firstName} ${post.lastName}`}
          className="mr-4 h-12 w-12 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {post.firstName} {post.lastName}
          </h3>
          <p className="text-sm text-gray-600">{post.writeup}</p>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    writeup: PropTypes.string,
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default Post;
