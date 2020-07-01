import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./Projects/Projects";

function Portfolio(props) {
  const [modalShow, setModalShow] = React.useState(0);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.details}</h4>
          <br></br>
          <ul>
            <li>
              <h5>{props.front} </h5>
            </li>
            <li>
              <h5>{props.back} </h5>
            </li>

            {props.youtube ? (
              <li>
                <h5>
                  {" "}
                  <a href={props.youtube}>Youtube Demo</a>{" "}
                </h5>
              </li>
            ) : null}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (props.data) {
    var projects = props.data.projects.map(function (projects) {
      // <Projects />

      var projectImage = "images/portfolio/" + projects.image;
      return (
        <Project img={projectImage} />

        //   <div>
        // <div key={projects.title} className="columns portfolio-item">
        //   <h2><a target="_blank" href={projects.url} title={projects.title}>{projects.title} </a></h2>
        //    <div className="item-wrap">
        //     <a target="_blank" href={projects.url} title={projects.title}>
        //        <img style={{height:'105px'}} alt={projects.title} src={projectImage} />

        //       <div className="link-icon"><i className="fa fa-link"></i></div>
        //     </a>
        //   </div>
        //   <a target="_blank" href={projects.git}><h4>Github</h4></a>
        //   <h4 onClick={() => setModalShow(projects.id)}>

        //   {projects.youtube ? (
        //       'Info + demo'

        //             ) : "Info"}

        //   </h4>
        // </div>

        //     <MyVerticallyCenteredModal
        //     id={projects.id}
        //     show={modalShow === projects.id}
        //     onHide={() => setModalShow(false)}
        //     title={projects.title}
        //     details={projects.category}
        //     front={projects.front}
        //     back={projects.back}
        //     youtube={projects.youtube}
        //     />

        //     </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div>
        <div>
          <div className='centered-div'>
            <h1>Check Out Some of My Work!</h1>
            </div>

            <div className='centered-div'>

            <h1>Please Allow Up To 15 Seconds For Heroku Deployment</h1>
            </div>
          <div
            id="port-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
