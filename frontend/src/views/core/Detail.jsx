import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link, useParams } from "react-router-dom";
import apiInstance from "../../utils/axios";
import Moment from "../../plugin/Moment";
import Toast from "../../plugin/Toast";

function Detail() {
    const [post, setPost] = useState([]);
    const [tags, setTags] = useState([]);
    const [createComment, setCreateComment] = useState({full_name: "", email: "", comment: ""});

    const param = useParams();

    const fetchPost = async () => {
        try {         
            const response = await apiInstance.get(`post/detail/${param.slug}`)
            setPost(response.data);
            // console.log(response.data.profile);
            const tagArray = response?.data.tags.split(",");
            setTags(tagArray);
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleCreateCommentChange = (event) => {
        setCreateComment({
            ...createComment,
            [event.target.name]: event.target.value,
        })
    }

    const submitComment = async (e) =>{
        e.preventDefault();

        const json = {
            post_id: post?.id,
            name: createComment.full_name,
            email: createComment.email,
            comment: createComment.comment
        }
        console.log(json)

        try {
            const response = await apiInstance.post('post/comment-post/', json);
            Toast({"success": "Comment posted"})
            fetchPost();
            setCreateComment({full_name: "", email: "", comment: ""})
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() =>{
        fetchPost();
        // console.log("Post: " ,post)
    }, [])
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100 min-h-screen">
            <Header />
            <section className="mt-5">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <a href="#" className="inline-block bg-red-600 dark:bg-red-800 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                            <i className="fas fa-tag mr-1" />
                            Lifestyle
                        </a>
                        <h1 className="text-3xl font-bold dark:text-gray-100">{post.title}</h1>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container mx-auto px-4 relative pb-2">
                    <div className="flex flex-wrap">
                        {/* Left Sidebar */}
                        <div className="w-full lg:w-1/6 lg:pr-4">
                            <div className="sticky top-20 text-center lg:text-left mb-8 lg:mb-0">
                                <div className="relative">
                                    <img
                                        className="w-25 h-24 rounded-full mx-auto lg:mx-0"
                                        src={post?.profile?.image}
                                        alt="avatar"
                                    />
                                    <a href="#" className="block text-lg font-bold mt-2 dark:text-gray-100">
                                        {post?.profile?.full_name || "Why"}
                                    </a>
                                    <p className="text-sm dark:text-gray-400">{post?.profile?.bio || ""}</p>
                                </div>

                                <hr className="my-4 border-gray-300 dark:border-gray-700" />

                                <ul className="space-y-2 text-sm dark:text-gray-400">
                                    <li>
                                        <i className="fas fa-calendar mr-2" /> {Moment(post?.date)}
                                    </li>
                                    {/* <li>
                                        <i className="fas fa-clock mr-2" /> 5 min read
                                    </li> */}
                                    <li>
                                        <a href="#" className="hover:text-blue-400 transition duration-300">
                                            <i className="fas fa-heart mr-2" /> {post?.like?.length} Likes
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fas fa-eye mr-2" /> {post?.view} Views
                                    </li>
                                </ul>

                                {/* Tags */}
                                <ul className="flex flex-wrap gap-2 mt-4">
                                    {tags.map((tag, index) => (
                                        <li key={index}>
                                            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300">
                                                {tag}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-full lg:w-5/6">
                            <div className="prose dark:prose-invert max-w-none">
                                <p>
                                    {post?.description}
                                </p>
                            </div>

                            {/* Related Posts */}
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold dark:text-gray-100">
                                    <i className="bi bi-symmetry-vertical mr-2" />
                                    Related posts
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                    {[1, 2, 3, 4].map((index) => (
                                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                            <img
                                                className="w-full h-40 object-cover"
                                                src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/kitchen-and-dining-room-P5JHHM6.jpg"
                                                alt="Card image"
                                            />
                                            <div className="p-4">
                                                <h4 className="text-lg font-bold dark:text-gray-100">
                                                    <Link to={`/7-common-mistakes-everyone-makes-while-travelling/`} className="hover:text-blue-400 transition duration-300">
                                                        7 common mistakes everyone makes while traveling
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="my-8 border-gray-300 dark:border-gray-700" />

                            {/* Author Bio */}
                            <div className="flex items-center py-4">
                                <img
                                    className="w-24 h-24 rounded-full mr-4"
                                    src={post?.profile?.image}
                                    alt="avatar"
                                />
                                <div>
                                    <h4 className="text-xl font-bold dark:text-gray-100">
                                        <a href="#" className="hover:text-blue-400 transition duration-300">
                                        {post?.profile?.full_name}
                                        </a>
                                    </h4>
                                    <p className="text-sm dark:text-gray-400">{post?.profile?.bio}</p>
                                    <p className="mt-2 dark:text-gray-300">
                                        {post?.profile?.about || "lorem"}
                                    </p>
                                    <ul className="flex space-x-4 mt-2">
                                        <li>
                                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300">
                                                <i className="fab fa-facebook-square" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300">
                                                <i className="fab fa-twitter-square" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition duration-300">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="mt-8">
                                <h3 className="text-2xl font-bold dark:text-gray-100">{post?.comments?.length} {post?.comments?.length === 1 ? "comment" : "comments" }</h3>
                                {post?.comments?.map((c, index) => (
                                    <div key={index} className="bg-gray-900 p-4 rounded-lg my-4">
                                        <div className="flex items-center">
                                            {/* <img
                                                className="w-16 h-16 rounded-full mr-4"
                                                src="https://img.freepik.com/free-photo/front-portrait-woman-with-beauty-face_186202-6146.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais"
                                                alt="avatar"
                                            /> */}
                                            <div>
                                                <h5 className="font-bold dark:text-gray-100">{c.name}</h5>
                                                <span className="text-sm dark:text-gray-400">{Moment(c.date)}</span>
                                            </div>
                                        </div>
                                        <p className="mt-2 dark:text-gray-300">{c.comment}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Reply Form */}
                            <div className="bg-gray-900 p-4 rounded-lg mt-8">
                                <h3 className="text-2xl font-bold dark:text-gray-100">Leave a reply</h3>
                                <small className="text-sm dark:text-gray-400">Your email address will not be published. Required fields are marked *</small>
                                <form className="mt-4 space-y-4" onSubmit={submitComment}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium dark:text-gray-400">Name *</label>
                                            <input onChange={handleCreateCommentChange} value={createComment.full_name} name="full_name" type="text" className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium dark:text-gray-400">Email *</label>
                                            <input onChange={handleCreateCommentChange} value={createComment.email} name="email" type="email" className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-100" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium dark:text-gray-400">Write Comment *</label>
                                        <textarea onChange={handleCreateCommentChange}  name="comment" value={createComment.comment} className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg dark:text-gray-100" rows={4} />
                                    </div>
                                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                                        Post comment <i className="fas fa-paper-plane ml-2" />
                                    </button>
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