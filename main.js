import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';

const canva = document.querySelector('.webgl')

const sizes = {
  width: canva.width,
  height: canva.height
}

const scene = new THREE.Scene();
scene.background
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
scene.add(camera);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.intensity = 6
scene.add( light );

const renderer = new THREE.WebGLRenderer({canvas: canva, alpha: true});
renderer.setSize(sizes.width, sizes.height);
const loader = new FBXLoader();

loader.load(
    './toon-cat-free/source/cat.fbx',
    (fbx) => {
        console.log(fbx)
        fbx.scale.multiplyScalar(0.002);
        scene.add(fbx)

        const mixer = new THREE.AnimationMixer(fbx);
        const animations = fbx.animations;
        const animationActions = {};

        animations.forEach((animation) => {
            const action = mixer.clipAction(animation);
            animationActions[animation.name] = action;
        });

        const currentAnimation = animations[0];
        const currentAction = animationActions[currentAnimation.name];
        currentAction.reset().play();

        function animate(){
            requestAnimationFrame(animate);
            const delta = 0.01;
            mixer.update(delta);
            renderer.render(scene, camera);
        }
        animate();
    }
);



