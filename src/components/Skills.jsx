import React from 'react';
import "./all.css";
import htmlimg from "./images/html.png"
import cssimg from "./images/css.png"
import jsimg from "./images/javascript.png"
import reactimg from "./images/react.png"
import pyimg from "./images/python.png"
import cimg from "./images/c.png"
import javaimg from "./images/java.png"
import mongoimg from "./images/mongodb.png"
import sqlimg from "./images/sql.png"
import { useRef } from 'react';

export const Skills = () => {
    const skillRef = useRef(null);

  return (
    <section className="skills-container" ref={skillRef} id='skillls'>
        <div className='skillheading'>
        <h2>Skills</h2>
        </div>
        <div className="row">
            <div className="skill1">
                <div className='skill'>
                    <img src={htmlimg} alt="HTML" />
                </div>
                <div className="skill-title">HTML</div>
                
            </div>
            <div className="skill1">
                <div className='skill'>
                    <img src={cssimg} alt="CSS"  />
                </div>
                <div className="skill-title">CSS</div>
            </div>
            <div className="skill1">
                <div className='skill'>
                    <img src={jsimg} alt="JavaScript"  />
                    </div>
                <div className="skill-title">JavaScript</div>
            </div>
            <div className="skill1">
                <div className='skill'>
                    <img src={reactimg} alt="React"  />
                </div>
                <div className="skill-title">React</div>
            </div>
        </div>
        <div className="row">
            <div className="skill2">
                <div className='skill'>
                    <img src={pyimg} alt="Python"  />
                </div>
                <div className="skill-title">Python</div>
            </div>
            <div className="skill2">
                <div className='skill'>
                    <img src={cimg} alt="C"  />
                </div>
                <div className="skill-title">C</div>
            </div>
            <div className="skill2">
                <div className='skill'>
                    <img src={javaimg} alt="Java"  />
                </div>
                <div className="skill-title">Java</div>
            </div>
        </div>
        <div className="row">
            <div className="skill3">
                <div className='skill'>
                    <img src={mongoimg} alt="MongoDB"  />
                </div>
                <div className="skill-title">MongoDB</div>
            </div>
            <div className="skill3">
                <div className='skill'>
                    <img src={sqlimg} alt="SQL"  />
                </div>
                <div className="skill-title">SQL</div>
            </div>
        </div>
    </section>
  );
};
