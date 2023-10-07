import CelestialObject from './CelestialObject';

export default class Sun extends CelestialObject{
  constructor(scene) {
    super(scene, '../assets/textures/sun.jpg', 5,'sun',0.8,false);
  }

  update(deltaTime) {
    this.rotationAngle += this.rotationSpeed * deltaTime;
    this.object.rotation.y = this.rotationAngle;
  }
}