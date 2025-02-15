import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";
import Toast from "../../plugin/Toast";

function Index() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchPosts = async () => {
    try {
      const category_response = await apiInstance.get(`post/category/list/`);
      const posts_response = await apiInstance.get(`post/lists/`);
      console.log(posts);
      setPosts(posts_response.data);
      setCategory(category_response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  // Pagination
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const postItems = posts?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(posts?.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  
  return (
    <div>
      <Header />
      <section className="p-0">
        <div className="w-full px-4">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="block rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition"
            >
              <img
                src="assets/images/adv-3.png"
                alt=""
                className="w-full h-auto"
              />
            </a>
            <h2 className="text-start text-lg sm:text-xl font-semibold mt-2 text-gray-300">
              Trending Articles 🔥
            </h2>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-0">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            {postItems.map((post) => (
              <div
                key={post?.id}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    className="w-full h-40 object-cover"
                    src={post.image}
                    alt="Card image"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-200">
                    <Link
                      to={post.slug}
                      className="text-blue-400 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-user"></i> {post.profile.full_name}
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-calendar"></i> {Moment(post.date)}
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-eye"></i> {post.view} Views
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              <li className="page-item">
                <button
                  className={`px-4 py-2 rounded transition 
                    ${currentPage === 1 ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <i className="fas fa-arrow-left mr-2"></i> Previous
                </button>
              </li>
              {pageNumbers?.map((number) => (
                <li key={number}>
                  <button
                    className={`px-4 py-2 rounded transition 
                      ${
                        currentPage === number
                          ? "bg-gray-700 text-gray-300 "
                          : "bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
                      }`}
                    onClick={() => setCurrentPage(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`px-4 py-2 rounded transition 
    ${currentPage === totalPages ? "bg-gray-600 text-gray-400 cursor-not-allowed" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <i className="fas fa-arrow-left mr-2"></i> Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-5 mb-3 mt-3">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
          </div>
          <div className="flex flex-wrap justify-between">
            {category.map((categ) => (
              <div className="bg-gray-900 rounded-lg p-2" key={categ?.id}>
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src={categ.image}
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">{categ.title}</h5>
                  <small>{categ.post_count || "0"} Articles</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-0 bg-gray-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <a href="#" className="block">
              <img src="assets/images/adv-3.png" alt="" className="w-full" />
            </a>
            <h2 className="text-start block mt-2 text-xl font-semibold">
              Latest Articles 🕒
            </h2>
          </div>
        </div>
      </section>

      <section className="pt-4  bg-gray-600 pb-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover"
                      src={`https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg`}
                      alt="Card image"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-2">
                      <a
                        href="post-single.html"
                        className="hover:text-blue-400 transition duration-300"
                      >
                        7 common mistakes everyone makes while traveling
                      </a>
                    </h4>
                    <ul className="mt-2 space-y-1 text-gray-400">
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-400 transition duration-300"
                        >
                          <i className="fas fa-user mr-2"></i> Louis Ferguson
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-calendar mr-2"></i> Mar 07, 2022
                      </li>
                      <li>
                        <i className="fas fa-eye mr-2"></i> 10 Views
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <nav className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  <i className="fas fa-arrow-left mr-2"></i> Previous
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded">
                  1
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  2
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  Next <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Index;
