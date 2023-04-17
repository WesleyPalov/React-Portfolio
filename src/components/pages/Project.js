import React from "react"; // importing gql from the Apollo
//const { gql } = require("apollo-server-express");

function Project(props) {
  return (
    <div className="container mx-auto my-5">
      <div className="row d-flex flex-row justify-content-between align-items-baseline">
        <div className="card-group my-5">
          {props.projects.map((project) => (
            <div className="col-md-4">
              <div className="card h-100">
                <figure className="ration ratio-4-3">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt="Placeholder image"
                      className="card-img-top"
                      width={300}
                      height={240}
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h5 className="card-title is-4" key={project.id}>
                    {project.title}
                  </h5>
                  <p>{project.description}</p>
                  <p className="card-text">Languages: {project.languages}</p>
                  <p className="card-text">NPM Packages: {project.packages}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={project.repo}
                    className="card-footer-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See the Repo!
                  </a>
                  <br />
                  <a
                    href={project.live}
                    className="card-footer-item"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See the Live Site!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
