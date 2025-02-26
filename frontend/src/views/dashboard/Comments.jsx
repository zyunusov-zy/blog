import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import useUserData from "../../plugin/useUserData";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";
import Toast from "../../plugin/Toast";

function Comments() {
  const [comment, setComment] = useState([]);
  const [openCommentId, setOpenCommentId] = useState(null);
  const [reply, setReply] = useState("");

  const user_id = useUserData()?.user_id;

  const fetchComments = async () => {
    const response = await apiInstance.get(
      `author/dashboard/comment-list/${user_id}/`
    );
    setComment(response?.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const toggleResponse = (commentId) => {
    // If the same comment is clicked, close it. Otherwise, open it.
    setOpenCommentId(openCommentId === commentId ? null : commentId);
  };


  const hadleSubmitReply = async (commentId) => {
    try {
        const response = await apiInstance.post(`author/dashboard/reply-comment/`, 
            {comment_id: commentId,
            reply: reply,
            }
        )
        console.log(response.data)
        fetchComments();
        Toast("success", "Reply Sent");
        setReply("");
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <Header />
      <section className="bg-gray-900 text-white py-5">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Comments</h3>
            <p className="text-gray-400">
              You have full control to manage your own comments.
            </p>
          </div>

          {comment.map((c, index) => (
            <div
              className="bg-gray-800 p-6 mt-6 rounded-lg shadow-md"
              key={index}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{c?.name}</h4>
                  <p className="text-gray-400 text-sm">{Moment(c?.date)}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-300">
                  <strong>Comment:</strong> {c?.comment}
                </p>
                {c?.reply && (
                  <p className="text-gray-300 mt-2">
                    <strong>Response:</strong> {c?.reply}
                  </p>
                )}
              </div>

              <button
                className="btn btn-primary mt-4"
                type="button"
                onClick={() => toggleResponse(c.id)}
              >
                {openCommentId === c.id ? "Close Response" : "Send Response"}
              </button>

              {openCommentId === c.id && (
                <div className="mt-4 bg-base-200 p-4 rounded-lg">
                  <label className="block text-gray-300 mb-2">
                    Write Response
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    rows="4"
                    onChange={(e) => setReply(e.target.value)}
                    value={reply}
                  ></textarea>
                  <button onClick={() => hadleSubmitReply(c?.id)} type="submit" className="btn btn-success mt-2">
                    Send Response <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Comments;
