import React from "react";
import "./About.css";

const About = () => (
  <div className="mainArea">
     <div className="wrapper">
    

    <div className="post-it-note yellow" id="note-1">
      <div className="pin blue"></div>

      <h2>
      About Us</h2>
      <hr></hr>
      <p>Two cool guys who sat next to each other on the first day of class. Now they make cool apps that they can hopefully monetize.</p>
    </div>

    <div className="post-it-note red" id="note-2">
      <div className="pin yellow"></div>

      <h2>
      Hey, I'm Jeff!</h2>
      <hr></hr>
      <p>Half of team LUDUM, legend has it he can chew gum and code at the same time.</p>
    </div>

    <div className="post-it-note blue" id="note-3">
      <div className="pin red"></div>

      <h2>Dan Kubiak</h2>
      <hr></hr>
      <p>Upcoming Javascript developer.</p>
    </div>

    <figure className="polaroid" id="picture-1">
      <div className="pin red"></div><img alt="Team LUDUM"  src={require("../../images/danjeff.jpg")}></img>

      <figcaption>
        --&gt; Sexy team #Ludum at their finest
      </figcaption>
    </figure>

    <figure className="polaroid" id="picture-2">
      <div className="pin blue"></div><img alt="Team LUDUM" src={require("../../images/game1.png")}></img>
      <figcaption>
        <a href="https://github.com/ChuckBerryOnTop/ludum">Git Hub Repo, check us out!<i className="fab fa-github-alt"></i><i className="fab fa-github-alt"></i><i className="fab fa-github-alt"></i></a>
      </figcaption>
    </figure>
  </div>
  </div>
);

export default About;