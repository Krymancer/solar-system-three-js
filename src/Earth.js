import CelestialObject from "./CelestialObject";
import * as THREE from "three";
import Moon from "./Moon";

export default class Earth extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/earth.jpg', 1, 'earth', 0.4, 30);    
  }

  update(deltaTime) {
    super.update(deltaTime);
  }
}