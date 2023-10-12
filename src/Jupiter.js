import CelestialObject from "./CelestialObject";

export default class Jupiter extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/jupiter.jpg',5, 'jupiter',0.11, 60, 0.041);
  }
}

