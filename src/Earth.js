import CelestialObject from "./CelestialObject";
import * as THREE from "three";
import Moon from "./Moon";

export default class Earth extends CelestialObject {
  constructor(scene) {
    
    super(scene, '../assets/textures/earth.jpg', 1.5, 'earth', 0.2, 30, 2);   
    // const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);
    // this.mesh.rotation.y += EARTH_YEAR * 10
  }

  update(deltaTime) {
    super.update(deltaTime);
  }

}

