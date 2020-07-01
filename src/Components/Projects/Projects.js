import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import 'mdbreact/dist/css/mdb.css'

function Project (props) {
  
    return (
      <MDBContainer className="mt-5 port-item">
       
            <MDBView hover>
              <img
                src={require(`../../../public/${props.img}`)}
                className="img-fluid"
                
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
      
        
      </MDBContainer>
    );
  
}

export default Project;