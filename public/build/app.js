(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/sort */ "./assets/js/lib/sort.js");
/* harmony import */ var _lib_searcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/searcher */ "./assets/js/lib/searcher.js");
/* harmony import */ var _helper_post_report_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/post/report-post */ "./assets/js/helper/post/report-post.js");
/* harmony import */ var _lib_forgot_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/forgot-password */ "./assets/js/lib/forgot-password.js");
/* harmony import */ var _lib_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/mobile-menu */ "./assets/js/lib/mobile-menu.js");
/* harmony import */ var _helper_ChangeUsername__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/ChangeUsername */ "./assets/js/helper/ChangeUsername.js");
/* harmony import */ var _lib_access_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/access-block */ "./assets/js/lib/access-block.js");
/* harmony import */ var _lib_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/cookies */ "./assets/js/lib/cookies.js");
/* harmony import */ var _lib_collaboration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/collaboration */ "./assets/js/lib/collaboration.js");
/* harmony import */ var _lib_facebook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/facebook */ "./assets/js/lib/facebook.js");
/* harmony import */ var _lib_ads__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/ads */ "./assets/js/lib/ads.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');













window.addEventListener('DOMContentLoaded', function (event) {
  Object(_lib_access_block__WEBPACK_IMPORTED_MODULE_6__["accessBlock"])();
  Object(_lib_searcher__WEBPACK_IMPORTED_MODULE_1__["initSearcher"])();
  new _lib_mobile_menu__WEBPACK_IMPORTED_MODULE_4__["MobileMenu"]();
  new _lib_forgot_password__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _helper_ChangeUsername__WEBPACK_IMPORTED_MODULE_5__["default"]();
  Object(_lib_cookies__WEBPACK_IMPORTED_MODULE_7__["acceptCookies"])();
  var sortDesktop = {
    typesListClass: 'header-sort__type',
    categoriesListClass: 'header-sort__category',
    aliasCheckboxCategory: 'checkbox-desktop-category',
    classActive: 'header-sort__item--active',
    sortType: 'sort-type-desktop',
    aliasCheckboxType: 'checkbox-desktop-type'
  };
  new _lib_sort__WEBPACK_IMPORTED_MODULE_0__["Sort"](sortDesktop);
  var sortMobile = {
    typesListClass: 'header-mobile__type',
    categoriesListClass: 'header-mobile__category',
    aliasCheckboxCategory: 'checkbox-mobile-category',
    classActive: 'header-mobile__sort-item--active',
    sortType: 'sort-type-mobile',
    aliasCheckboxType: 'checkbox-mobile-type'
  };
  new _lib_sort__WEBPACK_IMPORTED_MODULE_0__["Sort"](sortMobile);
  new _helper_post_report_post__WEBPACK_IMPORTED_MODULE_2__["default"]();
  Object(_lib_ads__WEBPACK_IMPORTED_MODULE_10__["initWallVerticalSticky"])();
  Object(_lib_ads__WEBPACK_IMPORTED_MODULE_10__["toggleMobileBar"])();
});

var accesBlock = function accesBlock() {
  var initFrames = document.querySelectorAll('.access-block__init');
  initFrames.forEach(function (frame) {
    frame.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });
};

/***/ }),

/***/ "./assets/js/helper/ChangeUsername.js":
/*!********************************************!*\
  !*** ./assets/js/helper/ChangeUsername.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReportPost; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReportPost =
/*#__PURE__*/
function () {
  function ReportPost() {
    _classCallCheck(this, ReportPost);

    this.frame = document.querySelector('.change-username');
    this.cover = document.querySelector('.cover');
    this.init();
  }

  _createClass(ReportPost, [{
    key: "init",
    value: function init() {
      var _this = this;

      if (this.frame) {
        var button = this.frame.querySelector('.change-username__button');
        var input = this.frame.querySelector('.change-username__input');
        var errorFrame = this.frame.querySelector('.change-username__error');
        var loader = this.frame.querySelector('.change-username___loader');
        var content = this.frame.querySelector('.change-username__content');
        var warning = this.frame.querySelector('.change-username__warning');
        button.addEventListener('click', function () {
          var formData = new FormData();
          formData.append("username", input.value);
          $.ajax({
            url: '/api-change-username',
            data: formData,
            type: "post",
            contentType: false,
            processData: false,
            cache: false,
            dataType: "json",
            beforeSend: function beforeSend() {
              _this.showLoader(loader);

              _this.hideContent(content);

              _this.cover.classList.remove('display-none');
            },
            success: function success(data) {
              var status = data.status,
                  error = data.error;

              if (status) {
                _this.frame.classList.add('display-none');

                _this.cover.classList.add('display-none');
              } else {
                warning.classList.add('display-none');
                errorFrame.classList.remove('display-none');
                errorFrame.querySelector('span').innerText = error;

                _this.hideLoader(loader);

                _this.showContent(content);
              }
            }
          });
        });
      }
    }
  }, {
    key: "showLoader",
    value: function showLoader(loader) {
      loader.classList.remove('display-none');
    }
  }, {
    key: "hideLoader",
    value: function hideLoader(loader) {
      loader.classList.add('display-none');
    }
  }, {
    key: "showContent",
    value: function showContent(content) {
      content.classList.remove('display-none');
    }
  }, {
    key: "hideContent",
    value: function hideContent(content) {
      content.classList.add('display-none');
    }
  }, {
    key: "showCover",
    value: function showCover() {
      this.cover.classList.remove('display-none');
    }
  }, {
    key: "hideCover",
    value: function hideCover() {
      this.cover.classList.add('display-none');
    }
  }]);

  return ReportPost;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/helper/post/report-post.js":
/*!**********************************************!*\
  !*** ./assets/js/helper/post/report-post.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReportPost; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReportPost =
/*#__PURE__*/
function () {
  function ReportPost(sortDesktop) {
    _classCallCheck(this, ReportPost);

    this.inits = document.querySelectorAll('.single-bar__report-post');
    this.frame = document.querySelector('.report-post');
    this.close = document.querySelector('.report-post__close');
    this.cover = document.querySelector('.cover');
    this.button = document.querySelector('.report-post__button');
    this.textarea = document.querySelector('.report-post__textarea');
    this.init();
    this.initClickButton();
    this.initCloseFrame();
  }

  _createClass(ReportPost, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.inits.forEach(function (init) {
        init.addEventListener('click', function (event) {
          var postID = event.currentTarget.dataset.id;
          _this.button.dataset.id = postID;

          _this.frame.classList.remove('display-none');

          _this.cover.classList.remove('display-none');
        });
      });
    }
  }, {
    key: "initClickButton",
    value: function initClickButton() {
      var _this2 = this;

      this.button.addEventListener('click', function (event) {
        var postID = event.target.dataset.id;
        var msg = _this2.textarea.value;

        if (msg.length > 0) {
          var formData = new FormData();
          formData.append("postID", postID);
          formData.append("msg", msg);
          $.ajax({
            url: '/api-report-post',
            data: formData,
            type: "post",
            contentType: false,
            processData: false,
            cache: false,
            dataType: "json",
            beforeSend: function beforeSend() {},
            success: function success(data) {}
          });

          _this2.closeFrame();
        }
      });
    }
  }, {
    key: "initCloseFrame",
    value: function initCloseFrame() {
      var _this3 = this;

      this.close.addEventListener('click', function () {
        _this3.closeFrame();
      });
    }
  }, {
    key: "closeFrame",
    value: function closeFrame() {
      this.frame.classList.add('display-none');
      this.textarea.value = '';
      this.button.dataset.id = 0;
      this.cover.classList.add('display-none');
    }
  }]);

  return ReportPost;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/lib/access-block.js":
