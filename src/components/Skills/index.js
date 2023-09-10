import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';




const Skills = () => {

  useEffect(() => {
    return () => {

const container = '.tagcloud';
const texts = [
  'React.js', 'Python', 'JavaScript',
  'CSS3', 'Java', 'Jquery',
  'HTML5', 'C#', 'Ajax', 'ASP.NET',
  'SQL Server 2019', 'WordPress',
  'Team Foundation Server (GIT)',
  'Google Maps API', 'SendGrid', 'Telerik UI', 'Blazor', 'Android Studio'
];

const options = {
  radius: 400,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  // direction: 135,
  // interact with cursor move on mouse out
  keep: true
};

TagCloud(container, texts, options);
};
}, []);

  
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
     return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

 
  return (

    

    <div  className='container skills-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Expert in a wide variety of coding languages such as HTML5, CSS3, Javascript, Jquery, React, Bootstrap, Git, Java, Python, C#, SQL, etc.
          </p>
          <p float="left">
             I specialize in building aesthetic looking websites on the front end, as well as making my back end code extremely efficient with the least amount of overhead possible. I try my best to ensure
             each page I build has a mobile friendly design and that my code is as easy to understand and as reusable as it can possibly be. 
          </p>
          <p>
            Feel free to visit my <a href='https://github.com/EricTilton'>Github</a> page for some of my work.
          </p>
          
        </div>
      
         <div  className='cloudContainer'> 

        <span  className="tagcloud"/>
       
        </div> 

       

        <Loader type="ball-grid-pulse" />
    </div>
  )
}

export default Skills