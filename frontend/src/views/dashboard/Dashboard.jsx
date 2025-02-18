import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";

function Dashboard() {
  const [stats, setStats] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [noti, setNoti] = useState([]);

  const user_id = useUserData()?.user_id;

  const fetchDashboardData = async () => {
    const stats_res = await apiInstance.get(
      `author/dashboard/stats/${user_id}/`
    );
    setStats(stats_res?.data[0]);

    
    const posts_res = await apiInstance.get(
      `author/dashboard/post-list/${user_id}/`
    );
    setPosts(posts_res?.data);
    
    const commets_res = await apiInstance.get(
      `author/dashboard/comment-list/${user_id}/`
    );
    setComments(commets_res?.data);
    console.log("Stats:", commets_res.data);
    
    const noti_res = await apiInstance.get(
      `author/dashboard/noti-list/${user_id}/`
    );
    setNoti(noti_res?.data);
  };

  useEffect(() => {
    fetchDashboardData();
    // console.log("Stats:",stats)
  }, []);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 min-h-screen">
      <Header />
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="icon-xl text-2xl p-3 bg-green-100 dark:bg-green-900 rounded-lg text-green-500 dark:text-green-300">
                      <i className="bi bi-people-fill" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-2xl font-bold">
                        {stats.views || "0"}
                      </h3>
                      <h6 className="text-sm text-gray-500 dark:text-gray-400">
                        Total Views
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="icon-xl text-2xl p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-500 dark:text-blue-300">
                      <i className="bi bi-file-earmark-text-fill" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-2xl font-bold">{stats?.posts}</h3>
                      <h6 className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="icon-xl text-2xl p-3 bg-red-100 dark:bg-red-900 rounded-lg text-red-500 dark:text-red-300">
                      <i className="bi bi-suit-heart-fill" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-2xl font-bold">
                        {stats?.likes || "0"}
                      </h3>
                      <h6 className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="icon-xl text-2xl p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-500 dark:text-indigo-300">
                      <i className="bi bi-tag" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-2xl font-bold">{stats?.bookmarks}</h3>
                      <h6 className="text-sm text-gray-500 dark:text-gray-400">
                        Bookmarks
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg h-full flex flex-col">
                <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center">
                  <h5 className="font-bold">Latest Posts</h5>
                  <div className="dropdown">
                    <button className="p-0 border-0 bg-transparent">
                      <i className="bi bi-grid-fill text-red-500" />
                    </button>
                  </div>
                </div>
                <div className="p-3 flex-1">
                  <div className="space-y-3">
                    {posts?.slice(0, 3).map((post, index) => (
                      <>
                        <div className="flex relative">
                          <img
                            className="w-24 h-24 rounded-lg object-cover"
                            src={post?.image}
                            alt="product"
                          />
                          <div className="ml-3">
                            <a
                              href="#"
                              className="font-semibold text-gray-900 dark:text-gray-100 hover:underline"
                            >
                              {post?.title}
                            </a>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                              <i className="fas fa-calendar mr-2"></i>{" "}
                              {Moment(post?.date)}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              <i className="fas fa-eye mr-2"></i>
                              {post?.view} Views
                            </p>
                          </div>
                        </div>
                        <hr className="my-3 border-gray-200 dark:border-gray-700 " />
                      </>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 text-center p-3">
                  <Link
                    to="/posts/"
                    className="font-bold text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    View all Posts
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg h-full flex flex-col">
                <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center">
                  <h5 className="font-bold">Recent Comments</h5>
                  <div className="dropdown">
                    <button className="p-0 border-0 bg-transparent">
                      <i className="bi bi-chat-left-quote-fill text-green-500" />
                    </button>
                  </div>
                </div>
                <div className="p-3 flex-1">
                  <div className="space-y-3">
                    {comments.slice(0, 6).map((comment, index) => (
                      <>
                        <div className="flex items-center relative">
                          {/* <img
                            className="w-16 h-16 rounded-full object-cover"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSPtLWfht2p015onFngljcoIuA9xc8h3RLA&usqp=CAU"
                            alt="avatar"
                          /> */}
                          <div className="ml-3">
                            <p className="text-sm text-gray-900 dark:text-gray-100">
                              <Link
                                to="/comments/"
                                className="font-semibold hover:underline"
                              >
                                {comment?.comment}
                              </Link>
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              <i>by</i> {comment?.name}
                            </p>
                          </div>
                        </div>
                        <hr className="my-3 border-gray-200 dark:border-gray-700" />
                      </>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 text-center p-3 justify-self-end">
                  <Link
                    to="/comments/"
                    className="font-bold text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    View all Comments
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg h-full flex flex-col">
                <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center">
                  <h5 className="font-bold">Notifications</h5>
                  <div className="dropdown">
                    <button className="p-0 border-0 bg-transparent">
                      <i className="fas fa-bell text-yellow-500" />
                    </button>
                  </div>
                </div>
                <div className="p-3 flex-1">
                  <div className="space-y-3">
                    <div className="flex justify-between relative">
                      <div className="flex items-center">
                        <div className="icon-lg bg-opacity-15 rounded-lg flex-shrink-0">
                          <i className="fas fa-thumbs-up text-blue-500 text-lg" />
                        </div>
                        <div className="ml-3">
                          <h6 className="font-semibold text-gray-900 dark:text-gray-100">
                            <a href="#" className="hover:underline">
                              New Like
                            </a>
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Destiny Franks liked your post{" "}
                            <b>7 Common mistakes...</b>
                          </p>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            5 min ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3 border-gray-200 dark:border-gray-700" />
                    <div className="flex justify-between relative">
                      <div className="flex items-center">
                        <div className="icon-lg bg-opacity-15 rounded-lg flex-shrink-0">
                          <i className="bi bi-chat-left-quote-fill text-green-500 text-lg" />
                        </div>
                        <div className="ml-3">
                          <h6 className="font-semibold text-gray-900 dark:text-gray-100">
                            <a href="#" className="hover:underline">
                              New Comment
                            </a>
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Joy Winter commented on your post{" "}
                            <b>7 Common mistakes...</b>
                          </p>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            5 min ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="my-3 border-gray-200 dark:border-gray-700" />
                    <div className="flex justify-between relative">
                      <div className="flex items-center">
                        <div className="icon-lg bg-opacity-15 rounded-lg flex-shrink-0">
                          <i className="bi bi-tag-fill text-red-500 text-lg" />
                        </div>
                        <div className="ml-3">
                          <h6 className="font-semibold text-gray-900 dark:text-gray-100">
                            <a href="#" className="hover:underline">
                              New Bookmark
                            </a>
                          </h6>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Flourish Franks bookmarked your post{" "}
                            <b>7 Common mistakes...</b>
                          </p>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            5 min ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 text-center p-3">
                  <a
                    href="#"
                    className="font-bold text-gray-900 dark:text-gray-100 hover:underline"
                  >
                    View all Notifications
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center">
                  <h5 className="font-bold text-gray-800 dark:text-white">
                    All Blog Posts
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 text-sm px-2 py-1 rounded">
                      5
                    </span>
                  </h5>
                  <a
                    href="#"
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Add New <i className="fas fa-plus"></i>
                  </a>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-full md:w-8/12">
                      <form className="relative">
                        <input
                          className="w-full bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg py-2 px-3 pr-10 text-gray-800 dark:text-white"
                          type="search"
                          placeholder="Search Articles"
                        />
                        <button
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-0 p-0"
                          type="submit"
                        >
                          <i className="fas fa-search text-gray-500 dark:text-gray-400" />
                        </button>
                      </form>
                    </div>
                    <form className="w-full md:w-3/12">
                      <label
                        htmlFor="sortby"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select an option
                      </label>
                      <select
                        id="sortby"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" disabled>
                          Sort by
                        </option>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option disabled>------</option>
                        <option>Active</option>
                        <option>Draft</option>
                        <option>Disabled</option>
                      </select>
                    </form>
                  </div>
                  <div className="table-responsive border-0">
                    <table className="table align-middle p-4 mb-0 table-hover table-shrink dark:text-white">
                      <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th
                            scope="col"
                            className="border-0 rounded-start text-gray-800 dark:text-white"
                          >
                            Article Name
                          </th>
                          <th
                            scope="col"
                            className="border-0 text-gray-800 dark:text-white"
                          >
                            Views
                          </th>
                          <th
                            scope="col"
                            className="border-0 text-gray-800 dark:text-white"
                          >
                            Published Date
                          </th>
                          <th
                            scope="col"
                            className="border-0 text-gray-800 dark:text-white"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="border-0 text-gray-800 dark:text-white"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="border-0 rounded-end text-gray-800 dark:text-white"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                      {posts.slice(0, 5).map((post, index) => (
                        <tr key={index}>
                          <td>
                            <h6 className="mt-2 mt-md-0 mb-0 ">
                              <Link
                                to={post?.slug}
                                className="text-dark text-decoration-none dark:text-white"
                              >
                                {post?.title}
                              </Link>
                            </h6>
                          </td>
                          <td>
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className="text-dark text-decoration-none dark:text-white"
                              >
                                {post?.view} Views
                              </a>
                            </h6>
                          </td>
                          <td>{Moment(post?.date)}</td>
                          <td>{post?.category?.title}</td>
                          <td>
                            <span className="badge bg-success bg-opacity-10 text-black mb-2">
                              {post?.status}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn-round mb-0 btn btn-danger"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete"
                              >
                                <i className="bi bi-trash" />
                              </a>
                              <a
                                href="dashboard-post-edit.html"
                                className="btn btn-primary btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Edit"
                              >
                                <i className="bi bi-pencil-square" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;
