import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Contact() {
    return (
        <>
            <Header />
            <section className="bg-gradient-to-b from-gray-700 to-black bg-cover font-mono flex justify-center items-center p-6">
                <div className="container mx-auto px-6 text-white">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">Contact Us</h1>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Address Information</h3>
                            <p>2492 Centennial NW, Acworth, GA, 30102</p>
                            <p>Call: <a href="#" className="text-blue-400">+123 4567 890 (Toll-free)</a></p>
                            <p>Email: <a href="#" className="text-blue-400">zyko@gmail.com</a></p>
                            <p>Support time: Monday to Saturday, 9:30 AM - 6:00 PM</p>
                        </div>
                        
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <p>750 Sing Sing Rd, Horseheads, NY, 14845</p>
                            <p>Call: <a href="#" className="text-blue-400">+123 4567 890 (Toll-free)</a></p>
                            <p>Email: <a href="#" className="text-blue-400">zyko@gmail.com</a></p>
                            <p>Support time: Monday to Saturday, 9:00 AM - 5:30 PM</p>
                        </div>
                    </div>
                    
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="w-full p-3 bg-gray-900 text-white rounded-md" required />
                                <input type="email" placeholder="E-mail" className="w-full p-3 bg-gray-900 text-white rounded-md" required />
                            </div>
                            <input type="text" placeholder="Subject" className="w-full p-3 mt-4 bg-gray-900 text-white rounded-md" required />
                            <textarea placeholder="Message" className="w-full p-3 mt-4 bg-gray-900 text-white rounded-md" rows="5" required></textarea>
                            <button type="submit" className="w-full py-2.5 mt-4 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition">
                                Send Message <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;
