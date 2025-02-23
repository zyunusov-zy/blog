import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";

function Posts() {
  const [posts, setPosts] = useState([]);
  const user_id = useUserData()?.user_id;

  const fetchPostData = async () => {
    try {
      const posts_res = await apiInstance.get(
        `author/dashboard/post-list/${user_id}/`
      );

      setPosts(posts_res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    if (query === "")
    {
        fetchPostData();

    }
    else{
        const filtered = posts.filter((p) => {
            return p.title.toLowerCase().includes(query)
        })
        setPosts(filtered);
    }

  }

  const handleSort = (e) => {
    const sortValue = e.target.value.toLowerCase();
    const sortedPosts = [...posts] // assign all posts to array

    if (sortValue === "newest"){
        sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date) );

    } else if (sortValue === "oldest"){
        sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date) );
    }

    setPosts(sortedPosts);
  } 

  return (
    <>
      <Header />
      <section className="py-4 bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">
                All Blog Posts{" "}
                <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded">
                  {posts?.length}
                </span>
              </h5>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
                Add New <i className="fas fa-plus ml-2"></i>
              </button>
            </div>
            <form className="flex flex-col md:flex-row justify-between gap-4 mb-4">
              <input
                onChange={(e) => handleSearch(e)}
                type="text"
                placeholder="Search Articles"
                className="w-full md:w-2/3 px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none"
              />
              <select onChange={(e) => handleSort(e)} className="w-full md:w-1/3 px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none">
                <option value="">Sort by</option>
                <option value={"Newest"}>Newest</option>
                <option value={"Oldest"}>Oldest</option>
              </select>
            </form>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2">Article Name</th>
                    <th className="px-4 py-2">Views</th>
                    <th className="px-4 py-2">Published Date</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Action</th>
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
      </section>
      <Footer />
    </>
  );
}

export default Posts;
