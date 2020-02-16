(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-list"],{

/***/ "./assets/js/entry/post-list.js":
/*!**************************************!*\
  !*** ./assets/js/entry/post-list.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_post_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper/post/common */ "./assets/js/helper/post/common.js");
/* harmony import */ var _lib_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/facebook */ "./assets/js/lib/facebook.js");
/* harmony import */ var _helper_post_vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/post/vote */ "./assets/js/helper/post/vote.js");
/* harmony import */ var _lib_Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Report */ "./assets/js/lib/Report.js");




window.addEventListener("DOMContentLoaded", function (event) {
  var vote = new _helper_post_vote__WEBPACK_IMPORTED_MODULE_2__["Vote"]();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["showYoutubeFrame"])();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["copyLink"])();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["showMore"])();
  new _lib_Report__WEBPACK_IMPORTED_MODULE_3__["default"]();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["showMobileInfo"])();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["resizeGraphicFrame"])();
});
window.addEventListener('load', function () {
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["resizeGraphicFrame"])();
});

/***/ }),

/***/ "./assets/js/lib/facebook.js":
/*!***********************************!*\
  !*** ./assets/js/lib/facebook.js ***!
  \***********************************/
/*! exports provided: initFacebookLogin, fbShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFacebookLogin", function() { return initFacebookLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbShare", function() { return fbShare; });
var initFacebookLogin = function initFacebookLogin() {
  var facebookAccess = document.querySelectorAll('.facebook-access-init');
  facebookAccess.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      loginWithFacebook();
    });
  });
};

var loginWithFacebook = function loginWithFacebook() {
  FB.login(function (response) {
    if (response.authResponse) {
      console.log('You are logged in &amp; cookie set!');
      getFbUserData();
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  });
  return false;
};

function getFbUserData() {
  FB.api('/me', {
    locale: 'pl_PL',
    fields: 'id,first_name,last_name,email,link,gender,locale,picture'
  }, function (response) {
    console.log('response', response);
  });
} // Logout from facebook


function fbLogout() {
  FB.logout(function () {
    document.getElementById('fbLink').setAttribute("onclick", "fbLogin()");
    document.getElementById('fbLink').innerHTML = '<img src="fblogin.png"/>';
    document.getElementById('userData').innerHTML = '';
    document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
  });
  FB.logout(function () {});
}

var fbShare = function fbShare() {
  var init = document.querySelectorAll('.single-bar__share-facebook');
  var windowWidth = 520;
  var windowHeight = 350;
  var windowTop = screen.height / 2 - windowHeight / 2;
  var windowLeft = screen.width / 2 - windowWidth / 2;
  init.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('link', link);
      var postURL = event.currentTarget.dataset.url;
      var title = event.currentTarget.dataset.title;
      var description = event.currentTarget.dataset.description;
      var imageURL = event.currentTarget.dataset.image;
      var url = "http://www.facebook.com/sharer.php?s=100&p[title]=".concat(title, "&p[summary]=").concat(description, "&p[url]=").concat(postURL, "&p[images][0]=").concat(imageURL, ",sharer, \n            top=").concat(windowTop, ",\n            left=").concat(windowLeft, ",\n            toolbar=0,status=0,\n            width=").concat(windowWidth, ",\n            height=").concat(windowHeight);
      console.log('url', url); // window.open(url);
    });
  });
};

/***/ })

},[["./assets/js/entry/post-list.js","runtime","vendors~app~post-list~post-new~post-single","post-list~post-single"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZW50cnkvcG9zdC1saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvZmFjZWJvb2suanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwidm90ZSIsIlZvdGUiLCJzaG93WW91dHViZUZyYW1lIiwiY29weUxpbmsiLCJzaG93TW9yZSIsIlJlcG9ydCIsInNob3dNb2JpbGVJbmZvIiwicmVzaXplR3JhcGhpY0ZyYW1lIiwiaW5pdEZhY2Vib29rTG9naW4iLCJmYWNlYm9va0FjY2VzcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJsb2dpbldpdGhGYWNlYm9vayIsIkZCIiwibG9naW4iLCJyZXNwb25zZSIsImF1dGhSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRGYlVzZXJEYXRhIiwiYXBpIiwibG9jYWxlIiwiZmllbGRzIiwiZmJMb2dvdXQiLCJsb2dvdXQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImZiU2hhcmUiLCJpbml0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dUb3AiLCJzY3JlZW4iLCJoZWlnaHQiLCJ3aW5kb3dMZWZ0Iiwid2lkdGgiLCJsaW5rIiwicHJldmVudERlZmF1bHQiLCJwb3N0VVJMIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVUkwiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxVQUFBQyxLQUFLLEVBQUk7QUFDakQsTUFBTUMsSUFBSSxHQUFHLElBQUlDLHNEQUFKLEVBQWI7QUFDQUMsOEVBQWdC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QSxVQUFNQyxLQUFLLEdBQUc5QyxLQUFLLENBQUMyQyxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkUsS0FBMUM7QUFDQSxVQUFNQyxXQUFXLEdBQUcvQyxLQUFLLENBQUMyQyxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkcsV0FBaEQ7QUFDQSxVQUFNQyxRQUFRLEdBQUdoRCxLQUFLLENBQUMyQyxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkssS0FBN0M7QUFFQSxVQUFNSixHQUFHLCtEQUF3REMsS0FBeEQseUJBQTRFQyxXQUE1RSxxQkFBa0dMLE9BQWxHLDJCQUEwSE0sUUFBMUgsd0NBQ0hiLFNBREcsaUNBRUZHLFVBRkUsbUVBSURMLFdBSkMsbUNBS0FDLFlBTEEsQ0FBVDtBQU1BZCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQWtCd0IsR0FBbEIsRUFkb0MsQ0FlcEM7QUFDSCxLQWhCRDtBQWlCSCxHQWxCRDtBQW1CSCxDQTFCTSxDIiwiZmlsZSI6InBvc3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgICBjb3B5TGluayxcbiAgICByZXNpemVHcmFwaGljRnJhbWUsXG4gICAgc2hvd0NvbW1lbnQsXG4gICAgc2hvd01vYmlsZUluZm8sXG4gICAgc2hvd01vcmUsXG4gICAgc2hvd1lvdXR1YmVGcmFtZVxufSBmcm9tIFwiLi8uLi9oZWxwZXIvcG9zdC9jb21tb25cIjtcbmltcG9ydCB7ZmJTaGFyZX0gZnJvbSBcIi4uL2xpYi9mYWNlYm9va1wiO1xuaW1wb3J0IHtWb3RlfSBmcm9tIFwiLi8uLi9oZWxwZXIvcG9zdC92b3RlXCI7XG5pbXBvcnQgUmVwb3J0IGZyb20gXCIuLi9saWIvUmVwb3J0XCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldmVudCA9PiB7XG4gICAgY29uc3Qgdm90ZSA9IG5ldyBWb3RlKCk7XG4gICAgc2hvd1lvdXR1YmVGcmFtZSgpO1xuICAgIGNvcHlMaW5rKCk7XG4gICAgc2hvd01vcmUoKTtcbiAgICBuZXcgUmVwb3J0KCk7XG4gICAgc2hvd01vYmlsZUluZm8oKTtcbiAgICByZXNpemVHcmFwaGljRnJhbWUoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PntcbiAgICByZXNpemVHcmFwaGljRnJhbWUoKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGluaXRGYWNlYm9va0xvZ2luID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhY2Vib29rQWNjZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhY2Vib29rLWFjY2Vzcy1pbml0Jyk7XG4gICAgZmFjZWJvb2tBY2Nlc3MuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxvZ2luV2l0aEZhY2Vib29rKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cblxuXG5jb25zdCBsb2dpbldpdGhGYWNlYm9vayA9ICgpID0+IHtcblxuICAgIEZCLmxvZ2luKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UuYXV0aFJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGFyZSBsb2dnZWQgaW4gJmFtcDsgY29va2llIHNldCEnKTtcbiAgICAgICAgICAgIGdldEZiVXNlckRhdGEoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgY2FuY2VsbGVkIGxvZ2luIG9yIGRpZCBub3QgZnVsbHkgYXV0aG9yaXplLicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gZ2V0RmJVc2VyRGF0YSgpe1xuICAgIEZCLmFwaSgnL21lJywge2xvY2FsZTogJ3BsX1BMJywgZmllbGRzOiAnaWQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsbGluayxnZW5kZXIsbG9jYWxlLHBpY3R1cmUnfSxcbiAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG59XG5cbi8vIExvZ291dCBmcm9tIGZhY2Vib29rXG5mdW5jdGlvbiBmYkxvZ291dCgpIHtcbiAgICBGQi5sb2dvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYkxpbmsnKS5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsXCJmYkxvZ2luKClcIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYkxpbmsnKS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCJmYmxvZ2luLnBuZ1wiLz4nO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckRhdGEnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpLmlubmVySFRNTCA9ICdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgbG9nb3V0IGZyb20gRmFjZWJvb2suJztcbiAgICB9KTtcbiAgICBGQi5sb2dvdXQoZnVuY3Rpb24oKSB7XG4gICAgfSk7XG5cbn1cblxuXG5cbmV4cG9ydCBjb25zdCBmYlNoYXJlID0gKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLWJhcl9fc2hhcmUtZmFjZWJvb2snKTtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IDUyMDtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAzNTA7XG4gICAgY29uc3Qgd2luZG93VG9wID0gKHNjcmVlbi5oZWlnaHQgLyAyKSAtICh3aW5kb3dIZWlnaHQgLyAyKTtcbiAgICBjb25zdCB3aW5kb3dMZWZ0ID0gKHNjcmVlbi53aWR0aCAvIDIpIC0gKHdpbmRvd1dpZHRoIC8gMik7XG5cbiAgICBpbml0LmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpbmsnLCBsaW5rKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RVUkwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGl0bGU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVVJMID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmltYWdlO1xuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD9zPTEwMCZwW3RpdGxlXT0ke3RpdGxlfSZwW3N1bW1hcnldPSR7ZGVzY3JpcHRpb259JnBbdXJsXT0ke3Bvc3RVUkx9JnBbaW1hZ2VzXVswXT0ke2ltYWdlVVJMfSxzaGFyZXIsIFxuICAgICAgICAgICAgdG9wPSR7d2luZG93VG9wfSxcbiAgICAgICAgICAgIGxlZnQ9JHt3aW5kb3dMZWZ0fSxcbiAgICAgICAgICAgIHRvb2xiYXI9MCxzdGF0dXM9MCxcbiAgICAgICAgICAgIHdpZHRoPSR7d2luZG93V2lkdGh9LFxuICAgICAgICAgICAgaGVpZ2h0PSR7d2luZG93SGVpZ2h0fWA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXJsJyx1cmwpO1xuICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4odXJsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=