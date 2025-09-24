import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";

let camera, scene, renderer;

let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function Element(id, x, y, z, ry) {
  const div = document.createElement("div");
  div.style.width = "1050px";
  div.style.height = "70px";
  div.style.padding = "20px 6px 0px";
  div.style.overflow = "hidden";

  const node = document.querySelector(".b-2 .content-end .m-box .row-2");
  const clone = node.cloneNode(true);
  div.appendChild(clone);

  const object = new CSS3DObject(div);
  object.position.set(x, y, z);
  object.rotation.y = ry;

  return object;
}

init();
animate();

function init() {
  let container = document.querySelector(".b-2 .content-end .htmlcontent");

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(0, 0, 1300);

  scene = new THREE.Scene();

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const group = new THREE.Group();
  group.add(new Element("SJOz3qjfQXU", 0, 0, 80, 0));
  scene.add(group);

  window.addEventListener("resize", onWindowResize);
  document.addEventListener("mousemove", onDocumentMouseMove);

  onWindowResize();
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  if (window.innerWidth <= 1370) camera.position.z = 1800;
  if (window.innerWidth <= 1024) camera.position.z = 1850;
  if (window.innerWidth <= 1024 && window.innerWidth < window.innerHeight)
    camera.position.z = 2300;
  if (window.innerWidth <= 992) camera.position.z = 2700;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 0.3;
  mouseY = (event.clientY - windowHalfY) * 0.3;
}

function animate() {
  camera.position.x += (mouseX - camera.position.x) * 0.03;
  camera.position.y += (-mouseY - camera.position.y) * 0.03;
  camera.lookAt(scene.position);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
