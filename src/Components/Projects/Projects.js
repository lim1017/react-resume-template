import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

function Project(props) {
  return (
    <MDBContainer className="mt-5 port-item">
      <a href={props.url} target="_blank">
        <h3 style={{ color: "#11ABB0", paddingBottom: "3px" }}>
          {props.title}
        </h3>
      </a>
      <a href={props.url}>
        <MDBView hover className="makePointer">
          <img
            src={require(`../../../public/${props.img}`)}
            className="img-fluid"
          />

          <MDBMask className="flex-center" overlay="teal-strong">
            <div>
              <p className="port-item-hovor-text">{props.description}</p>

              <br></br>
              <p className="port-item-hovor-text">{props.front}</p>

              <p className="port-item-hovor-text">{props.back}</p>
            </div>
          </MDBMask>
        </MDBView>
      </a>
      <a href={props.git} target="_blank">
        <span className="port-links">GitHub</span>
      </a>

      {props.demo ? (
        <a href={props.demo} target="_blank">
          <span className="port-links">YouTube Demo</span>
        </a>
      ) : null}
    </MDBContainer>
  );
}

export default Project;
