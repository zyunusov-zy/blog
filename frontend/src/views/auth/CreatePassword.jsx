import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Input from "../partials/Input";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          <div
            className={`mb-4 text-center ${isLoaded ? "animate-visible1" : ""}`}
          >
            <h1 className="text-2xl font-bold text-white">
              Create New Password
            </h1>
            <p className="text-sm text-gray-400">
              Choose a new password for your account
            </p>
          </div>

          <form className="space-y-4">
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"password"}
                label={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"password"}
                label={"Confirm Password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className={`w-full ${isLoaded ? "animate-visible1" : ""}`}>
              <button
                type="submit"
                className="w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition"
              >
                Save New Password <i className="fas fa-check-circle"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CreatePassword;
