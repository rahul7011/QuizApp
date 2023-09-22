// Function to decode HTML entities in a string
function decodeHtmlEntities(encodedString) {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  // Set the innerHTML of the textarea to the encoded string
  textarea.innerHTML = encodedString;
  // Return the decoded value
  return textarea.value;
}
// Custom hook for processing and formatting questions data
const useQuestions = (questions) => {
  // Initialize an empty array to store filtered questions
  let filteredQuestions = [];
  let m = 0;
  // Iterate through the provided questions
  questions.map((key, idx) => {
    // Create an object to represent the current question
    let currQues = {};
    // Assign properties to the current question object
    currQues["id"] = m++;
    currQues["question"] = decodeHtmlEntities(key.question);
    currQues["correct"] = decodeHtmlEntities(key.correct_answer);
    currQues["selected"] = -1;
    currQues["visited"] = false;
    currQues["options"] = [];
    // Generate a random number to determine the position of the correct answer
    const randomNumber = Math.floor(
      Math.random() * key.incorrect_answers.length + 1
    );
    let k = 0;
    // Populate the options array with both correct and incorrect answers
    for (let index = 0; index < key.incorrect_answers.length + 1; index++) {
      if (index == randomNumber) {
        currQues["options"].push(decodeHtmlEntities(key.correct_answer));
      } else {
        currQues["options"].push(
          decodeHtmlEntities(key.incorrect_answers[k++])
        );
      }
    }
    // Push the current question object into the filteredQuestions array
    filteredQuestions.push(currQues);
  });
  // Return the filtered questions data
  return filteredQuestions;
};
// Export the useQuestions custom hook
export default useQuestions;
