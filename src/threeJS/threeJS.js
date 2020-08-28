import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import Title from "../Components/Title";
import "../index.css";
import { SocialIcon } from 'react-social-icons';


class ThreeCanvas extends Component {
  componentDidMount() {
    var camera,
      scene,
      renderer,
      stats,
      materials = [],
      parameters;
    var mouseX = 0,
      mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0008);

    var geometry = new THREE.BufferGeometry();
    var vertices = [];

    var textureLoader = new THREE.TextureLoader();
    var threeFolder =
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/";
    var sprite1 = textureLoader.load(threeFolder + "snowflake1.png");
    var sprite2 = textureLoader.load(threeFolder + "snowflake2.png");
    var sprite3 = textureLoader.load(threeFolder + "snowflake3.png");
    var sprite4 = textureLoader.load(threeFolder + "snowflake4.png");
    var sprite5 = textureLoader.load(threeFolder + "snowflake5.png");

    for (var i = 0; i < 10000; i++) {
      var x = Math.random() * 2000 - 1000;
      var y = Math.random() * 2000 - 1000;
      var z = Math.random() * 2000 - 1000;

      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    parameters = [
      [[1.0, 0.2, 0.5], sprite2, 20],
      [[0.95, 0.1, 0.5], sprite3, 15],
      [[0.9, 0.05, 0.5], sprite1, 10],
      [[0.85, 0, 0.5], sprite5, 8],
      [[0.8, 0, 0.5], sprite4, 5],
    ];

    for (var i = 0; i < parameters.length; i++) {
      var color = parameters[i][0];
      var sprite = parameters[i][1];
      var size = parameters[i][2];

      materials[i] = new THREE.PointsMaterial({
        size: size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });
      materials[i].color.setHSL(color[0], color[1], color[2]);

      var particles = new THREE.Points(geometry, materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      scene.add(particles);
    }

    //

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    this.mount.appendChild(renderer.domElement);
    console.log(scene);

    document.addEventListener("mousemove", onDocumentMouseMove, false);
    document.addEventListener("touchstart", onDocumentTouchStart, false);
    document.addEventListener("touchmove", onDocumentTouchMove, false);

    //

    window.addEventListener("resize", onWindowResize, false);

    animate();

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    function onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    //

    function animate() {
      requestAnimationFrame(animate);

      render();
      // stats.update();
    }

    function render() {
      var time = Date.now() * 0.00005;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      for (var i = 0; i < scene.children.length; i++) {
        var object = scene.children[i];

        if (object instanceof THREE.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }

      for (var i = 0; i < materials.length; i++) {
        var color = parameters[i][0];

        var h = ((360 * (color[0] + time)) % 360) / 360;
        materials[i].color.setHSL(h, color[1], color[2]);
      }

      renderer.render(scene, camera);
    }
  }
  render() {
    return (
      <div style={{display:"flex", justifyContent:"center"}}>
        <div className="title-div">
          
					<Title />

          <div style={{ color: "white", fontSize: "30px", marginTop: "40px" }}>
            Welcome to Tommy Lim's Portfolio
          </div>
                <div className="social">
                  <a href="https://www.linkedin.com/in/tlim8894">
                  <i class="fab fa-linkedin" style={{fontSize:"50px", marginLeft:"0.5em", marginRight:"0.5em"}} ></i>
                  </a>

                  <a href="https://github.com/lim1017">

                  <i class="fab fa-github" style={{fontSize:"50px", marginLeft:"0.5em", marginRight:"0.5em"}} ></i>
                  </a>

                </div>


				<p className="scrolldown">
        	 <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      	</p>

        </div>
        <div ref={(ref) => (this.mount = ref)} />
      </div>
    );
  }
}

export default ThreeCanvas;
