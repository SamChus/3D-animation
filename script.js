//scene, mesh, group, axes helper, camera, renderer setup
import * as THREE from './three.module.min.js'

const scene = new THREE.Scene()


//mesh

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: "red", wireframe: true})

const mesh = new THREE.Mesh(geometry, material)


scene.add(mesh)


//camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

camera.position.z = 5
camera.position.x = 2

scene.add(camera)


//renderer

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.draw')
})

renderer.setSize(window.innerWidth, window.innerHeight)

const helper = new THREE.AxesHelper(2)



scene.add(helper)

const clock = new THREE.Clock()


//animation

const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    console.log(elapsedTime)
    mesh.rotation.y = elapsedTime * Math.PI * 2

    renderer.render(scene, camera)


    window.requestAnimationFrame(animate)
}

animate()