/*!***************************************!*\
  !*** ./assets/js/lib/access-block.js ***!
  \***************************************/
/*! exports provided: accessBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessBlock", function() { return accessBlock; });
var accessBlock = function accessBlock() {
  var accessBlock = document.querySelector(".access-block");
  var accessBlockInit = document.querySelectorAll(".access-block__init");
  var accessBlockClose = document.querySelector(".access-block__close");
  var accessBlockCover = document.querySelector(".access-block__cover");
  var list = document.querySelector('.container__list');

  if (list) {
    list.addEventListener('click', function (event) {
      var element = event.target;

      if (element.tagName != 'DIV') {
        element = element.parentElement;
      }

      if (element.classList.contains('access-block__init')) {
        event.preventDefault();
        accessBlock.classList.remove("display-none");
        accessBlockCover.classList.remove("display-none");
      }
    });
  }

  accessBlockInit.forEach(function (element) {
    element.addEventListener("click", function () {
      accessBlock.classList.remove("display-none");
      accessBlockCover.classList.remove("display-none");
    });
  });
  accessBlockClose.addEventListener("click", function () {
    accessBlock.classList.add("display-none");
    accessBlockCover.classList.add("display-none");
  });
};

/***/ }),

/***/ "./assets/js/lib/ads.js":
/*!******************************!*\
  !*** ./assets/js/lib/ads.js ***!
  \******************************/
/*! exports provided: initWallVerticalSticky, toggleMobileBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWallVerticalSticky", function() { return initWallVerticalSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMobileBar", function() { return toggleMobileBar; });
var initWallVerticalSticky = function initWallVerticalSticky() {
  var verticalAds = document.querySelector('.ads-wall__vertical'); // window.addEventListener("scroll", function (event) {
  //     verticalAds.forEach(verticalAd => {
  //         const top = this.scrollY;
  //         if (top > 115) {
  //             verticalAd.style.display = 'block';
  //         } else {
  //             verticalAd.style.display = 'none';
  //         }
  //     });
  // }, false);
};
var toggleMobileBar = function toggleMobileBar() {
  var mobileBar = document.querySelector('.ads-mobile__bar');
  console.log('var', mobileBar);

  if (mobileBar) {
    setTimeout(function () {
      console.log('xxx', mobileBar);
      mobileBar.classList.add('ads-mobile__bar--animated');
    }, 3000);
  }
};

/***/ }),

/***/ "./assets/js/lib/collaboration.js":
/*!****************************************!*\
  !*** ./assets/js/lib/collaboration.js ***!
  \****************************************/
/*! exports provided: collaboration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collaboration", function() { return collaboration; });
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies */ "./assets/js/lib/cookies.js");

var collaboration = function collaboration() {
  var isLogged = document.querySelector('input[name=isLogged]');
  var collaborationFrame = document.querySelector('.collaboration');
  var close = collaborationFrame.querySelectorAll('.collaboration__close--action');
  var cover = document.querySelector('.cover');
  var closeAction = collaborationFrame.querySelectorAll('.collaboration__close--action');
  var isCookies = Object(_cookies__WEBPACK_IMPORTED_MODULE_0__["getCookie"])('collaboration');
  var isIncluded = window.location.href.includes("dodaj-post");
  isLogged = isLogged == 'true' ? true : false;
  console.log('isLogged', isLogged);

  if (!isLogged) {
    if (!isIncluded) {
      if (isCookies !== 'hidden') {
        setTimeout(function () {
          collaborationFrame.classList.remove('display-none');
          cover.classList.remove('display-none');
        }, 15000);
      }
    }
  }

  closeAction.forEach(function (close) {
    close.addEventListener('click', function (event) {
      collaborationFrame.classList.add('display-none');
      cover.classList.add('display-none');
      Object(_cookies__WEBPACK_IMPORTED_MODULE_0__["setCookie"])('collaboration', 'hidden');
    });
  });
};

/***/ }),

/***/ "./assets/js/lib/cookies.js":
/*!**********************************!*\
  !*** ./assets/js/lib/cookies.js ***!
  \**********************************/
/*! exports provided: acceptCookies, setCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptCookies", function() { return acceptCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
var acceptCookies = function acceptCookies() {
  var cookiesAccept = document.querySelector('.cookies__accept');
  var cookies = document.querySelector('.cookies');

  if (cookies !== null) {
    if (typeof getCookie('isAcceptCookies') == 'undefined') {
      cookies.classList.remove('cookies__hide');
      cookiesAccept.addEventListener('click', function () {
        cookies.classList.add('cookies__hide');
        setCookie('isAcceptCookies', true);
      });
    }
  }
};
var setCookie = function setCookie(name, val, days, path, domain, secure) {
  if (navigator.cookieEnabled) {
    var cookieName = encodeURIComponent(name);
    var cookieVal = encodeURIComponent(val);
    var cookieText = cookieName + "=" + cookieVal;

    if (typeof days === "number") {
      var data = new Date();
      data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
      cookieText += "; expires=" + data.toGMTString();
    }

    if (path) {
      cookieText += "; path=" + path;
    }

    if (domain) {
      cookieText += "; domain=" + domain;
    }

    if (secure) {
      cookieText += "; secure";
    }

    document.cookie = cookieText;
  }
};
var getCookie = function getCookie(name) {
  if (document.cookie !== "") {
    var cookies = document.cookie.split(/; */);

    for (var i = 0; i < cookies.length; i++) {
      var cookieName = cookies[i].split("=")[0];
      var cookieVal = cookies[i].split("=")[1];

      if (cookieName === decodeURIComponent(name)) {
        return decodeURIComponent(cookieVal);
      }
    }
  }
};

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

/***/ }),

/***/ "./assets/js/lib/forgot-password.js":
/*!******************************************!*\
  !*** ./assets/js/lib/forgot-password.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./assets/js/lib/validation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ForgotPassword =
/*#__PURE__*/
function () {
  function ForgotPassword(sortDesktop) {
    _classCallCheck(this, ForgotPassword);

    this.inits = document.querySelectorAll('.forgot-password__init');
    this.frame = document.querySelector('.forgot-password');
    this.close = document.querySelector('.forgot-password__close');
    this.cover = document.querySelector('.cover');
    this.button = document.querySelector('.forgot-password__button');
    this.text = document.querySelector('.forgot-password__text');
    this.content = document.querySelector('.forgot-password__content');
    this.loader = document.querySelector('.forgot-password__loader');
    this.success = document.querySelector('.forgot-password__success');
    this.error = document.querySelector('.forgot-password__error');
    this.info = document.querySelector('.forgot-password__info');
    this.init();
    this.initClickButton();
    this.initCloseFrame();
  }

  _createClass(ForgotPassword, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.inits.forEach(function (init) {
        init.addEventListener('click', function (event) {
          event.preventDefault();

          _this.frame.classList.remove('display-none');

          _this.cover.classList.remove('display-none');
        });
      });
    }
  }, {
    key: "initClickButton",
    value: function initClickButton() {
      var _this2 = this;

      this.button.addEventListener('click', function (event) {
        var email = _this2.text.value;

        if (email.length > 0) {
          var formData = new FormData();
          formData.append("email", email);

          _this2.hideInfo();

          if (_this2.isEmailValid(email)) {
            $.ajax({
              url: '/api-forgot-password',
              data: formData,
              type: "post",
              contentType: false,
              processData: false,
              cache: false,
              dataType: "json",
              beforeSend: function beforeSend() {
                _this2.showLoader();

                _this2.hideContent();
              },
              success: function success(data) {
                _this2.hideLoader();

                var status = data.status;

                if (status) {
                  _this2.showSuccess();

                  _this2.hideLoader();
                } else {
                  _this2.showContent();

                  _this2.hideLoader();

                  _this2.showError('Takiego adresu email nie ma w naszej bazie');
                }
              }
            });
          } else {
            _this2.showError('Podany email jest niepoprawny');
          }
        }
      });
    }
  }, {
    key: "hideInfo",
    value: function hideInfo() {
      this.info.classList.add('display-none');
    }
  }, {
    key: "showError",
    value: function showError(msg) {
      this.error.classList.remove('display-none');
      this.error.innerText = msg;
    }
  }, {
    key: "initCloseFrame",
    value: function initCloseFrame() {
      var _this3 = this;

      this.close.addEventListener('click', function () {
        _this3.closeFrame();
      });
    }
  }, {
    key: "showSuccess",
    value: function showSuccess() {
      this.success.classList.remove('display-none');
    }
  }, {
    key: "closeFrame",
    value: function closeFrame() {
      this.frame.classList.add('display-none');
      this.text.value = '';
      this.button.dataset.id = 0;
      this.cover.classList.add('display-none');
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      this.loader.classList.remove('display-none');
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loader.classList.add('display-none');
    }
  }, {
    key: "hideContent",
    value: function hideContent() {
      // this.content.classList.add('display-none');
      this.content.style.opacity = '0';
    }
  }, {
    key: "showContent",
    value: function showContent() {
      this.content.style.opacity = '1';
    }
  }, {
    key: "isEmailValid",
    value: function isEmailValid(email) {
      return Object(_validation__WEBPACK_IMPORTED_MODULE_0__["emailValid"])(email);
    }
  }]);

  return ForgotPassword;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/lib/mobile-menu.js":
