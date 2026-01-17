// scanes, mesh, camera and render


import * as THREE from "./three.module.min.js"



console.log(THREE)

//scene
const scene = new THREE.Scene()

//mesh
const geometry = new THREE.BoxGeometry(1,1,1)
const material =  new THREE.MeshBasicMaterial({color: "blue", wireframe: true})

const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = -2

scene.add(mesh)


//camera


const size = {
    weight: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, size.weight/size.height)
camera.position.z = 3

scene.add(camera)


//render
const canvas = document.querySelector(".draw")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(size.weight, size.height)


function animate() {
    mesh.rotation.x += 0.02
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}

animate()