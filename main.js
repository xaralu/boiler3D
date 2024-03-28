import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from './addmeshes'
import { addLight } from './addLights'


const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({ antialias: true })
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
camera.position.set(0, 0, 5)
const meshes = {}

init()

function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
	// const geometry = new THREE.BoxGeometry(1, 1, 1)
	// const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
	// const mesh = new THREE.Mesh(geometry, material)
	// mesh.position.set(0, 0, -5)

	// meshes.default = mesh
	// console.log(meshes.default)
	// scene.add(meshes.default)

	//meshes
	meshes.default = addBoilerPlateMesh()
	meshes.standard = addStandardMesh()

	//lights
	meshes.defaultLight = addLight()

	//scene operations
	scene.add(meshes.default)
	scene.add(meshes.standard)
	scene.add(meshes.defaultLight)


	resize()
	animate()	

}

function resize () {
	window.addEventListener('resize', ()=> {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth/ window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
	//meshes.default.position.x += 0.01
	meshes.default.rotation.y += 0.01
	meshes.default.scale.y += 0.01
	meshes.standard.rotation.x += 0.01
	meshes.standard.scale.x += 0.01

	renderer.render(scene, camera)
}