/*!**************************************!*\
  !*** ./assets/js/lib/mobile-menu.js ***!
  \**************************************/
/*! exports provided: MobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenu", function() { return MobileMenu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu =
/*#__PURE__*/
function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.initBtn = document.querySelector('.header-mobile__init');
    this.initMobileMenuFrame = document.querySelector('.header-mobile__frame');
    this.actionItems = document.querySelectorAll('.header-mobile__item--action');
    this.close = document.querySelector('.header-mobile__close');
    this.init = document.querySelector('.header-mobile__init');
    this.initEvent();
  }

  _createClass(MobileMenu, [{
    key: "initEvent",
    value: function initEvent() {
      this.initMobileMenu();
      this.initItemClick();
      this.initCloseClick();
      this.initShowClick();
    }
  }, {
    key: "initCloseClick",
    value: function initCloseClick() {
      var _this = this;

      this.close.addEventListener('click', function () {
        _this.hideMobileMenu();
      });
    }
  }, {
    key: "initShowClick",
    value: function initShowClick() {
      var _this2 = this;

      this.init.addEventListener('click', function () {
        _this2.showMobileMenu();
      });
    }
  }, {
    key: "showMobileMenu",
    value: function showMobileMenu() {
      this.initMobileMenuFrame.classList.remove('display-none');
    }
  }, {
    key: "hideMobileMenu",
    value: function hideMobileMenu() {
      this.initMobileMenuFrame.classList.add('display-none');
    }
  }, {
    key: "initItemClick",
    value: function initItemClick() {
      var _this3 = this;

      this.actionItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
          var element = event.target;
          element.classList.toggle('header-mobile__item--selected');
          var name = element.dataset.id;

          if (element.classList.contains('header-mobile__item--selected')) {
            _this3.showChildWrap(name);

            element.classList.add('header-mobile__item--selected');
          } else {
            _this3.hideChildWrap(name);

            element.classList.remove('header-mobile__item--selected');
          }
        });
      });
    }
  }, {
    key: "showChildWrap",
    value: function showChildWrap(name) {
      document.querySelector("#child-".concat(name)).classList.remove('display-none');
    }
  }, {
    key: "hideChildWrap",
    value: function hideChildWrap(name) {
      document.querySelector("#child-".concat(name)).classList.add('display-none');
    }
  }, {
    key: "initMobileMenu",
    value: function initMobileMenu() {
      var _this4 = this;

      this.initBtn.addEventListener('click', function () {
        _this4.initBtn.classList.toggle('header-mobile__init--active');

        if (_this4.initBtn.classList.contains('header-mobile__init--active')) {
          _this4.showMobileMenu();
        } else {
          _this4.hideMobileMenu();
        }
      });
    }
  }]);

  return MobileMenu;
}();

/***/ }),

/***/ "./assets/js/lib/searcher.js":
/*!***********************************!*\
  !*** ./assets/js/lib/searcher.js ***!
  \***********************************/
/*! exports provided: initSearcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearcher", function() { return initSearcher; });
var initSearcher = function initSearcher() {
  var initSearcher = document.querySelector('.searcher__init');
  var searcherFrame = document.querySelector('.searcher');
  var inputText = document.querySelector('.searcher__text');
  var button = document.querySelector('.searcher__button');
  var buttonStatic = document.querySelector('.searcher-static__button');
  var inputTextStatic = document.querySelector('.searcher-static__text');
  initSearcher.addEventListener('click', function () {
    searcherFrame.classList.remove('display-none');
    initSearcher.classList.add('display-none');
    inputText.focus();
  });
  button.addEventListener('click', function (event) {
    if (inputText.value.length == 0) {
      event.preventDefault();
    }
  });

  if (inputTextStatic) {
    buttonStatic.addEventListener('click', function (event) {
      if (inputTextStatic.value.length == 0) {
        event.preventDefault();
      }
    });
  }
};

/***/ }),

/***/ "./assets/js/lib/sort.js":
/*!*******************************!*\
  !*** ./assets/js/lib/sort.js ***!
  \*******************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sort =
/*#__PURE__*/
function () {
  function Sort(sortDesktop) {
    _classCallCheck(this, Sort);

    Object.assign(this, sortDesktop);
    this.typesList = document.querySelectorAll(".".concat(this.typesListClass));
    this.categoriesList = document.querySelectorAll(".".concat(this.categoriesListClass));
    this.initEvent();
  }

  _createClass(Sort, [{
    key: "initEvent",
    value: function initEvent() {
      this.initClickTypes();
      this.initClickCategories();
    }
  }, {
    key: "initClickCategories",
    value: function initClickCategories() {
      var _this = this;

      this.categoriesList.forEach(function (category) {
        category.addEventListener('click', function (event) {
          event.target.classList.toggle(_this.classActive);

          _this.toggleCategory(category);
        });
      });
    }
  }, {
    key: "toggleCategory",
    value: function toggleCategory(category) {
      var checkbox = document.querySelector("input[type=\"checkbox\"][id=\"".concat(this.aliasCheckboxCategory, "-").concat(category.id, "\"]"));

      if (category.classList.contains(this.classActive)) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    }
  }, {
    key: "initClickTypes",
    value: function initClickTypes() {
      var _this2 = this;

      this.typesList.forEach(function (type) {
        type.addEventListener('click', function (event) {
          _this2.uncheckAllTypes();

          event.target.classList.add(_this2.classActive);

          _this2.uncheckAllTypeCheckboxes();

          _this2.setTypeCheckbox(type);
        });
      });
    }
  }, {
    key: "uncheckAllTypes",
    value: function uncheckAllTypes() {
      var _this3 = this;

      this.typesList.forEach(function (type) {
        type.classList.remove(_this3.classActive);
      });
    }
  }, {
    key: "setTypeCheckbox",
    value: function setTypeCheckbox(type) {
      var checkbox = document.querySelector("input[type=\"checkbox\"][id=\"".concat(this.aliasCheckboxType, "-").concat(type.id, "\"]"));
      checkbox.checked = true;
    }
  }, {
    key: "uncheckAllTypeCheckboxes",
    value: function uncheckAllTypeCheckboxes() {
      var checkboxes = document.querySelectorAll(".".concat(this.sortType));
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  }]);

  return Sort;
}();

/***/ }),

