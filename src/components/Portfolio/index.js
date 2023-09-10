

import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {portfolio} from '../../data/portfolio.js'


const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
   

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    
    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div  onClick={() => window.open(port.url)} className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h3 className="description">{port.description}</h3>
                                    <button
                                        className="btn"   
                                    >View</button>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    );
}

export default Portfolio;