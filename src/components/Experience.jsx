import React from 'react'
import "./all.css";
import acc from "./images/accenture.png"
import coign from "./images/coign.png"

export const Experience = () => {
  return (

    <section className="middle" id='experience'>
        <div className="expheading">Experience</div>
    <div className='expcontainer'>
        <div className='exp'>
            <div className="exp1img">
                <img src={acc} alt="acc" />
            </div>
            <div className="exp1content">
                <div className="exp1title">
                    Accenture, Backend Developer
                </div>
                <div className="exp1des"> 
                <ul>
                    <li>Video Migration: Reduced time by 15%.</li>
                    <li>API Optimization: Improved loading by 20%</li>
                </ul>
                </div>
            </div>
        </div>
        
        <div className='exp'>
            <div className="exp1img">
            <img src={coign} alt="coign" />
            </div>
            <div className="exp1content">
                <div className="exp1title">
                    Coign Edu & It services, Internship
                </div>
                <div className="exp1des">
                <ul>
                    <li>Wireless Chair Control: 30% faster response.</li>
                    <li>MEMS Sensor Coding: 25% accuracy boost.</li>
                </ul>
                </div>
            </div>

        </div>

    </div>
    </section>
  );
};
