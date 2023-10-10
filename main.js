import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import Sun from "./src/Sun.js";
import StarField from "./src/StarField.js";
import getPlanets from "./src/planets.js";
import Timer from "./src/Timer.js";
import getSolarSystem from "./src/SolarSystem.js";

const width = window.innerWidth;
const height = window.innerHeight;
const aspectRation = width / height;
const fieldOfView = 50;
const near = 10;
const far = 16000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  fieldOfView,
  aspectRation,
  near,
  far
);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// const axesHelper = new THREE.AxesHelper( 10000 );
// scene.add( axesHelper );

const controls = new OrbitControls( camera, renderer.domElement );

const starField = new StarField(scene);
const solarSystem = getSolarSystem(scene);
// const planets = getPlanets(scene);

const celestialObjects = [
  ...solarSystem
];

camera.position.set(0,25,145);
controls.update();

function main() {
  const timer = new Timer();

  timer.update = function update(deltaTime) {
    celestialObjects.forEach((celestialObject) => {
      celestialObject.update(deltaTime);
    });
    controls.update();
    renderer.render(scene, camera);
  }

  timer.start();
}

main();
