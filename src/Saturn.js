import * as THREE from "three";
import CelestialObject from "./CelestialObject";

export default class Saturn extends CelestialObject {
  constructor(scene) {
    super(scene, '../assets/textures/saturn.jpg', 2.5,'saturn',0.05,70);
    this.rings = [];
    this.setupRings();
  }

  setupRings() {
    for (let i = 0; i < 10; i++) {
      const start = Math.random() * 2 + 3;
      const innerRadius = start;
      const outerRadius = start + .1;
      const thetaSegments = 100;
      const phiSegments = 20;
      const thetaStart = 2 * Math.PI;
      const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart);
      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffeecc, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x -= (Math.PI/2);
      ring.rotation.y = Math.PI/7;
      this.scene.add(ring);
      this.rings.push(ring);
      this.object.add(ring);
    }
  }

  update(deltaTime) {
    super.update(deltaTime);
    for(let i = 0; i < this.rings.length; i++){
      this.rings[i].position.x = Math.cos(deltaTime * this.rotationSpeed) * this.orbit;
      this.rings[i].position.z = Math.sin(deltaTime * this.rotationSpeed) * this.orbit;
    }
  } 
}