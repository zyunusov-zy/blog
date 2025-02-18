import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useEffect, useState } from "react";
import Input from "../partials/Input";
import { useAuthStore } from "../../store/auth";
import { register } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [bioData, setBioData] = useState({
    full_name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBioDataChange = (e) => {
    setBioData({
      ...bioData,
      [e.target.name]: e.target.value,
    });
  };

  const resetBioData = () => {
    setBioData({
      full_name: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await register(
      bioData.full_name,
      bioData.email,
      bioData.password,
      bioData.password2
    );
    if (error) {
      alert(JSON.stringify(error));
      resetBioData();
    } else {
      navigate("/");
    }
    setIsLoading(false);
  };

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

          <form
            className="bg-gray-900 flex gap-4 flex-col"
            onSubmit={handleSubmit}
          >
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"email"}
                label={"Email"}
                name="email"
                value={bioData.email}
                onChange={handleBioDataChange}
              />
            </div>
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"text"}
                label={"Full Name"}
                name="full_name"
                value={bioData.full_name}
                onChange={handleBioDataChange}
              />
            </div>
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"password"}
                label={"Password"}
                name="password"
                value={bioData.password}
                onChange={handleBioDataChange}
              />
            </div>
            <div className={`relative ${isLoaded ? "animate-visible1" : ""}`}>
              <Input
                type={"password"}
                label={"Confirm Password"}
                name="password2"
                value={bioData.password2}
                onChange={handleBioDataChange}
              />
            </div>
            <div className={` w-full ${isLoaded ? "animate-visible1" : ""}`}>
              <button
                type="submit"
                className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
              {isLoading ? (
                <>
                  <span className="mr-2 ">Processing...</span>
                  <i className="fas fa-spinner fa-spin" />
                </>
              ) : (
                <>
                  <span className="mr-2">Sign Up</span>
                  <i className="fas fa-user-plus" />
                </>
              )}
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
