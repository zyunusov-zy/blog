import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Logout() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-700 to-black">
        <div
          className={`w-full max-w-md bg-gray-900 text-gray-400 p-6 rounded-lg shadow-lg transition-all duration-1000 ${
            isLoaded ? "animate-visible" : ""
          }`}
        >
          <div className={`mb-4 text-center ${isLoaded ? "animate-visible1" : ""}`}>
            <h1 className="text-2xl font-bold text-white">You have been logged out</h1>
            <p className="text-sm text-gray-400">Thanks for visiting our website, come back anytime!</p>
          </div>

          <div className={`flex gap-4 mt-6 ${isLoaded ? "animate-visible1" : ""}`}>
            <Link
              to="/login"
              className="w-full py-2.5 text-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 transition"
            >
              Login <i className="fas fa-sign-in-alt"></i>
            </Link>

            <Link
              to="/register"
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Register <i className="fas fa-user-plus"></i>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Logout;
