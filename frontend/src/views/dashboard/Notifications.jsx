import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Notifications() {
    return (
        <>
            <Header />
            <section className="pt-10 pb-10 bg-gray-900 text-white min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                            <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                <div>
                                    <h3 className="text-xl font-semibold">Notifications</h3>
                                    <span className="text-gray-400">Manage all your notifications from here</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <ul className="space-y-4">
                                    <li className="bg-gray-700 p-4 rounded-lg shadow">
                                        <div className="flex items-center space-x-4">
                                            <i className="bi bi-chat-left-quote-fill text-green-400 text-2xl"></i>
                                            <div>
                                                <h4 className="text-lg font-bold">New Comment</h4>
                                                <p className="text-gray-300">Monica FineGeh commented on your post <b>How to become a better Django and React.js developer</b></p>
                                                <p className="text-gray-400 text-sm">Date: 30/11/24</p>
                                                <button className="mt-2 bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded">Mark as Seen <i className="fas fa-check"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="bg-gray-700 p-4 rounded-lg shadow">
                                        <div className="flex items-center space-x-4">
                                            <i className="fas fa-thumbs-up text-blue-400 text-2xl"></i>
                                            <div>
                                                <h4 className="text-lg font-bold">New Like</h4>
                                                <p className="text-gray-300">Destiny Franks liked your post <b>How to become a better Django and React.js developer</b></p>
                                                <p className="text-gray-400 text-sm">Date: 30/11/24</p>
                                                <button className="mt-2 bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded">Mark as Seen <i className="fas fa-check"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Notifications;
