import CelestialObject from "./CelestialObject";

export default class Jupiter extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/jupiter.jpg',3, 'jupiter',0.08, 60);
  }
}