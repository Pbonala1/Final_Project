import React from 'react'
import "./all.css";
import hero from "./images/heroimage.jpeg"
export const Herosection = () => {
  return (
    <section className='container'>
        <div className='details'>
            <h1 className='titlehero'>Hey,I'm Pravalika</h1>
            <p className='description'>I'm a software engineer who loves solving puzzles. I build strong, reliable programs that make life easier.
                        I enjoy working with others and always look for new ways to make things better.
                        
            </p>
            <a href='mailto:pravalikabonala@gmail.com' className='contactme'>contact me</a>
        </div>
        <div className='imagediv'>
            <img className="circularimage" src={hero} alt ="My hero"/>
        </div>
    </section>
    
  );
};
