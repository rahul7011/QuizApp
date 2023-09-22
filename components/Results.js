import { useSelector } from "react-redux";
import store from "../src/store";
import { useEffect, useState } from "react";

const Result = () => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    // Calculate the score when the component mounts
    setScore(fetchScore());
  }, []);
  const questions = useSelector((store) => store.questions.taken);
  const fetchScore = () => {
    // Calculate the total score based on selected answers and correct answers
    const score = questions.reduce((totalScore, question) => {
      return (
        totalScore +
        question.options.reduce((questionScore, key, idx) => {
          return (
            questionScore +
            (question.selected === idx &&
            question.correct === question.options[parseInt(question.selected)]
              ? 1
              : 0)
          );
        }, 0)
      );
    }, 0);

    return score;
  };

  return (
    <div className="w-5/6 lg:w-4/6 sm:w-4/6 md:w-4/6 xl:w-4/6 2xl:w-4/6 h-screen overflow-y-auto bg-gray-100 rounded-md text-center">
      <div className="text-center text-4xl pt-2 lg:text-6xl sm:text-6xl md:text-6xl xl:text-6xl 2xl:text-6xl font-extrabold">
        <span className="text-red-500">Re</span>
        <span className="text-blue-500">s</span>
        <span className="text-green-500">ul</span>
        <span className="text-yellow-500">ts</span>
      </div>
      <div className="text-center m-3 p-2 rounded-md border-4">
        <div className="text-center text-2xl font-semibold mt-4">
          Score: <span className="text-green-500">{score}</span> /{" "}
          {questions.length}
        </div>
      </div>
      <div className="text-center m-3 p-2  rounded-md border-4 bg-gray-900">
        <div className="text-center text-2xl  font-bold mt-4 text-red-600">
          Note:
        </div>
        <div className="text-xl lg:text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold mt-4 flex items-center">
          <div className="w-6 h-6 rounded-full bg-green-400 mr-2 "></div>
          <span className="text-white">Correct</span>
        </div>
        <div className="text-xl lg:text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold mt-4 flex items-center">
          <div className="w-6 h-6 rounded-full bg-red-400 mr-2 "></div>
          <span className="text-white">Incorrect</span>
        </div>
        <div className="text-xl lg:text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold mt-4 flex items-center">
          <div className="w-6 h-6 rounded-full bg-yellow-400 mr-2 "></div>
          <span className="text-white ">
            Correct Answer for Unvisited Question
          </span>
        </div>
      </div>

      <div className="px-4 pb-4">
        {questions.map((question, index) => (
          <div key={index}>
            <h1 className=" text-lg lg:text-2xl sm:text-2xl md:text-2xl xl:text-2xl 2xl:text-2xl font-extrabold mb-12 mt-8">
              Q{question.id + 1}.{question.question}
            </h1>
            <div className="text-large font-extrabold ">
              {question.options.map((key, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded mb-2 
                  
                  ${
                    idx === question.selected &&
                    question.correct !==
                      question.options[parseInt(question.selected)]
                      ? "bg-red-400"
                      : "bg-gray-200"
                  }
                  ${
                    question.selected === idx &&
                    question.correct ===
                      question.options[parseInt(question.selected)]
                      ? "bg-green-400"
                      : "bg-gray-200"
                  }
                  ${
                    question.selected === -1 && question.correct === key
                      ? "bg-yellow-400"
                      : "bg-gray-200"
                  }
                  ${
                    question.selected !== -1 && question.correct === key
                      ? "bg-green-400"
                      : "bg-gray-200"
                  }
                  
                 `}
                >
                  {key}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
