import { useState, useEffect } from "react";
import Timer from "./Timer";
import useQuestions from "./useQuestions";
import { choiceTaken } from "../src/questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../src/store";
import { timeUpdate } from "../src/timeSlice";
import Result from "./Results";

const Body = () => {
  const dispatch = useDispatch();

  // Function to handle adding a choice to a question
  const addChoice = (obj, idx) => {
    const updatedObj = { ...obj, selected: idx };
    const updatedItems = [...questions];
    const itemToUpdate = updatedItems.find((item) => item.id === id);

    if (itemToUpdate) {
      itemToUpdate.selected = idx;
      setQuestions(updatedItems);
    }
  };

  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [id, setId] = useState(0);
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setValid(true);
    event.target.reset();
  };
  // Handle navigating between questions
  const handleNav = () => {
    const updatedItems = [...questions];
    const itemToUpdate = updatedItems.find((item) => item.id === id);

    if (itemToUpdate) {
      itemToUpdate.visited = true;
      setQuestions(updatedItems);
    }
  };
  const handleFinalSubit = () => {
    dispatch(timeUpdate(true));
  };
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const data = await fetch("https://opentdb.com/api.php?amount=15");
    const json = await data.json();
    // console.log(json);
    if (json.results) {
      setQuestions(useQuestions(json.results));
      console.log(questions);
    }
  }
  const check = useSelector((store) => store.timeOver.isOver);
  if (check == true) {
    dispatch(choiceTaken({ payload: questions }));
  }
  return (
    <>
      {questions == null || questions == undefined || questions.length == 0 ? (
        <div>Not rendered</div>
      ) : (
        <div className="flex flex-col bg-opacity-60 justify-center font-spartan items-center h-screen bg-cover bg-center bg-repeat-y bg-[url('./pic.jpg')]">
          {valid == false ? (
            <div className="w-5/6 lg:w-4/6 sm:w-4/6 md:w-4/6 xl:w-4/6 2xl:w-4/6 bg-white p-5 rounded-lg text-center">
              <div className="text-center text-5xl lg:text-9xl sm:text-7xl md:text-9xl xl:text-9xl 2xl:text-9xl font-extrabold">
                <span className="text-red-500">Q</span>
                <span className="text-blue-500">u</span>
                <span className="text-green-500">i</span>
                <span className="text-yellow-500">z</span>
              </div>
              "Welcome to the QuizMaster app – Where knowledge meets
              excitement!"
              <div className="text-center m-3 p-2 rounded-md border-4 bg-opacity-90 bg-gray-900">
                <div className="text-center text-2xl font-bold mt-4 text-red-600">
                  <span className="text-red-500">Decode </span>
                  <span className="text-blue-500">your </span>
                  <span className="text-green-500">quiz </span>
                  <span className="text-yellow-500">progress </span>
                  <span className="text-green-500">with </span>
                  <span className="text-red-500">c</span>
                  <span className="text-blue-500">ol</span>
                  <span className="text-green-500">o</span>
                  <span className="text-yellow-500">rs:</span>
                </div>
                <div className="text-2xl font-bold mt-4 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-400 mr-2 "></div>
                  <span className="text-white">Option Selected</span>
                </div>
                <div className="text-2xl font-bold mt-4 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-200 mr-2 "></div>
                  <span className="text-white">Question Visited</span>
                </div>
                <div className="text-2xl font-bold mt-4 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100 mr-2 "></div>
                  <span className="text-white ">Question Not Visited</span>
                </div>
              </div>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 flex flex-wrap">
                  <div className="w-full md:w-1/2 md:pl-2">
                    <label
                      className="block mb-2 text-2xl font-bold text-gray-700"
                      htmlFor="email"
                    >
                      <span className="text-red-500">Ready</span>
                      <span className="text-blue-500"> To</span>
                      <span className="text-green-500"> Quiz</span>
                      <br />
                      Enter your email to start!
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <button
                    disabled={!email}
                    className="disabled:opacity-10 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : check == false ? (
            <>
              <Timer />
              <div className="w-11/12 lg:w-4/6 sm:w-4/6 md:w-4/6 xl:w-4/6 2xl:w-4/6 h-auto bg-opacity-60 bg-rose-600 rounded-md text-center">
                <div className=" h-16">
                  <div className="flex overflow-x-auto">
                    {questions.map((question, index) => (
                      <button
                        onClick={() => {
                          setId(index);
                          handleNav();
                        }}
                        key={index}
                        className={`w-14 h-14 px-5 py-2 m-2 font-extrabold text-xl
                        ${
                          questions[index].selected != -1
                            ? "bg-green-400"
                            : questions[index].visited === true
                            ? "bg-yellow-300"
                            : "bg-gray-200"
                        }
                        ${
                          questions[index].id === id
                            ? "border border-blue-500"
                            : ""
                        }
                         hover:text-white text-sm rounded-md hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <h1 className=" text-3xl font-bold mb-12 mt-8">
                    Q{id + 1}.{questions[id].question}
                  </h1>
                  <div className="text-2xl font-semibold">
                    {questions[id].options.map((key, idx) => (
                      <div
                        onClick={() => {
                          handleNav();
                          addChoice(questions[id], idx);
                        }} // Pass a function to onClick
                        key={idx}
                        className={`p-2 rounded mb-2 cursor-pointer ${
                          questions[id].selected === idx
                            ? "bg-green-400"
                            : "bg-gray-200"
                        }
                        opacity-80
                        border-2
                        hover:border-green-400
                        `}
                      >
                        {key}
                      </div>
                    ))}
                  </div>
                </div>
                {id != 0 ? (
                  <button
                    onClick={() => {
                      setId(id - 1);
                      handleNav();
                    }}
                    className="w-24 h-12 m-2 font-bold hover:text-white text-sm bg-gray-100 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Back
                  </button>
                ) : (
                  <></>
                )}
                {id == 14 ? (
                  <button
                    onClick={() => {
                      handleFinalSubit();
                    }}
                    className="w-24 h-12 m-2 font-bold hover:text-white text-sm bg-gray-100 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setId(id + 1);
                      handleNav();
                    }}
                    className="w-24 h-12 m-2 font-bold hover:text-white text-sm bg-gray-100 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          ) : (
            <Result />
          )}
        </div>
      )}
    </>
  );
};

export default Body;
