import CelestialObject from "./CelestialObject";

export default class Neptune extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/neptune.jpg', 1.94,'neptune', 0.054,95, 0.067);
  }
}

