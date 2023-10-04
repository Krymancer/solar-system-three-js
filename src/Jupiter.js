import CelestialObject from "./CelestialObject";

export default class Jupiter extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/jupiter.jpg', 671.8);
    this.object.position.x = 8080;
  }
}