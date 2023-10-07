import * as THREE from 'three';

export default class CelestialObject {
  constructor(scene, texturePath, radius, id, rotationSpeed, orbit) {
    this.radius = radius;
    this.rotationAngle = 0;
    this.rotationSpeed = rotationSpeed;
    this.object = new THREE.Object3D();
    this.geometry = new THREE.SphereGeometry(this.radius, 32, 16);
    this.texture = new THREE.TextureLoader().load(texturePath);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.material = new THREE.MeshBasicMaterial({ map: this.texture });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.userData.id = id;
    this.orbit = orbit
    this.object.add(this.mesh);
    this.scene = scene;
    this.scene.add(this.object);
    this.scaleVector = new THREE.Vector3();

    if(id != 'sun'){
      
      var shape = new THREE.EllipseCurve(0, 0, orbit, orbit);
      // Obtém os pontos espaçados ao longo da forma
      var spacedPoints = shape.getSpacedPoints(128);
      // Cria uma geometria de buffer a partir dos pontos
      var geometry = new THREE.BufferGeometry().setFromPoints(spacedPoints);
      // Rotaciona a geometria em 90 graus no eixo X
      geometry.rotateX(THREE.MathUtils.degToRad(-90));
      // Cria um material básico de linha com a cor amarela
      var material = new THREE.LineBasicMaterial({color: "yellow"});
      // Cria uma linha com a geometria e o material
      var orbit = new THREE.Line(geometry, material);
      // Adiciona a linha à cena
      this.scene.add(orbit);
    }

  }
  
  update() {
    this.rotationAngle += this.rotationSpeed;
    this.object.rotation.y = this.rotationAngle;
  }

  translation() {
    let timestamp = Date.now() * 0.0001;
    this.mesh.position.x = Math.cos(timestamp * this.rotationSpeed) * this.orbit;
    this.mesh.position.z = Math.sin(timestamp * this.rotationSpeed) * this.orbit;
  }
}