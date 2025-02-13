import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Posts() {
    return (
        <>
            <Header />
            <section className="py-4 bg-gray-900 text-white min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-xl font-semibold">All Blog Posts <span className="bg-blue-500 text-white text-sm py-1 px-2 rounded">5</span></h5>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center">
                                Add New <i className="fas fa-plus ml-2"></i>
                            </button>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                            <input type="text" placeholder="Search Articles" className="w-full md:w-2/3 px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none" />
                            <select className="w-full md:w-1/3 px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none">
                                <option value="">Sort by</option>
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
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
                                <tbody>
                                    {[1, 2, 3, 4, 5].map((_, index) => (
                                        <tr key={index} className="border-t border-gray-700 hover:bg-gray-800">
                                            <td className="px-4 py-2">How to become a better Django and React developer</td>
                                            <td className="px-4 py-2">201 Views</td>
                                            <td className="px-4 py-2">March 21, 2024</td>
                                            <td className="px-4 py-2">Technology</td>
                                            <td className="px-4 py-2"><span className="bg-green-500 text-white text-sm py-1 px-2 rounded">Live</span></td>
                                            <td className="px-4 py-2 flex space-x-2">
                                                <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"><i className="bi bi-trash"></i></button>
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"><i className="bi bi-pencil-square"></i></button>
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
