import React from 'react';
import Socials from "../../components/Socials";
import "./About.css";

const About = () => (
<div>
 <div className="container">
    <img className="profileImg" alt="Linda Ly" src="https://lylkda.github.io/assets/images/profilepic.jpg"/>
    <h3>"Tech-Savvy Math teacher with expert knowledge of HTML and CSS. 
    Possessing a strong aptitude for problem-solving and web development to 
    think outside the box to improve the quality of teaching."</h3>
    </div>
    <div className="about">
    <p>I have always been tech-savvy. Since I was in Elementary school, I was playing around with html/css for my blogs. 
     Upon becoming math teacher, I had to take a coding class and really enjoyed the problem solving. 
    When I got my teaching credentials, I decided that my next step was to become a tenured teacher and then help create an educational 
    game that is actually fun. I am not tenured yet, but my desires to make learning fun is still strong. I also discovered that I really 
    miss the struggle of problem solving. I really like math and that is why I became a math teacher. I also really like the aspect of math 
    of using everything you know and thinking outside the box to solve a problem.
    </p>
    <p>
    A hobby of mine is playing games! Not only that but the logic behind building a functional game is entertaining to me. 
    Building a game (such as the KPOP game in my portfolio) was so fun that it was a game within a game for me. My current favorite 
    game is Overwatch. It is my current classroom theme and my students love it!
    </p>
 </div>
 <Socials/>
</div>

)

export default About;

