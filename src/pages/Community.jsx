import React, { useEffect, useState } from "react";
import question from "../assets/question.png";
import arrow from "../assets/arrow.png";
import { FaArrowCircleUp, FaRegComments, FaReplyAll } from "react-icons/fa";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PollCreator from "../components/PollCreator";

function Community() {
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const [activeLink, setActiveLink] = useState("community");
  const [questions, setQuestions] = useState([]);
  const [questionInput, setQuestionInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterCategory, setFilterCategory] = useState("all"); // State to track filter category
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    getQuestionsAndComments();
  }, []);

  const formatTimeAgo = (timestamp) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (error) {
      console.error("Invalid time value", error);
      return "Invalid date";
    }
  };

  const getQuestionsAndComments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000//api/comment/allquestion"
      );
      setQuestions(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleCommentInput = (questionId) => {
    setOpenQuestionId((prevId) => (prevId === questionId ? null : questionId));
  };

  const createQuestion = async () => {
    const formData = { title: questionInput, comments: [] };
    try {
      const res = await axios.post("/api/comment/question", formData, {
        headers: {
          Authorization: currentUser?.token,
        },
      });
      setQuestions((prevQuestions) => [...prevQuestions, res?.data?.data]);
      setQuestionInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (questionId, e) => {
    e.preventDefault();
    const comment = { text: commentInput };
    try {
      const res = await axios.post(
        `/api/comment/comment/${questionId}`,
        comment,
        {
          headers: {
            Authorization: currentUser?.token,
          },
        }
      );

      setQuestions((prevQuestions) =>
        prevQuestions?.map((q) =>
          q._id === questionId
            ? { ...q, comments: [...q.comments, res.data.comment] }
            : q
        )
      );

      setCommentInput("");
      setOpenQuestionId(null); // Close the comment input after submission
    } catch (error) {
      console.log(error);
    }
  };

  // Filtered questions based on search input and filter category
  const filteredQuestions = questions?.filter((question) => {
    // Filter based on search input
    if (
      searchInput !== "" &&
      !question.title.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return false; // If search input is set and title does not match, exclude question
    }

    // Apply filter categories
    if (filterCategory === "all") {
      return true; // Return all questions
    } else if (filterCategory === "myQuestions") {
      return question.userId._id === currentUser?._id || currentUser?.rest?._id; // Replace with your logic to match user's questions
    } else if (filterCategory === "unanswered") {
      return question.comments.length === 0; // Replace with your logic to filter unanswered questions
    } else if (filterCategory === "myAnswers") {
      return question.comments.some(
        (comment) =>
          comment.user._id === currentUser._id || currentUser?.rest?._id
      ); // Replace with your logic to match user's answers
    }

    return true; // Default to returning the question
  });

  return (
    <>
      {currentUser == null ? (
        <div className="w-full flex justify-center items-center text-[#008080] font-bold h-[300px] text-4xl">
          Please login first
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="md:hidden w-[300px] h-[46px] flex justify-between border-2 border-[#008080] mt-2">
              <div
                className={`w-1/2 flex justify-center items-center text-center ${
                  activeLink === "chatroom"
                    ? "bg-[#008080] text-white"
                    : "text-[#008080]"
                }`}
                onClick={() => handleLinkClick("chatroom")}
              >
                <Link to="/chatroom">ChatRoom</Link>
              </div>
              <div
                className={`w-1/2 flex justify-center items-center text-center ${
                  activeLink === "community"
                    ? "bg-[#008080] text-white"
                    : "text-[#008080]"
                }`}
                onClick={() => handleLinkClick("community")}
              >
                <Link to="/community">Q & A</Link>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-5 rounded-sm">
            <div className="w-11/12 md:w-4/5">
              <div className="bg-[#FFEDCC] m-6 text-center flex flex-col md:flex-row justify-around items-center rounded-xl">
                <div className="flex w-[180px] h-[180px] bg-white rounded-full justify-center items-center border-2 border-[#FFA500] my-4 md:my-0">
                  <img src={question} width="40px" alt="question icon" />
                </div>
                <div>
                  <p className="text-gray-600 font-normal text-3xl md:text-5xl leading-14 tracking-tight p-4 md:p-10">
                    Ask Any Questions
                  </p>
                  <div className="flex justify-center items-center pb-4 md:pb-10">
                    <div className="relative mb-2 flex items-center w-full ">
                      {questionInput.length === 0 && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFA500] pointer-events-none">
                          Type Something...
                        </span>
                      )}
                      <input
                        type="text"
                        value={questionInput}
                        onChange={(e) => setQuestionInput(e.target.value)}
                        className="block w-full py-2.5 pl-3 pr-4 text-gray-900 border border-[#FFA500] bg-white text-md rounded-md "
                        placeholder=""
                      />

                      <button
                        className="absolute right-0 top-0 px-3 bottom-0 bg-[#008080] text-white font-bold text-lg md:text-2xl"
                        onClick={createQuestion}
                      >
                        <img src={arrow} width="35px" alt="arrow icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-5  md:pr-10 mb-6">
                {/* <PollCreator />  */}
                <div className="relative flex items-center w-full ml-6 border rounded-lg border-[#FFA500]">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-[#FFA500] rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Search Any Questions..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <button className="absolute right-0 top-0 px-3 bottom-0 bg-[#008080] rounded-r-lg text-white font-bold text-lg md:text-2xl">
                    <img src={arrow} width="35px" alt="arrow icon" />
                  </button>
                </div>
              </div>
              <div className="w-full hidden md:flex flex-row justify-around mt-3 md:text-xl text-sm gap-2">
                <div
                  className={`rounded-md py-1 md:px-3 px-1 cursor-pointer ${
                    filterCategory === "all"
                      ? "bg-[#008080] text-white"
                      : "bg-[#FFEDCC]"
                  }`}
                  onClick={() => setFilterCategory("all")}
                >
                  All Questions
                </div>
                <div
                  className={`rounded-md py-1 px-3 cursor-pointer ${
                    filterCategory === "myQuestions"
                      ? "bg-[#008080] text-white"
                      : "bg-[#FFEDCC] "
                  }`}
                  onClick={() => setFilterCategory("myQuestions")}
                >
                  My Questions
                </div>
                <div
                  className={`rounded-md py-1 px-3 cursor-pointer ${
                    filterCategory === "unanswered"
                      ? "bg-[#008080] text-white"
                      : "bg-[#FFEDCC]"
                  }`}
                  onClick={() => setFilterCategory("unanswered")}
                >
                  Unanswered Questions
                </div>
                <div
                  className={`rounded-md py-1 px-3 cursor-pointer ${
                    filterCategory === "myAnswers"
                      ? "bg-[#008080] text-white"
                      : "bg-[#FFEDCC]"
                  }`}
                  onClick={() => setFilterCategory("myAnswers")}
                >
                  My Answers
                </div>
              </div>
              <div className="w-full flex md:hidden flex-row justify-between gap-2 mt-3 text-sm sm:text-lg">
                <div className="bg-[#FFEDCC] py-1 px-1">All Q's</div>
                <div className="bg-[#FFEDCC] py-1 px-1">My Q's</div>
                <div className="bg-[#FFEDCC] py-1 px-1">Unanswered Q’s</div>
                <div className="bg-[#FFEDCC] py-1 px-1">My Answers</div>
              </div>
              {filteredQuestions?.map((item, key) => (
                <div
                  key={key}
                  className="w-full border-2 border-[#FFA500] mt-2 md:mt-5 p-2 md:p-5 rounded-xl"
                >
                  <div className="flex items-center m-1 md:m-2">
                    <div className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] rounded-full bg-green-500 flex justify-center items-center mx-2"></div>
                    <div>
                      <p className="text-lg md:text-2xl font-bold">
                        {item?.userId?.name}
                      </p>
                      <p className="text-xs md:text-sm">
                        {formatTimeAgo(item?.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base md:text-xl mx-2 md:mx-6">
                      {item?.title}
                    </p>
                  </div>
                  <div className="flex mt-3 items-center">
                    <div className="flex ml-2 md:ml-6 bg-[#FFEDCC] items-center p-1 md:p-2 rounded-lg">
                      <FaArrowCircleUp className="w-6 h-6" />
                      <span className="text-base md:text-xl ml-1">12</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div
                        className="flex ml-2 md:ml-6 bg-[#FFEDCC] p-1 md:p-2 cursor-pointer items-center rounded-lg"
                        onClick={() => toggleCommentInput(item._id)}
                      >
                        <FaRegComments className="w-6 h-6" />
                        <span className="text-base md:text-xl ml-1">
                          {item?.comments?.length}
                        </span>
                      </div>
                    </div>
                    <div className="flex ml-2 md:ml-6 bg-[#FFEDCC] items-center p-1 md:p-2 rounded-lg">
                      <FaReplyAll className="w-6 h-6" />
                      <span className="text-base md:text-xl ml-1">12</span>
                    </div>
                  </div>
                  {openQuestionId === item._id && (
                    <form
                      className="ml-2 md:ml-6 mt-2"
                      onSubmit={(e) => createComment(item._id, e)}
                    >
                      <textarea
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        className="w-full h-[100px] p-2 border rounded"
                        placeholder="Type your comment..."
                      ></textarea>
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-[#008080] text-white font-bold text-lg md:text-xl mt-2"
                      >
                        Post Comment
                      </button>
                    </form>
                  )}
                  {item?.comments?.map((comment, index) => (
                    <div key={index} className="ml-4 md:ml-10 mt-2">
                      <div className="flex items-center">
                        <div className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full bg-gray-300 flex justify-center items-center mx-2"></div>
                        <div>
                          <p className="text-base md:text-lg font-semibold">
                            {comment?.user?.name}
                          </p>
                          <p className="text-xs md:text-sm">
                            {formatTimeAgo(comment?.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="ml-4 md:ml-6">
                        <p className="text-sm md:text-base">{comment?.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="md:hidden h-[100px]"></div>
    </>
  );
}

export default Community;
