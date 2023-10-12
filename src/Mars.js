import CelestialObject from "./CelestialObject";

export default class Mars extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mars.jpg', 0.80, 'mars', 0.24,45, 0.103);
  }
}

