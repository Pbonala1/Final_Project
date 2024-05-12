import React from 'react'
import project1 from './images/project1.png'
import project2 from './images/project2.png'
import project3 from './images/project3.png'
export const Projects = () => {
  return (
    <div className='projectmain' id='projects'>
      <h2>Projects</h2>
      <div className="projectsmain">
      <div className="project">
          <div className="imgp">
            <img src={project1} alt="" />
          </div>
          <div className="titlep">
          11- stage apex architecture simulator
          </div>
          <div className="descriptionp">
          Implemented a sophisticated 11-stage pipeline architecture in C/C++, along with a corresponding memory-optimized pipeline simulator
          </div>
      </div>
      <div className="project">
          <div className="imgp">
          <img src={project2} alt="" />
          </div>
          <div className="titlep">
          Electricity Billing System
          </div>
          <div className="descriptionp">
          Developed a Java-based Electricity Billing System with GUI, JDBC integration, and enhanced security, leading to a 25% efficiency boost in billing and 30% faster data retrieval
          </div>
      </div>
      <div className="project">
          <div className="imgp">
          <img src={project3} alt="" />
          </div>
          <div className="titlep">
          Prediction of chronic kidney disease
          </div>
          <div className="descriptionp">

          Created Python ML system for early CKD detection, enhancing accuracy by 15% and achieving 20% better prediction with KNN, RF, and LR
          </div>
      </div>
      </div>
    </div>
  )
}
