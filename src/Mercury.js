import CelestialObject from "./CelestialObject";

export default class Mercury extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mercury.jpg', 200.439);
    this.object.position.x = 980;
  }
}