import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import Toast from "../../plugin/Toast";

function EditPost() {
  const [post, setPost] = useState({
    image: "",
    title: "",
    category: parseInt(""),
    description: "",
    tags: "",
    status: "",
  });

  const [imagePrev, setImagePrev] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user_id = useUserData()?.user_id;
  const navigate = useNavigate();
  const param = useParams();

  const fetchPost = async () => {
    try {
      const response = await apiInstance.get(
        `author/dashboard/post-detail/${user_id}/${param?.id}/`
      );
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await apiInstance.get(`post/category/list/`);
      setCategoryList(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchPost();
  }, []);

  const handlePostChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: [e.target.value],
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const render = new FileReader();

    setPost({
      ...post,
      image: {
        file: e.target.files[0],
        preview: render.result,
      },
    });
    render.onload = () => {
      setImagePrev(render.result);
    };
    if (selectedFile) {
      render.readAsDataURL(selectedFile);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!post.title || !post.category || !post.description || !post.image) {
      Toast("error", "All fields are required");
      setIsLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("title", post.title);
    formData.append("image", post.image.file);
    formData.append("description", post.description);
    formData.append("tags", post.tags);
    formData.append("category", post.category);
    formData.append("post_status", post.status);

    try {
      const response = await apiInstance.patch(
        `author/dashboard/post-detail/${user_id}/${param?.id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsLoading(false);
      Toast("success", "Post updated successfully");
      navigate("/posts/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-5">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Edit Post</h1>
              <p className="text-lg">
                Use the article builder below to write your article.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/instructor/posts/"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
              >
                <i className="fas fa-arrow-left"></i> Back to Posts
              </Link>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-500">
                Save Changes <i className="fas fa-check-circle"></i>
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSubmitForm}
            className="bg-gray-800 p-6 mt-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <label className="block text-gray-300">Preview</label>
            <img
              className="w-full h-80 object-cover rounded-lg mb-4"
              src={imagePrev || post?.image}
              alt="Preview"
            />

            <div className="mb-4">
              <label className="block text-gray-300">Thumbnail</label>
              <input
                required
                name="file"
                onChange={handleFileChange}
                type="file"
                className="border w-full p-2 rounded-lg bg-gray-700 text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300">Title</label>
              <input
                value={post?.title}
                required
                type="text"
                name="title"
                onChange={handlePostChange}
                className="border w-full p-2 rounded-lg bg-gray-700 text-white"
                placeholder="Write a 60 character post title."
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300">Post Category</label>
              <select
                value={post?.category?.id}
                name="category"
                onChange={handlePostChange}
                className="border w-full p-2 rounded-lg bg-gray-700 text-white"
              >
                <option value="">-------------</option>
                {categoryList?.map((c, index) => (
                  <option key={index} value={c?.id}>
                    {c?.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300">Post Description</label>
              <textarea
                value={post?.description}
                required
                name="description"
                onChange={handlePostChange}
                className="border w-full p-2 rounded-lg bg-gray-700 text-white"
                rows="5"
                placeholder="A brief summary of your post..."
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300">Tags</label>
              <input
                value={post?.tags}
                required
                name="tags"
                onChange={handlePostChange}
                type="text"
                className="border w-full p-2 rounded-lg bg-gray-700 text-white"
                placeholder="e.g. health, fitness, tech"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300">Status</label>
              <select
                value={post?.status}
                name="status"
                onChange={handlePostChange}
                className="border w-full p-2 rounded-lg bg-gray-700 text-white"
              >
                <option value="" disabled>
                  -------------
                </option>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Disabled">Disabled</option>
              </select>{" "}
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white w-full p-3 rounded-lg hover:bg-green-400"
            >
              Edit Post <i className="fas fa-check-circle"></i>
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EditPost;
