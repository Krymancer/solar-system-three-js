import CelestialObject from "./CelestialObject";

export default class Saturn extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/saturn.jpg', 671.8);
    this.object.position.x = 10080;
  }
}