import * as THREE from 'three';

const scene = new THREE.Scene();

//Takes arguments float FOV, float AspectRatio (best practice is to create the ratio using window height & width),
//float NearClippingField, float FarClippingField. (These last two determine how near/far objects have to be to 
//stop rendering. Reduce range to improve performance.)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2); //width and height are divided by 2 to reduce render size
document.getElementById("cubeTutorialDescription").appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 2 ); //Creates box geometry with float arguments for xScale, yScale, zScale
const material = new THREE.MeshBasicMaterial( { color: 0x4287f5 } ); //Creates a materials for the box with a flat colour
const cube = new THREE.Mesh( geometry, material ); //Combines the geometry and the material to make a proper mesh.
scene.add( cube ); //Addes the mesh the scene.

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );