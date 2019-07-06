import React from "react";
import Cesium from "cesium";

//Create the Cesium viewer
const viewer = new Cesium.CesiumWidget("cesiumContainer", {
  skyBox: false,
  skyAtmosphere: false,
  contextOptions: {
    webgl: {
      alpha: true
    }
  }
});

console.log(viewer.scene.backgroundColor);

//Set the background of the scene to transparent
viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;

//HDR needs to be disable for transparent backgrounds
viewer.scene.highDynamicRange = true;
function Transparent(props) {
  return <div id="cesiumContainer" />;
}

export default Transparent;
