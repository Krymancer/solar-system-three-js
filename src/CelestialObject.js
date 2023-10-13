import * as THREE from 'three';

export default class CelestialObject {
  constructor(scene, texturePath, radius, id, rotationSpeed, orbit, selfRotationSpeed) {
    this.radius = radius;
    this.rotationAngle = 0;
    this.rotationSpeed = rotationSpeed;
    // Adicionado a velocidade de rotação em radianos
    this.selfRotationSpeed = 2 * Math.PI * selfRotationSpeed;
    this.object = new THREE.Object3D();
    this.geometry = new THREE.SphereGeometry(this.radius, 32, 16);
    this.texture = new THREE.TextureLoader().load(texturePath);
    this.texture.colorSpace = THREE.SRGBColorSpace;

    if(id=='sun'){
      this.material = new THREE.MeshBasicMaterial({map: this.texture})
    }
    else {
      this.material = new THREE.MeshStandardMaterial({map: this.texture});
    }

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.userData.id = id;
    this.orbit = orbit
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
    //Nova linha para translação
    this.mesh.rotation.y += this.selfRotationSpeed * deltaTime;
    this.translation(deltaTime);
  }

  translation(deltaTime) {
    this.mesh.position.x = Math.cos(deltaTime * this.rotationSpeed) * this.orbit;
    this.mesh.position.z = Math.sin(deltaTime * this.rotationSpeed) * this.orbit;
  }
}