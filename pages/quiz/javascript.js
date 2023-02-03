import React, { useContext, useState } from "react";
import userContext from "../../context/user/userContext";

function JavaScript() {
  const context = useContext(userContext)
  const { user, mode } = context
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: false },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App py-32">
      {/* 1. Header  */}
      <h1 className=" text-3xl mb-5" style={{ color: mode === 'dark' ? 'white' : '' }}>JavaScript Quiz</h1>

      {/* 2. Current Score  */}
      <h2 className=" mb-5 text-3xl " style={{ color: mode === 'dark' ? 'white' : '' }}>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results border-2 bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
          <h1 className=" text-3xl mb-5" style={{ color: mode === 'dark' ? 'white' : '' }}>Final Results</h1>
          <div className="flex justify-center">
            {score > 3 ? (<img className="" src="https://cdn-icons-png.flaticon.com/128/6778/6778954.png" />):(<img className="" src="https://cdn-icons-png.flaticon.com/128/3448/3448149.png" />)}

          </div>
          <h2 className="text-2xl inline-block font-light md:mr-2 mb-2 sm:mb-0" style={{ color: mode === 'dark' ? 'white' : '' }}>
            {user.name}
          </h2>
          <h2 className=" text-3xl text-black mb-5" style={{ color: mode === 'dark' ? 'white' : '' }}>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="buttons text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  " onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card bg-gray-200  border border-gray-200 p-6 rounded-lg hover:shadow-2xl hover:shadow-[#6366F1] hover:ring-offset-1 hover:ring-1  " style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
          {/* Current Question  */}
          <h2 className="text-3xl mb-3">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text mb-5">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="uls">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className="lis bg-purple-50 " style={{ backgroundColor: mode === 'dark' ? 'rgb(31 41 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default JavaScript;