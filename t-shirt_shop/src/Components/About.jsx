import React, { Component } from "react";
import Data from "../Data/Team.json";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="about_as_header">Náš tým</h1>
        <div className="about_as_flexbox">
          {Data.map((postDetail, index) => {
            return (
              <div className="about_as_cells">
                <img className="about_as_image" src={postDetail.photo} />
                <p>{postDetail.name}</p>
                <p>
                  <b>{postDetail.position}</b>
                </p>
              </div>
            );
          })}
        </div>
        {/* 
        <div>
          <img />
          <h2>
            <b>Seo</b>
          </h2>
          <h2>Michal Raštica</h2>
        </div> */}
      </div>
    );
  }
}

export default About;
