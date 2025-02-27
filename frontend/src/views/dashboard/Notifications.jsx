import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";
import { MessageCircle, Heart, Bookmark } from "lucide-react";

function Notifications() {
  const [notifications, setNoti] = useState([]);

  const user_id = useUserData()?.user_id;

  const fetchNotification = async () => {
    console.log(user_id);
    const response = await apiInstance.get(
      `author/dashboard/noti-list/${user_id}/`
    );
    setNoti(response?.data);
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  const handleMarkSeenNoti = async (noti_id) => {
    try {
        const response = await apiInstance.post(`author/dashboard/noti-mark-seen/`,{
            noti_id: noti_id,
        })
        console.log(response?.data);
        fetchNotification();
    } catch (error) {
        console.log(error)
    }
  }

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
                  <span className="text-gray-400">
                    Manage all your notifications from here
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <ul className="space-y-4">
                  {notifications.map((n, index) => (
                    <li
                      className="bg-gray-700 p-4 rounded-lg shadow"
                      key={index}
                    >
                      <div className="flex items-center space-x-4">
                        {n.type === "Like" && (
                          <>
                            <Heart className="w-6 h-6" />
                            <div>
                              <h4 className="text-lg font-bold">
                                New {n?.type}
                              </h4>
                              <p className="text-gray-300">
                                Someone liked your post <b>{n?.post?.title}</b>
                              </p>
                              <p className="text-gray-400 text-sm">
                                Date: {Moment(n?.date)}
                              </p>
                              <button onClick={() => handleMarkSeenNoti(n?.id)} className="mt-2 bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded">
                                Mark as Seen <i className="fas fa-check"></i>
                              </button>
                            </div>
                          </>
                        )}
                        {n.type === "Comment" && (
                          <>
                            <MessageCircle className="w-6 h-6" />{" "}
                            <div>
                              <h4 className="text-lg font-bold">
                                New {n?.type}
                              </h4>
                              <p className="text-gray-300">
                                Someone commented on your post{" "}
                                <b>{n?.post?.title}</b>
                              </p>
                              <p className="text-gray-400 text-sm">
                                Date: {Moment(n?.date)}
                              </p>
                              <button onClick={() => handleMarkSeenNoti(n?.id)} className="mt-2 bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded">
                                Mark as Seen <i className="fas fa-check"></i>
                              </button>
                            </div>
                          </>
                        )}
                        {n.type === "Bookmark" && (
                          <>
                            <Bookmark className="w-6 h-6" /> {/* Bookmark */}
                            <div>
                              <h4 className="text-lg font-bold">
                                New {n?.type}
                              </h4>
                              <p className="text-gray-300">
                                Someone bookmarked your post{" "}
                                <b>{n?.post?.title}</b>
                              </p>
                              <p className="text-gray-400 text-sm">
                                Date: {Moment(n?.date)}
                              </p>
                              <button onClick={() => handleMarkSeenNoti(n?.id)} className="mt-2 bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded">
                                Mark as Seen <i className="fas fa-check"></i>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </li>
                  ))}

                  {notifications?.length < 1 && (<p>No notifications yet</p>)}
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
