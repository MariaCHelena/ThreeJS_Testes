import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

//cena
const scene = new THREE.Scene();

//criando uma esfera
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: "#00FF83",
})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10)
scene.add(light);

//câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
camera.position.z = 15;
scene.add(camera);

//Renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
renderer.render(scene, camera)
