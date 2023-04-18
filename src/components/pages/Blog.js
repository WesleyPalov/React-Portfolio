import React from "react";
import Project from "./Project";
import ParticlesBg from 'particles-bg';
import fluffy from "../../images/fluffy.jpg";
import daily from "../../images/daily.jpg";
import myNet from "../../images/myNet.JPG";
import weather from "../../images/weather.JPG";
import texteditor from "../../images/texteditor.PNG";
import ecommers from "../../images/ecommers.JPG";
const projects = [
  {
    id: 1,
    title: "Project 1",
    languages:
      "Use a Node and Express web server Backed by a MySQL database with a Sequelize ORM Migration strategy using seeds and schema files Routes for retrieving and adding new data Incorporate authentication (BCrypt) Folder structure that meets the MVC paradigm Use Handlebars for server-side templating Polished front end/UI Meet good-quality coding standards (indentation, scoping, naming, etc.) Deployed using Heroku (with data)",
    packages: "Pkg",
    image: fluffy,
    description:
      "Fluffy is a full stack web application which allows a user to register a pet, and browse in a product database with many different items. You can select products and add them to a purchasing cart, while maintaining a record of a user’s purchase history. This application also utilizes request authentication to have access to the main functionality",
    repo: "https://github.com/WesleyPalov/Pets-Store",
    live: "https://enigmatic-falls-71377.herokuapp.com/",
  },
  {
    id: 2,
    title: "Project 2",
    languages: "HTML, Java, CSS, API integration",
    packages: "bcrypt,",
    image: daily,
    description:
      "The intention behind this web application is to build an all-in-one stop for users in the Denver metro area. The user can quickly access the current and future weather, see the current traffic, and see the daily news sorted by category in one quick to read UI. It also allows for the user to save news articles to read later if they don't have time, and check the weather in other locations. Saving their recent searches to access quickly next time the user loads the page. This core values of the application are to be quick, efficient, and allow the user to read the news on their own time and anywhere!",
    repo: "https://github.com/WesleyPalov/The-Daily-Brew",
    live: "https://wesleypalov.github.io/The-Daily-Brew/",
  },
  {
    id: 3,
    title: "Project 3",
    languages: "Javascript, Node.js, Express.js,MongoDB,Mongoose",
    packages: "bcrypt,",
    image: myNet,
    description:
      "It's an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    repo: "https://github.com/WesleyPalov/My-Social-Network",
    live: "",
  },
  {
    id: 4,
    title: "Project 4",
    languages: "HTML, CSS ,API integration",
    packages: "Uses AJAX to hook into the API to retrieve data in JSON format.",
    image: weather,
    description:
      "Third-party APIs has been used to access data and by making requests with specific parameters to a URL. A weather dashboard has been build to run in the browser and feature dynamically updated HTML and CSS.",
    repo: "https://github.com/WesleyPalov/WeatherDashbord-HW6",
    live: "https://wesleypalov.github.io/WeatherDashbord-HW6/",
  },
  {
    id: 5,
    title: "Project 5",
    languages: "React, Express",
    packages: "",
    image: texteditor,
    description:
      "The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use. The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection. This application allows the user to access visited pages even if the application is offline.",
    repo: "https://github.com/WesleyPalov/ProgressiveText-Editor",
    live: "https://evening-coast-00835.herokuapp.com/",
  },
  {
    id: 6,
    title: "Project 6",
    languages: "",
    packages: "Sequelize to interact with a MySQL database",
    image: ecommers,
    description:
      "The back end has been build for an e-commerce site by usin a starter code. Express.js API has been cofiguured to use Sequelize to interact with a MySQL database. Since this is a back end only application , some HTML elements have been used for demonstration purpose.",
    repo: "https://github.com/WesleyPalov/E.Commerce",
    live: "https://drive.google.com/file/d/1fSAGWB1oO-h8Dq6utS8ASgUPwvDQ2Gdr/view",
  },
];
export default function Blog() {
  return (
    <div>
    
      <p className="content is-medium text-bar">Projects</p>
      <hr />

      <Project projects={projects} />
     
    </div>
    
  );
}
