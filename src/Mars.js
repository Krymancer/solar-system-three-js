import CelestialObject from "./CelestialObject";

export default class Mars extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/mars.jpg', 671.8);
    this.object.position.x = 6080;
  }
}