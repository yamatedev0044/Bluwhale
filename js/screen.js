import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

let container;
let material, mesh;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

var raycaster, mouse;

var poz = 1300;
var start = 0;

function screen(x) {
  if (document.querySelector(".b-" + x + " .content-end")) {
    if (window.innerWidth > 767) {
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();
      if (!window["renderer" + x]) {
        container = document.querySelector(".b-" + x + " .content-end");
        window["camera" + x] = new THREE.PerspectiveCamera(
          40,
          window.innerWidth / window.innerHeight,
          1,
          10000
        );
        window["camera" + x].position.z = poz;
        window["scene" + x] = new THREE.Scene();
        var light = new THREE.AmbientLight(0xffffff);
        window["scene" + x].add(light);
        window["renderer" + x] = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        window["renderer" + x].setPixelRatio(window.devicePixelRatio);
        window["renderer" + x].setSize(
          window.innerWidth * 0.9,
          window.innerHeight * 0.9
        );
        window["renderer" + x].setAnimationLoop(function () {
          if (start == x) {
            window["camera" + x].lookAt(window["scene" + x].position);
            window["renderer" + x].clear();
            window["composer" + x].render();
            window["camera" + x].position.x +=
              (mouseX - window["camera" + x].position.x) * 0.05;
            window["camera" + x].position.y +=
              (-mouseY - window["camera" + x].position.y) * 0.05;
            if (start == 2) {
              if (mesh_2_0_4_1) animobj(mesh_2_0_4_1, 1);
              if (mesh_2_0_4_2) animobj(mesh_2_0_4_2, 0.8);
              if (mesh_2_0_4_3) animobj(mesh_2_0_4_3, 0.6);
              if (mesh_2_0_4_4) animobj(mesh_2_0_4_4, 0.4);
              if (mesh_2_0_4_5) animobj(mesh_2_0_4_5, 0.2);
            }
            if (start == 3) {
              if (mesh_3_3_1w1) animobj(mesh_3_3_1w1, 1);
              if (mesh_3_3_1w2) animobj(mesh_3_3_1w2, 0.8);
              if (mesh_3_3_1w3) animobj(mesh_3_3_1w3, 0.6);
              if (mesh_3_3_1w4) animobj(mesh_3_3_1w4, 0.4);
              if (mesh_3_3_1w5) animobj(mesh_3_3_1w5, 0.2);
              if (mesh_3_3_2w1) animobj(mesh_3_3_2w1, 1);
              if (mesh_3_3_2w2) animobj(mesh_3_3_2w2, 0.8);
              if (mesh_3_3_2w3) animobj(mesh_3_3_2w3, 0.6);
              if (mesh_3_3_2w4) animobj(mesh_3_3_2w4, 0.4);
              if (mesh_3_3_2w5) animobj(mesh_3_3_2w5, 0.2);
              if (mesh_3_3_3w1) animobj(mesh_3_3_3w1, 1);
              if (mesh_3_3_3w2) animobj(mesh_3_3_3w2, 0.8);
              if (mesh_3_3_3w3) animobj(mesh_3_3_3w3, 0.6);
              if (mesh_3_3_3w4) animobj(mesh_3_3_3w4, 0.4);
              if (mesh_3_3_3w5) animobj(mesh_3_3_3w5, 0.2);
              if (mesh_3_3_4w1) animobj(mesh_3_3_4w1, 1);
              if (mesh_3_3_4w2) animobj(mesh_3_3_4w2, 0.8);
              if (mesh_3_3_4w3) animobj(mesh_3_3_4w3, 0.6);
              if (mesh_3_3_4w4) animobj(mesh_3_3_4w4, 0.4);
              if (mesh_3_3_4w5) animobj(mesh_3_3_4w5, 0.2);
            }
            if (start == 4) {
              if (mesh_4_3_1w1) animobj(mesh_4_3_1w1, 1);
              if (mesh_4_3_1w2) animobj(mesh_4_3_1w2, 0.8);
              if (mesh_4_3_1w3) animobj(mesh_4_3_1w3, 0.6);
              if (mesh_4_3_1w4) animobj(mesh_4_3_1w4, 0.4);
              if (mesh_4_3_1w5) animobj(mesh_4_3_1w5, 0.2);
              if (mesh_4_3_2w1) animobj(mesh_4_3_2w1, 1);
              if (mesh_4_3_2w2) animobj(mesh_4_3_2w2, 0.8);
              if (mesh_4_3_2w3) animobj(mesh_4_3_2w3, 0.6);
              if (mesh_4_3_2w4) animobj(mesh_4_3_2w4, 0.4);
              if (mesh_4_3_2w5) animobj(mesh_4_3_2w5, 0.2);
              if (mesh_4_3_3w1) animobj(mesh_4_3_3w1, 1);
              if (mesh_4_3_3w2) animobj(mesh_4_3_3w2, 0.8);
              if (mesh_4_3_3w3) animobj(mesh_4_3_3w3, 0.6);
              if (mesh_4_3_3w4) animobj(mesh_4_3_3w4, 0.4);
              if (mesh_4_3_3w5) animobj(mesh_4_3_3w5, 0.2);
            }
          }
        });
        if (x === 2) {
          container.appendChild(window["renderer" + x].domElement);
          //const texture = new THREE.TextureLoader().load('../img/windows/bg.svg' );
          const texture = new THREE.TextureLoader().load(
            "../img/windows/bg-consumer_d.svg"
          );
          texture.format = THREE.RGBAFormat;
          const geometry = new THREE.BoxGeometry(1100, 680, 100);
          const parameters = {
            color: 0xffffff,
            map: texture,
            transparent: true,
          };
          material = new THREE.MeshBasicMaterial(parameters);
          mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(0, 0, 0);
          window["scene" + x].add(mesh);
        }
        if (x === 3) {
          container.appendChild(window["renderer" + x].domElement);
          const texture = new THREE.TextureLoader().load(
            "../img/windows/bg-enterprise_d.svg"
          );
          texture.format = THREE.RGBAFormat;
          const geometry = new THREE.BoxGeometry(1100, 680, 100);
          const parameters = {
            color: 0xffffff,
            map: texture,
            transparent: true,
          };
          material = new THREE.MeshBasicMaterial(parameters);
          mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(0, 0, 0);
          window["scene" + x].add(mesh);
        }
        if (x === 4) {
          container.appendChild(window["renderer" + x].domElement);
          const texture = new THREE.TextureLoader().load(
            "../img/windows/bg-marketplace_d.svg"
          );
          texture.format = THREE.RGBAFormat;
          const geometry = new THREE.BoxGeometry(1100, 680, 100);
          const parameters = {
            color: 0xffffff,
            map: texture,
            transparent: true,
          };
          material = new THREE.MeshBasicMaterial(parameters);
          mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(0, 0, 0);
          window["scene" + x].add(mesh);
        }
      }

      if (x == 2) {
        // ROW 0
        if (document.querySelector(".b-" + x + " .row-0 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-0 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_0_1 = new THREE.Mesh(
            new THREE.BoxGeometry(280, 80, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_1.position.set(580, -85, 100);
          window["scene" + x].add(mesh_2_0_1);
          texture1 = null;
          parameters1 = null;
          mesh_2_0_1 = null;
        }
        if (document.querySelector(".b-" + x + " .row-0 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-0 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_0_2 = new THREE.Mesh(
            new THREE.BoxGeometry(280, 90, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_2.position.set(-600, -185, 120);
          window["scene" + x].add(mesh_2_0_2);
        }
        if (document.querySelector(".b-" + x + " .row-0 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-0 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_0_3 = new THREE.Mesh(
            new THREE.BoxGeometry(280, 90, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_3.position.set(100, -310, 160);
          window["scene" + x].add(mesh_2_0_3);
        }
        if (document.querySelector(".b-" + x + " .row-0 .item-5 img")) {
          // Item 4
          var img1 = document.querySelector(
            ".b-" + x + " .row-0 .item-5 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_0_4 = new THREE.Mesh(
            new THREE.BoxGeometry(90, 90, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_4.position.set(100, 310, 180);
          window["scene" + x].add(mesh_2_0_4);
        }
        if (document.querySelector(".b-" + x + " .row-0 .item-6 img")) {
          // Item 4 w1
          var img1 = document.querySelector(
            ".b-" + x + " .row-0 .item-6 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0x7d5ba8,
            map: texture1,
            transparent: true,
          };
          var mesh_2_0_4_1 = new THREE.Mesh(
            new THREE.BoxGeometry(90, 90, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_4_1.material.opacity = 1;
          mesh_2_0_4_1.position.set(100, 310, 178);
          window["scene" + x].add(mesh_2_0_4_1);

          // Item 4 w2
          var mesh_2_0_4_2 = new THREE.Mesh(
            new THREE.BoxGeometry(100, 100, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_4_2.material.opacity = 0.8;
          mesh_2_0_4_2.position.set(100, 310, 176);
          window["scene" + x].add(mesh_2_0_4_2);

          // Item 4 w3
          var mesh_2_0_4_3 = new THREE.Mesh(
            new THREE.BoxGeometry(110, 110, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_4_3.material.opacity = 0.6;
          mesh_2_0_4_3.position.set(100, 310, 174);
          window["scene" + x].add(mesh_2_0_4_3);

          // Item 4 w4
          var mesh_2_0_4_4 = new THREE.Mesh(
            new THREE.BoxGeometry(120, 120, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_4_4.material.opacity = 0.4;
          mesh_2_0_4_4.position.set(100, 310, 172);
          window["scene" + x].add(mesh_2_0_4_4);

          // Item 4 w5
          var mesh_2_0_4_5 = new THREE.Mesh(
            new THREE.BoxGeometry(130, 130, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_0_4_5.material.opacity = 0.2;
          mesh_2_0_4_5.position.set(100, 310, 170);
          window["scene" + x].add(mesh_2_0_4_5);
        }
        // ROW 1
        if (document.querySelector(".b-" + x + " .row-1 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_1_1 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 257, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_1_1.position.set(-350, 160, 80);
          window["scene" + x].add(mesh_2_1_1);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_1_2 = new THREE.Mesh(
            new THREE.BoxGeometry(331, 237, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_1_2.position.set(0, 150, 100);
          window["scene" + x].add(mesh_2_1_2);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2 video")) {
          // Item 2-video
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2 video"
          );
          var texture1 = new THREE.VideoTexture(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            alphaMap: texture1,
            transparent: false,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_1_2_v = new THREE.Mesh(
            new THREE.BoxGeometry(297, 137, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_1_2_v.position.set(0, 115, 101);
          window["scene" + x].add(mesh_2_1_2_v);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_1_3 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 260, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_1_3.position.set(350, 155, 80);
          window["scene" + x].add(mesh_2_1_3);
        }
        // ROW 2
        /*
        if(document.querySelector(".b-"+x+" .row-2 .item-1 img")){
            // Item 1
            var img1 = document.querySelector(".b-"+x+" .row-2 .item-1 img").src;
            var texture1 = new THREE.TextureLoader().load(img1);
            texture1.format = THREE.RGBAFormat;
            var parameters1 = { color: 0xffffff,map: texture1, transparent: true, lightMap: texture1, lightMapIntensity: 4};
            var mesh_2_2_1 = new THREE.Mesh( new THREE.BoxGeometry( 198, 58,0.1), new THREE.MeshBasicMaterial( parameters1) );
            mesh_2_2_1.position.set(-425, -10, 80);
            window['scene' + x].add( mesh_2_2_1 );
        }
        */
        /*
        if(document.querySelector(".b-"+x+" .row-2 .item-1 img")){
            // Item 1
            var img1 = document.querySelector(".b-"+x+" .row-2 .item-1 img").src;
            var texture1 = new THREE.TextureLoader().load(img1);
            texture1.format = THREE.RGBAFormat;
            var parameters1 = { color: 0xffffff,map: texture1, transparent: true, lightMap: texture1, lightMapIntensity: 4};
            var mesh_2_2_1 = new THREE.Mesh( new THREE.BoxGeometry( 198, 58,0.1), new THREE.MeshBasicMaterial( parameters1) );
            mesh_2_2_1.position.set(-425, -10, 80);
            window['scene' + x].add( mesh_2_2_1 );
        }
        if(document.querySelector(".b-"+x+" .row-2 .item-2 img")){
            // Item 2
            var img1 = document.querySelector(".b-"+x+" .row-2 .item-2 img").src;
            var texture1 = new THREE.TextureLoader().load(img1);
            texture1.format = THREE.RGBAFormat;
            var parameters1 = { color: 0xffffff,map: texture1, transparent: true, lightMap: texture1, lightMapIntensity: 4};
            var mesh_2_2_2 = new THREE.Mesh( new THREE.BoxGeometry( 198, 58,0.1), new THREE.MeshBasicMaterial( parameters1) );
            mesh_2_2_2.position.set(-210, -10, 100);
            window['scene' + x].add( mesh_2_2_2 );
        }
        if(document.querySelector(".b-"+x+" .row-2 .item-3 img")){
            // Item 3
            var img1 = document.querySelector(".b-"+x+" .row-2 .item-3 img").src;
            var texture1 = new THREE.TextureLoader().load(img1);
            texture1.format = THREE.RGBAFormat;
            var parameters1 = { color: 0xffffff,map: texture1, transparent: true, lightMap: texture1, lightMapIntensity: 4};
            var mesh_2_2_3 = new THREE.Mesh( new THREE.BoxGeometry( 198, 58,0.1), new THREE.MeshBasicMaterial( parameters1) );
            mesh_2_2_3.position.set(0, -10, 80);
            window['scene' + x].add( mesh_2_2_3 );
        }
        if(document.querySelector(".b-"+x+" .row-2 .item-4 img")){
            // Item 4
            var img1 = document.querySelector(".b-"+x+" .row-2 .item-4 img").src;
            var texture1 = new THREE.TextureLoader().load(img1);
            texture1.format = THREE.RGBAFormat;
            var parameters1 = { color: 0xffffff,map: texture1, transparent: true, lightMap: texture1, lightMapIntensity: 4};
            var mesh_2_2_4 = new THREE.Mesh( new THREE.BoxGeometry( 198, 58,0.1), new THREE.MeshBasicMaterial( parameters1) );
            mesh_2_2_4.position.set(205, -10, 100);
            window['scene' + x].add( mesh_2_2_4 );
        }
        if(document.querySelector(".b-"+x+" .row-2 .item-5 img")){
            // Item 5
           var img1 = document.querySelector(".b-"+x+" .row-2 .item-5 img").src;
            var texture1 = new THREE.TextureLoader().load(img1);
            texture1.format = THREE.RGBAFormat;
            var parameters1 = { color: 0xffffff,map: texture1, transparent: true, lightMap: texture1, lightMapIntensity: 4};
            var mesh_2_2_5 = new THREE.Mesh( new THREE.BoxGeometry( 198, 58,0.1), new THREE.MeshBasicMaterial( parameters1) );
            mesh_2_2_5.position.set(420, -10, 80);
            window['scene' + x].add( mesh_2_2_5 );
        }
        */
        // ROW 3
        if (document.querySelector(".b-" + x + " .row-3 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_3_1 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 277, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_3_1.position.set(-350, -185, 75);
          window["scene" + x].add(mesh_2_3_1);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-1 video")) {
          // Item 2-video
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-1 video"
          );
          var texture1 = new THREE.VideoTexture(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_3_1_v = new THREE.Mesh(
            new THREE.BoxGeometry(297, 137, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_3_1_v.position.set(-330, -220, 81);
          window["scene" + x].add(mesh_2_3_1_v);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_3_2 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 270, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_3_2.position.set(0, -185, 70);
          window["scene" + x].add(mesh_2_3_2);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_2_3_3 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 270, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_2_3_3.position.set(330, -185, 70);
          window["scene" + x].add(mesh_2_3_3);
        }
      }
      if (x == 3) {
        // ROW 1
        if (document.querySelector(".b-" + x + " .row-1 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_1_1 = new THREE.Mesh(
            new THREE.BoxGeometry(351, 278, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_1.position.set(-345, 150, 70);
          window["scene" + x].add(mesh_3_1_1);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 10,
          };
          var mesh_3_1_2 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 229, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_2.position.set(20, 140, 80);
          window["scene" + x].add(mesh_3_1_2);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2 video.v1")) {
          // Item 2-video
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2 video.v1"
          );
          var texture1 = new THREE.VideoTexture(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0x7d5ba8,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 20,
          };
          var mesh_3_1_2_1v = new THREE.Mesh(
            new THREE.BoxGeometry(137, 137, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_2_1v.position.set(-80, 100, 82);
          window["scene" + x].add(mesh_3_1_2_1v);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2-bg")) {
          // Item 2-bg 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2-bg img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 6,
          };
          var mesh_3_1_2_1vbg = new THREE.Mesh(
            new THREE.BoxGeometry(137, 137, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_2_1vbg.position.set(-80, 100, 82);
          window["scene" + x].add(mesh_3_1_2_1vbg);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2 video.v2")) {
          // Item 2-video
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2 video.v2"
          );
          var texture1 = new THREE.VideoTexture(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0x7d5ba8,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 20,
          };
          var mesh_3_1_2_2v = new THREE.Mesh(
            new THREE.BoxGeometry(137, 137, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_2_2v.position.set(110, 100, 82);
          window["scene" + x].add(mesh_3_1_2_2v);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2-bg")) {
          // Item 2-bg 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2-bg img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 6,
          };
          var mesh_3_1_2_2vbg = new THREE.Mesh(
            new THREE.BoxGeometry(137, 137, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_2_2vbg.position.set(110, 100, 82);
          window["scene" + x].add(mesh_3_1_2_2vbg);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_1_3 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 278, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_1_3.position.set(360, 150, 80);
          window["scene" + x].add(mesh_3_1_3);
        }
        // ROW 2
        if (document.querySelector(".b-" + x + " .row-2 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-2 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_2_1 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 348, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_2_1.position.set(-345, -150, 100);
          window["scene" + x].add(mesh_3_2_1);
        }
        if (document.querySelector(".b-" + x + " .row-2 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-2 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_2_2 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 316, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_2_2.position.set(20, -150, 80);
          window["scene" + x].add(mesh_3_2_2);
        }
        if (document.querySelector(".b-" + x + " .row-2 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-2 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_2_3 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 316, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_2_3.position.set(360, -150, 80);
          window["scene" + x].add(mesh_3_2_3);
        }
        // ROW 3
        if (document.querySelector(".b-" + x + " .row-3 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_3_1 = new THREE.Mesh(
            new THREE.BoxGeometry(280, 280, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_1.position.set(-550, -285, 150);
          window["scene" + x].add(mesh_3_3_1);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-1-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-1-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_3_3_1w1 = new THREE.Mesh(
            new THREE.BoxGeometry(280, 280, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_1w1.position.set(-550, -285, 149);
          window["scene" + x].add(mesh_3_3_1w1);
          // W2
          var mesh_3_3_1w2 = new THREE.Mesh(
            new THREE.BoxGeometry(290, 290, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_1w2.position.set(-550, -285, 148);
          mesh_3_3_1w2.material.opacity = 0.8;
          window["scene" + x].add(mesh_3_3_1w2);
          // W3
          var mesh_3_3_1w3 = new THREE.Mesh(
            new THREE.BoxGeometry(300, 300, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_1w3.position.set(-550, -285, 147);
          mesh_3_3_1w3.material.opacity = 0.6;
          window["scene" + x].add(mesh_3_3_1w3);
          // W4
          var mesh_3_3_1w4 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 310, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_1w4.position.set(-550, -285, 146);
          mesh_3_3_1w4.material.opacity = 0.4;
          window["scene" + x].add(mesh_3_3_1w4);
          // W5
          var mesh_3_3_1w5 = new THREE.Mesh(
            new THREE.BoxGeometry(320, 320, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_1w5.position.set(-550, -285, 145);
          mesh_3_3_1w5.material.opacity = 0.2;
          window["scene" + x].add(mesh_3_3_1w5);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_3_2 = new THREE.Mesh(
            new THREE.BoxGeometry(222, 222, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_2.position.set(590, 255, 137);
          window["scene" + x].add(mesh_3_3_2);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-2-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-2-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_3_3_2w1 = new THREE.Mesh(
            new THREE.BoxGeometry(220, 220, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_2w1.position.set(590, 255, 136);
          window["scene" + x].add(mesh_3_3_2w1);
          // W2
          var mesh_3_3_2w2 = new THREE.Mesh(
            new THREE.BoxGeometry(230, 230, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_2w2.position.set(590, 255, 135);
          window["scene" + x].add(mesh_3_3_2w2);
          // W3
          var mesh_3_3_2w3 = new THREE.Mesh(
            new THREE.BoxGeometry(240, 240, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_2w3.position.set(590, 255, 134);
          window["scene" + x].add(mesh_3_3_2w3);
          // W4
          var mesh_3_3_2w4 = new THREE.Mesh(
            new THREE.BoxGeometry(250, 250, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_2w4.position.set(590, 255, 133);
          window["scene" + x].add(mesh_3_3_2w4);
          // W5
          var mesh_3_3_2w5 = new THREE.Mesh(
            new THREE.BoxGeometry(260, 260, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_2w5.position.set(590, 255, 132);
          window["scene" + x].add(mesh_3_3_2w5);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_3_3 = new THREE.Mesh(
            new THREE.BoxGeometry(158, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_3.position.set(590, -85, 140);
          window["scene" + x].add(mesh_3_3_3);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-3-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-3-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_3_3_3w1 = new THREE.Mesh(
            new THREE.BoxGeometry(158, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_3w1.position.set(590, -85, 136);
          window["scene" + x].add(mesh_3_3_3w1);
          // W2
          var mesh_3_3_3w2 = new THREE.Mesh(
            new THREE.BoxGeometry(168, 168, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_3w2.position.set(590, -85, 135);
          window["scene" + x].add(mesh_3_3_3w2);
          // W3
          var mesh_3_3_3w3 = new THREE.Mesh(
            new THREE.BoxGeometry(178, 178, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_3w3.position.set(590, -85, 134);
          window["scene" + x].add(mesh_3_3_3w3);
          // W4
          var mesh_3_3_3w4 = new THREE.Mesh(
            new THREE.BoxGeometry(188, 188, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_3w4.position.set(590, -85, 133);
          window["scene" + x].add(mesh_3_3_3w4);
          // W5
          var mesh_3_3_3w5 = new THREE.Mesh(
            new THREE.BoxGeometry(198, 198, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_3w5.position.set(590, -85, 132);
          window["scene" + x].add(mesh_3_3_3w5);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-4 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-4 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_3_3_4 = new THREE.Mesh(
            new THREE.BoxGeometry(98, 98, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_4.position.set(210, -350, 140);
          window["scene" + x].add(mesh_3_3_4);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-4-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-4-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_3_3_4w1 = new THREE.Mesh(
            new THREE.BoxGeometry(98, 98, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_4w1.position.set(210, -350, 136);
          window["scene" + x].add(mesh_3_3_4w1);
          // W2
          var mesh_3_3_4w2 = new THREE.Mesh(
            new THREE.BoxGeometry(108, 108, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_4w2.position.set(210, -350, 135);
          window["scene" + x].add(mesh_3_3_4w2);
          // W3
          var mesh_3_3_4w3 = new THREE.Mesh(
            new THREE.BoxGeometry(118, 118, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_4w3.position.set(210, -350, 134);
          window["scene" + x].add(mesh_3_3_4w3);
          // W4
          var mesh_3_3_4w4 = new THREE.Mesh(
            new THREE.BoxGeometry(128, 128, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_4w4.position.set(210, -350, 133);
          window["scene" + x].add(mesh_3_3_4w4);
          // W5
          var mesh_3_3_4w5 = new THREE.Mesh(
            new THREE.BoxGeometry(138, 138, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_3_3_4w5.position.set(210, -350, 132);
          window["scene" + x].add(mesh_3_3_4w5);
        }
      }
      if (x == 4) {
        // ROW 1
        if (document.querySelector(".b-" + x + " .row-1 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_1_1 = new THREE.Mesh(
            new THREE.BoxGeometry(351, 278, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_1_1.position.set(-340, 150, 70);
          window["scene" + x].add(mesh_4_1_1);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-1 video")) {
          // Item 3-video
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-1 video"
          );
          var texture1 = new THREE.VideoTexture(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
          };
          var mesh_4_1_1v = new THREE.Mesh(
            new THREE.BoxGeometry(386, 224, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_1_1v.position.set(-270, 110, 90);
          window["scene" + x].add(mesh_4_1_1v);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_1_2 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 276, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_1_2.position.set(10, 150, 100);
          window["scene" + x].add(mesh_4_1_2);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_1_3 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 606, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_1_3.position.set(360, -20, 60);
          window["scene" + x].add(mesh_4_1_3);
        }
        if (document.querySelector(".b-" + x + " .row-1 .item-3 video")) {
          // Item 3-video
          var img1 = document.querySelector(
            ".b-" + x + " .row-1 .item-3 video"
          );
          var texture1 = new THREE.VideoTexture(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            alphaMap: texture1,
            transparent: true,
          };
          var mesh_4_1_3v = new THREE.Mesh(
            new THREE.BoxGeometry(510, 270, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_1_3v.position.set(360, -60, 80);
          window["scene" + x].add(mesh_4_1_3v);
        }
        // ROW 2
        if (document.querySelector(".b-" + x + " .row-2 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-2 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_2_1 = new THREE.Mesh(
            new THREE.BoxGeometry(350, 348, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_2_1.position.set(-340, -150, 100);
          window["scene" + x].add(mesh_4_2_1);
        }
        if (document.querySelector(".b-" + x + " .row-2 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-2 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_2_2 = new THREE.Mesh(
            new THREE.BoxGeometry(310, 316, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_2_2.position.set(10, -150, 100);
          window["scene" + x].add(mesh_4_2_2);
        }
        // ROW 3
        if (document.querySelector(".b-" + x + " .row-3 .item-1 img")) {
          // Item 1
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-1 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_3_1 = new THREE.Mesh(
            new THREE.BoxGeometry(180, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_1.position.set(-590, 200, 130);
          window["scene" + x].add(mesh_4_3_1);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-1-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-1-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_4_3_1w1 = new THREE.Mesh(
            new THREE.BoxGeometry(180, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_1w1.position.set(-590, 200, 128);
          window["scene" + x].add(mesh_4_3_1w1);
          // W2
          var mesh_4_3_1w2 = new THREE.Mesh(
            new THREE.BoxGeometry(190, 168, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_1w2.position.set(-590, 200, 126);
          window["scene" + x].add(mesh_4_3_1w2);
          // W3
          var mesh_4_3_1w3 = new THREE.Mesh(
            new THREE.BoxGeometry(200, 178, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_1w3.position.set(-590, 200, 124);
          window["scene" + x].add(mesh_4_3_1w3);
          // W4
          var mesh_4_3_1w4 = new THREE.Mesh(
            new THREE.BoxGeometry(210, 188, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_1w4.position.set(-590, 200, 122);
          window["scene" + x].add(mesh_4_3_1w4);
          // W5
          var mesh_4_3_1w5 = new THREE.Mesh(
            new THREE.BoxGeometry(220, 198, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_1w5.position.set(-590, 200, 120);
          window["scene" + x].add(mesh_4_3_1w5);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-2 img")) {
          // Item 2
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-2 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_3_2 = new THREE.Mesh(
            new THREE.BoxGeometry(180, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_2.position.set(-550, -290, 150);
          window["scene" + x].add(mesh_4_3_2);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-2-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-2-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_4_3_2w1 = new THREE.Mesh(
            new THREE.BoxGeometry(180, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_2w1.position.set(-550, -290, 148);
          window["scene" + x].add(mesh_4_3_2w1);
          // W2
          var mesh_4_3_2w2 = new THREE.Mesh(
            new THREE.BoxGeometry(190, 168, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_2w2.position.set(-550, -290, 146);
          window["scene" + x].add(mesh_4_3_2w2);
          // W3
          var mesh_4_3_2w3 = new THREE.Mesh(
            new THREE.BoxGeometry(200, 178, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_2w3.position.set(-550, -290, 144);
          window["scene" + x].add(mesh_4_3_2w3);
          // W4
          var mesh_4_3_2w4 = new THREE.Mesh(
            new THREE.BoxGeometry(210, 188, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_2w4.position.set(-550, -290, 143);
          window["scene" + x].add(mesh_4_3_2w4);
          // W5
          var mesh_4_3_2w5 = new THREE.Mesh(
            new THREE.BoxGeometry(220, 198, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_2w5.position.set(-550, -290, 140);
          window["scene" + x].add(mesh_4_3_2w5);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-3 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-3 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_3_3 = new THREE.Mesh(
            new THREE.BoxGeometry(180, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_3.position.set(590, 95, 150);
          window["scene" + x].add(mesh_4_3_3);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-3-0 img")) {
          // Item 1 - WAVE
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-3-0 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          // W1
          var mesh_4_3_3w1 = new THREE.Mesh(
            new THREE.BoxGeometry(180, 158, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_3w1.position.set(590, 95, 148);
          window["scene" + x].add(mesh_4_3_3w1);
          // W2
          var mesh_4_3_3w2 = new THREE.Mesh(
            new THREE.BoxGeometry(190, 168, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_3w2.position.set(590, 95, 146);
          window["scene" + x].add(mesh_4_3_3w2);
          // W3
          var mesh_4_3_3w3 = new THREE.Mesh(
            new THREE.BoxGeometry(200, 178, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_3w3.position.set(590, 95, 144);
          window["scene" + x].add(mesh_4_3_3w3);
          // W4
          var mesh_4_3_3w4 = new THREE.Mesh(
            new THREE.BoxGeometry(210, 188, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_3w4.position.set(590, 95, 142);
          window["scene" + x].add(mesh_4_3_3w4);
          // W5
          var mesh_4_3_3w5 = new THREE.Mesh(
            new THREE.BoxGeometry(220, 198, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_3w5.position.set(590, 95, 140);
          window["scene" + x].add(mesh_4_3_3w5);
        }
        if (document.querySelector(".b-" + x + " .row-3 .item-4 img")) {
          // Item 3
          var img1 = document.querySelector(
            ".b-" + x + " .row-3 .item-4 img"
          ).src;
          var texture1 = new THREE.TextureLoader().load(img1);
          texture1.format = THREE.RGBAFormat;
          var parameters1 = {
            color: 0xffffff,
            map: texture1,
            transparent: true,
            lightMap: texture1,
            lightMapIntensity: 4,
          };
          var mesh_4_3_4 = new THREE.Mesh(
            new THREE.BoxGeometry(344, 193, 0.1),
            new THREE.MeshBasicMaterial(parameters1)
          );
          mesh_4_3_4.position.set(0, -250, 170);
          window["scene" + x].add(mesh_4_3_4);
        }
      }

      window["renderer" + x].autoClear = false;
      const renderPass = new RenderPass(
        window["scene" + x],
        window["camera" + x]
      );
      window["composer" + x] = new EffectComposer(window["renderer" + x]);
      window["composer" + x].addPass(renderPass);
      window["renderer" + x].domElement.addEventListener(
        "mousemove",
        function () {
          window["scene" + x].traverse(function (object) {
            if (object.isMesh && object.material.lightMapIntensity == 8)
              object.material.lightMapIntensity = 4;
          });

          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raycaster.setFromCamera(mouse, window["camera" + x]);
          var intersects = raycaster.intersectObject(window["scene" + x], true);
          if (intersects.length > 0) {
            var object = intersects[0].object;
            if (object.isMesh && object.material.lightMapIntensity == 4)
              object.material.lightMapIntensity = 8;
          }
        },
        false
      );
      document.addEventListener("mousemove", onDocumentMouseMove);
      window.addEventListener("resize", init);
    } else {
      if (document.querySelector(".b-" + x + " .content-end canvas"))
        document.querySelector(".b-" + x + " .content-end canvas").remove();
      start = 0;
    }
  }
}

function onWindowResize(x) {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  if (window["camera" + x]) {
    window["camera" + x].aspect = window.innerWidth / window.innerHeight;
    window["camera" + x].updateProjectionMatrix();
    window["camera" + x].position.z = 1300;
    if (window.innerWidth <= 1370) window["camera" + x].position.z = 1800;
    if (window.innerWidth <= 1024) window["camera" + x].position.z = 1850;
    if (window.innerWidth <= 1024 && window.innerWidth < window.innerHeight)
      window["camera" + x].position.z = 2300;
    if (window.innerWidth <= 992) window["camera" + x].position.z = 2700;
    window["renderer" + x].setSize(window.innerWidth, window.innerHeight);
    window["composer" + x].setSize(window.innerWidth, window.innerHeight);
  }
  if (window.innerWidth < 768) screen(x);
}
//RESIZE
window.addEventListener("resize", init);
function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 0.3;
  mouseY = (event.clientY - windowHalfY) * 0.3;
}

//START
function init() {
  for (var i = 2; i < 5; i++) {
    screen(i);
    onWindowResize(i);
  }
}

//OPTIMIZE SCROLL
function tjclear(x) {
  if (window["renderer" + x]) {
    window["renderer" + x].dispose();
    var allChildren = window["scene" + x].children;
    var length = allChildren.length;
    for (var i = 0; i < length; i++) {
      window["scene" + x].remove(allChildren[i]);
    }
  }
}
//WAVE
var xp = 0;
if (window.innerWidth > 767) {
  window.setInterval(function () {
    xp = xp + 1;
    if (xp > 10) xp = 0;
  }, 80);
}
function animobj(obj, opac) {
  let gg = new THREE.Box3().setFromObject(obj);
  let size = new THREE.Vector3();
  var g = gg.getSize(size);
  var kk = (g.y / g.x).toFixed(1);
  obj.scale.x = 1 + xp / g.x;
  obj.scale.y = 1 + xp / g.y;
  obj.material.opacity = opac - xp / 50;
}

$(window).on("scroll", function () {
  var ot = $(window).scrollTop();
  var vh = $(window).height();
  if ($(".b-2").length) {
    if (ot > 0 && ot < $(".b-3").offset().top + vh) {
      start = 2;
    }
    if (ot > $(".b-3").offset().top + vh && ot < $(".b-4").offset().top + vh) {
      start = 3;
    }
    if (ot > $(".b-4").offset().top + vh && ot < $(".b-5").offset().top + vh) {
      start = 4;
    }
  }
});

init();
