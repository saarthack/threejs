import * as THREE from 'three';


const canvas = document.querySelector('canvas')

const aspect = {
  width :window.innerWidth,
  height:window.innerHeight
}

// Scene 
const scene  = new THREE.Scene()

// Mesh
const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color:'royalblue'})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// creating a camera 

const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height)

camera.position.z = 3

// camera.position.x = 1
// camera.position.y = 1

scene.add(camera)



// renderer

const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(aspect.width,aspect.height)


const clock = new THREE.Clock()

function animate(){

  const elapsedTime = clock.getElapsedTime()

  mesh.rotation.y  =  elapsedTime * Math.PI

  renderer.render(scene,camera)  

  window.requestAnimationFrame(animate)
}

animate()