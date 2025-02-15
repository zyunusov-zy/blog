import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div>
      <Header />
      <section className="p-0">
        <div className="w-full px-4">
          <div className="flex flex-col items-start">
            <a
              href="#"
              className="block rounded-lg overflow-hidden shadow-lg hover:opacity-90 transition"
            >
              <img
                src="assets/images/adv-3.png"
                alt=""
                className="w-full h-auto"
              />
            </a>
            <h2 className="text-start text-lg sm:text-xl font-semibold mt-2 text-gray-300">
              Trending Articles 🔥
            </h2>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-0">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-40 object-cover"
                  src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg"
                  alt="Card image"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-200">
                  <a href="#" className="text-blue-400 hover:underline">
                    7 Common Mistakes Everyone Makes While Traveling
                  </a>
                </h4>
                <div className="flex gap-3 mt-2">
                  <button className="text-red-500 hover:text-red-400 transition">
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button className="text-blue-500 hover:text-blue-400 transition">
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                </div>
                <ul className="mt-3 space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-user"></i> Louis Ferguson
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-calendar"></i> Mar 07, 2022
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-eye"></i> 10 Views
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-40 object-cover"
                  src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/black-woman-smiling-with-hands-in-hair-PMCFL93-1.jpg"
                  alt="Card image"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-200">
                  <a href="#" className="text-blue-400 hover:underline">
                    7 Common Mistakes Everyone Makes While Traveling
                  </a>
                </h4>
                <ul className="mt-3 space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-user"></i> Louis Ferguson
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-calendar"></i> Mar 07, 2022
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-eye"></i> 10 Views
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-40 object-cover"
                  src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/flat-with-touch-of-creativity-PX387LV-2.jpg"
                  alt="Card image"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-200">
                  <a href="#" className="text-blue-400 hover:underline">
                    7 Common Mistakes Everyone Makes While Traveling
                  </a>
                </h4>
                <ul className="mt-3 space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-user"></i> Louis Ferguson
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-calendar"></i> Mar 07, 2022
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-eye"></i> 10 Views
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-40 object-cover"
                  src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/young-handsome-afro-black-man-going-upstairs-from-PJWPWPR-2.jpg"
                  alt="Card image"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-200">
                  <a href="#" className="text-blue-400 hover:underline">
                    7 Common Mistakes Everyone Makes While Traveling
                  </a>
                </h4>
                <ul className="mt-3 space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-user"></i> Louis Ferguson
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-calendar"></i> Mar 07, 2022
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-eye"></i> 10 Views
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <nav className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  <i className="fas fa-arrow-left mr-2"></i> Previous
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded">
                  1
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  2
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  Next <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-5 mb-3 mt-3">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/father-son-1.jpg"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Life Style</h5>
                  <small>3 Articles</small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://assets.entrepreneur.com/content/3x2/2000/1599591949-GettyImages-1174414266.jpg"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Entertainment</h5>
                  <small>1 Article</small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Cars</h5>
                  <small>2 Articles</small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://guardian.ng/wp-content/uploads/2019/03/sport-equipment-e1555707764770.jpeg"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Sports</h5>
                  <small>8 Articles</small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://aliviohealth.com/wp-content/uploads/2022/07/Managing-Mental-Health-During-COVID-19.jpg"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Health</h5>
                  <small>7 Articles</small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://www.realsimple.com/thmb/yla86Nr8GjRXe_9IyADQ638gPrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fashion-trends-GettyImages-1457816153-d2982e954afe4b42bf5587f087da90d4.jpg"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Fashion</h5>
                  <small>4 Articles</small>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-900 rounded-lg p-2">
                <img
                  className="w-36 h-20 object-cover rounded-md"
                  src="https://insight.ng/wp-content/uploads/2022/01/andrey-suslov-shutterstock-1199480788_w400-3.png"
                  alt="card image"
                />
                <div className="flex flex-col items-center mt-3 pb-2">
                  <h5 className="mb-0">Tech</h5>
                  <small>13 Articles</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0 bg-gray-600 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <a href="#" className="block">
              <img src="assets/images/adv-3.png" alt="" className="w-full" />
            </a>
            <h2 className="text-start block mt-2 text-xl font-semibold">
              Latest Articles 🕒
            </h2>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-0 bg-gray-600 pb-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover"
                      src={`https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/cheerful-loving-couple-bakers-drinking-coffee-PCAVA6B-2.jpg`}
                      alt="Card image"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-2">
                      <a
                        href="post-single.html"
                        className="hover:text-blue-400 transition duration-300"
                      >
                        7 common mistakes everyone makes while traveling
                      </a>
                    </h4>
                    <ul className="mt-2 space-y-1 text-gray-400">
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-400 transition duration-300"
                        >
                          <i className="fas fa-user mr-2"></i> Louis Ferguson
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-calendar mr-2"></i> Mar 07, 2022
                      </li>
                      <li>
                        <i className="fas fa-eye mr-2"></i> 10 Views
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <nav className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  <i className="fas fa-arrow-left mr-2"></i> Previous
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded">
                  1
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  2
                </button>
              </li>
              <li>
                <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                  Next <i className="fas fa-arrow-right ml-2"></i>
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

export default Index;
