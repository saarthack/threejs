import * as THREE from './three.module.min';  


const scene =new THREE.Scene()


// This is for creating a mesh 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// this is for creating a camera 
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // near value is 1, and far value is 2000
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);


// this is for creating a Renderer

const canvas = document.querySelector('canvas'); //select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size
renderer.render(scene, camera); //display what the camera in the scene captured