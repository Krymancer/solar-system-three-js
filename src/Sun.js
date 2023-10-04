import CelestialObject from './CelestialObject';

export default class Sun extends CelestialObject{
  constructor(scene) {
    super(scene, '../assets/textures/sun.jpg', 696.342);
  }
}