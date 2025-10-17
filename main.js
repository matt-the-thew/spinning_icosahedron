import * as THREE from 'three';

import { GUI } from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );
const aspectRatio = window.innerWidth / window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const icosahedronParams= {
    icosahedronSize: 1,
    icosahedronDetail: 5,
    icosahedronRotationSpeedX: 0.01,
    icosahedronRotationSpeedY: 0.01,
    icosahedronRotationSpeedZ: 0,
    icosahedronColor: 0x00ff00
};


const geometry = new THREE.IcosahedronGeometry( icosahedronParams.icosahedronSize, icosahedronParams.icosahedronDetail );
const material = new THREE.MeshBasicMaterial( {color: icosahedronParams.icosahedronColor, 'wireframe': true} );
const icosahedron = new THREE.Mesh( geometry, material );
scene.add( icosahedron );

camera.position.z = 5;

const gui = new GUI( { container: document.getElementById( 'ui-container' ) } );

gui.title('Icosahedron Controls');
gui.add( icosahedronParams, 'icosahedronSize', 0.1, 8, 0.1 );
gui.add( icosahedronParams, 'icosahedronDetail', 0, 15, 1);
gui.add( icosahedronParams, 'icosahedronRotationSpeedX', 0, 0.1, 0.005 );
gui.add( icosahedronParams, 'icosahedronRotationSpeedY', 0, 0.1, 0.005 );
gui.add( icosahedronParams, 'icosahedronRotationSpeedZ', 0, 0.1, 0.005 );
gui.addColor( icosahedronParams, 'icosahedronColor' );

function animate() {
    icosahedron.rotation.x += icosahedronParams.icosahedrdsoiaswkonRotationSpeedX;
    icosahedron.rotation.y += icosahedronParams.icosahedronRotationSpeedY;
    icosahedron.rotation.z += icosahedronParams.icosahedronRotationSpeedZ;
    renderer.render( scene, camera );
    gui.onChange( function() {
        icosahedron.geometry.dispose();
        icosahedron.geometry = new THREE.IcosahedronGeometry( icosahedronParams.icosahedronSize, icosahedronParams.icosahedronDetail );
        icosahedron.material.color.set( icosahedronParams.icosahedronColor );
    } );
}

renderer.setAnimationLoop( animate );