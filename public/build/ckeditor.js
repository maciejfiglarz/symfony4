(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ckeditor"],{

/***/ "./assets/js/entry/ckeditor.js":
/*!*************************************!*\
  !*** ./assets/js/entry/ckeditor.js ***!
  \*************************************/
/*! exports provided: initCKEditorEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCKEditorEntry", function() { return initCKEditorEntry; });
/* harmony import */ var _lib_ckeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lib/ckeditor */ "./assets/js/lib/ckeditor.js");
/* harmony import */ var _lib_ckeditor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_ckeditor__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener("DOMContentLoaded", function (event) {
  initCKEditorEntry();
});
var initCKEditorEntry = function initCKEditorEntry() {
  var editors = document.querySelectorAll(".ckeditor");
  console.log(editors);
  console.log('editor', editors);
  editors.forEach(function (editorFirst) {
    _lib_ckeditor__WEBPACK_IMPORTED_MODULE_0___default.a.create(editorFirst).then(function (editor) {
      window.editor = editor;
    })["catch"](function (err) {
      console.error(err.stack);
    });
  });
};

/***/ }),

/***/ 3:
/*!***********************************************************************!*\
  !*** multi regenerator-runtime/runtime ./assets/js/entry/ckeditor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! ./assets/js/entry/ckeditor.js */"./assets/js/entry/ckeditor.js");


/***/ })

},[[3,"runtime","vendors~ckeditor~post-new","ckeditor~post-new"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZW50cnkvY2tlZGl0b3IuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW5pdENLRWRpdG9yRW50cnkiLCJlZGl0b3JzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJlZGl0b3JGaXJzdCIsIkNsYXNzaWNFZGl0b3IiLCJjcmVhdGUiLCJ0aGVuIiwiZWRpdG9yIiwiZXJyIiwiZXJyb3IiLCJzdGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsVUFBQUMsS0FBSyxFQUFJO0FBQ2pEQyxtQkFBaUI7QUFDcEIsQ0FGRDtBQUlPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBaEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFxQkosT0FBckI7QUFDQUEsU0FBTyxDQUFDSyxPQUFSLENBQWdCLFVBQUFDLFdBQVcsRUFBSTtBQUUzQkMsd0RBQWEsQ0FBQ0MsTUFBZCxDQUFzQkYsV0FBdEIsRUFDS0csSUFETCxDQUNXLFVBQUFDLE1BQU0sRUFBSTtBQUNiZCxZQUFNLENBQUNjLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0gsS0FITCxXQUlZLFVBQUFDLEdBQUcsRUFBSTtBQUNYUixhQUFPLENBQUNTLEtBQVIsQ0FBZUQsR0FBRyxDQUFDRSxLQUFuQjtBQUNILEtBTkw7QUFRSCxHQVZEO0FBV0gsQ0FmTSxDIiwiZmlsZSI6ImNrZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNzaWNFZGl0b3IgZnJvbSAnLi8uLi9saWIvY2tlZGl0b3InO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXZlbnQgPT4ge1xuICAgIGluaXRDS0VkaXRvckVudHJ5KCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGluaXRDS0VkaXRvckVudHJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNrZWRpdG9yXCIpO1xuICAgIGNvbnNvbGUubG9nKGVkaXRvcnMpO1xuICAgIGNvbnNvbGUubG9nKCdlZGl0b3InLGVkaXRvcnMpO1xuICAgIGVkaXRvcnMuZm9yRWFjaChlZGl0b3JGaXJzdCA9PiB7XG5cbiAgICAgICAgQ2xhc3NpY0VkaXRvci5jcmVhdGUoIGVkaXRvckZpcnN0IClcbiAgICAgICAgICAgIC50aGVuKCBlZGl0b3IgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICB9IClcbiAgICAgICAgICAgIC5jYXRjaCggZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnIuc3RhY2sgKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9