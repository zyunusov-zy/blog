import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useEffect, useState } from "react";
import Input from "../partials/Input";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <div className="bg-gradient-to-t from-gray-700 to-black bg-cover font-mono flex justify-center items-center ">
        <div
          className={`z-40 bg-gray-900 p-8 rounded-lg shadow-lg w-full sm:w-100 m-4 transition-all duration-1000 ${
            isLoaded ? "animate-visible" : ""
          }`}
        >
          <div
            className={`mb-4 text-gray-400 flex justify-center ${
              isLoaded ? "animate-visible1" : ""
            }`}
          >
            <h1 className="font-bold">SignUp to User Profile</h1>
          </div>

          <form action="post" className="bg-gray-900 flex gap-4 flex-col">
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"email"}
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
              <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
                <Input
                  type={"text"}
                  label={"Full Name"}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
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
            <div className={` w-full ${isLoaded ? "animate-visible1" : ""}`}>
              <button
                type="submit"
                className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
