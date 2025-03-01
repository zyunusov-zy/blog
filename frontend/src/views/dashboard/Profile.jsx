import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import Toast from "../../plugin/Toast";

function Profile() {
  const [profileData, setProfileData] = useState({
    image: null,
    full_name: "",
    about: "",
    bio: "",
    country: "",
  });
  const user_id = useUserData()?.user_id;
  const [imagePrev, setImagePrev] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfileData({
      ...profileData,
      [event.target.name]: selectedFile,
    });
    const render = new FileReader();
    render.onload = () => {
      setImagePrev(render.result);
    };
    if (selectedFile) {
      render.readAsDataURL(selectedFile);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await apiInstance.get(`user/profile/${user_id}/`);
      setProfileData(res?.data);
      console.log(res?.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleProfileChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSub = async () => {
    const res = await apiInstance.get(`user/profile/${user_id}/`);
    const formData = new FormData();

    if (profileData.image && profileData.image !== res?.data?.image) {
      formData.append("image", profileData.image);
    }

    formData.append("full_name", profileData.full_name);
    formData.append("about", profileData.about);
    formData.append("bio", profileData.bio);
    formData.append("country", profileData.country);
    try {
      const res = await apiInstance.patch(
        `user/profile/${user_id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Toast("succes", "Profile update");
      fetchProfile();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <Header />
      <section className="py-4 bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Profile Details</h5>
              <p className="text-sm text-gray-400">
                You have full control to manage your own account settings.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={imagePrev || profileData.image}
                  className="avatar-xl rounded-full object-cover w-32 h-32"
                  alt="avatar"
                />
                <div>
                  <h4 className="mb-2 text-lg font-semibold">Your avatar</h4>
                  <p className="text-sm text-gray-400">
                    PNG or JPG no bigger than 800px wide and tall.
                  </p>
                  <input
                    name="image"
                    onChange={handleFileChange}
                    type="file"
                    className="form-control mt-3 bg-gray-700 border border-gray-600 text-white rounded p-2"
                  />
                </div>
              </div>
              <hr className="my-5 border-gray-600" />
              <div>
                <h4 className="text-lg font-semibold">
                  <i className="fas fa-user-gear mr-2"></i>Personal Details
                </h4>
                <p className="mb-4 mt-2 text-sm text-gray-400">
                  Edit your personal information and address.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="fname" className="text-sm text-gray-300">
                      Full Name
                    </label>
                    <input
                      onChange={handleProfileChange}
                      name="full_name"
                      type="text"
                      id="fname"
                      className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                      placeholder="What's your full name?"
                      required
                    //   value={profileData.full_name || ""}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="bio" className="text-sm text-gray-300">
                      Bio
                    </label>
                    <input
                      onChange={handleProfileChange}
                      name="bio"
                      type="text"
                      id="bio"
                      className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                      placeholder="Write a catchy bio!"
                      required
                    //   value={profileData?.bio || ""}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="about" className="text-sm text-gray-300">
                      About Me
                    </label>
                    <textarea
                      onChange={handleProfileChange}
                      name="about"
                      id="about"
                      placeholder="Tell us about yourself..."
                      className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                      rows="4"
                    //   value={profileData.about || ""}
                    ></textarea>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="country" className="text-sm text-gray-300">
                      Country
                    </label>
                    <input
                      onChange={handleProfileChange}
                      name="country"
                      type="text"
                      id="country"
                      className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                      placeholder="What country are you from?"
                      required
                    //   value={profileData.country || ""}
                    />
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={handleFormSub}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded flex items-center"
                    >
                      Update Profile{" "}
                      <i className="fas fa-check-circle ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
