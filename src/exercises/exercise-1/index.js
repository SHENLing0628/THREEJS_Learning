import React from 'react';
import './index.scss';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';

export default class Exercise1 extends React.Component {


	componentDidMount () {
		this.initScene();
	}

  initScene = () => {
  	let scene = new THREE.Scene(); // create scene

  	let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000); //create camera
  	camera.position.set(-30, 40, 30);
  	camera.lookAt(scene.position);

  	let renderer = new THREE.WebGLRenderer(); //create renderer
  	renderer.setClearColor(new THREE.Color(0xEEEEEE));//set renderer background color
  	renderer.setSize(window.innerWidth, window.innerHeight); //set renderer size
  	renderer.shadowMapEnabled = true; //render shadow

  	//add light
  	let spotLight = new THREE.SpotLight(0xffffff);
  	spotLight.position.set(-40, 60, -10);
  	spotLight.castShadow = true; //make the light can create shadow
  	scene.add(spotLight);

  	//add help axes
  	let axes = new THREE.AxesHelper(20);
  	scene.add(axes);
    
  	//添加鼠标控制效果
  	let orbitControls = new Orbitcontrols(camera);
  	orbitControls.autoRotate = true;
    
  	//create plane
  	let planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  	// let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  	let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
  	let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  	plane.receiveShadow = true; //receive shadow
  	plane.position.set(15, 0, 0);
  	plane.rotation.x = -0.5 * Math.PI;
  	scene.add(plane);
    
  	//create cube
  	let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  	// let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
  	let cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  	let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  	cube.castShadow = true; //create shadow
  	cube.position.set(-4, 3, 0);
  	scene.add(cube);

  	//create sphere
  	let sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  	// let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
  	let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
  	let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  	sphere.castShadow = true; //create shadow
  	sphere.position.set(20, 4, 2);
  	scene.add(sphere);
    


  	
  	document.getElementById('scene').appendChild(renderer.domElement);
  	renderer.render(scene, camera);
    
  }

  render () {
  	return (
  		<div id='scene'/>
  	);
  }
}
