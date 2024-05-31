import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PostSkeleton = ({ index }) => {
  return (
    <Box className="post mb-4 rounded-lg bg-white p-6 shadow-lg" key={index}>
      <Skeleton height="192px" className="rounded-t-lg" />
      <div className="mt-4 flex items-center">
        <SkeletonCircle size="12" className="mr-4" />
        <div className="flex-1">
          <Skeleton height="20px" width="60%" mb="2" />
          <SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
        </div>
      </div>
    </Box>
  );
};

PostSkeleton.propTypes = {
  index: PropTypes.number,
};

export default PostSkeleton;
