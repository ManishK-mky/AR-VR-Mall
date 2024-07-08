//three js code of all the products in our mall
var my_scene = document.querySelector("a-scene");
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "0 0 0");
sceneEl.setAttribute("rotation", "0 0 0");
sceneEl.setAttribute("id", "goto");
AFRAME.registerComponent("do-something-once-loaded", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout?itemname=Ready Player Me\n Men's Stylish Jackket&itemrating=3.9&price=5000&product=./products/p1.glb&description=Biker Jacket,Pattern Solid,Regular fit Jacket&scale=3.7 3.7 3.7&qr=./qr_code/1p.png`,
        "_blank"
      );
    });
  },
});

// --------- City-----------------



var entityEl1 = document.createElement("a-entity");
entityEl1.setAttribute("gltf-model", "./products/google.glb");
entityEl1.setAttribute("position", "-60 30 -50");
entityEl1.setAttribute("scale", "3 4 3");
entityEl1.setAttribute("rotation", "0 180 0");
sceneEl.appendChild(entityEl1);


// ------------------------------------------------------------
//model
// Product 1
var entityEl1 = document.createElement("a-entity");
entityEl1.setAttribute("gltf-model", "./products/p1.glb");
entityEl1.setAttribute("position", "70 1 -60");
entityEl1.setAttribute("scale", "4.5 4.5 4.5");
entityEl1.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl1);


// Product 2
var entityEl2 = document.createElement("a-entity");
entityEl2.setAttribute("gltf-model", "./products/p2.glb");
entityEl2.setAttribute("position", "60 1 -60");
entityEl2.setAttribute("scale", "4.5 4.5 4.5");
entityEl2.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl2);

// Product 3
var entityEl3 = document.createElement("a-entity");
entityEl3.setAttribute("gltf-model", "./products/p3.glb");
entityEl3.setAttribute("position", "80 1 -60");
entityEl3.setAttribute("scale", "4.5 4.5 4.5");
entityEl3.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl3);

// 4)
// Product 4
var entityEl4 = document.createElement("a-entity");
entityEl4.setAttribute("gltf-model", "./products/p4.glb");
entityEl4.setAttribute("position", "70 1 -80");
entityEl4.setAttribute("scale", "4.5 4.5 4.5");
entityEl4.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl4);

// Product 5
var entityEl5 = document.createElement("a-entity");
entityEl5.setAttribute("gltf-model", "./products/p5.glb");
entityEl5.setAttribute("position", "60 1 -80");
entityEl5.setAttribute("scale", "4.5 4.5 4.5");
entityEl5.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl5);


// Product 6
var entityEl6 = document.createElement("a-entity");
entityEl6.setAttribute("gltf-model", "./products/p6.glb");
entityEl6.setAttribute("position", "80 1 -80");
entityEl6.setAttribute("scale", "4.5 4.5 4.5");
entityEl6.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl6);

// Product 7
var entityEl7 = document.createElement("a-entity");
entityEl7.setAttribute("gltf-model", "./products/p7.glb");
entityEl7.setAttribute("position", "50 1 -60");
entityEl7.setAttribute("scale", "4.5 4.5 4.5");
entityEl7.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl7);

// Product 8
var entityEl8 = document.createElement("a-entity");
entityEl8.setAttribute("gltf-model", "./products/p8.glb");
entityEl8.setAttribute("position", "90 1 -60");
entityEl8.setAttribute("scale", "4.5 4.5 4.5");
entityEl8.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl8);

sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);


// 9)
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p9.glb");
entityEl.setAttribute("position", "100 1 -60");
entityEl.setAttribute("scale", "4.5 4.5 4.5");
entityEl.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl);



sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);


// var entityEl10 = document.createElement("a-entity");
// entityEl10.setAttribute("gltf-model", "./products/p10.glb");
// entityEl10.setAttribute("position", "109 1 -60");
// entityEl10.setAttribute("scale", "4.5 4.5 4.5");
// entityEl10.setAttribute("rotation", "0 0 0");
// sceneEl.appendChild(entityEl10);
// sceneEl.appendChild(entityEl10);
// my_scene.appendChild(sceneEl);

