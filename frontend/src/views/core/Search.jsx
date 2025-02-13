import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Category() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <section className="p-0">
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col">
                            <a href="#" className="d-block card-img-flash">
                                <img src="assets/images/adv-3.png" alt="" className="w-full" />
                            </a>
                            <h2 className="text-start d-block mt-1 text-2xl font-bold">
                                <i className="fas fa-search"></i> Search All Articles
                            </h2>
                            <input 
                                type="text" 
                                className="form-control w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded text-white" 
                                placeholder="Search All Articles" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-0 mt-4">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[...Array(16)].map((_, index) => (
                            <div key={index} className="card mb-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                <div className="card-fold position-relative">
                                    <img 
                                        className="card-img w-full h-40 object-cover" 
                                        src={`https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg`} 
                                        alt="Card image" 
                                    />
                                </div>
                                <div className="card-body px-3 pt-3">
                                    <h4 className="card-title text-lg font-bold">
                                        <a href="post-single.html" className="btn-link text-white hover:text-gray-300 stretched-link">
                                            7 common mistakes everyone makes while traveling
                                        </a>
                                    </h4>
                                    <ul className="mt-3 list-none">
                                        <li>
                                            <a href="#" className="text-gray-400 hover:text-gray-200">
                                                <i className="fas fa-user"></i> Louis Ferguson
                                            </a>
                                        </li>
                                        <li className="mt-2 text-gray-400">
                                            <i className="fas fa-calendar"></i> Mar 07, 2022
                                        </li>
                                        <li className="mt-2 text-gray-400">
                                            <i className="fas fa-eye"></i> 10 Views
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <nav className="flex justify-center mt-4">
                        <ul className="pagination flex space-x-2">
                            <li>
                                <button className="page-link bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                                    <i className="fas fa-arrow-left me-2" />
                                    Previous
                                </button>
                            </li>
                            <li>
                                <button className="page-link bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">1</button>
                            </li>
                            <li>
                                <button className="page-link bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">2</button>
                            </li>
                            <li>
                                <button className="page-link bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                                    Next
                                    <i className="fas fa-arrow-right ms-2" />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Category;