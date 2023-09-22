#  Quiz Master :desktop_computer::moneybag:

"Welcome to the QuizMaster app – Where knowledge meets excitement!"


![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)   ![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,redux,babel,js,html,css,vscode" />
  </a>
</p>

## Want to get Familiar with Project 🤗?
https://github.com/rahul7011/QuizApp/assets/52202163/5600595d-5367-4e47-954b-7e34044a620c


 
## Setup process:

1. **Clone the Repository:**
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to clone the repository using the `cd` command.
   - Run the following command

   ```bash
   git clone https://github.com/rahul7011/QuizApp.git
   ```

2. **Change Directory:**
   - Navigate to the newly created directory by using the `cd` command:

   ```bash
   cd QuizApp
   ```

3. **Install Dependencies:**
   - Once you are inside the repository directory, you need to install the project's dependencies specified in the `package.json` file.
   - Run the following command:

   ```bash
   npm install
   ```
   
   This will download and install all the required packages and dependencies listed in the `package.json` file.

4. **Start the React App:**
   - After the dependencies are installed, you can start the React app by running:

   ```bash
   npm run start
   ```

   This command will start a development server and open your React app in a web browser. You can access it at `http://localhost:1234` by default.


## Screenshots
<table>
 <tr>
  <td>
     <img width="420" alt="DM1" src="https://github.com/rahul7011/QuizApp/assets/52202163/a0b70a63-4939-4ee4-bee3-13d6df1ac843">
  </td>
  <td>
  <img width="420" alt="DM2" src="https://github.com/rahul7011/QuizApp/assets/52202163/62c49ed2-6024-4e58-a245-57ec38938bad">
     </td>
 </tr>
 <tr>
  <td>
   <img width="420" alt="DM3" src="https://github.com/rahul7011/QuizApp/assets/52202163/a59874d5-1b92-4559-92c7-bd46d37811b3">
  </td>
  <td>
   <img width="420" alt="DM4" src="https://github.com/rahul7011/QuizApp/assets/52202163/600abed0-21ba-49ee-9868-e77f9fc1e6b2">
   </td>
 </tr>
 <tr>
  <td>
   <img width="420" alt="DM5" src="https://github.com/rahul7011/QuizApp/assets/52202163/10926868-5233-4d78-bca6-80cd2ce7093b">
     </td>
  <td>
   <img width="420" alt="DM6" src="https://github.com/rahul7011/QuizApp/assets/52202163/b6ee7756-422b-4085-91a1-748e0b609bad">
     </td>
 </tr>
</table>

## Challenges Faced
* **Data Fetching and Processing:** Obtaining and formatting quiz questions from an external API presented an initial hurdle. I overcame this by creating a custom function to fetch data, decode HTML entities, and structure questions in a user-friendly manner.
* **State Management:** Managing the state of questions, user responses, and timer updates was complex. I leveraged Redux for efficient state management and utilized Redux Toolkit for smoother development.
* **Timer Functionality:** Implementing a timer that counts down accurately and triggers specific actions when time is up was a technical challenge. I achieved this by utilizing React's useState and useEffect hooks along with Redux actions to handle time-related updates.
* **User Navigation:** Allowing users to navigate between questions while keeping track of visited, unvisited, and selected options required careful planning. I utilized conditional rendering and dynamic class assignments to highlight different question states.

