import * as THREE from "./three.module.min.js";

const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})

const mesh = new THREE.Mesh(geometry, material)

const group = new THREE.Group()



// mesh.rotation.x = Math.PI * 0.25 //rotate the cube 45 degrees on the x axis
// mesh.rotation.y = Math.PI * 1.2 //rotate the cube 45 degrees on the y axis



//Mesh2
const geometry2 = new THREE.BoxGeometry(1,1,1)
const material2 = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
const mesh2 = new THREE.Mesh(geometry2, material2)

mesh2.position.x = 2 //move the second cube 2 units to the right


group.add(mesh, mesh2) //add both cubes to the group

group.position.y = 1 //move the group up

const helper = new THREE.AxesHelper(3) //create an axes helper with size 3
helper.position.x = 1 //move the helper up
scene.add(helper) //add the helper to the scene

scene.add(group) //add the group to the scene


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 5 //move the camera away from the cube
camera.position.x = 3 //move the camera to the right
camera.position.y = 1 //move the camera up

scene.add(camera)

const canvas = document.querySelector('.draw')//select the canvas element

const renderer = new THREE.WebGLRenderer({
    canvas
})//add WebGL to the canvas

renderer.setSize(sizes.width, sizes.height)//set the size of the renderer

renderer.render(scene, camera)//render the scene through the camera