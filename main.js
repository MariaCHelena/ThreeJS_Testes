import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

const loader = new GLTFLoader();

loader.load( '/kirara.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    root.scale.set(45, 45, 45)

    scene.add(root)

}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log(error)
})

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5)
scene.add(light);

camera.position.z = 10;
camera.position.x = 0;
camera.position.y = 5;



function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
