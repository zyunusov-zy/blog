import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function AddPost() {
    return (
        <>
            <Header />
            <section className="bg-gradient-to-b from-gray-900 to-black text-white py-5">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Create Blog Post</h1>
                            <p className="text-lg">Use the article builder below to write your article.</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/instructor/posts/" className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"> 
                                <i className="fas fa-arrow-left"></i> Back to Posts
                            </Link>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-green-500">
                                Save Changes <i className="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                        <label className="block text-gray-300">Preview</label>
                        <img className="w-full h-80 object-cover rounded-lg mb-4" src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" alt="Preview" />
                        
                        <div className="mb-4">
                            <label className="block text-gray-300">Thumbnail</label>
                            <input type="file" className="border w-full p-2 rounded-lg bg-gray-700 text-white" />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-300">Title</label>
                            <input type="text" className="border w-full p-2 rounded-lg bg-gray-700 text-white" placeholder="Write a 60 character post title." />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-300">Post Category</label>
                            <select className="border w-full p-2 rounded-lg bg-gray-700 text-white">
                                <option value="">-------------</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Tech">Tech</option>
                                <option value="Health">Health</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-300">Post Description</label>
                            <textarea className="border w-full p-2 rounded-lg bg-gray-700 text-white" rows="5" placeholder="A brief summary of your post..."></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-300">Tags</label>
                            <input type="text" className="border w-full p-2 rounded-lg bg-gray-700 text-white" placeholder="e.g. health, fitness, tech" />
                        </div>

                        <button className="bg-green-500 text-white w-full p-3 rounded-lg hover:bg-green-400">
                            Create Post <i className="fas fa-check-circle"></i>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AddPost;
