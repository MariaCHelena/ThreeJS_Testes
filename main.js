import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

class BasicWorldDemo {
  constructor (){
      this._Initialize();
  }

  _Initialize() {
      this._threejs = new THREE.WebGLRenderer({
        antialias: true,
      });
      this._threejs.shadowMap.enabled = true;
      this._threejs.shadowMap.type = THREE.PCFSoftShadowMap;
      this._threejs.setPixelRatio(window.devicePixelRatio);
      this._threejs.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(this._threejs.domElement);

      const fov = 60;
      const aspect = 1920/1080;
      const near = 1.0;
      const far = 1000.0;
      this._camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this._camera.position.set(75, 20, 0);

      this._scene = new THREE.Scene();

      let light = new THREE.DirectionalLight(0xFFFFFF);
      light.position.set(20, 100, 10);
      light.target.position.set(0, 0, 0);
      light.castShadow = true;
      light.shadow.bias = -0.001;
      light.shadow.mapSize.width = 2048;
      light.shadow.mapSize.height = 2048;
      light.shadow.camera.near = 0.1;
      light.shadow.camera.far = 500.0;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 500.0;
      light.shadow.camera.left = 100;
      light.shadow.camera.right = -100;
      light.shadow.camera.top = 100;
      light.shadow.camera.bottom = -100;
      this._scene.add(light);

      light = new THREE.AmbientLight(0xFFFFFF);
      this._scene.add(light);

      const controls = new OrbitControls(
        this._camera, this._threejs.domElement);
      controls.target.set(0, 20, 0);
      controls.update();

      const loader = new THREE.CubeTextureLoader();
      const texture = loader.load([
          './resources/posx.jpg',
          './resources/negx.jpg',
          './resources/posy.jpg',
          './resources/negy.jpg',
          './resources/posz.jpg',
          './resources/negz.jpg',
      ]);
      this._scene.background = texture;

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 1, 10),
        new THREE.MeshStandardMaterial({
          color: 0xFFFFFF,
        }));
      plane.castShadow = false;
      plane.receiveShadow = true;
      plane.rotation.x = -Math.PI / 2;
      this._scene.add(plane);

      const loade = new GLTFLoader();

      this._RAF();
  }

  _LoadModel() {
    const loader = new GLTFLoader();
    loader.load('./scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });
      this._scene.add(glb.scene);
    })
  }

  _RAF() {
      requestAnimationFrame(() => {
          this._threejs.render(this._scene, this._camera);
          this._RAF();
      })
  }
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



window.addEventListener('DOMContentLoaded', () => {
  _APP = new BasicWorldDemo();
});
