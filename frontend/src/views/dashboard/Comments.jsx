import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Comments() {
    return (
        <>
            <Header />
            <section className="bg-gray-900 text-white py-5">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-2">Comments</h3>
                        <p className="text-gray-400">You have full control to manage your own comments.</p>
                    </div>
                    
                    <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-md">
                        <div className="flex items-center">
                            <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg" alt="avatar" className="w-16 h-16 rounded-full object-cover" />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold">Eleanor Pena</h4>
                                <p className="text-gray-400 text-sm">2 hours ago</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-300"><strong>Comment:</strong> This post was really amazing, do you recommend that beginners learn React.js and Django?</p>
                            <p className="text-gray-300 mt-2"><strong>Response:</strong> Thanks for the comment. Yes, it's an ideal stack for proficient development.</p>
                        </div>
                        
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Send Response
                        </button>
                        
                        <div className="collapse mt-4" id="collapseExample">
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <label className="block text-gray-300 mb-2">Write Response</label>
                                <textarea className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-600" rows="4"></textarea>
                                <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-500">
                                    Send Response <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Comments;
