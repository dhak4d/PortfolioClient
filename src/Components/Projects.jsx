import React from 'react'
import './Projects.css'
import skillSetMe from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/skillSetMe.png'
import dataVisual from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/dataVisual.png'
import eCom from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/eCom.png'
import github from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/github.svg'
import Netflix from 'D:/Mango Workspace/Capston_Project/frontend/src/Images/Netflix.png'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      <div className='project-total-box'>
        {/* <h1 style={{color:'white', textAlign:'center', marginTop:'60px'}}>My work</h1> */}
        <div className='project-up-box'>
          <div className='project-box'>
            <div><img src={skillSetMe} alt='NoImage' className='portfolio-img'/></div>
            <div className='all'>
              <h4>PortFolio Website</h4>
              <h2>SkillSetMe Portfolio Website</h2>
              <p>Developed my own Portfolio using MERN  Stacktechnology -</p>
              <ul>
                <li>Designed beautiful UI with the help of frontend technologies JSX, ReactJs.</li>
                <li>Developed backend using ExpressJs, NodeJs for interacting frontend and backend.</li>
                <li>Enabled efficient communication between the frontend and backend through the fetch API.</li>
                <li>Created database and collection on MongoDB atlas and stablish connection between database to backend.</li></ul>
              <div className='project-link'>
                <img src={github} alt='NoImage' />
                <button type='button' className='project-btn'><Link to='https://github.com/dhak4d/MERN_MyApplication' className='project-btn-Link'>Visit Project</Link></button>
              </div>
            </div>
          </div>
        </div>

        <div className='project-down-box1'>
          <div className='project-down-box'>
            <div><img src={eCom} alt='NoImage' /> </div>
            <h4>Ecomm Website</h4>
            <h3>Ecommerce Website</h3>
            <div className='project-down-div'><Link to='https://github.com/dhak4d/E-comm_with_Js' className='project-down-Link'>Visit</Link>
              <img src={github} alt='NoImage' />
            </div>
          </div>

          <div className='project-down-box'>
            <div><img src={dataVisual} alt='NoImage' />
              <h4>Charts_Visuals</h4>
              <h3>Charts Visualization</h3>
              <div className='project-down-div'><Link to='https://github.com/dhak4d/Chart_Visuals' className='project-down-Link'>Visit</Link>
                <img src={github} alt='NoImage' />
              </div>
            </div>
          </div>
        </div>

        <div className='project-up-box1'>
          <div className='project-box'>
            <div><img src={Netflix} alt='NoImage' className='netflix-img' /></div>
            <div className='all'>
              <h4>Netflix Website</h4>
              <h2>Netflix Clone Website</h2>
              <p>A comprehensive application utilizing a stack of technologies to deliver
                 a seamless experience.</p>
              <ul>
                <li>Implemented React Routingfor smooth page navigation</li>
                <li>Employed Axios for efficient handling of HTTP requests and responses.</li>
                <li>Integrated CORS to ensure secure communication by restricting domain access.</li>
                <li>Enhanced security by encrypting and decrypting passwords using the bcryptjs package .</li>
                <li>Utilized .env for secure configuration management</li>
                </ul>
              <div className='project-link'>
                <img src={github} alt='NoImage' />
                <button type='button' className='project-btn'><Link to='https://github.com/dhak4d/Netflix_Clone' className='project-btn-Link'>Visit Project</Link></button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
