import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'

function Project (props) {
  
    return (
      <MDBContainer className="mt-5 port-item">
       <h3 style={{color:"#11ABB0"}}>{props.title}</h3>
            <MDBView hover>
              <img
                src={require(`../../../public/${props.img}`)}
                className="img-fluid" 
              />
              <MDBMask className="flex-center" overlay="teal-strong">
                <p className="port-item-hovor-text">{props.description}</p>
              </MDBMask>
            </MDBView>
      
        
      </MDBContainer>
    );
  
}

export default Project;