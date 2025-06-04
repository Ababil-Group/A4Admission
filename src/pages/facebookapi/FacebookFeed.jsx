import React, { useEffect, useState } from "react";
import { FiLink, FiHeart, FiMessageSquare, FiShare2 } from "react-icons/fi";
import { motion } from "framer-motion";
// const PAGE_ID = "330180636840695";
// const PAGE_ACCESS_TOKEN =
//   "EAATuPEONi34BOxwZCSejYeCxG0zsFSxuIoV7ekG5ACbflRekZAUuDWJi9JQ6K4sl4Xc4gIldSlOcxTqkvGR541EpgVMCKkfZCuZBjPM5ZCc0f5nma57pWVhuOFDPOO2ZCWoCoi9A3l3xOuXu7yZBloHYyhYAEA4aur4YGP2RGvXfGB3S3U2c6QiWpaST6KPJd3Y13xUjnB1";

const PAGE_ID = "158202150704153";
const PAGE_ACCESS_TOKEN =
  "EAATvN3z0l0oBO4UpJrCfZBL63Ioaaov82iSj8Q6hPyu6j7SDCHypaEzuqkiV4ZALTC4lX1zTlTnsPF6mNRlfzKUgB9DjeJ5MT4yjbZA95D4TRkw4giZCSRDKkSMDQZCB9WAwYEtu6PO3zCZChqpld6c8dqiW2OKlwPaf2lEhWuKXVjJZBT0jXC8yibgqlLyZCbUzRSKoBfPITNBE3ktlZACwox3YQ6j4ZD";
const FacebookPageFeed = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPagePosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://graph.facebook.com/v23.0/${PAGE_ID}/posts?fields=message,full_picture,created_time,attachments{media_type,media{source},subattachments{url,title}},likes.limit(1).summary(true),reactions.type(LIKE).limit(0).summary(total_count),shares,comments.limit(0).summary(true)&access_token=${PAGE_ACCESS_TOKEN}`
        );
        const data = await response.json();

        if (data.error) {
          setError(data.error.message);
        } else {
          setPosts(data.data || []);
          const filtered = data.data.filter(
            (post) =>
              post.full_picture ||
              post.attachments?.data?.[0]?.media_type === "video" ||
              post.attachments?.data?.[0]?.subattachments
          );
          setFilteredPosts(filtered);
        }
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPagePosts();
  }, []);

  const getFacebookPostUrl = (postId) => {
    return `https://www.facebook.com/${PAGE_ID}/posts/${postId.split("_")[1]}`;
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    const related = filteredPosts.filter((p) => p.id !== post.id).slice(0, 3);
    setRelatedPosts(related);
  };

  const renderMedia = (post) => {
    const hasVideo = post.attachments?.data?.[0]?.media_type === "video";
    const hasImage = post.full_picture;
    const hasLink = post.attachments?.data?.[0]?.subattachments?.data?.[0]?.url;

    return (
      <div className="relative">
        {hasVideo ? (
          <video controls className="w-full h-96 object-cover">
            <source
              src={post.attachments.data[0].media.source}
              type="video/mp4"
            />
          </video>
        ) : hasImage ? (
          <img
            src={post.full_picture}
            alt="Post"
            className="w-full h-96 object-cover aspect-square rounded-2xl"
          />
        ) : (
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No media</span>
          </div>
        )}

        <div className="absolute bottom-2 left-2 flex space-x-2">
          {hasLink && (
            <motion.a
              whileHover={{ x: 5 }}
              href={post.attachments.data[0].subattachments.data[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 px-2 py-1 rounded-md flex items-center text-sm text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
            >
              <FiLink className="mr-1" />
              {post.attachments.data[0].subattachments.data[0].title ||
                "View Link"}
            </motion.a>
          )}
          <motion.a
            whileHover={{ x: 5 }}
            href={getFacebookPostUrl(post.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 px-2 py-1 rounded-md flex items-center text-sm text-blue-600 hover:text-blue-800"
            onClick={(e) => e.stopPropagation()}
          >
            <FiShare2 className="mr-1" />
            View on Facebook
          </motion.a>
        </div>
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg animate-pulse h-64"
        ></div>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Facebook Feed</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
          Error: {error}
        </div>
      )}

      {isLoading ? (
        <LoadingSkeleton />
      ) : filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts with media found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => handlePostClick(post)}
            >
              {renderMedia(post)}
              <div className="p-4">
                {post.message && (
                  <p className="text-gray-700 line-clamp-2 mb-2">
                    {post.message}
                  </p>
                )}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {new Date(post.created_time).toLocaleDateString()}
                  </span>
                  <div className="flex items-center space-x-2">
                    {post.likes?.summary?.total_count && (
                      <span className="flex items-center">
                        <FiHeart className="mr-1" />
                        {post.likes.summary.total_count}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <button
                className="float-right text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedPost(null)}
              >
                ✕
              </button>

              <div className="clear-both mb-6">{renderMedia(selectedPost)}</div>

              <div className="mb-6">
                <p className="text-gray-800 whitespace-pre-line">
                  {selectedPost.message}
                </p>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={getFacebookPostUrl(selectedPost.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 mt-4"
                >
                  <FiShare2 className="mr-2" />
                  View this post on Facebook
                </motion.a>

                <div className="flex items-center mt-6 pt-4 border-t border-gray-100 space-x-6">
                  <div className="flex items-center text-gray-600">
                    <FiHeart className="mr-2 text-red-500" />
                    {selectedPost.reactions?.summary?.total_count || 0} Likes
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiMessageSquare className="mr-2" />
                    {selectedPost.comments?.summary?.total_count || 0} Comments
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiShare2 className="mr-2" />
                    {selectedPost.shares?.count || 0} Shares
                  </div>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-8 border-t pt-6">
                  <h3 className="font-bold text-lg mb-4">More Posts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedPosts.map((post) => (
                      <motion.div
                        key={post.id}
                        whileHover={{ scale: 1.02 }}
                        className="cursor-pointer"
                        onClick={() => handlePostClick(post)}
                      >
                        {post.full_picture ? (
                          <img
                            src={post.full_picture}
                            alt="Related post"
                            className="w-full h-64 object-cover rounded"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-gray-400">No preview</span>
                          </div>
                        )}
                        <p className="text-sm mt-2 line-clamp-2">
                          {post.message?.substring(0, 100)}...
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacebookPageFeed;
