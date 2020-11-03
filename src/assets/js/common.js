/* Exports */

//= require ../blocks/common/script.js
//= require ../blocks/common/header/script.js
//= require ../blocks/common/popup/script.js



/* Execution of functions */

ready(() => {
  window.onresize = () => {
    headerScript.headerTeleport();
  }
})
