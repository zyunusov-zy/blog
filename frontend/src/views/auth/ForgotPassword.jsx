import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Input from "../partials/Input";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <div className="bg-gradient-to-b from-gray-700 to-black bg-cover font-mono flex justify-center items-center ">
        <div
          className={`w-full max-w-md bg-gray-900 text-gray-400 p-6 rounded-lg shadow-lg transition-all duration-1000 ${
            isLoaded ? "animate-visible" : ""
          }`}
        >
          <div
            className={`mb-4 text-center ${isLoaded ? "animate-visible1" : ""}`}
          >
            <h1 className="text-2xl font-bold text-white">Forgot Password</h1>
            <p className="text-sm text-gray-400">
              Let's help you get back into your account
            </p>
          </div>

          <form className="space-y-4">
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"text"}
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={`w-full ${isLoaded ? "animate-visible1" : ""}`}>
              <button
                type="submit"
                className="w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition"
              >
                Reset Password <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
