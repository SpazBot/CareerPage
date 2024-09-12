import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

//Takes arguments float FOV, float AspectRatio (best practice is to create the ratio using window height & width),
//float NearClippingField, float FarClippingField. (These last two determine how near/far objects have to be to 
//stop rendering. Reduce range to improve performance.)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2); //width and height are divided by 2 to reduce render size
document.getElementById("cabinDescription").appendChild( renderer.domElement );

const loader = new GLTFLoader();
loader.setSize( window.innerWidth/2, window.innerHeight/2);
loader.load( "../assets/Models/Cabin.glb", function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
document.getElementById("cabinDescription").appendChild(loader.domElement);

camera.position.z = 5;

/*
function animate() {
    loader.rotation.x += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
*/