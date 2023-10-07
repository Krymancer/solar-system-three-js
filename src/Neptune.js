import CelestialObject from "./CelestialObject";

export default class Neptune extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/neptune.jpg', 0.8,'neptune',0.002,90);
  }
}

