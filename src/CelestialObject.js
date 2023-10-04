import * as THREE from 'three';

export default class CelestialObject {
  constructor(scene, texturePath, radius) {
    this.radius = radius
    this.rotationSpeed = 0.01;
    this.rotationAngle = 0;
    this.object = new THREE.Object3D();
    this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);
    this.texture = new THREE.TextureLoader().load(texturePath);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.material = new THREE.MeshBasicMaterial({ map: this.texture });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.object.add(this.mesh);
    this.scene = scene;
    this.scene.add(this.object);
  }
  
  update() {
    this.rotationAngle += this.rotationSpeed;
    this.object.rotation.y = this.rotationAngle;
  }
}