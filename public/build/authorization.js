(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authorization"],{

/***/ "./assets/js/entry/authorization.js":
/*!******************************************!*\
  !*** ./assets/js/entry/authorization.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/authorization */ "./assets/js/lib/authorization.js");

window.addEventListener("DOMContentLoaded", function (event) {
  Object(_lib_authorization__WEBPACK_IMPORTED_MODULE_0__["jsSelectCheckbox"])();
});

/***/ }),

/***/ "./assets/js/lib/authorization.js":
/*!****************************************!*\
  !*** ./assets/js/lib/authorization.js ***!
  \****************************************/
/*! exports provided: jsSelectCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsSelectCheckbox", function() { return jsSelectCheckbox; });
var jsSelectCheckbox = function jsSelectCheckbox() {
  var checkboxSelectFront = document.querySelector('.jsSelectFront');
  var checkmarkInput = checkboxSelectFront.querySelector('input');
  var checkboxSelectBackend = document.querySelector('.jsSelectBackend');
  checkboxSelectFront.addEventListener('click', function (event) {
    if (checkmarkInput.checked == true) {
      checkmarkInput.checked = false;
      checkboxSelectBackend.checked = false;
    } else {
      checkmarkInput.checked = true;
      checkboxSelectBackend.checked = true;
    }
  });
};

/***/ })

},[["./assets/js/entry/authorization.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZW50cnkvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2F1dGhvcml6YXRpb24uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwianNTZWxlY3RDaGVja2JveCIsImNoZWNrYm94U2VsZWN0RnJvbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja21hcmtJbnB1dCIsImNoZWNrYm94U2VsZWN0QmFja2VuZCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFHQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsVUFBQUMsS0FBSyxFQUFJO0FBQ2pEQyw2RUFBZ0I7QUFDbkIsQ0FGRCxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ2xDLE1BQU1DLG1CQUFtQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQTVCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHSCxtQkFBbUIsQ0FBQ0UsYUFBcEIsQ0FBa0MsT0FBbEMsQ0FBdkI7QUFDQSxNQUFNRSxxQkFBcUIsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUE5QjtBQUVBRixxQkFBbUIsQ0FBQ0gsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLFVBQUNDLEtBQUQsRUFBVztBQUVyRCxRQUFJSyxjQUFjLENBQUNFLE9BQWYsSUFBMEIsSUFBOUIsRUFBb0M7QUFDaENGLG9CQUFjLENBQUNFLE9BQWYsR0FBeUIsS0FBekI7QUFDQUQsMkJBQXFCLENBQUNDLE9BQXRCLEdBQWdDLEtBQWhDO0FBQ0gsS0FIRCxNQUdPO0FBQ0hGLG9CQUFjLENBQUNFLE9BQWYsR0FBeUIsSUFBekI7QUFDQUQsMkJBQXFCLENBQUNDLE9BQXRCLEdBQStCLElBQS9CO0FBQ0g7QUFDSixHQVREO0FBV0gsQ0FoQk0sQyIsImZpbGUiOiJhdXRob3JpemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtqc1NlbGVjdENoZWNrYm94fSBmcm9tIFwiLi4vbGliL2F1dGhvcml6YXRpb25cIjtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXZlbnQgPT4ge1xuICAgIGpzU2VsZWN0Q2hlY2tib3goKTtcbn0pOyIsImV4cG9ydCBjb25zdCBqc1NlbGVjdENoZWNrYm94ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94U2VsZWN0RnJvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNTZWxlY3RGcm9udCcpO1xuICAgIGNvbnN0IGNoZWNrbWFya0lucHV0ID0gY2hlY2tib3hTZWxlY3RGcm9udC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGNvbnN0IGNoZWNrYm94U2VsZWN0QmFja2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc1NlbGVjdEJhY2tlbmQnKTtcblxuICAgIGNoZWNrYm94U2VsZWN0RnJvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgICAgICBpZiAoY2hlY2ttYXJrSW5wdXQuY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja21hcmtJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBjaGVja2JveFNlbGVjdEJhY2tlbmQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2ttYXJrSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBjaGVja2JveFNlbGVjdEJhY2tlbmQuY2hlY2tlZD0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59OyJdLCJzb3VyY2VSb290IjoiIn0=