/***/ "./assets/js/lib/validation.js":
/*!*************************************!*\
  !*** ./assets/js/lib/validation.js ***!
  \*************************************/
/*! exports provided: checkUrlIsImage, isValidStringMaxLength, isValidStringMinLength, youtubeParser, emailValid, loginValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUrlIsImage", function() { return checkUrlIsImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStringMaxLength", function() { return isValidStringMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStringMinLength", function() { return isValidStringMinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtubeParser", function() { return youtubeParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValid", function() { return emailValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginValid", function() { return loginValid; });
var checkUrlIsImage = function checkUrlIsImage(url) {
  if (url.match(/\.(jpeg|jpg|png)$/)) {
    return true;
  }

  return false;
};
var isValidStringMaxLength = function isValidStringMaxLength(string, number) {
  if (string.length <= number) {
    return true;
  }

  return false;
};
var isValidStringMinLength = function isValidStringMinLength(string, number) {
  if (string.length < number) {
    return true;
  }

  return false;
};
var youtubeParser = function youtubeParser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[7].length == 11) {
    return match[7];
  } else {
    return false;
  }
};
var emailValid = function emailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
var loginValid = function loginValid(email, password) {
  var formData = new FormData();
  formData.append("email", email);
  formData.append("password", password); // data: formData,
  // type: "post",

  fetch("/api-login-valid", {
    body: formData,
    method: "POST"
  }).then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    console.log("Przykład 2:");
    console.log(resp);
  });
};

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~post-list~post-new~post-single"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXIvQ2hhbmdlVXNlcm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlci9wb3N0L3JlcG9ydC1wb3N0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvYWNjZXNzLWJsb2NrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvYWRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvY29sbGFib3JhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpYi9mYWNlYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL2ZvcmdvdC1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL21vYmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvc2VhcmNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpYi9zb3J0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYWNjZXNzQmxvY2siLCJpbml0U2VhcmNoZXIiLCJNb2JpbGVNZW51IiwiRm9yZ290UGFzc3dvcmQiLCJDaGFuZ2VVc2VybmFtZSIsImFjY2VwdENvb2tpZXMiLCJzb3J0RGVza3RvcCIsInR5cGVzTGlzdENsYXNzIiwiY2F0ZWdvcmllc0xpc3RDbGFzcyIsImFsaWFzQ2hlY2tib3hDYXRlZ29yeSIsImNsYXNzQWN0aXZlIiwic29ydFR5cGUiLCJhbGlhc0NoZWNrYm94VHlwZSIsIlNvcnQiLCJzb3J0TW9iaWxlIiwiUmVwb3J0UG9zdCIsImluaXRXYWxsVmVydGljYWxTdGlja3kiLCJ0b2dnbGVNb2JpbGVCYXIiLCJhY2Nlc0Jsb2NrIiwiaW5pdEZyYW1lcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmcmFtZSIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsImNvdmVyIiwiaW5pdCIsImJ1dHRvbiIsImlucHV0IiwiZXJyb3JGcmFtZSIsImxvYWRlciIsImNvbnRlbnQiLCJ3YXJuaW5nIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInZhbHVlIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwidHlwZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjYWNoZSIsImRhdGFUeXBlIiwiYmVmb3JlU2VuZCIsInNob3dMb2FkZXIiLCJoaWRlQ29udGVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJlcnJvciIsImFkZCIsImlubmVyVGV4dCIsImhpZGVMb2FkZXIiLCJzaG93Q29udGVudCIsImluaXRzIiwiY2xvc2UiLCJ0ZXh0YXJlYSIsImluaXRDbGlja0J1dHRvbiIsImluaXRDbG9zZUZyYW1lIiwicG9zdElEIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsInRhcmdldCIsIm1zZyIsImxlbmd0aCIsImNsb3NlRnJhbWUiLCJhY2Nlc3NCbG9ja0luaXQiLCJhY2Nlc3NCbG9ja0Nsb3NlIiwiYWNjZXNzQmxvY2tDb3ZlciIsImxpc3QiLCJlbGVtZW50IiwidGFnTmFtZSIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsInZlcnRpY2FsQWRzIiwibW9iaWxlQmFyIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJjb2xsYWJvcmF0aW9uIiwiaXNMb2dnZWQiLCJjb2xsYWJvcmF0aW9uRnJhbWUiLCJjbG9zZUFjdGlvbiIsImlzQ29va2llcyIsImdldENvb2tpZSIsImlzSW5jbHVkZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJpbmNsdWRlcyIsInNldENvb2tpZSIsImNvb2tpZXNBY2NlcHQiLCJjb29raWVzIiwibmFtZSIsInZhbCIsImRheXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsImNvb2tpZU5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJjb29raWVWYWwiLCJjb29raWVUZXh0IiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJzcGxpdCIsImkiLCJkZWNvZGVVUklDb21wb25lbnQiLCJpbml0RmFjZWJvb2tMb2dpbiIsImZhY2Vib29rQWNjZXNzIiwiYnRuIiwibG9naW5XaXRoRmFjZWJvb2siLCJGQiIsImxvZ2luIiwicmVzcG9uc2UiLCJhdXRoUmVzcG9uc2UiLCJnZXRGYlVzZXJEYXRhIiwiYXBpIiwibG9jYWxlIiwiZmllbGRzIiwiZmJMb2dvdXQiLCJsb2dvdXQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImZiU2hhcmUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsIndpbmRvd1RvcCIsInNjcmVlbiIsImhlaWdodCIsIndpbmRvd0xlZnQiLCJ3aWR0aCIsImxpbmsiLCJwb3N0VVJMIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVVJMIiwiaW1hZ2UiLCJ0ZXh0IiwiaW5mbyIsImVtYWlsIiwiaGlkZUluZm8iLCJpc0VtYWlsVmFsaWQiLCJzaG93U3VjY2VzcyIsInNob3dFcnJvciIsInN0eWxlIiwib3BhY2l0eSIsImVtYWlsVmFsaWQiLCJpbml0QnRuIiwiaW5pdE1vYmlsZU1lbnVGcmFtZSIsImFjdGlvbkl0ZW1zIiwiaW5pdEV2ZW50IiwiaW5pdE1vYmlsZU1lbnUiLCJpbml0SXRlbUNsaWNrIiwiaW5pdENsb3NlQ2xpY2siLCJpbml0U2hvd0NsaWNrIiwiaGlkZU1vYmlsZU1lbnUiLCJzaG93TW9iaWxlTWVudSIsIml0ZW0iLCJ0b2dnbGUiLCJzaG93Q2hpbGRXcmFwIiwiaGlkZUNoaWxkV3JhcCIsInNlYXJjaGVyRnJhbWUiLCJpbnB1dFRleHQiLCJidXR0b25TdGF0aWMiLCJpbnB1dFRleHRTdGF0aWMiLCJmb2N1cyIsIk9iamVjdCIsImFzc2lnbiIsInR5cGVzTGlzdCIsImNhdGVnb3JpZXNMaXN0IiwiaW5pdENsaWNrVHlwZXMiLCJpbml0Q2xpY2tDYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJ0b2dnbGVDYXRlZ29yeSIsImNoZWNrYm94IiwiY2hlY2tlZCIsInVuY2hlY2tBbGxUeXBlcyIsInVuY2hlY2tBbGxUeXBlQ2hlY2tib3hlcyIsInNldFR5cGVDaGVja2JveCIsImNoZWNrYm94ZXMiLCJjaGVja1VybElzSW1hZ2UiLCJtYXRjaCIsImlzVmFsaWRTdHJpbmdNYXhMZW5ndGgiLCJzdHJpbmciLCJudW1iZXIiLCJpc1ZhbGlkU3RyaW5nTWluTGVuZ3RoIiwieW91dHViZVBhcnNlciIsInJlZ0V4cCIsInRlc3QiLCJsb2dpblZhbGlkIiwicGFzc3dvcmQiLCJmZXRjaCIsImJvZHkiLCJtZXRob2QiLCJ0aGVuIiwicmVzcCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFHQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFVBQUNDLEtBQUQsRUFBVztBQUNuREMsdUVBQVc7QUFDWEMsb0VBQVk7QUFDWixNQUFJQywyREFBSjtBQUNBLE1BQUlDLDREQUFKO0FBQ0EsTUFBSUMsOERBQUo7QUFDQUMsb0VBQWE7QUFDYixNQUFNQyxXQUFXLEdBQUc7QUFDaEJDLGtCQUFjLEVBQUUsbUJB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LFVBQWEsQ0FBQVAsS0FBSyxFQUFJO0FBQ2pDLFNBQU8sNkJBQTZCaUQsSUFBN0IsQ0FBa0NqRCxLQUFsQyxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1rRCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDbEQsS0FBRCxFQUFRbUQsUUFBUixFQUFxQjtBQUM3QyxNQUFNeEssUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsVUFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCbUgsS0FBekI7QUFDQXJILFVBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFoQixFQUE0QnNLLFFBQTVCLEVBSDZDLENBSTdDO0FBQ0E7O0FBQ0FDLE9BQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUN4QkMsUUFBSSxFQUFFMUssUUFEa0I7QUFFeEIySyxVQUFNLEVBQUU7QUFGZ0IsR0FBckIsQ0FBTCxDQUlHQyxJQUpILENBSVEsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsR0FKWixFQUtHRixJQUxILENBS1EsVUFBQUMsSUFBSSxFQUFJO0FBQ1o3SCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZNEgsSUFBWjtBQUNELEdBUkg7QUFTRCxDQWZNLEM7Ozs7Ozs7Ozs7O0FDbkNQLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5cbnJlcXVpcmUoJy4uL3Njc3MvYXBwLnNjc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5cbmltcG9ydCB7U29ydH0gZnJvbSAnLi9saWIvc29ydCc7XG5pbXBvcnQge2luaXRTZWFyY2hlcn0gZnJvbSAnLi9saWIvc2VhcmNoZXInO1xuaW1wb3J0IFJlcG9ydFBvc3QgZnJvbSAnLi9oZWxwZXIvcG9zdC9yZXBvcnQtcG9zdCc7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSAnLi9saWIvZm9yZ290LXBhc3N3b3JkJztcbmltcG9ydCB7TW9iaWxlTWVudX0gZnJvbSAnLi9saWIvbW9iaWxlLW1lbnUnO1xuaW1wb3J0IENoYW5nZVVzZXJuYW1lIGZyb20gXCIuL2hlbHBlci9DaGFuZ2VVc2VybmFtZVwiO1xuaW1wb3J0IHthY2Nlc3NCbG9ja30gZnJvbSAnLi9saWIvYWNjZXNzLWJsb2NrJ1xuaW1wb3J0IHthY2NlcHRDb29raWVzfSBmcm9tIFwiLi9saWIvY29va2llc1wiO1xuaW1wb3J0IHtjb2xsYWJvcmF0aW9ufSBmcm9tIFwiLi9saWIvY29sbGFib3JhdGlvblwiO1xuaW1wb3J0IHtpbml0RmFjZWJvb2tMb2dpbn0gZnJvbSBcIi4vbGliL2ZhY2Vib29rXCI7XG5pbXBvcnQge2luaXRXYWxsVmVydGljYWxTdGlja3ksIHRvZ2dsZU1vYmlsZUJhcn0gZnJvbSBcIi4vbGliL2Fkc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgIGFjY2Vzc0Jsb2NrKCk7XG4gICAgaW5pdFNlYXJjaGVyKCk7XG4gICAgbmV3IE1vYmlsZU1lbnUoKTtcbiAgICBuZXcgRm9yZ290UGFzc3dvcmQoKTtcbiAgICBuZXcgQ2hhbmdlVXNlcm5hbWUoKTtcbiAgICBhY2NlcHRDb29raWVzKCk7XG4gICAgY29uc3Qgc29ydERlc2t0b3AgPSB7XG4gICAgICAgIHR5cGVzTGlzdENsYXNzOiAnaGVhZGVyLXNvcnRfX3R5cGUnLFxuICAgICAgICBjYXRlZ29yaWVzTGlzdENsYXNzOiAnaGVhZGVyLXNvcnRfX2NhdGVnb3J5JyxcbiAgICAgICAgYWxpYXNDaGVja2JveENhdGVnb3J5OiAnY2hlY2tib3gtZGVza3RvcC1jYXRlZ29yeScsXG4gICAgICAgIGNsYXNzQWN0aXZlOiAnaGVhZGVyLXNvcnRfX2l0ZW0tLWFjdGl2ZScsXG4gICAgICAgIHNvcnRUeXBlOiAnc29ydC10eXBlLWRlc2t0b3AnLFxuICAgICAgICBhbGlhc0NoZWNrYm94VHlwZTogJ2NoZWNrYm94LWRlc2t0b3AtdHlwZSdcbiAgICB9O1xuICAgIG5ldyBTb3J0KHNvcnREZXNrdG9wKTtcbiAgICBjb25zdCBzb3J0TW9iaWxlID0ge1xuICAgICAgICB0eXBlc0xpc3RDbGFzczogJ2hlYWRlci1tb2JpbGVfX3R5cGUnLFxuICAgICAgICBjYXRlZ29yaWVzTGlzdENsYXNzOiAnaGVhZGVyLW1vYmlsZV9fY2F0ZWdvcnknLFxuICAgICAgICBhbGlhc0NoZWNrYm94Q2F0ZWdvcnk6ICdjaGVja2JveC1tb2JpbGUtY2F0ZWdvcnknLFxuICAgICAgICBjbGFzc0FjdGl2ZTogJ2hlYWRlci1tb2JpbGVfX3NvcnQtaXRlbS0tYWN0aXZlJyxcbiAgICAgICAgc29ydFR5cGU6ICdzb3J0LXR5cGUtbW9iaWxlJyxcbiAgICAgICAgYWxpYXNDaGVja2JveFR5cGU6ICdjaGVja2JveC1tb2JpbGUtdHlwZSdcbiAgICB9O1xuICAgIG5ldyBTb3J0KHNvcnRNb2JpbGUpO1xuXG4gICAgbmV3IFJlcG9ydFBvc3QoKTtcbiAgICBpbml0V2FsbFZlcnRpY2FsU3RpY2t5KCk7XG4gICAgdG9nZ2xlTW9iaWxlQmFyKCk7XG59KTtcblxuXG5jb25zdCBhY2Nlc0Jsb2NrID0gKCkgPT4ge1xuICAgIGNvbnN0IGluaXRGcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjZXNzLWJsb2NrX19pbml0Jyk7XG4gICAgaW5pdEZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydFBvc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS11c2VybmFtZScpO1xuICAgICAgICB0aGlzLmNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdXNlcm5hbWVfX2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdXNlcm5hbWVfX2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBlcnJvckZyYW1lID0gdGhpcy5mcmFtZS5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVzZXJuYW1lX19lcnJvcicpO1xuICAgICAgICAgICAgY29uc3QgbG9hZGVyID0gdGhpcy5mcmFtZS5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVzZXJuYW1lX19fbG9hZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5mcmFtZS5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVzZXJuYW1lX19jb250ZW50Jyk7XG4gICAgICAgICAgICBjb25zdCB3YXJuaW5nID0gdGhpcy5mcmFtZS5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXVzZXJuYW1lX193YXJuaW5nJyk7XG5cbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJuYW1lXCIsIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpLWNoYW5nZS11c2VybmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2FkZXIobG9hZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRlbnQoY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtzdGF0dXMsIGVycm9yfSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmFtZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JGcmFtZS5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJUZXh0ID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKGxvYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChjb250ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0xvYWRlcihsb2FkZXIpIHtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cbiAgICBoaWRlTG9hZGVyKGxvYWRlcikge1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxuICAgIHNob3dDb250ZW50KGNvbnRlbnQpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9XG4gICAgaGlkZUNvbnRlbnQoY29udGVudCkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cbiAgICBzaG93Q292ZXIoKXtcbiAgICAgICAgdGhpcy5jb3Zlci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9XG4gICAgaGlkZUNvdmVyKCl7XG4gICAgICAgIHRoaXMuY292ZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydFBvc3R7XG4gICAgY29uc3RydWN0b3Ioc29ydERlc2t0b3ApIHtcbiAgICAgICAgdGhpcy5pbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtYmFyX19yZXBvcnQtcG9zdCcpO1xuICAgICAgICB0aGlzLmZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9ydC1wb3N0Jyk7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0LXBvc3RfX2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0LXBvc3RfX2J1dHRvbicpO1xuICAgICAgICB0aGlzLnRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcG9ydC1wb3N0X190ZXh0YXJlYScpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0Q2xpY2tCdXR0b24oKTtcbiAgICAgICAgdGhpcy5pbml0Q2xvc2VGcmFtZSgpO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5pbml0cy5mb3JFYWNoKGluaXQgPT4ge1xuICAgICAgICAgICAgaW5pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0SUQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b24uZGF0YXNldC5pZCA9IHBvc3RJRDtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q2xpY2tCdXR0b24oKXtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3N0SUQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IHRoaXMudGV4dGFyZWEudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChtc2cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicG9zdElEXCIsIHBvc3RJRCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibXNnXCIsIG1zZyk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS1yZXBvcnQtcG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VGcmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q2xvc2VGcmFtZSgpe1xuICAgICAgICB0aGlzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5jbG9zZUZyYW1lKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNsb3NlRnJhbWUoKXtcbiAgICAgICAgdGhpcy5mcmFtZS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmJ1dHRvbi5kYXRhc2V0LmlkID0gMDtcbiAgICAgICAgdGhpcy5jb3Zlci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9XG5cblxuXG59IiwiZXhwb3J0IGNvbnN0IGFjY2Vzc0Jsb2NrID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2Nlc3MtYmxvY2tcIik7XG4gICAgY29uc3QgYWNjZXNzQmxvY2tJbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2Nlc3MtYmxvY2tfX2luaXRcIik7XG4gICAgY29uc3QgYWNjZXNzQmxvY2tDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjZXNzLWJsb2NrX19jbG9zZVwiKTtcbiAgICBjb25zdCBhY2Nlc3NCbG9ja0NvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2Nlc3MtYmxvY2tfX2NvdmVyXCIpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2xpc3QnKTtcbiAgICBpZiAobGlzdCkge1xuICAgICAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgIT0gJ0RJVicpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2Nlc3MtYmxvY2tfX2luaXQnKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYWNjZXNzQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICAgICAgICAgICBhY2Nlc3NCbG9ja0NvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWNjZXNzQmxvY2tJbml0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICAgICBhY2Nlc3NCbG9ja0NvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICBhY2Nlc3NCbG9ja0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgIGFjY2Vzc0Jsb2NrQ292ZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICB9KTtcbn07XG5cbiIsImV4cG9ydCBjb25zdCBpbml0V2FsbFZlcnRpY2FsU3RpY2t5ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgdmVydGljYWxBZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRzLXdhbGxfX3ZlcnRpY2FsJyk7XG5cblxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vICAgICB2ZXJ0aWNhbEFkcy5mb3JFYWNoKHZlcnRpY2FsQWQgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgdG9wID0gdGhpcy5zY3JvbGxZO1xuICAgIC8vICAgICAgICAgaWYgKHRvcCA+IDExNSkge1xuICAgIC8vICAgICAgICAgICAgIHZlcnRpY2FsQWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHZlcnRpY2FsQWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSwgZmFsc2UpO1xuXG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlTW9iaWxlQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vYmlsZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZHMtbW9iaWxlX19iYXInKTtcbiAgICBjb25zb2xlLmxvZygndmFyJyxtb2JpbGVCYXIpO1xuICAgIGlmIChtb2JpbGVCYXIpIHtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneHh4Jyxtb2JpbGVCYXIpO1xuICAgICAgICAgICAgbW9iaWxlQmFyLmNsYXNzTGlzdC5hZGQoJ2Fkcy1tb2JpbGVfX2Jhci0tYW5pbWF0ZWQnKTtcbiAgICAgICAgfSwgMzAwMCk7XG5cbiAgICB9XG59OyIsImltcG9ydCB7Z2V0Q29va2llLHNldENvb2tpZX0gZnJvbSBcIi4vY29va2llc1wiO1xuXG5leHBvcnQgY29uc3QgY29sbGFib3JhdGlvbiA9ICgpID0+IHtcblxuICAgIGxldCBpc0xvZ2dlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9aXNMb2dnZWRdJyk7XG4gICAgbGV0IGNvbGxhYm9yYXRpb25GcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsYWJvcmF0aW9uJyk7XG4gICAgbGV0IGNsb3NlID0gY29sbGFib3JhdGlvbkZyYW1lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsYWJvcmF0aW9uX19jbG9zZS0tYWN0aW9uJyk7XG4gICAgbGV0IGNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gICAgbGV0IGNsb3NlQWN0aW9uID0gY29sbGFib3JhdGlvbkZyYW1lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsYWJvcmF0aW9uX19jbG9zZS0tYWN0aW9uJyk7XG4gICAgbGV0IGlzQ29va2llcyA9IGdldENvb2tpZSgnY29sbGFib3JhdGlvbicpO1xuICAgIGxldCBpc0luY2x1ZGVkICA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiZG9kYWotcG9zdFwiKTtcbiAgICBpc0xvZ2dlZCA9IGlzTG9nZ2VkID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zb2xlLmxvZygnaXNMb2dnZWQnLCBpc0xvZ2dlZCk7XG4gICAgaWYgKCFpc0xvZ2dlZCkge1xuICAgICAgICBpZighaXNJbmNsdWRlZCApIHtcbiAgICAgICAgICAgIGlmIChpc0Nvb2tpZXMgIT09ICdoaWRkZW4nKSB7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGFib3JhdGlvbkZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICBjb3Zlci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICB9LCAxNTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNsb3NlQWN0aW9uLmZvckVhY2goY2xvc2UgPT4ge1xuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbGxhYm9yYXRpb25GcmFtZSAuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgIHNldENvb2tpZSgnY29sbGFib3JhdGlvbicsJ2hpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59O1xuIiwiZXhwb3J0IGNvbnN0IGFjY2VwdENvb2tpZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb29raWVzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZXNfX2FjY2VwdCcpO1xuICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llcycpO1xuXG4gICAgaWYgKGNvb2tpZXMgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZ2V0Q29va2llKCdpc0FjY2VwdENvb2tpZXMnKSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvb2tpZXMuY2xhc3NMaXN0LnJlbW92ZSgnY29va2llc19faGlkZScpO1xuICAgICAgICAgICAgY29va2llc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb29raWVzLmNsYXNzTGlzdC5hZGQoJ2Nvb2tpZXNfX2hpZGUnKTtcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoJ2lzQWNjZXB0Q29va2llcycsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWwsIGRheXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgIGNvbnN0IGNvb2tpZVZhbCA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuICAgICAgICBsZXQgY29va2llVGV4dCA9IGNvb2tpZU5hbWUgKyBcIj1cIiArIGNvb2tpZVZhbDtcblxuICAgICAgICBpZiAodHlwZW9mIGRheXMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZGF0YS5zZXRUaW1lKGRhdGEuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICAgICAgICBjb29raWVUZXh0ICs9IFwiOyBleHBpcmVzPVwiICsgZGF0YS50b0dNVFN0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIGNvb2tpZVRleHQgKz0gXCI7IHBhdGg9XCIgKyBwYXRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgIGNvb2tpZVRleHQgKz0gXCI7IGRvbWFpbj1cIiArIGRvbWFpbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VjdXJlKSB7XG4gICAgICAgICAgICBjb29raWVUZXh0ICs9IFwiOyBzZWN1cmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVRleHQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChuYW1lKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAhPT0gXCJcIikge1xuICAgICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KC87ICovKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKVswXTtcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZVZhbCA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpWzFdO1xuICAgICAgICAgICAgaWYgKGNvb2tpZU5hbWUgPT09IGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJleHBvcnQgY29uc3QgaW5pdEZhY2Vib29rTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgZmFjZWJvb2tBY2Nlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjZWJvb2stYWNjZXNzLWluaXQnKTtcbiAgICBmYWNlYm9va0FjY2Vzcy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbG9naW5XaXRoRmFjZWJvb2soKTtcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuXG5cbmNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4ge1xuXG4gICAgRkIubG9naW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGxvZ2dlZCBpbiAmYW1wOyBjb29raWUgc2V0IScpO1xuICAgICAgICAgICAgZ2V0RmJVc2VyRGF0YSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBjYW5jZWxsZWQgbG9naW4gb3IgZGlkIG5vdCBmdWxseSBhdXRob3JpemUuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBnZXRGYlVzZXJEYXRhKCl7XG4gICAgRkIuYXBpKCcvbWUnLCB7bG9jYWxlOiAncGxfUEwnLCBmaWVsZHM6ICdpZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxsaW5rLGdlbmRlcixsb2NhbGUscGljdHVyZSd9LFxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScscmVzcG9uc2UpO1xuICAgICAgICB9KTtcbn1cblxuLy8gTG9nb3V0IGZyb20gZmFjZWJvb2tcbmZ1bmN0aW9uIGZiTG9nb3V0KCkge1xuICAgIEZCLmxvZ291dChmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiTGluaycpLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIixcImZiTG9naW4oKVwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiTGluaycpLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cImZibG9naW4ucG5nXCIvPic7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyRGF0YScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykuaW5uZXJIVE1MID0gJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dvdXQgZnJvbSBGYWNlYm9vay4nO1xuICAgIH0pO1xuICAgIEZCLmxvZ291dChmdW5jdGlvbigpIHtcbiAgICB9KTtcblxufVxuXG5cblxuZXhwb3J0IGNvbnN0IGZiU2hhcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtYmFyX19zaGFyZS1mYWNlYm9vaycpO1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gNTIwO1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IDM1MDtcbiAgICBjb25zdCB3aW5kb3dUb3AgPSAoc2NyZWVuLmhlaWdodCAvIDIpIC0gKHdpbmRvd0hlaWdodCAvIDIpO1xuICAgIGNvbnN0IHdpbmRvd0xlZnQgPSAoc2NyZWVuLndpZHRoIC8gMikgLSAod2luZG93V2lkdGggLyAyKTtcblxuICAgIGluaXQuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGluaycsIGxpbmspO1xuICAgICAgICAgICAgY29uc3QgcG9zdFVSTCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmw7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW1hZ2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3M9MTAwJnBbdGl0bGVdPSR7dGl0bGV9JnBbc3VtbWFyeV09JHtkZXNjcmlwdGlvbn0mcFt1cmxdPSR7cG9zdFVSTH0mcFtpbWFnZXNdWzBdPSR7aW1hZ2VVUkx9LHNoYXJlciwgXG4gICAgICAgICAgICB0b3A9JHt3aW5kb3dUb3B9LFxuICAgICAgICAgICAgbGVmdD0ke3dpbmRvd0xlZnR9LFxuICAgICAgICAgICAgdG9vbGJhcj0wLHN0YXR1cz0wLFxuICAgICAgICAgICAgd2lkdGg9JHt3aW5kb3dXaWR0aH0sXG4gICAgICAgICAgICBoZWlnaHQ9JHt3aW5kb3dIZWlnaHR9YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cmwnLHVybCk7XG4gICAgICAgICAgICAvLyB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IHtlbWFpbFZhbGlkfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkIHtcbiAgICBjb25zdHJ1Y3Rvcihzb3J0RGVza3RvcCkge1xuICAgICAgICB0aGlzLmluaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmdvdC1wYXNzd29yZF9faW5pdCcpO1xuICAgICAgICB0aGlzLmZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmdvdC1wYXNzd29yZCcpO1xuICAgICAgICB0aGlzLmNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmdvdC1wYXNzd29yZF9fY2xvc2UnKTtcbiAgICAgICAgdGhpcy5jb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3Jnb3QtcGFzc3dvcmRfX2J1dHRvbicpO1xuICAgICAgICB0aGlzLnRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZ290LXBhc3N3b3JkX190ZXh0Jyk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3Jnb3QtcGFzc3dvcmRfX2NvbnRlbnQnKTtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZ290LXBhc3N3b3JkX19sb2FkZXInKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmdvdC1wYXNzd29yZF9fc3VjY2VzcycpO1xuICAgICAgICB0aGlzLmVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmdvdC1wYXNzd29yZF9fZXJyb3InKTtcbiAgICAgICAgdGhpcy5pbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmdvdC1wYXNzd29yZF9faW5mbycpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5pbml0Q2xpY2tCdXR0b24oKTtcbiAgICAgICAgdGhpcy5pbml0Q2xvc2VGcmFtZSgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdHMuZm9yRWFjaChpbml0ID0+IHtcbiAgICAgICAgICAgIGluaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY292ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q2xpY2tCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMudGV4dC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKGVtYWlsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVJbmZvKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbWFpbFZhbGlkKGVtYWlsKSkge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS1mb3Jnb3QtcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3N0YXR1c30gPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCdUYWtpZWdvIGFkcmVzdSBlbWFpbCBuaWUgbWEgdyBuYXN6ZWogYmF6aWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoJ1BvZGFueSBlbWFpbCBqZXN0IG5pZXBvcHJhd255Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGlkZUluZm8oKXtcbiAgICAgICAgdGhpcy5pbmZvLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cbiAgICBzaG93RXJyb3IobXNnKXtcbiAgICAgICAgdGhpcy5lcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgdGhpcy5lcnJvci5pbm5lclRleHQgPSBtc2c7XG4gICAgfVxuICAgIGluaXRDbG9zZUZyYW1lKCkge1xuICAgICAgICB0aGlzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUZyYW1lKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvd1N1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuc3VjY2Vzcy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9XG5cbiAgICBjbG9zZUZyYW1lKCkge1xuICAgICAgICB0aGlzLmZyYW1lLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICB0aGlzLnRleHQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5idXR0b24uZGF0YXNldC5pZCA9IDA7XG4gICAgICAgIHRoaXMuY292ZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxuXG4gICAgc2hvd0xvYWRlcigpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxuXG4gICAgaGlkZUxvYWRlcigpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxuXG4gICAgaGlkZUNvbnRlbnQoKSB7XG4gICAgICAgIC8vIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cblxuICAgIGlzRW1haWxWYWxpZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gZW1haWxWYWxpZChlbWFpbCk7XG4gICAgfVxuXG5cbn0iLCJleHBvcnQgY2xhc3MgTW9iaWxlTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbW9iaWxlX19pbml0Jyk7XG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZU1lbnVGcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbW9iaWxlX19mcmFtZScpO1xuICAgICAgICB0aGlzLmFjdGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1tb2JpbGVfX2l0ZW0tLWFjdGlvbicpO1xuICAgICAgICB0aGlzLmNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1tb2JpbGVfX2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuaW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbW9iaWxlX19pbml0Jyk7XG5cbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZU1lbnUoKTtcbiAgICAgICAgdGhpcy5pbml0SXRlbUNsaWNrKCk7XG4gICAgICAgIHRoaXMuaW5pdENsb3NlQ2xpY2soKTtcbiAgICAgICAgdGhpcy5pbml0U2hvd0NsaWNrKCk7XG4gICAgfVxuXG4gICAgaW5pdENsb3NlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVNb2JpbGVNZW51KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0U2hvd0NsaWNrKCkge1xuXG4gICAgICAgIHRoaXMuaW5pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vYmlsZU1lbnUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd01vYmlsZU1lbnUoKSB7XG5cbiAgICAgICAgdGhpcy5pbml0TW9iaWxlTWVudUZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cblxuICAgIGhpZGVNb2JpbGVNZW51KCkge1xuICAgICAgICB0aGlzLmluaXRNb2JpbGVNZW51RnJhbWUuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxuXG5cbiAgICBpbml0SXRlbUNsaWNrKCkge1xuICAgICAgICB0aGlzLmFjdGlvbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci1tb2JpbGVfX2l0ZW0tLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuZGF0YXNldC5pZDtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLW1vYmlsZV9faXRlbS0tc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDaGlsZFdyYXAobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1vYmlsZV9faXRlbS0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVDaGlsZFdyYXAobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLW1vYmlsZV9faXRlbS0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHNob3dDaGlsZFdyYXAobmFtZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hpbGQtJHtuYW1lfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cblxuICAgIGhpZGVDaGlsZFdyYXAobmFtZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hpbGQtJHtuYW1lfWApLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cblxuICAgIGluaXRNb2JpbGVNZW51KCkge1xuICAgICAgICB0aGlzLmluaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLW1vYmlsZV9faW5pdC0tYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pbml0QnRuLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLW1vYmlsZV9faW5pdC0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2JpbGVNZW51KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1vYmlsZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0iLCJleHBvcnQgY29uc3QgaW5pdFNlYXJjaGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGluaXRTZWFyY2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hlcl9faW5pdCcpO1xuICAgIGNvbnN0IHNlYXJjaGVyRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoZXInKTtcbiAgICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoZXJfX3RleHQnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoZXJfX2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvblN0YXRpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hlci1zdGF0aWNfX2J1dHRvbicpO1xuICAgIGNvbnN0IGlucHV0VGV4dFN0YXRpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hlci1zdGF0aWNfX3RleHQnKTtcblxuICAgIGluaXRTZWFyY2hlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2VhcmNoZXJGcmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgaW5pdFNlYXJjaGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBpbnB1dFRleHQuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBpZihpbnB1dFRleHQudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoaW5wdXRUZXh0U3RhdGljKXtcbiAgICAgICAgYnV0dG9uU3RhdGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgICAgICBpZihpbnB1dFRleHRTdGF0aWMudmFsdWUubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59OyIsImV4cG9ydCBjbGFzcyBTb3J0IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3J0RGVza3RvcCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKCB0aGlzLCBzb3J0RGVza3RvcCApO1xuXG4gICAgICAgIHRoaXMudHlwZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy50eXBlc0xpc3RDbGFzc31gKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RoaXMuY2F0ZWdvcmllc0xpc3RDbGFzc31gKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdENsaWNrVHlwZXMoKTtcbiAgICAgICAgdGhpcy5pbml0Q2xpY2tDYXRlZ29yaWVzKClcbiAgICB9XG5cbiAgICBpbml0Q2xpY2tDYXRlZ29yaWVzKCkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXNMaXN0LmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NBY3RpdmUpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2lkPVwiJHt0aGlzLmFsaWFzQ2hlY2tib3hDYXRlZ29yeX0tJHtjYXRlZ29yeS5pZH1cIl1gKTtcbiAgICAgICAgaWYgKGNhdGVnb3J5LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzQWN0aXZlKSkge1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdENsaWNrVHlwZXMoKSB7XG4gICAgICAgIHRoaXMudHlwZXNMaXN0LmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICAgIHR5cGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGxUeXBlcygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NBY3RpdmUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsVHlwZUNoZWNrYm94ZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFR5cGVDaGVja2JveCh0eXBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1bmNoZWNrQWxsVHlwZXMoKSB7XG4gICAgICAgIHRoaXMudHlwZXNMaXN0LmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICB0eXBlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc0FjdGl2ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFR5cGVDaGVja2JveCh0eXBlKXtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1baWQ9XCIke3RoaXMuYWxpYXNDaGVja2JveFR5cGV9LSR7dHlwZS5pZH1cIl1gKTtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdW5jaGVja0FsbFR5cGVDaGVja2JveGVzKCl7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLnNvcnRUeXBlfWApO1xuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufSIsImV4cG9ydCBjb25zdCBjaGVja1VybElzSW1hZ2UgPSB1cmwgPT4ge1xuICBpZiAodXJsLm1hdGNoKC9cXC4oanBlZ3xqcGd8cG5nKSQvKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RyaW5nTWF4TGVuZ3RoID0gKHN0cmluZywgbnVtYmVyKSA9PiB7XG4gIGlmIChzdHJpbmcubGVuZ3RoIDw9IG51bWJlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgaXNWYWxpZFN0cmluZ01pbkxlbmd0aCA9IChzdHJpbmcsIG51bWJlcikgPT4ge1xuICBpZiAoc3RyaW5nLmxlbmd0aCA8IG51bWJlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHlvdXR1YmVQYXJzZXIgPSB1cmwgPT4ge1xuICBsZXQgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcbiAgbGV0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4cCk7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFs3XS5sZW5ndGggPT0gMTEpIHtcbiAgICByZXR1cm4gbWF0Y2hbN107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZW1haWxWYWxpZCA9IGVtYWlsID0+IHtcbiAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVmFsaWQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsKTtcbiAgZm9ybURhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgcGFzc3dvcmQpO1xuICAvLyBkYXRhOiBmb3JtRGF0YSxcbiAgLy8gdHlwZTogXCJwb3N0XCIsXG4gIGZldGNoKFwiL2FwaS1sb2dpbi12YWxpZFwiLCB7XG4gICAgYm9keTogZm9ybURhdGEsXG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9KVxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByenlrxYJhZCAyOlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgIH0pO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=