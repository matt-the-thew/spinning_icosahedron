import * as THREE from 'three';

const aspectRatio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const icosahedronSize = 1; 
const icosahedronDetail = 5

const geometry = new THREE.IcosahedronGeometry( icosahedronSize, icosahedronDetail );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, 'wireframe': true} );
const icosahedron = new THREE.Mesh( geometry, material );
scene.add( icosahedron );

camera.position.z = 5;

function animate() {
    icosahedron.rotation.x += 0.01;
    icosahedron.rotation.y += 0.01;
    //icosahedron.rotation.z += 0.005;
    renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );