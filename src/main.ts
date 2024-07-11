import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(boxGeometry, material);
scene.add(cube);

// const latheGeometry = new THREE.LatheGeometry(
// 	[
// 		new THREE.Vector2(0, 1),
// 		new THREE.Vector2(0, 2),
// 		new THREE.Vector2(1, -1),
// 		new THREE.Vector2(1, -2),
// 		new THREE.Vector2(1, -3),
// 	],
// 	10,
// 	0, Math.PI * 2
// );
// const lathe = new THREE.Mesh(latheGeometry, material);
// scene.add(lathe);

camera.position.z = 5;

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(-1, -1, 1);
scene.add(directionalLight);

const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);