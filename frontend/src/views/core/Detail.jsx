import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useParams } from "react-router-dom";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";
import Toast from "../../plugin/Toast";

function Detail() {
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  const [createComment, setCreateComment] = useState({
    full_name: "",
    email: "",
    comment: "",
  });
  const [liked, setLiked] = useState(false);

  const param = useParams();

  const fetchPost = async () => {
    try {
      const response = await apiInstance.get(`post/detail/${param.slug}`);
      setPost(response.data);
      // console.log(response.data.profile);
      const tagArray = response?.data.tags.split(",");
      setTags(tagArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateCommentChange = (event) => {
    setCreateComment({
      ...createComment,
      [event.target.name]: event.target.value,
    });
  };

  const submitComment = async (e) => {
    e.preventDefault();

    const json = {
      post_id: post?.id,
      name: createComment.full_name,
      email: createComment.email,
      comment: createComment.comment,
    };
    console.log(json);

    try {
      const response = await apiInstance.post("post/comment-post/", json);
      Toast("success", "Comment posted");
      fetchPost();
      setCreateComment({ full_name: "", email: "", comment: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikePost = async () => {
    const json = {
      user_id: 1,
      post_id: post?.id,
    };

    const response = await apiInstance.post("post/like-post/", json);
    console.log(response.data);
    Toast("success", response.data.message);
    fetchPost();
  };

  const handleBookmarkPost = async () =>{
    const json = {
        user_id: 1,
        post_id: post?.id,
      };
  
      const response = await apiInstance.post("post/bookmark-post/", json);
      console.log(response.data);
      Toast("success", response.data.message);
      fetchPost();
  }

  useEffect(() => {
    fetchPost();
    // console.log("Post: " ,post)
  }, []);


  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 min-h-screen">
      <Header />
      <section className="mt-5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-red-600 dark:bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold mb-4"
            >
              <i className="fas fa-tag mr-1" />
              Lifestyle
            </a>
            <h1 className="text-3xl font-bold dark:text-gray-100">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container mx-auto px-4 relative pb-2">
          <div className="flex flex-wrap">
            {/* Left Sidebar */}
            <div className="w-full lg:w-1/6 lg:pr-4">
              <div className="sticky top-20 text-center lg:text-left mb-8 lg:mb-0">
                <div className="relative">
                  <img
                    className="w-25 h-24 rounded-full mx-auto lg:mx-0"
                    src={post?.profile?.image}
                    alt="avatar"
                  />
                  <a
                    href="#"
                    className="block text-lg font-bold mt-2 dark:text-gray-100"
                  >
                    {post?.profile?.full_name || "Why"}
                  </a>
                  <p className="text-sm dark:text-gray-400">
                    {post?.profile?.bio || ""}
                  </p>
                </div>

                <hr className="my-4 border-gray-300 dark:border-gray-700" />

                <ul className="space-y-2 text-sm dark:text-gray-400">
                  <li>
                    <i className="fas fa-calendar mr-2" /> {Moment(post?.date)}
                  </li>
                  {/* <li>
                                        <i className="fas fa-clock mr-2" /> 5 min read
                                    </li> */}
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition duration-300"
                    >
                      <i className="fas fa-heart mr-2" /> {post?.like?.length}{" "}
                      Likes
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-eye mr-2" /> {post?.view} Views
                  </li>
                </ul>

                {/* Tags */}
                <ul className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300"
                      >
                        {tag}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-5 items-center">
                  <button
                    onClick={handleLikePost}
                    className="py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md border-gray-400 h-8 text-sm flex items-center gap-1 lg:gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      ></path>
                    </svg>
                    <span>{post?.like?.length}</span>
                  </button>

                  <button onClick={handleBookmarkPost} className="btn btn-ghost flex items-center space-x-2 p-1 rounded-lg transition-all duration-300 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400 group-hover:text-yellow-500"
                    >
                      <path d="M5 3c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2H5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-5/6">
              <div className="prose dark:prose-invert max-w-none">
                <p>{post?.description}</p>
              </div>

              {/* Related Posts */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold dark:text-gray-100">
                  <i className="bi bi-symmetry-vertical mr-2" />
                  Related posts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                    >
                      <img
                        className="w-full h-40 object-cover"
                        src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg"
                        alt="Card image"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-bold dark:text-gray-100">
                          <Link
                            to={`/7-common-mistakes-everyone-makes-while-travelling/`}
                            className="hover:text-blue-400 transition duration-300"
                          >
                            7 common mistakes everyone makes while traveling
                          </Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-8 border-gray-300 dark:border-gray-700" />

              {/* Author Bio */}
              <div className="flex items-center py-4">
                <img
                  className="w-24 h-24 rounded-full mr-4"
                  src={post?.profile?.image}
                  alt="avatar"
                />
                <div>
                  <h4 className="text-xl font-bold dark:text-gray-100">
                    <a
                      href="#"
                      className="hover:text-blue-400 transition duration-300"
                    >
                      {post?.profile?.full_name}
                    </a>
                  </h4>
                  <p className="text-sm dark:text-gray-400">
                    {post?.profile?.bio}
                  </p>
                  <p className="mt-2 dark:text-gray-300">
                    {post?.profile?.about || "lorem"}
                  </p>
                  <ul className="flex space-x-4 mt-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300"
                      >
                        <i className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300"
                      >
                        <i className="fab fa-twitter-square" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comments */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold dark:text-gray-100">
                  {post?.comments?.length}{" "}
                  {post?.comments?.length === 1 ? "comment" : "comments"}
                </h3>
                {post?.comments?.map((c, index) => (
                  <div key={index} className="bg-gray-900 p-4 rounded-lg my-4">
                    <div className="flex items-center">
                      {/* <img
                                                className="w-16 h-16 rounded-full mr-4"
                                                src="https://img.freepik.com/free-photo/front-portrait-woman-with-beauty-face_186202-6146.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
                                                alt="avatar"
                                            /> */}
                      <div>
                        <h5 className="font-bold dark:text-gray-100">
                          {c.name}
                        </h5>
                        <span className="text-sm dark:text-gray-400">
                          {Moment(c.date)}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 dark:text-gray-300">{c.comment}</p>
                  </div>
                ))}
              </div>

              {/* Reply Form */}
              <div className="bg-gray-900 p-4 rounded-lg mt-8">
                <h3 className="text-2xl font-bold dark:text-gray-100">
                  Leave a reply
                </h3>
                <small className="text-sm dark:text-gray-400">
                  Your email address will not be published. Required fields are
                  marked *
                </small>
                <form className="mt-4 space-y-4" onSubmit={submitComment}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium dark:text-gray-400">
                        Name *
                      </label>
                      <input
                        onChange={handleCreateCommentChange}
                        value={createComment.full_name}
                        name="full_name"
                        type="text"
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium dark:text-gray-400">
                        Email *
                      </label>
                      <input
                        onChange={handleCreateCommentChange}
                        value={createComment.email}
                        name="email"
                        type="email"
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium dark:text-gray-400">
                      Write Comment *
                    </label>
                    <textarea
                      onChange={handleCreateCommentChange}
                      name="comment"
                      value={createComment.comment}
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-100"
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Post comment <i className="fas fa-paper-plane ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Detail;
