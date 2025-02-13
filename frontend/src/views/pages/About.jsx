import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function About() {
    return (
        <>
            <Header />
            <section className="bg-gradient-to-b from-gray-700 to-black bg-cover font-mono flex justify-center items-center p-6">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                        <p className="text-lg text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus suscipit porro dignissimos quae hic doloribus deleniti voluptatibus in totam quasi quos omnis maiores, nam sint!
                        </p>
                        <p className="text-white mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur necessitatibus, sapiente facere harum molestiae, quas aperiam nulla eius, cupiditate deserunt accusantium magni! Necessitatibus saepe cupiditate facilis...
                        </p>

                        <h3 className="text-2xl font-semibold text-white mt-8">We do this across:</h3>
                        <ul className="list-disc list-inside text-white mt-3 space-y-2">
                            <li>A pleasure exertion if believed provided to.</li>
                            <li>Warrant private blushes removed an in equally totally if.</li>
                            <li>Mr feeling does chiefly cordial in do.</li>
                            <li>Dashwood does provide stronger is.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-white mt-10">Our Team</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {[
                                { name: "Louis Ferguson", role: "Editor in Chief", img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" },
                                { name: "Frances Guerrero", role: "Managing Editor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSPtLWfht2p015onFngljcoIuA9xc8h3RLA&usqp=CAU" },
                                { name: "Larry Lawson", role: "Director Graphics", img: "https://www.byrdie.com/thmb/aZWxblVz7BMxeObHtJEKX_ddV3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txpce733110Uae300_Medium_4082489-df45caed45cd449b806f9ce16a20804a.jpg" },
                                { name: "Louis Crawford", role: "Editor, Coverage", img: "https://static.vecteezy.com/system/resources/previews/036/442/773/non_2x/ai-generated-portrait-of-a-young-japanese-man-no-facial-expression-half-body-shot-facing-the-camera-isolated-white-background-ai-generative-free-photo.jpg" },
                            ].map((member, index) => (
                                <div key={index} className="text-center bg-gray-800 shadow-md p-4 rounded-lg">
                                    <img className="w-24 h-24 object-cover rounded-full mx-auto" src={member.img} alt={member.name} />
                                    <h5 className="text-lg font-semibold text-white mt-3">{member.name}</h5>
                                    <p className="text-sm text-white">{member.role}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-semibold text-white mt-10">What we do</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {[
                                { title: "Global News Services", img: "https://www.aspistrategist.org.au/wp-content/uploads/2023/11/GettyImages-467714941-1024x764.jpg", desc: "Perceived end knowledge certainly day sweetness why cordially." },
                                { title: "Commercial Services", img: "https://www.varletmachines.com/sites/default/files/styles/large/public/2022-04/Commercial.png?itok=jE81FZ_E", desc: "Speedily say has suitable disposal add boy." },
                                { title: "Public Services", img: "https://www.columbiasouthern.edu/media/azmjow33/fire-ems-cj-public-service.jpg", desc: "Yet uncommonly his ten who diminution astonished." },
                            ].map((service, index) => (
                                <div key={index} className="bg-gray-800 shadow-md rounded-lg p-4">
                                    <img className="w-full h-40 object-cover rounded-md" src={service.img} alt={service.title} />
                                    <h4 className="text-lg font-semibold text-white mt-3">{service.title}</h4>
                                    <p className="text-sm text-white">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;
