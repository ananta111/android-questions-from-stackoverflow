### A UTILITY APP TO VIEW TOP 10 ANDROID RELATED QUESTIONS FROM STACKOVERFLOW 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Stack Exchange's API (rate limiting enforced). 

This application is deployed to a free student version of heroku cloud. So, some performance issues have been seen. Please note that the link might take a while to load for the first time. Nevertheless, the link should still work fine most of the time. If it doesn't, please feel free to run the app locally as directed below.

Access this application at https://stack-android-util.herokuapp.com or run it locally by following the steps below.

## Available Scripts
(To run the app locally, node should be installed on your system first. Go to https://www.npmjs.com/get-npm  for more information)

First, download or clone this repository. In the project directory, you can run `npm install` first. Then, 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Available Features
1. View the 10 most recent Android related questions on stackoverflow at present in descending order.
- Click on the 10 MOST RECENT QUESTIONS tab on the homepage or the navigation bar to access this feature. You will also see the links to the original stackoverflow page. 

2. View the 10 most voted Android related questions during the past seven days in descending order.
- Click on the 10 MOST VOTED QUESTIONS tab on the homepage or the navigation bar to access this feature. You will also see the links to the original stackoverflow page. <br/>

3. Pagination implemented for (1) and (2) 
- If you wish to view 10 more questions matching the revelant criteria, you may click on the NEXT TEN button available above the results component. <br/>
- You may also go back to the previous 10 questions by clicking on the PREVIOUS TEN button available above the results component. 
- The results might slightly vary as you go back and forth because the API sends the real-time data updated frequently.

4. A toggle switch is implemented to filter out those questions with accepted answers.
- Feel free to use the toggle to get only those questions with accepted answers.

5. Open the full question as a new dialog.
- Click on the red "READ FULL QUESTION" button to access this feature.

6. Posted date and the status of the question
- Beside each question, the time at which the question was posted is visible.
- In addition, this region also shows if the question has been answered yet.
- "Answered" means some users have answered the particular question. It doesn't imply that the answer was accepted.
- "Not Answered Yet" means no user has answered the question.


## NOTES
- This application uses Stack Exchange's API. Rate limiting is enforced from the Stack Exchange's end. If there is a Network Error or other forms of error alerts, it could be from the API, in which case please let me know or report the issue here
- Currently, the application is deployed to Heroku Cloud at https://stack-android-util.herokuapp.com. This is a free version available for students. Therefore, the app might take some time to load and sometimes fail to load. 
- If the app doesn't load properly, follow the steps above to run it locally.
- Network errors caused by the API will be displayed as an alert. Please report an issue or contact me at athapaliya@claflin.edu if the application shows problems related to data fetching.





