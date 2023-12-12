import React from 'react';
import './MySkills.css';
import react from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/react.png';
import express from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/express.png';
import node from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/node.png';
import mongodb from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/mongodb.png';
import js from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/js.png';
import html from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/html.png';
import css from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/css.png';
import git from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/git.png';
import github from 'D:/Mango Workspace/Capston_Project/frontend/src/Logo/github.png'


export const MySkills = () => {
  return (
    <>
      <div className='skill'>
        <div className='md-skill'><span><img src={react} alt='loading' className='logo' /><h3 className='react-h3'>React Js</h3></span>
          <p className='react-p'>React Js:- React is a JavaScript library for building user interfaces.
            React is used to build single-page applications.React allows us to create reusable UI components.</p> </div>

        <div className='md-skill'><span><img src={node} alt='loading' className='logo' /><h3>Node Js</h3></span>
          <p className='node-p'>Node Js:- Node.js is an open-source, cross-platform JavaScript
            runtime environment that allows developers to execute JavaScript code outside of a web browser</p></div>

        <div className='md-skill'><span><img src={express} alt='loading' className='logo' /><h3 className='ex-h3'>Express Js</h3></span>
          <p className='express-p'>Express Js:- Express is a minimal and flexible Node.js web application
            framework that provides a robust set of features for web and mobile applications. </p></div>

        <div className='md-skill'><span><img src={mongodb} alt='loading' className='logo' /><h3 className='mongo-h3' 
        >MongoDB</h3></span>
          <p className='mongoDB-p'>MongoDB:- MongoDB, the most popular NoSQL database, is an open-source
            document-oriented database. The term ‘NoSQL’ means ‘non-relational’. It means that MongoDB isn’t
            based on the table-like relational database structure </p></div>

        <div className='md-skill'><span><img src={js} alt='loading' className='logo' /><h3 className='js-h3'>JavaScript</h3></span>
          <p className='js-p'>JavaScript:- JavaScript is a versatile programming language primarily used to
            create interactive effects within web browsers.JavaScript allows developers to add dynamic
            behavior to their websites.</p></div>

        <div className='md-skill'><span><img src={html} alt='loading' className='logo' /><h3 className='html-h3'>HTML 5</h3></span>
          <p className='html-p'>HTML:-Hypertext Markup Language, is the standard language used to create
            web pages. It provides the structure and content of a webpage by using a markup system of tags
            to define different elements within the document.</p></div>

        <div className='md-skill'><span><img src={css} alt='loading' className='logo' /><h3 className='css-h3'
       >CSS 3</h3></span>
          <p className='css-p'>CSS:- It's a style sheet language used for describing the presentation
            of a document written in a markup language like HTML. CSS describes how elements should be displayed
            on a web page, including layout, colors, fonts </p></div>

        <div className='md-skill'><span><img src={git} alt='loading' className='logo' /><h3 className='git-h3'>Git</h3></span>
          <p className='git-p'>Git:- Git is a free and open source distributed version control system
            that can handle small to very large projects with speed and efficiency.</p></div>

        <div className='md-skill'><span><img src={github} alt='loading' className='logo' /><h3 >GitHub</h3></span>
          <p className='github-p'>GitHub:-GitHub, Inc. is a platform and cloud-based service for software
            development and version control, allowing developers to store and manage their code.</p></div>

      </div>
    </>
  )
}
