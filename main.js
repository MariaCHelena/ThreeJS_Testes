import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';

const canva = document.querySelector('.webgl')

const sizes = {
  width: canva.width,
  height: canva.height
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xadd8e6);
/*
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: "#00FF83",
})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
*/


const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height);
camera.position.z = 2;
camera.position.y = -0.25;
scene.add(camera);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.intensity = 8
scene.add( light );

const renderer = new THREE.WebGLRenderer({canvas: canva, alpha: true});
renderer.setSize(sizes.width, sizes.height);
const loader = new GLTFLoader();

loader.load(
    './shiba.glb',
    (glb) => {
        console.log(glb)
        const root = glb.scene;

        scene.add(root)
    }
);

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
