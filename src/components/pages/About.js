import React from "react";
import myImg from "../../images/myimg.jpg";
import ParticlesBg from 'particles-bg'
export default function About() {
  return (
   
   <div>
      <p className="content is-medium text-bar ">
        Full Stack Developer and out of the box thinker
      </p>
      <hr/>
      <img className="my-pic " src= {myImg}   />
      <p className="content is-italic mt-4 text-about ">
        Hello, i am Wesley a bootcamp student studying full stack web
        development.
      </p>
      <ParticlesBg type="lines" bg={true} />
      <p className="content text-about ">
        As a hard working professional, I am very driven and highly successful
        at meeting all targets and goals. I have strong organization
        capabilities, and am accustomed to juggling several responsibilities
        simultaneously. I am also an excellent communicator with the ability to
        quickly establish rapport as well as motivate others to strive for their
        full potential, gaining customer feedback and loyalty, as well as a
        highly committed work force.
      </p>
   
    </div>
  );
}
