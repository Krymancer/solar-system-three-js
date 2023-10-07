import CelestialObject from "./CelestialObject";

export default class Saturn extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/saturn.jpg', 2.5,'saturn',0.005,70);
  }
}