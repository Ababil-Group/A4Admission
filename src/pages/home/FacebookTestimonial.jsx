import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  FiLink,
  FiHeart,
  FiMessageSquare,
  FiShare2,
  FiX,
} from "react-icons/fi";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PAGE_ID = "330180636840695";
const PAGE_ACCESS_TOKEN =
  "EAATuPEONi34BOxwZCSejYeCxG0zsFSxuIoV7ekG5ACbflRekZAUuDWJi9JQ6K4sl4Xc4gIldSlOcxTqkvGR541EpgVMCKkfZCuZBjPM5ZCc0f5nma57pWVhuOFDPOO2ZCWoCoi9A3l3xOuXu7yZBloHYyhYAEA4aur4YGP2RGvXfGB3S3U2c6QiWpaST6KPJd3Y13xUjnB1";

const FacebookTestimonial = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
    setIsPlaying(false);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closePopup = () => {
    setSelectedPost(null);
    setIsPlaying(true);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const renderMedia = (post, isFullSize = false) => {
    const hasVideo = post.attachments?.data?.[0]?.media_type === "video";
    const hasImage = post.full_picture;
    const hasLink = post.attachments?.data?.[0]?.subattachments?.data?.[0]?.url;

    return (
      <div className={`relative ${isFullSize ? "h-[70vh]" : "h-64"}`}>
        {hasVideo ? (
          <video
            controls
            className={`w-full h-full object-cover ${
              isFullSize ? "rounded-t-lg" : ""
            }`}
          >
            <source
              src={post.attachments.data[0].media.source}
              type="video/mp4"
            />
          </video>
        ) : hasImage ? (
          <img
            src={post.full_picture}
            alt="Post"
            className={`w-full h-full object-cover ${
              isFullSize ? "rounded-t-lg" : ""
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg animate-pulse h-96"
        ></div>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F7EEDD]">
      <div className="bg-redest-dark px-2 md:px-16 py-10 text-white space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold font-quicksand tracking-widest">
            Catch Every Moment: Live on Social
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-quicksand tracking-wide">
            Stay connected for continuous insights and support that make your
            journey abroad truly seamless.
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 186 17"
            fill="none"
            width={"300px"}
            height={"6px"}
            className="bg-white"
          >
            <path d="M184.68 8.95006C169.95 1.68006 152.06 1.68006 137.32 8.95006C124.03 15.5101 107.9 15.5101 94.61 8.95006C79.88 1.68006 61.99 1.68006 47.25 8.95006C33.96 15.5101 17.83 15.5101 4.54 8.95006L1 7.43006"></path>
          </svg>
        </div>

        <p className="text-lg font-semibold font-quicksand tracking-wide">
          Set the foundation for a smoother, more rewarding journey abroad.
          Instantly access all our live updates, inspiring success stories, and
          invaluable expert tips across every social media platform,
          just one tap away.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="p-4 md:p-8">
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
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={
              isPlaying
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {filteredPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition h-full flex flex-col"
                  onClick={() => handlePostClick(post)}
                >
                  {renderMedia(post)}
                  <div className="p-4 flex-grow flex flex-col">
                    {post.message && (
                      <p className="text-gray-700 line-clamp-2 mb-2 flex-grow">
                        {post.message}
                      </p>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
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
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Full-size Card Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
                onClick={closePopup}
              >
                <FiX size={24} />
              </button>

              <div className="p-6">
                <div className="mb-6">{renderMedia(selectedPost, true)}</div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">Post Details</h2>
                  {selectedPost.message && (
                    <p className="text-gray-800 whitespace-pre-line mb-6">
                      {selectedPost.message}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-gray-600">
                        <FiHeart className="mr-2 text-red-500" size={20} />
                        <span className="font-medium">
                          {selectedPost.reactions?.summary?.total_count || 0}{" "}
                          Likes
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-gray-600">
                        <FiMessageSquare className="mr-2" size={20} />
                        <span className="font-medium">
                          {selectedPost.comments?.summary?.total_count || 0}{" "}
                          Comments
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center text-gray-600">
                        <FiShare2 className="mr-2" size={20} />
                        <span className="font-medium">
                          {selectedPost.shares?.count || 0} Shares
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={getFacebookPostUrl(selectedPost.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <FiShare2 className="mr-2" />
                    View this post on Facebook
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacebookTestimonial;
