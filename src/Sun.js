import CelestialObject from './CelestialObject';
import * as THREE from "three";

export default class Sun extends CelestialObject{
  constructor(scene) {
    super(scene, '../assets/textures/sun.jpg', 5,'sun',0.8,false);

    const light = new THREE.PointLight(0xffffff, 1500);
    light.position.set(this.object.position.x,this.object.position.y,this.object.position.z);
    light.castShadow = true;

    scene.add(light);

  }

  update(deltaTime) {
    this.rotationAngle += this.rotationSpeed * deltaTime;
    this.object.rotation.y = this.rotationAngle;
  }
}