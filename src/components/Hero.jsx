import React from "react";
import "./Hero.css";
import Nav from "./Nav";
export default function Hero() {
  return (
    <div className="hero">
      <Nav />
      <div className="main">
        <div className="content">
          <h1 className="hading">Structure Your Mind </h1>
          <h1 className="heading">
            Become <span>2.0</span> Version of Yourself
          </h1>
          <img className="line" src="line.svg" alt="blue line" />
          <p className="details">
            Build Mental Resilience, Cultivate Discipline, and Design Your
            Optimal Self By Learning The Art of Self mastery.
          </p>
          <p className="details">
            Break your Bad Habits and Become financially free, Physically fit,
            Mentally active.
          </p>
          <button className="enroll">Enroll now</button>
          <p className="free">
            Not ready to enroll? Enter your email below and we will send you our
            self-mastery 101 guide with notion planner template for free!{" "}
          </p>
          <div className="form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="joe@gmail.com"
            />
            <button className="submit">Submit</button>
          </div>
        </div>
        <div className="side">
          <img src="hero.svg" alt="sword" srcset="" />
        </div>
      </div>
    </div>
  );
}
