import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";

function Detail() {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-100">
            <Header />
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a href="#" className="badge bg-red-600 mb-2 text-decoration-none dark:bg-red-800">
                                <i className="small fw-bold" />
                                Lifestyle
                            </a>
                            <h1 className="text-center dark:text-gray-100">10 tell-tale signs you need to get a new startup.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container position-relative" data-sticky-container="">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="text-start text-lg-center mb-5" data-sticky="" data-margin-top={80} data-sticky-for={991}>
                                <div className="position-relative">
                                    <div className="avatar avatar-xl">
                                        <img className="avatar-img" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Author.jpg" alt="avatar" />
                                    </div>
                                    <a href="#" className="h5 fw-bold text-dark text-decoration-none mt-2 mb-0 d-block dark:text-gray-100">
                                        Louis Ferguson
                                    </a>
                                    <p className="dark:text-gray-400">Writer at Desphixs</p>
                                </div>

                                <hr className="d-none d-lg-block dark:border-gray-700" />

                                <ul className="list-inline list-unstyled dark:text-gray-400">
                                    <li className="list-inline-item d-lg-block my-lg-2 text-start">
                                        <i className="fas fa-calendar"></i> Nov 15, 2022
                                    </li>
                                    <li className="list-inline-item d-lg-block my-lg-2 text-start">
                                        <i className="fas fa-clock"></i> 5 min read
                                    </li>
                                    <li className="list-inline-item d-lg-block my-lg-2 text-start">
                                        <a href="#" className="text-body dark:text-gray-400">
                                            <i className="fas fa-heart me-1" />
                                        </a>
                                        266 Likes
                                    </li>
                                    <li className="list-inline-item d-lg-block my-lg-2 text-start">
                                        <i className="fas fa-eye" />
                                        344 Views
                                    </li>
                                </ul>
                                {/* Tags */}
                                <ul className="list-inline text-primary-hover mt-0 mt-lg-3 text-start">
                                    <li className="list-inline-item">
                                        <a className="text-body text-decoration-none fw-bold dark:text-gray-400" href="#">
                                            #agency
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-body text-decoration-none fw-bold dark:text-gray-400" href="#">
                                            #business
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-body text-decoration-none fw-bold dark:text-gray-400" href="#">
                                            #theme
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-body text-decoration-none fw-bold dark:text-gray-400" href="#">
                                            #bootstrap
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-body text-decoration-none fw-bold dark:text-gray-400" href="#">
                                            #marketing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Left sidebar END */}
                        {/* Main Content START */}
                        <div className="col-lg-10 mb-5">
                            <p className="dark:text-gray-300">
                                <b>Moonlight</b> newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within
                                Elinor joy. She rapturous suffering concealed.
                            </p>
                            <p className="dark:text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum est tenetur voluptatibus itaque dolor saepe mollitia et ratione odio nisi! Explicabo quod tempore voluptatibus perspiciatis, nihil dolorem magni, corrupti odio dignissimos ut temporibus laboriosam
                                dolore vero repudiandae asperiores incidunt reiciendis corporis odit a maxime. Accusantium excepturi ut aliquid accusamus necessitatibus minus odit, assumenda rerum. Tempora deserunt officiis expedita, excepturi nihil, velit similique necessitatibus natus explicabo
                                veritatis, vitae temporibus aliquam dicta ea. Nesciunt et fuga quis atque debitis. Vero nihil aperiam voluptatibus. Architecto reiciendis necessitatibus explicabo repellendus corrupti pariatur velit aperiam! Ad, numquam expedita iste labore tempore necessitatibus
                                praesentium libero pariatur.
                            </p>
                            <p className="dark:text-gray-300">
                                <b>
                                    <i>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam quasi impedit nostrum hic consequatur! Tenetur dignissimos debitis ea ut magni laboriosam animi provident ab minima dolorem facilis minus amet culpa quam odio consectetur eos mollitia dolorum
                                        cumque at soluta atque nam, quia eaque! Sint quisquam fuga sapiente facilis provident, ullam officia! Alias voluptates officia natus eaque voluptate illum est.
                                    </i>
                                </b>
                            </p>
                            <p className="dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, culpa mollitia nam, ipsum hic dolorum, beatae at quis ea cum id temporibus? Asperiores, atque eos voluptatibus explicabo cum voluptatum placeat.</p>

                            <div className="mt-5">
                                <h2 className="my-3 dark:text-gray-100">
                                    <i className="bi bi-symmetry-vertical me-2" />
                                    Related post
                                </h2>
                                <section className="pt-4 pb-0">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-3">
                                                <div className="card mb-4 dark:bg-gray-800">
                                                    <div className="card-fold position-relative">
                                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg" alt="Card image" />
                                                    </div>
                                                    <div className="card-body px-3 pt-3">
                                                        <h4 className="card-title dark:text-gray-100">
                                                            <Link to={`/7-common-mistakes-everyone-makes-while-travelling/`} className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                                7 common mistakes everyone makes while traveling
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-lg-3">
                                                <div className="card mb-4 dark:bg-gray-800">
                                                    <div className="card-fold position-relative">
                                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1.jpg" alt="Card image" />
                                                    </div>
                                                    <div className="card-body px-3 pt-3">
                                                        <h4 className="card-title dark:text-gray-100">
                                                            <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                                7 common mistakes everyone makes while traveling
                                                            </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-lg-3">
                                                <div className="card mb-4 dark:bg-gray-800">
                                                    <div className="card-fold position-relative">
                                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg" alt="Card image" />
                                                    </div>
                                                    <div className="card-body px-3 pt-3">
                                                        <h4 className="card-title dark:text-gray-100">
                                                            <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                                7 common mistakes everyone makes while traveling
                                                            </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-lg-3">
                                                <div className="card mb-4 dark:bg-gray-800">
                                                    <div className="card-fold position-relative">
                                                        <img className="card-img" style={{ width: "100%", height: "160px", objectFit: "cover" }} src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/young-handsome-afro-black-man-going-upstairs-from-PJWPWPR-2.jpg" alt="Card image" />
                                                    </div>
                                                    <div className="card-body px-3 pt-3">
                                                        <h4 className="card-title dark:text-gray-100">
                                                            <a href="post-single.html" className="btn-link text-reset stretched-link fw-bold text-decoration-none">
                                                                7 common mistakes everyone makes while traveling
                                                            </a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <hr className="dark:border-gray-700" />
                            <div className="d-flex py-4">
                                <a href="#">
                                    <div className="avatar avatar-xxl me-4">
                                        <img className="avatar-img rounded-circle" src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Author.jpg" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%" }} alt="avatar" />
                                    </div>
                                </a>
                                <div>
                                    <div className="d-sm-flex align-items-center justify-content-between">
                                        <div>
                                            <h4 className="m-0 dark:text-gray-100">
                                                <a href="#" className="text-dark text-decoration-none dark:text-gray-100">
                                                    Louis Ferguson
                                                </a>
                                            </h4>
                                            <small className="dark:text-gray-400">Writer at Desphixs</small>
                                        </div>
                                    </div>
                                    <p className="my-2 dark:text-gray-300">Louis Ferguson is a senior editor for the blogzine and also reports on breaking news based in London. He has written about government, criminal justice, and the role of money in politics since 2015.</p>
                                    {/* Social icons */}
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link ps-0 pe-2 fs-5 dark:text-gray-400" href="#">
                                                <i className="fab fa-facebook-square" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2 fs-5 dark:text-gray-400" href="#">
                                                <i className="fab fa-twitter-square" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2 fs-5 dark:text-gray-400" href="#">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="dark:text-gray-100">3 comments</h3>
                                <div className="my-4 d-flex bg-light p-3 mb-3 rounded dark:bg-gray-800">
                                    <img
                                        className="avatar avatar-md rounded-circle float-start me-3"
                                        src="https://img.freepik.com/free-photo/front-portrait-woman-with-beauty-face_186202-6146.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
                                        style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "50%" }}
                                        alt="avatar"
                                    />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0 dark:text-gray-100">Benny William</h5>
                                            <span className="me-3 small dark:text-gray-400">June 11, 2023.</span>
                                        </div>
                                        <p className="fw-bold dark:text-gray-300">Thanks you very much for the post, it really helped. </p>
                                    </div>
                                </div>

                                <div className="my-4 d-flex bg-light p-3 mb-3 rounded dark:bg-gray-800">
                                    <img
                                        className="avatar avatar-md rounded-circle float-start me-3"
                                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "50%" }}
                                        alt="avatar"
                                    />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0 dark:text-gray-100">Jerry Doe</h5>
                                            <span className="me-3 small dark:text-gray-400">June 12, 2024.</span>
                                        </div>
                                        <p className="fw-bold dark:text-gray-300">Post more of these, please. </p>
                                    </div>
                                </div>

                                <div className="my-4 d-flex bg-light p-3 mb-3 rounded dark:bg-gray-800">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src="https://www.faceapp.com/static/img/content/compare/impression-example-after@2x.jpg" style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "50%" }} alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0 dark:text-gray-100">Ken Altman</h5>
                                            <span className="me-3 small dark:text-gray-400">June 14, 2024.</span>
                                        </div>
                                        <p className="fw-bold dark:text-gray-300">Amazing blog post, keep it up. </p>
                                    </div>
                                </div>
                            </div>
                            {/* Comments END */}
                            {/* Reply START */}
                            <div className="bg-light p-3 rounded dark:bg-gray-800">
                                <h3 className="fw-bold dark:text-gray-100">Leave a reply</h3>
                                <small className="dark:text-gray-400">Your email address will not be published. Required fields are marked *</small>
                                <form className="row g-3 mt-2">
                                    <div className="col-md-6">
                                        <label className="form-label dark:text-gray-400">Name *</label>
                                        <input type="text" className="form-control dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" aria-label="First name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label dark:text-gray-400">Email *</label>
                                        <input type="email" className="form-control dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label dark:text-gray-400">Write Comment *</label>
                                        <textarea className="form-control dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" rows={4} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary dark:bg-blue-600 dark:hover:bg-blue-700">
                                            Post comment <i className="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Detail;