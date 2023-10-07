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
    this.scaleVector = new THREE.Vector3();

    if(orbit){
      var shape = new THREE.EllipseCurve(0, 0, orbit, orbit);
      // Obtém os pontos espaçados ao longo da forma
      var spacedPoints = shape.getSpacedPoints(128);
      // Cria uma geometria de buffer a partir dos pontos
      var geometry = new THREE.BufferGeometry().setFromPoints(spacedPoints);
      // Rotaciona a geometria em 90 graus no eixo X
      geometry.rotateX(THREE.MathUtils.degToRad(-90));
      // Cria um material básico de linha com a cor cinza
      var material = new THREE.LineBasicMaterial({color: "gray"});
      // Cria uma linha com a geometria e o material
      var orbit = new THREE.Line(geometry, material);
      // Adiciona a linha à cena
      this.scene.add(orbit);
    }

  }
  
  update(deltaTime) {
    this.rotationAngle += this.rotationSpeed * deltaTime;
    this.object.rotation.y = this.rotationAngle;
    this.translation(deltaTime);
  }

  translation(deltaTime) {
    this.mesh.position.x = Math.cos(deltaTime * this.rotationSpeed) * this.orbit;
    this.mesh.position.z = Math.sin(deltaTime * this.rotationSpeed) * this.orbit;
  }
}