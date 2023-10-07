import CelestialObject from "./CelestialObject";
import * as THREE from "three";

export default class Earth extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/earth.jpg', 1, 'earth', 0.4, 30);

    // Create the moon
    const moonGeometry = new THREE.SphereGeometry(0.2, 32, 16);
    const moonTexture = new THREE.TextureLoader().load('../assets/textures/moon.jpg');
    moonTexture.colorSpace = THREE.SRGBColorSpace;
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    this.object.add(moonMesh);
    this.moon = moonMesh;

    this.moon.position.x = this.orbit - 2;
  }

  update(deltaTime) {
    super.update(deltaTime);
    this.moon.position.x = Math.cos(deltaTime * this.rotationSpeed) * this.orbit - 2;
    this.moon.position.z = Math.sin(deltaTime * this.rotationSpeed) * this.orbit - 2;
    this.moon.rotation.y += 0.01;
  }
}