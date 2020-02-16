(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-new"],{

/***/ "./assets/css/ckeditor.css":
/*!*********************************!*\
  !*** ./assets/css/ckeditor.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/entry/post-new.js":
/*!*************************************!*\
  !*** ./assets/js/entry/post-new.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _helper_post_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper/post/common */ "./assets/js/helper/post/common.js");
/* harmony import */ var _lib_ckeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lib/ckeditor */ "./assets/js/lib/ckeditor.js");
/* harmony import */ var _lib_ckeditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_ckeditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_post_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/post/embed */ "./assets/js/helper/post/embed.js");
/* harmony import */ var _css_ckeditor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/ckeditor.css */ "./assets/css/ckeditor.css");
/* harmony import */ var _css_ckeditor_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_ckeditor_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../lib/validation */ "./assets/js/lib/validation.js");
/* harmony import */ var _helper_post_new_post_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helper/post/new-post-helper */ "./assets/js/helper/post/new-post-helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







window.addEventListener("DOMContentLoaded", function (event) {
  new Select(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["singsCounter"]);
  new NewPost();
  new Categories();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["singsCounter"])(document.querySelector("#create_post_form_title"), document.querySelector(".field-label__counter--title", 250));
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_0__["singsCounter"])(document.querySelector("#create_post_form_description"), document.querySelector(".field-label__counter--description", 750));
});

var Select =
/*#__PURE__*/
function () {
  function Select(singsCounter) {
    _classCallCheck(this, Select);

    this.singsCounter = singsCounter;
    this.select = document.querySelector(".create-select");
    this.init = this.select.querySelector(".create-select__init");
    this.label = this.select.querySelector(".create-select__init-label");
    this.initIcon = this.select.querySelector(".create-select__init-icon i");
    this.dropdown = this.select.querySelector(".create-select__dropdown");
    this.childAction = this.select.querySelectorAll(".create-select__item--action");
    this.items = this.select.querySelectorAll(".create-select__item");
    this.childs = this.select.querySelectorAll(".create-select__wrap-child");
    this.childItems = this.select.querySelectorAll(".create-select__item-child");
    this.childWrap = this.select.querySelectorAll(".create-select__wrap-child");
    this.typePost = this.select.querySelector("#type-post");
    this.typeData = this.select.querySelector("#type-data");
    this.textareaDescription = document.querySelector("#create_post_form_description");
    this.clipboardPosts = document.querySelectorAll(".create__post-clipboard");
    this.currentTypePost = "graphic";
    this.initClick();
    this.initChildClick();
    this.initChoiceClick();
  }

  _createClass(Select, [{
    key: "initCKEditor",
    value: function initCKEditor(editor) {
      console.log("editor", editor);
      _lib_ckeditor__WEBPACK_IMPORTED_MODULE_1___default.a.create(editor).then(function (editor) {
        window.editor = editor;
      })["catch"](function (err) {
        console.error(err.stack);
      });
    }
  }, {
    key: "initChoiceClick",
    value: function initChoiceClick() {
      var _this = this;

      this.childItems.forEach(function (child) {
        child.addEventListener("click", function (event) {
          var typePost = event.currentTarget.dataset.type;
          var typeData = event.currentTarget.dataset.child;
          var text = event.currentTarget.innerText.trim();

          _this.setLabelInit(typePost, text);

          _this.setIconInit(typeData);

          _this.resetAfterHide();

          _this.dropdown.classList.toggle("display-none");

          _this.setForm(typePost, typeData);
        });
      });
    }
  }, {
    key: "setForm",
    value: function setForm(typePost, typeData) {
      var data = {
        disc: "imageFromDisc",
        youtube: "youtubeLink",
        link: "imageFromLink"
      };
      this.typePost.value = typePost;
      this.typeData.value = data[typeData];
      var event = new Event("change");
      this.typePost.dispatchEvent(event);
      this.typeData.dispatchEvent(event);
      this.clearClipBoards();
      console.log(this.currentTypePost, typePost);

      if (this.currentTypePost != typePost) {
        this.switchDescriptionTextarea(typePost);
      }

      this.currentTypePost = typePost;
    }
  }, {
    key: "clearClipBoards",
    value: function clearClipBoards() {
      this.clipboardPosts.forEach(function (clipboard) {
        clipboard.innerHTML = "";
      });
    }
  }, {
    key: "switchDescriptionTextarea",
    value: function switchDescriptionTextarea(typePost) {
      var descriptionWrap = document.querySelector(".description-wrap");
      var oldTextarea = document.querySelector(".textarea-description--old");
      var cloneTextarea = document.querySelector(".textarea-description--clone");
      var newTextarea = cloneTextarea.cloneNode(true);
      newTextarea.classList.remove("textarea-description--clone");
      newTextarea.classList.remove("display-none");
      newTextarea.classList.add("textarea-description--old");
      newTextarea.setAttribute('name', 'description');
      newTextarea.dataset.id = "create_post_form_description";
      descriptionWrap.innerHTML = '';
      descriptionWrap.appendChild(newTextarea); // newTextarea.value = "new";
      // oldTextarea.value = "old";
      // cloneTextarea.value = "clone";
      // console.log('n',newTextarea, 'o',oldTextarea,'c',cloneTextarea );

      var limit = document.querySelector(".field-label__counter--description-limit");

      if (typePost == "graphic") {
        limit.innerText = "750";
        newTextarea.setAttribute("maxlength", 750);
        newTextarea.dataset.type = "graphic";
        newTextarea.classList.remove('textarea-description--ckeditor');
        this.setSignCounterForNewTextarea(newTextarea, 750);
        newTextarea.classList.remove(".ckeditor");
      } else if (typePost == "post") {
        limit.innerText = "10000";
        newTextarea.setAttribute("maxlength", 10000);
        newTextarea.dataset.type = "post";
        newTextarea.classList.add('textarea-description--ckeditor');
        newTextarea.classList.add(".ckeditor");
        this.setSignCounterForNewTextarea(newTextarea, 10000);
        this.initCKEditor(newTextarea);
      }
    }
  }, {
    key: "setSignCounterForNewTextarea",
    value: function setSignCounterForNewTextarea(newTextarea, limit) {
      this.singsCounter(newTextarea, document.querySelector(".field-label__counter--description", limit));
    }
  }, {
    key: "setLabelInit",
    value: function setLabelInit(type, text) {
      var info = {
        post: "Post",
        graphic: "Grafika"
      };
      this.label.innerText = info[type] + ": " + text.charAt(0).toLowerCase() + text.substring(1);
    }
  }, {
    key: "setIconInit",
    value: function setIconInit(type) {
      var iconClass = {
        link: ["fas", "fa-link"],
        youtube: ["fab", "fa-youtube"],
        disc: ["fas", "fa-cloud-upload-alt"]
      };
      this.initIcon.className = "";
      this.initIcon.classList.add(iconClass[type][0]);
      this.initIcon.classList.add(iconClass[type][1]);
    }
  }, {
    key: "initClick",
    value: function initClick() {
      var _this2 = this;

      this.init.addEventListener("click", function (event) {
        _this2.dropdown.classList.toggle("display-none");

        _this2.init.classList.toggle("create-select__init--selected");

        if (!_this2.init.classList.contains("create-select__init--selected")) {
          _this2.resetAfterHide();
        }
      });
    }
  }, {
    key: "initChildClick",
    value: function initChildClick() {
      var _this3 = this;

      this.childAction.forEach(function (element) {
        element.addEventListener("click", function (event) {
          var element = event.currentTarget;
          var id = element.dataset.id;

          var currentChild = _this3.select.querySelector("#child-".concat(id));

          element.classList.toggle("create-select__item--selected");

          _this3.childAction.forEach(function (child) {
            if (child != element) {
              child.classList.remove("create-select__item--selected");
            }
          });

          currentChild.classList.toggle("display-none");

          _this3.childWrap.forEach(function (child) {
            if (currentChild != child) {
              child.classList.add("display-none");
            }
          });
        });
      });
    }
  }, {
    key: "resetAfterHide",
    value: function resetAfterHide() {
      this.init.classList.remove("create-select__init--selected");
      this.items.forEach(function (item) {
        item.classList.remove("create-select__item--selected");
      });
      this.childs.forEach(function (item) {
        item.classList.add("display-none");
      });
    }
  }]);

  return Select;
}();

var Categories =
/*#__PURE__*/
function () {
  function Categories() {
    _classCallCheck(this, Categories);

    this.initClick();
  }

  _createClass(Categories, [{
    key: "initClick",
    value: function initClick() {
      var _this4 = this;

      document.querySelectorAll(".create-categories__item").forEach(function (category) {
        category.addEventListener("click", function () {
          _this4.afterClick(category);
        });
      });
    }
  }, {
    key: "afterClick",
    value: function afterClick(category) {
      this.toggleSelectedClass(category);
      this.toggleFormField(category);
    }
  }, {
    key: "toggleSelectedClass",
    value: function toggleSelectedClass(category) {
      category.classList.toggle("create-categories__item--active");
    }
  }, {
    key: "toggleFormField",
    value: function toggleFormField(category) {
      var checkbox = document.querySelector("input[type=\"checkbox\"][value=\"newCategory-".concat(category.id, "\"]"));

      if (category.classList.contains("create-categories__item--active")) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    }
  }]);

  return Categories;
}();

var NewPost =
/*#__PURE__*/
function (_NewPostHelper) {
  _inherits(NewPost, _NewPostHelper);

  function NewPost() {
    var _this5;

    _classCallCheck(this, NewPost);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(NewPost).call(this));
    _this5.fileUploaded = null;
    _this5.temponaryImageID = null;
    _this5.inputFile = document.querySelector("#file");
    _this5.clipboards = document.querySelectorAll(".create__post-clipboard");
    _this5.inputDiscTemponaryImage = document.querySelector("#disc_temponaryImage");
    _this5.postPreloaders = document.querySelectorAll(".create__post-preloader"); //functional fields

    _this5.title = document.querySelector(".field-wrap--title");
    _this5.description = document.querySelector(".field-wrap--description");
    _this5.typePostOptions = document.querySelectorAll(".create__post-option");
    _this5.data = {
      temponaryImageID: null,
      fileUploaded: null,
      selectType: "imageFromDisc",
      isConfirm: false,
      youtubeID: null
    };
    _this5.captchaSlider = document.querySelector(".create__captcha-slider");
    _this5.captchaCounter = document.querySelector(".create__captcha-counter");
    _this5.defaultCaptcha = 0;

    _this5.initEvents();

    _this5.fetchCurrentCaptcha();

    return _this5;
  }

  _createClass(NewPost, [{
    key: "fetchCurrentCaptcha",
    value: function fetchCurrentCaptcha() {
      var _this6 = this;

      $.ajax({
        url: "/api-fetch-current-captcha",
        data: "",
        type: "post",
        contentType: false,
        processData: false,
        cache: false,
        dataType: "json",
        success: function success(data) {
          _this6.defaultCaptcha = data["captcha"];
        }
      });
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.uploadImageFromDisc();
      this.fetchYoutubeField();
      this.initUploadImageFromUrl();
      this.initSubmit();
      this.initMenageTypePost();
      this.initCaptchaSlider();
    }
  }, {
    key: "initCaptchaSlider",
    value: function initCaptchaSlider() {
      var _this7 = this;

      this.captchaSlider.oninput = function () {
        _this7.captchaCounter.innerText = _this7.captchaSlider.value;
      };
    }
  }, {
    key: "initSubmit",
    value: function initSubmit() {
      var _this8 = this;

      var form = document.querySelector('form[name="create_post_form"]');
      form.addEventListener("submit", function (e) {
        if (!_this8.isSubmitValid()) {
          e.preventDefault();
        }
      });
    }
  }, {
    key: "isSubmitValid",
    value: function isSubmitValid() {
      var selectedType = document.querySelector("#type-post").value;
      var selectedData = document.querySelector("#type-data").value;
      var title = document.querySelector('textarea[name="title"]').value;
      var description = document.querySelector('textarea[name="description"]').value;
      var descriptionType = document.querySelector('textarea[name="description"]').dataset.type;
      var isConfirm = document.querySelector('input[type="checkbox"][name="isConfirm"]').checked;
      var errors = {};
      this.clearAllErrors();

      if (!this.validFileAdded()) {
        this.showErrorFrame("emptyFile", "file");
        errors["emptyFile"] = true;
      }

      if (title.length == 0) {
        this.showErrorFrame("emptyTitle", "title");
        errors["emptyTitle"] = true;
      }

      if (!isConfirm) {
        this.showErrorFrame("notConfirm", "isConfirm");
        errors["notConfirm"] = true;
      }

      if (!Object(_lib_validation__WEBPACK_IMPORTED_MODULE_4__["isValidStringMaxLength"])(title, 250)) {
        errors["titleTooLong"] = true;
        this.showErrorFrame("titleTooLong", "title");
      }

      if (!Object(_lib_validation__WEBPACK_IMPORTED_MODULE_4__["isValidStringMaxLength"])(description, descriptionType == "graphic" ? 750 : 10000)) {
        this.showErrorFrame(descriptionType == "graphic" ? "descriptionTooLongGraphic" : "descriptionTooLongPost", "description");
        errors["descriptionToLong"] = true;
      }

      if (!this.validFileAdded()) {
        this.showErrorFrame("emptyFile", "file");
        errors["emptyFile"] = true;
      }

      if (this.defaultCaptcha != this.captchaSlider.value) {
        this.showErrorFrame("captcha", "captcha");
        errors["captcha"] = true;
      }

      if (Object.keys(errors).length == 0) {
        return true;
      }

      return false;
    }
  }, {
    key: "uploadImageFromDisc",
    value: function uploadImageFromDisc() {
      var _this9 = this;

      this.inputFile.addEventListener("change", function (event) {
        var file = document.querySelector("[type=file]").files[0];
        var url = "/upload-temponary-image";
        var formData = new FormData();
        formData.append("file", file);

        _this9.post(url, formData);
      });
    }
  }, {
    key: "fetchYoutubeField",
    value: function fetchYoutubeField() {
      var _this10 = this;

      var linkYoutube = document.querySelector("#form__post-youtube");
      var url = "/upload-youtube-thumbnail";
      var timeout = null;
      linkYoutube.addEventListener("change", function () {
        // linkYoutube.onkeydown = e => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          var youtubeID = _this10.youtubeParser(linkYoutube.value);

          if (youtubeID) {
            var formData = new FormData();
            formData.append("youtubeID", youtubeID);

            _this10.setData("youtubeID", youtubeID);

            _this10.post(url, formData); // Do przemyślenia
            // const youtubeFrame = this.createYoutubeEmbed(youtubeID);
            // this.clipboard.innerHTML = youtubeFrame;4

          } else {
            setTimeout(function () {
              _this10.showErrorFrame("youtubeError", "file");
            }, 1000);
          }
        });
      });
    }
  }, {
    key: "initUploadImageFromUrl",
    value: function initUploadImageFromUrl() {
      var _this11 = this;

      var url = "/upload-link-thumbnail";
      var linkUrl = document.querySelector("#form__post-link");
      var timeout = null;

      linkUrl.onkeydown = function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          var value = linkUrl.value;

          if (_this11.checkUrlIsImage(value)) {
            var formData = new FormData();
            formData.append("url", linkUrl.value);

            _this11.post(url, formData);
          } else {
            _this11.showErrorFrame("imageExtensionError", "file");
          }
        });
      };
    }
  }, {
    key: "post",
    value: function post(url, formData) {
      var _this12 = this;

      // do zmiany na fetch
      $.ajax({
        url: url,
        data: formData,
        type: "post",
        contentType: false,
        processData: false,
        cache: false,
        dataType: "json",
        beforeSend: function beforeSend() {
          _this12.beforeUpload();
        },
        success: function success(data) {
          _this12.afterUpload(data);
        }
      });
    }
  }, {
    key: "afterUpload",
    value: function afterUpload(data) {
      var status = data.status,
          fileUploaded = data.fileUploaded,
          isImage = data.isImage,
          temponaryImageID = data.temponaryImageID,
          isValidSize = data.isValidSize;

      if (status) {
        if (!isImage) {
          this.showErrorFrame("imageExtensionError", "file");
        } else if (!isValidSize) {
          this.showErrorFrame("fileSizeError", "file");
        } else if (fileUploaded) {
          var image = this.createImage(fileUploaded);
          this.clipboards.forEach(function (clipboard) {
            clipboard.innerHTML = image;
          });
          this.data.fileUploaded = fileUploaded;
          this.data.temponaryImageID = temponaryImageID;
          this.setData("fileUploaded", fileUploaded);
          this.setData("temponaryImageID", temponaryImageID);
          this.hideErrorFrame("file");
        }
      } else {
        this.showErrorFrame("unknownError", "file");
      }

      this.hidePreloader();
    }
  }, {
    key: "beforeUpload",
    value: function beforeUpload() {
      this.showPreloader();
      this.hideErrorFrame("file");
      this.clipboards.forEach(function (clipboard) {
        clipboard.innerHTML = "";
      });
      this.inputDiscTemponaryImage.value = "";
    }
  }]);

  return NewPost;
}(_helper_post_new_post_helper__WEBPACK_IMPORTED_MODULE_5__["NewPostHelper"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/helper/post/common.js":
/*!*****************************************!*\
  !*** ./assets/js/helper/post/common.js ***!
  \*****************************************/
/*! exports provided: resizeGraphicFrame, resizeFrame, resizeFrameSingle, showMobileInfo, copyLink, showMore, showYoutubeFrame, singsCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeGraphicFrame", function() { return resizeGraphicFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeFrame", function() { return resizeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeFrameSingle", function() { return resizeFrameSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMobileInfo", function() { return showMobileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyLink", function() { return copyLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMore", function() { return showMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showYoutubeFrame", function() { return showYoutubeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singsCounter", function() { return singsCounter; });
var resizeGraphicFrame = function resizeGraphicFrame() {
  var frames = document.querySelectorAll('.single-graphic__frame'); // document.addEventListener('load',()=>{

  resizeFrame(frames); // });

  console.log('resize');
  window.addEventListener('resize', function (event) {
    resizeFrame(frames);
  });
};
var resizeFrame = function resizeFrame(frames) {
  frames.forEach(function (frame) {
    resizeFrameSingle(frame);
  });
};
var resizeFrameSingle = function resizeFrameSingle(frame) {
  var defaultTitleFontSize = 24;
  var defaultDescriptionFontSize = 16;
  var defaultDescriptionMarginTop = 13;
  var defaultDescriptionLineHeight = 23;
  var oryginalHeight = frame.dataset.height;
  var oryginalWidth = frame.dataset.width;
  var currentHeight = frame.offsetHeight;
  var currentWidth = frame.offsetWidth;
  var title = frame.querySelector('.single-graphic__title ');
  var link = title.querySelector('a');
  var description = frame.querySelector('.single-graphic__description');
  var scale = currentWidth / oryginalWidth;
  console.log('scale', scale, oryginalWidth, oryginalHeight, currentWidth, currentHeight);
  frame.style.top = oryginalHeight * scale + 'px';
  frame.style.bottom = 'auto';
  (link ? link : title).style.fontSize = defaultTitleFontSize * scale + 'px';

  if (description) {
    console.log('description', description);
    description.style.marginTop = defaultDescriptionMarginTop * scale + 'px';
    description.style.fontSize = defaultDescriptionFontSize * scale + 'px';
    description.style.lineHeight = defaultDescriptionLineHeight * scale + 'px';
  }
};
var showMobileInfo = function showMobileInfo() {
  document.querySelectorAll('.single-info__button--more').forEach(function (item) {
    item.addEventListener('click', function (event) {
      var element = event.currentTarget;
      var icon = element.querySelector('i');
      var id = element.dataset.id;
      var singleBar = element.parentNode.parentNode.parentNode;
      var singleInfo = singleBar.querySelector("#single-info-".concat(id));
      var singleSource = singleBar.querySelector("#single-source-".concat(id));
      var singleWrap = singleBar.querySelector("#single-wrap-".concat(id));
      element.classList.toggle('single-info__button--visable');

      if (element.classList.contains('single-info__button--visable')) {
        singleInfo.style.display = 'flex';
        singleSource.style.display = 'block';
        singleWrap.classList.remove('display-none');
        icon.classList.add('single-info__button-dropicon--rotated');
      } else {
        singleInfo.style.display = 'none';
        singleSource.style.display = 'none';
        singleWrap.classList.add('display-none');
        icon.classList.remove('single-info__button-dropicon--rotated');
      }
    });
  });
};
var copyLink = function copyLink() {
  var list = document.querySelector('.container__list');
  list.addEventListener('click', function (event) {
    var element = event.target;

    if (element.tagName != 'DIV') {
      element = element.parentElement;
    }

    if (element.classList.contains('single-info__button--link')) {
      var id = element.dataset.id;
      var icon = element.querySelector('i');
      var text = element.querySelector('span');
      icon.className = '';
      icon.classList.add('fas');
      icon.classList.add('fa-copy');
      text.innerText = 'Skopiowano';
      var input = document.querySelector("#url-".concat(id));
      input.select();
      document.execCommand("copy");
      window.getSelection();
    }
  });
};
var showMore = function showMore() {
  // const btns = document.querySelectorAll('.single-description__more-button');
  var list = document.querySelector('.container__list');
  list.addEventListener('click', function (event) {
    var element = event.target;

    if (element.classList.contains('single-description__more-button')) {
      event.preventDefault();
      element.classList.add('display-none');
      var wrap = element.parentNode;
      wrap.querySelector('.single-description__more').classList.remove('display-none');
      wrap.querySelector('.single-description__dots').classList.add('display-none');
    }
  });
};
var showYoutubeFrame = function showYoutubeFrame(id) {
  var list = document.querySelector('.container__list');
  list.addEventListener('click', function (event) {
    var youtubeFrame = event.target;

    if (youtubeFrame.tagName != 'DIV') {
      youtubeFrame = youtubeFrame.parentElement;
    }

    if (youtubeFrame.classList.contains('single-image__wrap-youtube')) {
      var youtubeID = youtubeFrame.dataset.id;
      console.log(youtubeFrame, youtubeID);
      var embed = "<iframe width=\"100%\" height=\"350\" src=\"https://www.youtube.com/embed/".concat(youtubeID, "?autoplay=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
      youtubeFrame.innerHTML = embed;
    }
  }); // });
};
var singsCounter = function singsCounter(fieldContener, counterContener, maxString) {
  singsCounterAction(fieldContener, counterContener, maxString);
  fieldContener.addEventListener("keyup", function (e) {
    singsCounterAction(fieldContener, counterContener, maxString);
  });
};

var singsCounterAction = function singsCounterAction(fieldContener, counterContener, maxString) {
  var singsNumber = fieldContener.value.length;
  counterContener.innerText = singsNumber;
  var subString = fieldContener.value.substring(0, maxString - 1);

  if (singsNumber >= maxString) {
    fieldContener.value = subString;
    singsNumber = maxString;
  }
};

/***/ }),

/***/ "./assets/js/helper/post/embed.js":
/*!****************************************!*\
  !*** ./assets/js/helper/post/embed.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmbedHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function resizeIframe(obj) {
  console.log("obj", obj);
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + "px";
}

var EmbedHelper =
/*#__PURE__*/
function () {
  function EmbedHelper() {
    _classCallCheck(this, EmbedHelper);

    this.content = document.querySelector(".single-description");

    if (this.content) {
      this.init();
    }
  }

  _createClass(EmbedHelper, [{
    key: "init",
    value: function init() {
      var embeds = this.content.getElementsByTagName("oembed");
      this.fetchOembed();
      this.prepareEmbed(embeds);
    }
  }, {
    key: "fetchOembed",
    value: function fetchOembed() {
      return this.content.getElementsByTagName("oembed");
    }
  }, {
    key: "prepareEmbed",
    value: function prepareEmbed(embeds) {
      var _this = this;

      console.log("embeds", embeds);
      Object.keys(embeds).forEach(function (key) {
        var embed = embeds[key];
        console.log("embedtes", embed);
        var url = embed.getAttribute("url");

        var type = _this.getType(url);

        var preparedEmbed = "";
        console.log("type", type);

        if (type == "youtube") {
          preparedEmbed = _this.prepareYoutubeEmbed(url);
          console.log("prepared", preparedEmbed, "em", embed); //  embed.parentNode.replaceChild(preparedEmbed,embed);
        } else if (type == "twitter") {
          preparedEmbed = _this.prepareTwitterEmbed(url);
        } else if (type == "facebookVideo") {
          preparedEmbed = _this.prepareFacebookEmbedVideo(url);
        } else if (type == "facebookPost") {
          preparedEmbed = _this.prepareFacebookEmbedPost(url);
        }

        embed.appendChild(preparedEmbed);
      });
    }
  }, {
    key: "prepareFacebookEmbedVideo",
    value: function prepareFacebookEmbedVideo(url) {
      var el = document.createElement("div");
      el.innerHTML = "<div class=\"center-wrap\"><div class=\"fb-video\" data-href=\"".concat(url, "\" data-width=\"500\" data-show-text=\"false\">\n    <div class=\"fb-xfbml-parse-ignore\">\n      <blockquote cite=\"").concat(url, "\">\n        <a href=\"").concat(url, "\">How to Share With Just Friends</a>\n        <p>How to share with just friends.</p>\n        Posted by <a href=\"https://www.facebook.com/facebook/\">Facebook</a> on Friday, December 5, 2014\n      </blockquote>\n    </div>\n  </div>\n  </div>");
      return el;
    }
  }, {
    key: "prepareFacebookEmbedPost",
    value: function prepareFacebookEmbedPost(url) {
      var preparedUrl = encodeURIComponent(url);
      var el = document.createElement("div");
      el.innerHTML = "<iframe style=\"background:white;\" src=\"https://www.facebook.com/plugins/post.php?href=".concat(preparedUrl, "&width=500\" width=\"500\" height=\"650\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\"  allow=\"encrypted-media\"></iframe>");
      return el;
    }
  }, {
    key: "prepareTwitterEmbed",
    value: function prepareTwitterEmbed(url) {
      // const twitterID = this.getTwitterIDFromUrl(url);
      var el = document.createElement("div");
      var preparedUrl = encodeURIComponent(url); // el.innerHTML =   `<iframe border=0 frameborder=0 height=500  width=100%
      // src="https://twitframe.com/show?url=${preparedUrl}"></iframe>`;

      el.innerHTML = "<div class=\"center-wrap\"><blockquote class=\"twitter-tweet\" data-lang=\"pl\"><a href=\"".concat(url, "\"></a></blockquote></div>");
      return el;
    } //   getTwitterIDFromUrl(url) {
    //     const splited = url.split("/");
    //     const spiledLength = splited.length;
    //     return splited[spiledLength - 1];
    //   }

  }, {
    key: "prepareYoutubeEmbed",
    value: function prepareYoutubeEmbed(url) {
      var youtubeID = this.getYoutubeIDFromUrl(url);
      console.log("ytID", youtubeID);
      var el = document.createElement("div");
      el.innerHTML = "<iframe width=\"100%\" height=\"350\" src=\"https://www.youtube.com/embed/".concat(youtubeID, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; \n    encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
      return el;
    }
  }, {
    key: "getYoutubeIDFromUrl",
    value: function getYoutubeIDFromUrl(url) {
      // var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      // var match = url.match(regExp);
      // if (match && match[2].length == 11) {
      //   return match[2];
      // } else {
      //   //error
      // }
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    }
  }, {
    key: "getType",
    value: function getType(embed) {
      console.log("embedString", embed.toString());

      if (embed.toString().includes("you")) {
        return "youtube";
      } else if (embed.toString().includes("twitter")) {
        return "twitter";
      } else if (embed.toString().includes("facebook") && embed.toString().includes("videos")) {
        return "facebookVideo";
      } else if (embed.toString().includes("facebook")) {
        return "facebookPost";
      }
    }
  }]);

  return EmbedHelper;
}();



/***/ }),

/***/ "./assets/js/helper/post/new-post-helper.js":
/*!**************************************************!*\
  !*** ./assets/js/helper/post/new-post-helper.js ***!
  \**************************************************/
/*! exports provided: NewPostHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostHelper", function() { return NewPostHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NewPostHelper =
/*#__PURE__*/
function () {
  function NewPostHelper() {
    _classCallCheck(this, NewPostHelper);
  }

  _createClass(NewPostHelper, [{
    key: "getHostname",

    /* common */
    value: function getHostname() {
      return "http://".concat(window.location.hostname, ":").concat(window.location.port);
    }
  }, {
    key: "checkUrlIsImage",
    value: function checkUrlIsImage(url) {
      if (url.match(/\.(jpeg|jpg|png)$/)) {
        return true;
      }

      return false;
    }
  }, {
    key: "getError",
    value: function getError(name) {
      return this.errors[name];
    }
  }, {
    key: "setData",
    value: function setData(name, value) {
      this.data[name] = value;
    }
  }, {
    key: "getData",
    value: function getData(name) {
      var data = this.data[name];

      if (typeof data === "undefined") {
        return null;
      }

      return data;
    }
  }, {
    key: "validFileAdded",
    value: function validFileAdded() {
      if (this.getData("temponaryImageID")) {
        return true;
      }

      return false;
    }
  }, {
    key: "validIssetTitleOrDescription",
    value: function validIssetTitleOrDescription(title, description) {}
  }, {
    key: "getImageFile",
    value: function getImageFile() {
      var file = document.querySelector("[type=file]").files[0];
      var formData = new FormData();
      return formData.append("file", file);
    }
  }, {
    key: "showErrorFrame",
    value: function showErrorFrame(msg, type) {
      var errorMsg = this.getError(msg);
      var errorWrap = document.querySelector(".field-error--".concat(type));
      var errorFrame = errorWrap.querySelector(".field-error__frame--".concat(type));
      errorFrame.innerText = errorMsg;
      errorWrap.classList.remove("display-none");
    }
  }, {
    key: "getError",
    value: function getError(msg) {
      var errors = {
        imageExtensionError: "Załączony plik musi mieć rozszerzenie jpg lub png",
        fileSizeError: "Wybrane zdjęcie jest za duże",
        unknownError: "Coś poszło nie tak. Spróbuj ponownie!",
        youtubeError: "Podany link do filmy Youtube jest niepoprawny",
        emptyFile: "Musisz dodać jakiś materiał",
        emptyTitle: "Musisz dodać tytuł",
        notConfirm: "Musisz potwierdzić regulamin",
        titleTooLong: "Tytuł może zawierać maksimum 250 znaków",
        descriptionTooLongGraphic: "Opis dla grafiki może zawierać maksimum 750 znaków",
        descriptionTooLongPost: "Opis dla postu może zawierać maksimum 10 000 znaków",
        captcha: "Nie jesteś człowiekiem?"
      };
      return errors[msg];
    }
  }, {
    key: "hideErrorFrame",
    value: function hideErrorFrame(type) {
      var errorWrap = document.querySelector(".field-error--".concat(type));
      var errorFrame = errorWrap.querySelector(".field-error__frame--".concat(type));
      errorWrap.classList.add("display-none");
      errorFrame.innerText = "";
    }
  }, {
    key: "clearAllErrors",
    value: function clearAllErrors() {
      var errors = document.querySelectorAll(".field-error");
      errors.forEach(function (error) {
        error.classList.add("display-none");
        error.querySelector(".field-error__frame").innerText = "";
      });
    }
  }, {
    key: "createImage",
    value: function createImage(fileUploaded) {
      return "<img class='' src=\"".concat(this.getRouteToTemponaryFile()).concat(fileUploaded, "\"/>");
    }
  }, {
    key: "createYoutubeEmbed",
    value: function createYoutubeEmbed(youtubeID) {
      return "<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/".concat(youtubeID, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
    }
  }, {
    key: "showPreloader",
    value: function showPreloader() {
      this.postPreloaders.forEach(function (loader) {
        loader.style.display = "block";
      });
    }
  }, {
    key: "hidePreloader",
    value: function hidePreloader() {
      this.postPreloaders.forEach(function (loader) {
        loader.style.display = "none";
      });
    }
  }, {
    key: "getRouteToTemponaryFile",
    value: function getRouteToTemponaryFile() {
      return this.getHostname() + "/upload/temponary-image/";
    }
  }, {
    key: "initMenageTypePost",
    value: function initMenageTypePost() {
      var _this = this;

      var selectType = document.querySelector("#type-data");
      selectType.addEventListener("change", function (e) {
        _this.hideAllActionFields();

        var type = e.target.value;

        _this.showActionField(type);

        _this.setData("selectType", type);

        _this.clearDataAfterChangeTypePost();

        _this.clearClipboard();
      });
    }
  }, {
    key: "getCurrentTypePost",
    value: function getCurrentTypePost() {
      return document.querySelector("#type-post").value;
    }
  }, {
    key: "hideAllActionFields",
    value: function hideAllActionFields() {
      this.typePostOptions.forEach(function (option) {
        option.style.display = "none";
      });
    }
  }, {
    key: "showActionField",
    value: function showActionField(type) {
      document.querySelector(".create__post-option--".concat(type)).style.display = "block";
    }
  }, {
    key: "clearDataAfterChangeTypePost",
    value: function clearDataAfterChangeTypePost() {
      var linkYoutube = document.querySelector("#form__post-youtube");
      var linkUrl = document.querySelector("#form__post-link");
      linkYoutube.value = "";
      linkUrl.value = "";
      this.setData("fileUploaded", null);
      this.setData("temponaryImageID", null);
      this.setData("youtubeID", null);
      this.hideErrorFrame("file");
    }
  }, {
    key: "clearClipboard",
    value: function clearClipboard() {
      document.querySelector(".create__post-clipboard").innerHTML = "";
    }
  }, {
    key: "youtubeParser",
    value: function youtubeParser(url) {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);

      if (match && match[7].length == 11) {
        return match[7];
      } else {
        return false;
      }
    }
  }]);

  return NewPostHelper;
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

/***/ 1:
/*!***********************************************************************!*\
  !*** multi regenerator-runtime/runtime ./assets/js/entry/post-new.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! ./assets/js/entry/post-new.js */"./assets/js/entry/post-new.js");


/***/ })

},[[1,"runtime","vendors~app~post-list~post-new~post-single","vendors~ckeditor~post-new","ckeditor~post-new"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NrZWRpdG9yLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZW50cnkvcG9zdC1uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlci9wb3N0L2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVyL3Bvc3QvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlci9wb3N0L25ldy1wb3N0LWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGliL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiU2VsZWN0Iiwic2luZ3NDb3VudGVyIiwiTmV3UG9zdCIsIkNhdGVnb3JpZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3QiLCJpbml0IiwibGFiZWwiLCJpbml0SWNvbiIsImRyb3Bkb3duIiwiY2hpbGRBY3Rpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbXMiLCJjaGlsZHMiLCJjaGlsZEl0ZW1zIiwiY2hpbGRXcmFwIiwidHlwZVBvc3QiLCJ0eXBlRGF0YSIsInRleHRhcmVhRGVzY3JpcHRpb24iLCJjbGlwYm9hcmRQb3N0cyIsImN1cnJlbnRUeXBlUG9zdCIsImluaXRDbGljayIsImluaXRDaGlsZENsaWNrIiwiaW5pdENob2ljZUNsaWNrIiwiZWRpdG9yIiwiY29uc29sZSIsImxvZyIsIkNsYXNzaWNFZGl0b3IiLCJjcmVhdGUiLCJ0aGVuIiwiZXJyIiwiZXJyb3IiLCJzdGFjayIsImZvckVhY2giLCJjaGlsZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidHlwZSIsInRleHQiLCJpbm5lclRleHQiLCJ0cmltIiwic2V0TGFiZWxJbml0Iiwic2V0SWNvbkluaXQiLCJyZXNldEFmdGVySGlkZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNldEZvcm0iLCJkYXRhIiwiZGlzYyIsInlvdXR1YmUiLCJsaW5rIiwidmFsdWUiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjbGVhckNsaXBCb2FyZHMiLCJzd2l0Y2hEZXNjcmlwdGlvblRleHRhcmVhIiwiY2xpcGJvYXJkIiwiaW5uZXJIVE1MIiwiZGVzY3JpcHRpb25XcmFwIiwib2xkVGV4dGFyZWEiLCJjbG9uZVRleHRhcmVhIiwibmV3VGV4dGFyZWEiLCJjbG9uZU5vZGUiLCJyZW1vdmUiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFwcGVuZENoaWxkIiwibGltaXQiLCJzZXRTaWduQ291bnRlckZvck5ld1RleHRhcmVhIiwiaW5pdENLRWRpdG9yIiwiaW5mbyIsInBvc3QiLCJncmFwaGljIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJpY29uQ2xhc3MiLCJjbGFzc05hbWUiLCJjb250YWlucyIsImVsZW1lbnQiLCJjdXJyZW50Q2hpbGQiLCJpdGVtIiwiY2F0ZWdvcnkiLCJhZnRlckNsaWNrIiwidG9nZ2xlU2VsZWN0ZWRDbGFzcyIsInRvZ2dsZUZvcm1GaWVsZCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImZpbGVVcGxvYWRlZCIsInRlbXBvbmFyeUltYWdlSUQiLCJpbnB1dEZpbGUiLCJjbGlwYm9hcmRzIiwiaW5wdXREaXNjVGVtcG9uYXJ5SW1hZ2UiLCJwb3N0UHJlbG9hZGVycyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0eXBlUG9zdE9wdGlvbnMiLCJzZWxlY3RUeXBlIiwiaXNDb25maXJtIiwieW91dHViZUlEIiwiY2FwdGNoYVNsaWRlciIsImNhcHRjaGFDb3VudGVyIiwiZGVmYXVsdENhcHRjaGEiLCJpbml0RXZlbnRzIiwiZmV0Y2hDdXJyZW50Q2FwdGNoYSIsIiQiLCJhamF4IiwidXJsIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsImNhY2hlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidXBsb2FkSW1hZ2VGcm9tRGlzYyIsImZldGNoWW91dHViZUZpZWxkIiwiaW5pdFVwbG9hZEltYWdlRnJvbVVybCIsImluaXRTdWJtaXQiLCJpbml0TWVuYWdlVHlwZVBvc3QiLCJpbml0Q2FwdGNoYVNsaWRlciIsIm9uaW5wdXQiLCJmb3JtIiwiZSIsImlzU3VibWl0VmFsaWQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGVkVHlwZSIsInNlbGVjdGVkRGF0YSIsImRlc2NyaXB0aW9uVHlwZSIsImVycm9ycyIsImNsZWFyQWxsRXJyb3JzIiwidmFsaWRGaWxlQWRkZWQiLCJzaG93RXJyb3JGcmFtZSIsImxlbmd0aCIsImlzVmFsaWRTdHJpbmdNYXhMZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiZmlsZSIsImZpbGVzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImxpbmtZb3V0dWJlIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ5b3V0dWJlUGFyc2VyIiwic2V0RGF0YSIsImxpbmtVcmwiLCJvbmtleWRvd24iLCJjaGVja1VybElzSW1hZ2UiLCJiZWZvcmVTZW5kIiwiYmVmb3JlVXBsb2FkIiwiYWZ0ZXJVcGxvYWQiLCJzdGF0dXMiLCJpc0ltYWdlIiwiaXNWYWxpZFNpemUiLCJpbWFnZSIsImNyZWF0ZUltYWdlIiwiaGlkZUVycm9yRnJhbWUiLCJoaWRlUHJlbG9hZGVyIiwic2hvd1ByZWxvYWRlciIsIk5ld1Bvc3RIZWxwZXIiLCJyZXNpemVHcmFwaGljRnJhbWUiLCJmcmFtZXMiLCJyZXNpemVGcmFtZSIsImZyYW1lIiwicmVzaXplRnJhbWVTaW5nbGUiLCJkZWZhdWx0VGl0bGVGb250U2l6ZSIsImRlZmF1bHREZXNjcmlwdGlvbkZvbnRTaXplIiwiZGVmYXVsdERlc2NyaXB0aW9uTWFyZ2luVG9wIiwiZGVmYXVsdERlc2NyaXB0aW9uTGluZUhlaWdodCIsIm9yeWdpbmFsSGVpZ2h0IiwiaGVpZ2h0Iiwib3J5Z2luYWxXaWR0aCIsIndpZHRoIiwiY3VycmVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwic2NhbGUiLCJzdHlsZSIsInRvcCIsImJvdHRvbSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsInNob3dNb2JpbGVJbmZvIiwiaWNvbiIsInNpbmdsZUJhciIsInBhcmVudE5vZGUiLCJzaW5nbGVJbmZvIiwic2luZ2xlU291cmNlIiwic2luZ2xlV3JhcCIsImRpc3BsYXkiLCJjb3B5TGluayIsImxpc3QiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicGFyZW50RWxlbWVudCIsImlucHV0IiwiZXhlY0NvbW1hbmQiLCJnZXRTZWxlY3Rpb24iLCJzaG93TW9yZSIsIndyYXAiLCJzaG93WW91dHViZUZyYW1lIiwieW91dHViZUZyYW1lIiwiZW1iZWQiLCJmaWVsZENvbnRlbmVyIiwiY291bnRlckNvbnRlbmVyIiwibWF4U3RyaW5nIiwic2luZ3NDb3VudGVyQWN0aW9uIiwic2luZ3NOdW1iZXIiLCJzdWJTdHJpbmciLCJyZXNpemVJZnJhbWUiLCJvYmoiLCJjb250ZW50V2luZG93IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiRW1iZWRIZWxwZXIiLCJjb250ZW50IiwiZW1iZWRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmZXRjaE9lbWJlZCIsInByZXBhcmVFbWJlZCIsImtleSIsImdldEF0dHJpYnV0ZSIsImdldFR5cGUiLCJwcmVwYXJlZEVtYmVkIiwicHJlcGFyZVlvdXR1YmVFbWJlZCIsInByZXBhcmVUd2l0dGVyRW1iZWQiLCJwcmVwYXJlRmFjZWJvb2tFbWJlZFZpZGVvIiwicHJlcGFyZUZhY2Vib29rRW1iZWRQb3N0IiwiZWwiLCJjcmVhdGVFbGVtZW50IiwicHJlcGFyZWRVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRZb3V0dWJlSURGcm9tVXJsIiwicmVnRXhwIiwibWF0Y2giLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJob3N0bmFtZSIsInBvcnQiLCJuYW1lIiwiZ2V0RGF0YSIsIm1zZyIsImVycm9yTXNnIiwiZ2V0RXJyb3IiLCJlcnJvcldyYXAiLCJlcnJvckZyYW1lIiwiaW1hZ2VFeHRlbnNpb25FcnJvciIsImZpbGVTaXplRXJyb3IiLCJ1bmtub3duRXJyb3IiLCJ5b3V0dWJlRXJyb3IiLCJlbXB0eUZpbGUiLCJlbXB0eVRpdGxlIiwibm90Q29uZmlybSIsInRpdGxlVG9vTG9uZyIsImRlc2NyaXB0aW9uVG9vTG9uZ0dyYXBoaWMiLCJkZXNjcmlwdGlvblRvb0xvbmdQb3N0IiwiY2FwdGNoYSIsImdldFJvdXRlVG9UZW1wb25hcnlGaWxlIiwibG9hZGVyIiwiZ2V0SG9zdG5hbWUiLCJoaWRlQWxsQWN0aW9uRmllbGRzIiwic2hvd0FjdGlvbkZpZWxkIiwiY2xlYXJEYXRhQWZ0ZXJDaGFuZ2VUeXBlUG9zdCIsImNsZWFyQ2xpcGJvYXJkIiwib3B0aW9uIiwic3RyaW5nIiwibnVtYmVyIiwiaXNWYWxpZFN0cmluZ01pbkxlbmd0aCIsImVtYWlsVmFsaWQiLCJlbWFpbCIsInRlc3QiLCJsb2dpblZhbGlkIiwicGFzc3dvcmQiLCJmZXRjaCIsImJvZHkiLCJtZXRob2QiLCJyZXNwIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxVQUFBQyxLQUFLLEVBQUk7QUFDbkQsTUFBSUMsTUFBSixDQUFXQyxnRUFBWDtBQUNBLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxVQUFKO0FBRUFGLDBFQUFZLENBQ1ZHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEVSxFQUVWRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsOEJBQXZCLEVBQXVELEdBQXZELENBRlUsQ0FBWjtBQUlBSiwwRUFBWSxDQUNWRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsK0JBQXZCLENBRFUsRUFFVkQsUUFBUSxDQUFDQyxhQUFU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SUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxHQUpaLEVBS0c3UCxJQUxILENBS1EsVUFBQTRQLElBQUksRUFBSTtBQUNaaFEsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWStQLElBQVo7QUFDRCxHQVJIO0FBU0QsQ0FmTSxDIiwiZmlsZSI6InBvc3QtbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgc2luZ3NDb3VudGVyIH0gZnJvbSBcIi4vLi4vaGVscGVyL3Bvc3QvY29tbW9uXCI7XG5pbXBvcnQgQ2xhc3NpY0VkaXRvciBmcm9tIFwiLi8uLi9saWIvY2tlZGl0b3JcIjtcbmltcG9ydCBFbWJlZEhlbHBlciBmcm9tICcuLy4uL2hlbHBlci9wb3N0L2VtYmVkJztcbmltcG9ydCAnLi4vLi4vY3NzL2NrZWRpdG9yLmNzcyc7XG5pbXBvcnQge1xuICBpc1ZhbGlkU3RyaW5nTWF4TGVuZ3RoLFxuICBpc1ZhbGlkU3RyaW5nTWluTGVuZ3RoXG59IGZyb20gXCIuLy4uL2xpYi92YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBOZXdQb3N0SGVscGVyIH0gZnJvbSBcIi4vLi4vaGVscGVyL3Bvc3QvbmV3LXBvc3QtaGVscGVyXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBldmVudCA9PiB7XG4gIG5ldyBTZWxlY3Qoc2luZ3NDb3VudGVyKTtcbiAgbmV3IE5ld1Bvc3QoKTtcbiAgbmV3IENhdGVnb3JpZXMoKTtcblxuICBzaW5nc0NvdW50ZXIoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVfcG9zdF9mb3JtX3RpdGxlXCIpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmllbGQtbGFiZWxfX2NvdW50ZXItLXRpdGxlXCIsIDI1MClcbiAgKTtcbiAgc2luZ3NDb3VudGVyKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlX3Bvc3RfZm9ybV9kZXNjcmlwdGlvblwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZWxkLWxhYmVsX19jb3VudGVyLS1kZXNjcmlwdGlvblwiLCA3NTApXG4gICk7XG59KTtcblxuY2xhc3MgU2VsZWN0IHtcbiAgY29uc3RydWN0b3Ioc2luZ3NDb3VudGVyKSB7XG4gICAgdGhpcy5zaW5nc0NvdW50ZXIgPSBzaW5nc0NvdW50ZXI7XG4gICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1zZWxlY3RcIik7XG4gICAgdGhpcy5pbml0ID0gdGhpcy5zZWxlY3QucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtc2VsZWN0X19pbml0XCIpO1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLnNlbGVjdC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1zZWxlY3RfX2luaXQtbGFiZWxcIik7XG4gICAgdGhpcy5pbml0SWNvbiA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXNlbGVjdF9faW5pdC1pY29uIGlcIik7XG4gICAgdGhpcy5kcm9wZG93biA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXNlbGVjdF9fZHJvcGRvd25cIik7XG4gICAgdGhpcy5jaGlsZEFjdGlvbiA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5jcmVhdGUtc2VsZWN0X19pdGVtLS1hY3Rpb25cIlxuICAgICk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlLXNlbGVjdF9faXRlbVwiKTtcbiAgICB0aGlzLmNoaWxkcyA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlLXNlbGVjdF9fd3JhcC1jaGlsZFwiKTtcbiAgICB0aGlzLmNoaWxkSXRlbXMgPSB0aGlzLnNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuY3JlYXRlLXNlbGVjdF9faXRlbS1jaGlsZFwiXG4gICAgKTtcbiAgICB0aGlzLmNoaWxkV3JhcCA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlLXNlbGVjdF9fd3JhcC1jaGlsZFwiKTtcbiAgICB0aGlzLnR5cGVQb3N0ID0gdGhpcy5zZWxlY3QucXVlcnlTZWxlY3RvcihcIiN0eXBlLXBvc3RcIik7XG4gICAgdGhpcy50eXBlRGF0YSA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoXCIjdHlwZS1kYXRhXCIpO1xuICAgIHRoaXMudGV4dGFyZWFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNjcmVhdGVfcG9zdF9mb3JtX2Rlc2NyaXB0aW9uXCJcbiAgICApO1xuICAgIHRoaXMuY2xpcGJvYXJkUG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNyZWF0ZV9fcG9zdC1jbGlwYm9hcmRcIik7XG5cbiAgICB0aGlzLmN1cnJlbnRUeXBlUG9zdCA9IFwiZ3JhcGhpY1wiO1xuICAgIHRoaXMuaW5pdENsaWNrKCk7XG4gICAgdGhpcy5pbml0Q2hpbGRDbGljaygpO1xuICAgIHRoaXMuaW5pdENob2ljZUNsaWNrKCk7XG4gIH1cblxuICBpbml0Q0tFZGl0b3IoZWRpdG9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlZGl0b3JcIiwgZWRpdG9yKTtcblxuICAgICAgQ2xhc3NpY0VkaXRvci5jcmVhdGUoZWRpdG9yKVxuICAgICAgICAudGhlbihlZGl0b3IgPT4ge1xuICAgICAgICAgIHdpbmRvdy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBpbml0Q2hvaWNlQ2xpY2soKSB7XG4gICAgdGhpcy5jaGlsZEl0ZW1zLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgdHlwZVBvc3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgICAgY29uc3QgdHlwZURhdGEgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2hpbGQ7XG4gICAgICAgIGNvbnN0IHRleHQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dC50cmltKCk7XG4gICAgICAgIHRoaXMuc2V0TGFiZWxJbml0KHR5cGVQb3N0LCB0ZXh0KTtcbiAgICAgICAgdGhpcy5zZXRJY29uSW5pdCh0eXBlRGF0YSk7XG4gICAgICAgIHRoaXMucmVzZXRBZnRlckhpZGUoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICB0aGlzLnNldEZvcm0odHlwZVBvc3QsIHR5cGVEYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Rm9ybSh0eXBlUG9zdCwgdHlwZURhdGEpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZGlzYzogXCJpbWFnZUZyb21EaXNjXCIsXG4gICAgICB5b3V0dWJlOiBcInlvdXR1YmVMaW5rXCIsXG4gICAgICBsaW5rOiBcImltYWdlRnJvbUxpbmtcIlxuICAgIH07XG4gICAgdGhpcy50eXBlUG9zdC52YWx1ZSA9IHR5cGVQb3N0O1xuICAgIHRoaXMudHlwZURhdGEudmFsdWUgPSBkYXRhW3R5cGVEYXRhXTtcblxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KFwiY2hhbmdlXCIpO1xuICAgIHRoaXMudHlwZVBvc3QuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy50eXBlRGF0YS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgIHRoaXMuY2xlYXJDbGlwQm9hcmRzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VHlwZVBvc3QgLCB0eXBlUG9zdCk7XG4gICAgaWYgKHRoaXMuY3VycmVudFR5cGVQb3N0ICE9IHR5cGVQb3N0KSB7XG4gICAgICB0aGlzLnN3aXRjaERlc2NyaXB0aW9uVGV4dGFyZWEodHlwZVBvc3QpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRUeXBlUG9zdCA9IHR5cGVQb3N0O1xuICB9XG4gIGNsZWFyQ2xpcEJvYXJkcygpIHtcbiAgICB0aGlzLmNsaXBib2FyZFBvc3RzLmZvckVhY2goY2xpcGJvYXJkID0+IHtcbiAgICAgIGNsaXBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0pO1xuICB9XG4gIHN3aXRjaERlc2NyaXB0aW9uVGV4dGFyZWEodHlwZVBvc3QpIHtcblxuICAgIGxldCBkZXNjcmlwdGlvbldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXdyYXBcIik7XG4gICAgXG4gICAgbGV0IG9sZFRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0YXJlYS1kZXNjcmlwdGlvbi0tb2xkXCIpO1xuXG4gICAgbGV0IGNsb25lVGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRhcmVhLWRlc2NyaXB0aW9uLS1jbG9uZVwiKTtcbiAgICBsZXQgbmV3VGV4dGFyZWEgPSBjbG9uZVRleHRhcmVhLmNsb25lTm9kZSh0cnVlKTtcbiAgICBcbiAgIFxuXG5cblxuICAgIG5ld1RleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0YXJlYS1kZXNjcmlwdGlvbi0tY2xvbmVcIik7XG4gICAgbmV3VGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICBuZXdUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwidGV4dGFyZWEtZGVzY3JpcHRpb24tLW9sZFwiKTtcbiAgICBuZXdUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkZXNjcmlwdGlvbicpO1xuICAgIG5ld1RleHRhcmVhLmRhdGFzZXQuaWQgPSBcImNyZWF0ZV9wb3N0X2Zvcm1fZGVzY3JpcHRpb25cIjtcblxuICAgIGRlc2NyaXB0aW9uV3JhcC5pbm5lckhUTUwgPSAnJztcbiAgICBkZXNjcmlwdGlvbldyYXAuYXBwZW5kQ2hpbGQobmV3VGV4dGFyZWEpO1xuXG4gICAgLy8gbmV3VGV4dGFyZWEudmFsdWUgPSBcIm5ld1wiO1xuICAgIC8vIG9sZFRleHRhcmVhLnZhbHVlID0gXCJvbGRcIjtcbiAgICAvLyBjbG9uZVRleHRhcmVhLnZhbHVlID0gXCJjbG9uZVwiO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ24nLG5ld1RleHRhcmVhLCAnbycsb2xkVGV4dGFyZWEsJ2MnLGNsb25lVGV4dGFyZWEgKTtcblxuXG5cbiAgICBjb25zdCBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5maWVsZC1sYWJlbF9fY291bnRlci0tZGVzY3JpcHRpb24tbGltaXRcIlxuICAgICk7XG5cbiAgICBpZiAodHlwZVBvc3QgPT0gXCJncmFwaGljXCIpIHtcbiAgICAgIGxpbWl0LmlubmVyVGV4dCA9IFwiNzUwXCI7XG4gICAgICBuZXdUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgNzUwKTtcbiAgICAgIG5ld1RleHRhcmVhLmRhdGFzZXQudHlwZSA9IFwiZ3JhcGhpY1wiO1xuICAgICAgbmV3VGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgndGV4dGFyZWEtZGVzY3JpcHRpb24tLWNrZWRpdG9yJyk7XG4gICAgICB0aGlzLnNldFNpZ25Db3VudGVyRm9yTmV3VGV4dGFyZWEobmV3VGV4dGFyZWEsIDc1MCk7XG4gICAgICBuZXdUZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiLmNrZWRpdG9yXCIpO1xuICAgIH0gZWxzZSBpZiAodHlwZVBvc3QgPT0gXCJwb3N0XCIpIHtcbiAgICAgIGxpbWl0LmlubmVyVGV4dCA9IFwiMTAwMDBcIjtcbiAgICAgIG5ld1RleHRhcmVhLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAxMDAwMCk7XG4gICAgICBuZXdUZXh0YXJlYS5kYXRhc2V0LnR5cGUgPSBcInBvc3RcIjtcbiAgICAgIG5ld1RleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRhcmVhLWRlc2NyaXB0aW9uLS1ja2VkaXRvcicpO1xuICAgICAgbmV3VGV4dGFyZWEuY2xhc3NMaXN0LmFkZChcIi5ja2VkaXRvclwiKTtcbiAgICAgIHRoaXMuc2V0U2lnbkNvdW50ZXJGb3JOZXdUZXh0YXJlYShuZXdUZXh0YXJlYSwgMTAwMDApO1xuICAgICAgdGhpcy5pbml0Q0tFZGl0b3IobmV3VGV4dGFyZWEpOyBcbiAgICB9XG5cblxuXG4gIH1cblxuICBzZXRTaWduQ291bnRlckZvck5ld1RleHRhcmVhKG5ld1RleHRhcmVhLCBsaW1pdCkge1xuICAgIHRoaXMuc2luZ3NDb3VudGVyKFxuICAgICAgbmV3VGV4dGFyZWEsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpZWxkLWxhYmVsX19jb3VudGVyLS1kZXNjcmlwdGlvblwiLCBsaW1pdClcbiAgICApO1xuICB9XG5cbiAgc2V0TGFiZWxJbml0KHR5cGUsIHRleHQpIHtcbiAgICBjb25zdCBpbmZvID0ge1xuICAgICAgcG9zdDogXCJQb3N0XCIsXG4gICAgICBncmFwaGljOiBcIkdyYWZpa2FcIlxuICAgIH07XG5cbiAgICB0aGlzLmxhYmVsLmlubmVyVGV4dCA9XG4gICAgICBpbmZvW3R5cGVdICsgXCI6IFwiICsgdGV4dC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHRleHQuc3Vic3RyaW5nKDEpO1xuICB9XG5cbiAgc2V0SWNvbkluaXQodHlwZSkge1xuICAgIGNvbnN0IGljb25DbGFzcyA9IHtcbiAgICAgIGxpbms6IFtcImZhc1wiLCBcImZhLWxpbmtcIl0sXG4gICAgICB5b3V0dWJlOiBbXCJmYWJcIiwgXCJmYS15b3V0dWJlXCJdLFxuICAgICAgZGlzYzogW1wiZmFzXCIsIFwiZmEtY2xvdWQtdXBsb2FkLWFsdFwiXVxuICAgIH07XG5cbiAgICB0aGlzLmluaXRJY29uLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgdGhpcy5pbml0SWNvbi5jbGFzc0xpc3QuYWRkKGljb25DbGFzc1t0eXBlXVswXSk7XG4gICAgdGhpcy5pbml0SWNvbi5jbGFzc0xpc3QuYWRkKGljb25DbGFzc1t0eXBlXVsxXSk7XG4gIH1cblxuICBpbml0Q2xpY2soKSB7XG4gICAgdGhpcy5pbml0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICB0aGlzLmluaXQuY2xhc3NMaXN0LnRvZ2dsZShcImNyZWF0ZS1zZWxlY3RfX2luaXQtLXNlbGVjdGVkXCIpO1xuXG4gICAgICBpZiAoIXRoaXMuaW5pdC5jbGFzc0xpc3QuY29udGFpbnMoXCJjcmVhdGUtc2VsZWN0X19pbml0LS1zZWxlY3RlZFwiKSkge1xuICAgICAgICB0aGlzLnJlc2V0QWZ0ZXJIaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0Q2hpbGRDbGljaygpIHtcbiAgICB0aGlzLmNoaWxkQWN0aW9uLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gdGhpcy5zZWxlY3QucXVlcnlTZWxlY3RvcihgI2NoaWxkLSR7aWR9YCk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY3JlYXRlLXNlbGVjdF9faXRlbS0tc2VsZWN0ZWRcIik7XG5cbiAgICAgICAgdGhpcy5jaGlsZEFjdGlvbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQgIT0gZWxlbWVudCkge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImNyZWF0ZS1zZWxlY3RfX2l0ZW0tLXNlbGVjdGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICAgICAgdGhpcy5jaGlsZFdyYXAuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZCAhPSBjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldEFmdGVySGlkZSgpIHtcbiAgICB0aGlzLmluaXQuY2xhc3NMaXN0LnJlbW92ZShcImNyZWF0ZS1zZWxlY3RfX2luaXQtLXNlbGVjdGVkXCIpO1xuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNyZWF0ZS1zZWxlY3RfX2l0ZW0tLXNlbGVjdGVkXCIpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hpbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgQ2F0ZWdvcmllcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdENsaWNrKCk7XG4gIH1cblxuICBpbml0Q2xpY2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcmVhdGUtY2F0ZWdvcmllc19faXRlbVwiKS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgIGNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWZ0ZXJDbGljayhjYXRlZ29yeSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFmdGVyQ2xpY2soY2F0ZWdvcnkpIHtcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkQ2xhc3MoY2F0ZWdvcnkpO1xuICAgIHRoaXMudG9nZ2xlRm9ybUZpZWxkKGNhdGVnb3J5KTtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdGVkQ2xhc3MoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QudG9nZ2xlKFwiY3JlYXRlLWNhdGVnb3JpZXNfX2l0ZW0tLWFjdGl2ZVwiKTtcbiAgfVxuXG4gIHRvZ2dsZUZvcm1GaWVsZChjYXRlZ29yeSkge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bdmFsdWU9XCJuZXdDYXRlZ29yeS0ke2NhdGVnb3J5LmlkfVwiXWBcbiAgICApO1xuICAgIGlmIChjYXRlZ29yeS5jbGFzc0xpc3QuY29udGFpbnMoXCJjcmVhdGUtY2F0ZWdvcmllc19faXRlbS0tYWN0aXZlXCIpKSB7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBOZXdQb3N0IGV4dGVuZHMgTmV3UG9zdEhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWxlVXBsb2FkZWQgPSBudWxsO1xuICAgIHRoaXMudGVtcG9uYXJ5SW1hZ2VJRCA9IG51bGw7XG5cbiAgICB0aGlzLmlucHV0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsZVwiKTtcbiAgICB0aGlzLmNsaXBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNyZWF0ZV9fcG9zdC1jbGlwYm9hcmRcIik7XG4gICAgdGhpcy5pbnB1dERpc2NUZW1wb25hcnlJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNkaXNjX3RlbXBvbmFyeUltYWdlXCJcbiAgICApO1xuXG4gICAgdGhpcy5wb3N0UHJlbG9hZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlX19wb3N0LXByZWxvYWRlclwiKTtcblxuICAgIC8vZnVuY3Rpb25hbCBmaWVsZHNcbiAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWVsZC13cmFwLS10aXRsZVwiKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWVsZC13cmFwLS1kZXNjcmlwdGlvblwiKTtcbiAgICB0aGlzLnR5cGVQb3N0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlX19wb3N0LW9wdGlvblwiKTtcblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIHRlbXBvbmFyeUltYWdlSUQ6IG51bGwsXG4gICAgICBmaWxlVXBsb2FkZWQ6IG51bGwsXG4gICAgICBzZWxlY3RUeXBlOiBcImltYWdlRnJvbURpc2NcIixcbiAgICAgIGlzQ29uZmlybTogZmFsc2UsXG4gICAgICB5b3V0dWJlSUQ6IG51bGxcbiAgICB9O1xuXG4gICAgdGhpcy5jYXB0Y2hhU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVfX2NhcHRjaGEtc2xpZGVyXCIpO1xuICAgIHRoaXMuY2FwdGNoYUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZV9fY2FwdGNoYS1jb3VudGVyXCIpO1xuICAgIHRoaXMuZGVmYXVsdENhcHRjaGEgPSAwO1xuXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgdGhpcy5mZXRjaEN1cnJlbnRDYXB0Y2hhKCk7XG4gIH1cblxuICBmZXRjaEN1cnJlbnRDYXB0Y2hhKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiL2FwaS1mZXRjaC1jdXJyZW50LWNhcHRjaGFcIixcbiAgICAgIGRhdGE6IFwiXCIsXG4gICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmRlZmF1bHRDYXB0Y2hhID0gZGF0YVtcImNhcHRjaGFcIl07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMudXBsb2FkSW1hZ2VGcm9tRGlzYygpO1xuICAgIHRoaXMuZmV0Y2hZb3V0dWJlRmllbGQoKTtcbiAgICB0aGlzLmluaXRVcGxvYWRJbWFnZUZyb21VcmwoKTtcbiAgICB0aGlzLmluaXRTdWJtaXQoKTtcbiAgICB0aGlzLmluaXRNZW5hZ2VUeXBlUG9zdCgpO1xuICAgIHRoaXMuaW5pdENhcHRjaGFTbGlkZXIoKTtcbiAgfVxuXG4gIGluaXRDYXB0Y2hhU2xpZGVyKCkge1xuICAgIHRoaXMuY2FwdGNoYVNsaWRlci5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYXB0Y2hhQ291bnRlci5pbm5lclRleHQgPSB0aGlzLmNhcHRjaGFTbGlkZXIudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGluaXRTdWJtaXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cImNyZWF0ZV9wb3N0X2Zvcm1cIl0nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTdWJtaXRWYWxpZCgpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzU3VibWl0VmFsaWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0eXBlLXBvc3RcIikudmFsdWU7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0eXBlLWRhdGFcIikudmFsdWU7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpXG4gICAgICAudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICd0ZXh0YXJlYVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nXG4gICAgKS5kYXRhc2V0LnR5cGU7XG4gICAgY29uc3QgaXNDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1bbmFtZT1cImlzQ29uZmlybVwiXSdcbiAgICApLmNoZWNrZWQ7XG5cbiAgICBsZXQgZXJyb3JzID0ge307XG5cbiAgICB0aGlzLmNsZWFyQWxsRXJyb3JzKCk7XG5cbiAgICBpZiAoIXRoaXMudmFsaWRGaWxlQWRkZWQoKSkge1xuICAgICAgdGhpcy5zaG93RXJyb3JGcmFtZShcImVtcHR5RmlsZVwiLCBcImZpbGVcIik7XG4gICAgICBlcnJvcnNbXCJlbXB0eUZpbGVcIl0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aXRsZS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zaG93RXJyb3JGcmFtZShcImVtcHR5VGl0bGVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgIGVycm9yc1tcImVtcHR5VGl0bGVcIl0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghaXNDb25maXJtKSB7XG4gICAgICB0aGlzLnNob3dFcnJvckZyYW1lKFwibm90Q29uZmlybVwiLCBcImlzQ29uZmlybVwiKTtcbiAgICAgIGVycm9yc1tcIm5vdENvbmZpcm1cIl0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZFN0cmluZ01heExlbmd0aCh0aXRsZSwgMjUwKSkge1xuICAgICAgZXJyb3JzW1widGl0bGVUb29Mb25nXCJdID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yRnJhbWUoXCJ0aXRsZVRvb0xvbmdcIiwgXCJ0aXRsZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhaXNWYWxpZFN0cmluZ01heExlbmd0aChcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRlc2NyaXB0aW9uVHlwZSA9PSBcImdyYXBoaWNcIiA/IDc1MCA6IDEwMDAwXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnNob3dFcnJvckZyYW1lKFxuICAgICAgICBkZXNjcmlwdGlvblR5cGUgPT0gXCJncmFwaGljXCJcbiAgICAgICAgICA/IFwiZGVzY3JpcHRpb25Ub29Mb25nR3JhcGhpY1wiXG4gICAgICAgICAgOiBcImRlc2NyaXB0aW9uVG9vTG9uZ1Bvc3RcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiXG4gICAgICApO1xuICAgICAgZXJyb3JzW1wiZGVzY3JpcHRpb25Ub0xvbmdcIl0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy52YWxpZEZpbGVBZGRlZCgpKSB7XG4gICAgICB0aGlzLnNob3dFcnJvckZyYW1lKFwiZW1wdHlGaWxlXCIsIFwiZmlsZVwiKTtcbiAgICAgIGVycm9yc1tcImVtcHR5RmlsZVwiXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVmYXVsdENhcHRjaGEgIT0gdGhpcy5jYXB0Y2hhU2xpZGVyLnZhbHVlKSB7XG4gICAgICB0aGlzLnNob3dFcnJvckZyYW1lKFwiY2FwdGNoYVwiLCBcImNhcHRjaGFcIik7XG4gICAgICBlcnJvcnNbXCJjYXB0Y2hhXCJdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBsb2FkSW1hZ2VGcm9tRGlzYygpIHtcbiAgICB0aGlzLmlucHV0RmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3R5cGU9ZmlsZV1cIikuZmlsZXNbMF07XG4gICAgICBjb25zdCB1cmwgPSBcIi91cGxvYWQtdGVtcG9uYXJ5LWltYWdlXCI7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgIHRoaXMucG9zdCh1cmwsIGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoWW91dHViZUZpZWxkKCkge1xuICAgIGNvbnN0IGxpbmtZb3V0dWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX19wb3N0LXlvdXR1YmVcIik7XG4gICAgY29uc3QgdXJsID0gXCIvdXBsb2FkLXlvdXR1YmUtdGh1bWJuYWlsXCI7XG4gICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICAgIGxpbmtZb3V0dWJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgLy8gbGlua1lvdXR1YmUub25rZXlkb3duID0gZSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHlvdXR1YmVJRCA9IHRoaXMueW91dHViZVBhcnNlcihsaW5rWW91dHViZS52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHlvdXR1YmVJRCkge1xuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwieW91dHViZUlEXCIsIHlvdXR1YmVJRCk7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKFwieW91dHViZUlEXCIsIHlvdXR1YmVJRCk7XG4gICAgICAgICAgdGhpcy5wb3N0KHVybCwgZm9ybURhdGEpO1xuXG4gICAgICAgICAgLy8gRG8gcHJ6ZW15xZtsZW5pYVxuXG4gICAgICAgICAgLy8gY29uc3QgeW91dHViZUZyYW1lID0gdGhpcy5jcmVhdGVZb3V0dWJlRW1iZWQoeW91dHViZUlEKTtcbiAgICAgICAgICAvLyB0aGlzLmNsaXBib2FyZC5pbm5lckhUTUwgPSB5b3V0dWJlRnJhbWU7NFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JGcmFtZShcInlvdXR1YmVFcnJvclwiLCBcImZpbGVcIik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdFVwbG9hZEltYWdlRnJvbVVybCgpIHtcbiAgICBjb25zdCB1cmwgPSBcIi91cGxvYWQtbGluay10aHVtYm5haWxcIjtcbiAgICBjb25zdCBsaW5rVXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX19wb3N0LWxpbmtcIik7XG4gICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICAgIGxpbmtVcmwub25rZXlkb3duID0gZSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbGlua1VybC52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja1VybElzSW1hZ2UodmFsdWUpKSB7XG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1cmxcIiwgbGlua1VybC52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5wb3N0KHVybCwgZm9ybURhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yRnJhbWUoXCJpbWFnZUV4dGVuc2lvbkVycm9yXCIsIFwiZmlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHBvc3QodXJsLCBmb3JtRGF0YSkge1xuICAgIC8vIGRvIHptaWFueSBuYSBmZXRjaFxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYmVmb3JlVXBsb2FkKCk7XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuYWZ0ZXJVcGxvYWQoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZnRlclVwbG9hZChkYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhdHVzLFxuICAgICAgZmlsZVVwbG9hZGVkLFxuICAgICAgaXNJbWFnZSxcbiAgICAgIHRlbXBvbmFyeUltYWdlSUQsXG4gICAgICBpc1ZhbGlkU2l6ZVxuICAgIH0gPSBkYXRhO1xuXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgaWYgKCFpc0ltYWdlKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yRnJhbWUoXCJpbWFnZUV4dGVuc2lvbkVycm9yXCIsIFwiZmlsZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRTaXplKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yRnJhbWUoXCJmaWxlU2l6ZUVycm9yXCIsIFwiZmlsZVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZVVwbG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5jcmVhdGVJbWFnZShmaWxlVXBsb2FkZWQpO1xuICAgICAgICB0aGlzLmNsaXBib2FyZHMuZm9yRWFjaChjbGlwYm9hcmQgPT4ge1xuICAgICAgICAgIGNsaXBib2FyZC5pbm5lckhUTUwgPSBpbWFnZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhLmZpbGVVcGxvYWRlZCA9IGZpbGVVcGxvYWRlZDtcbiAgICAgICAgdGhpcy5kYXRhLnRlbXBvbmFyeUltYWdlSUQgPSB0ZW1wb25hcnlJbWFnZUlEO1xuICAgICAgICB0aGlzLnNldERhdGEoXCJmaWxlVXBsb2FkZWRcIiwgZmlsZVVwbG9hZGVkKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKFwidGVtcG9uYXJ5SW1hZ2VJRFwiLCB0ZW1wb25hcnlJbWFnZUlEKTtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3JGcmFtZShcImZpbGVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yRnJhbWUoXCJ1bmtub3duRXJyb3JcIiwgXCJmaWxlXCIpO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZVByZWxvYWRlcigpO1xuICB9XG5cbiAgYmVmb3JlVXBsb2FkKCkge1xuICAgIHRoaXMuc2hvd1ByZWxvYWRlcigpO1xuICAgIHRoaXMuaGlkZUVycm9yRnJhbWUoXCJmaWxlXCIpO1xuICAgIHRoaXMuY2xpcGJvYXJkcy5mb3JFYWNoKGNsaXBib2FyZCA9PiB7XG4gICAgICBjbGlwYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9KTtcbiAgICB0aGlzLmlucHV0RGlzY1RlbXBvbmFyeUltYWdlLnZhbHVlID0gXCJcIjtcbiAgfVxufVxuIiwiXG5cblxuXG5leHBvcnQgY29uc3QgcmVzaXplR3JhcGhpY0ZyYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtZ3JhcGhpY19fZnJhbWUnKTtcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+e1xuICAgICAgICByZXNpemVGcmFtZShmcmFtZXMpO1xuICAgIC8vIH0pO1xuICAgIGNvbnNvbGUubG9nKCdyZXNpemUnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJlc2l6ZUZyYW1lKGZyYW1lcyk7XG4gICAgfSk7XG5cbn07XG5cbmV4cG9ydCBjb25zdCByZXNpemVGcmFtZSA9IChmcmFtZXMpID0+IHtcblxuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICByZXNpemVGcmFtZVNpbmdsZShmcmFtZSlcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZUZyYW1lU2luZ2xlID0gKGZyYW1lKSA9PiB7XG5cbiAgICBjb25zdCBkZWZhdWx0VGl0bGVGb250U2l6ZSA9IDI0O1xuICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbkZvbnRTaXplID0gMTY7XG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uTWFyZ2luVG9wID0gMTM7XG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uTGluZUhlaWdodCA9IDIzO1xuXG4gICAgY29uc3Qgb3J5Z2luYWxIZWlnaHQgPSBmcmFtZS5kYXRhc2V0LmhlaWdodDtcbiAgICBjb25zdCBvcnlnaW5hbFdpZHRoID0gZnJhbWUuZGF0YXNldC53aWR0aDtcblxuICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBmcmFtZS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgY3VycmVudFdpZHRoID0gZnJhbWUub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCB0aXRsZSA9IGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtZ3JhcGhpY19fdGl0bGUgJyk7XG4gICAgY29uc3QgbGluayA9IHRpdGxlLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtZ3JhcGhpY19fZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzY2FsZSA9IGN1cnJlbnRXaWR0aCAvIG9yeWdpbmFsV2lkdGg7XG5cbiAgICBjb25zb2xlLmxvZygnc2NhbGUnLHNjYWxlLG9yeWdpbmFsV2lkdGgsb3J5Z2luYWxIZWlnaHQsY3VycmVudFdpZHRoLGN1cnJlbnRIZWlnaHQpO1xuXG4gICAgZnJhbWUuc3R5bGUudG9wID0gb3J5Z2luYWxIZWlnaHQgKiBzY2FsZSArICdweCc7XG4gICAgZnJhbWUuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgIChsaW5rID8gbGluayA6IHRpdGxlKS5zdHlsZS5mb250U2l6ZSA9IGRlZmF1bHRUaXRsZUZvbnRTaXplICogc2NhbGUgKyAncHgnO1xuXG4gICAgaWYoZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zb2xlLmxvZygnZGVzY3JpcHRpb24nLGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPSBkZWZhdWx0RGVzY3JpcHRpb25NYXJnaW5Ub3AgKiBzY2FsZSArICdweCc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmZvbnRTaXplID0gZGVmYXVsdERlc2NyaXB0aW9uRm9udFNpemUgKiBzY2FsZSArICdweCc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmxpbmVIZWlnaHQgPSBkZWZhdWx0RGVzY3JpcHRpb25MaW5lSGVpZ2h0ICogc2NhbGUgKyAncHgnO1xuICAgIH1cblxuXG59O1xuZXhwb3J0IGNvbnN0IHNob3dNb2JpbGVJbmZvID0gKCkgPT4ge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS1pbmZvX19idXR0b24tLW1vcmUnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlQmFyID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZUluZm8gPSBzaW5nbGVCYXIucXVlcnlTZWxlY3RvcihgI3NpbmdsZS1pbmZvLSR7aWR9YCk7XG4gICAgICAgICAgICBjb25zdCBzaW5nbGVTb3VyY2UgPSBzaW5nbGVCYXIucXVlcnlTZWxlY3RvcihgI3NpbmdsZS1zb3VyY2UtJHtpZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVdyYXAgPSBzaW5nbGVCYXIucXVlcnlTZWxlY3RvcihgI3NpbmdsZS13cmFwLSR7aWR9YCk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2luZ2xlLWluZm9fX2J1dHRvbi0tdmlzYWJsZScpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpbmdsZS1pbmZvX19idXR0b24tLXZpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIHNpbmdsZUluZm8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBzaW5nbGVTb3VyY2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgc2luZ2xlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1pbmZvX19idXR0b24tZHJvcGljb24tLXJvdGF0ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlSW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNpbmdsZVNvdXJjZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNpbmdsZVdyYXAuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaW5nbGUtaW5mb19fYnV0dG9uLWRyb3BpY29uLS1yb3RhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBjb3B5TGluayA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fbGlzdCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgIT0gJ0RJVicpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaW5nbGUtaW5mb19fYnV0dG9uLS1saW5rJykpIHtcblxuICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNvcHknKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1Nrb3Bpb3dhbm8nO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1cmwtJHtpZH1gKTtcblxuICAgICAgICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3Qgc2hvd01vcmUgPSAoKSA9PiB7XG4gICAgLy8gY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtZGVzY3JpcHRpb25fX21vcmUtYnV0dG9uJyk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2xpc3QnKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2luZ2xlLWRlc2NyaXB0aW9uX19tb3JlLWJ1dHRvbicpKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdyYXAucXVlcnlTZWxlY3RvcignLnNpbmdsZS1kZXNjcmlwdGlvbl9fbW9yZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgd3JhcC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWRlc2NyaXB0aW9uX19kb3RzJykuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dZb3V0dWJlRnJhbWUgPSBpZCA9PiB7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fbGlzdCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHlvdXR1YmVGcmFtZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHlvdXR1YmVGcmFtZS50YWdOYW1lICE9ICdESVYnKSB7XG4gICAgICAgICAgICB5b3V0dWJlRnJhbWUgPSB5b3V0dWJlRnJhbWUucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeW91dHViZUZyYW1lLmNsYXNzTGlzdC5jb250YWlucygnc2luZ2xlLWltYWdlX193cmFwLXlvdXR1YmUnKSkge1xuICAgICAgICAgICAgY29uc3QgeW91dHViZUlEID0geW91dHViZUZyYW1lLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh5b3V0dWJlRnJhbWUsIHlvdXR1YmVJRCk7XG4gICAgICAgICAgICBjb25zdCBlbWJlZCA9IGA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjM1MFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlEfT9hdXRvcGxheT0xXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xuICAgICAgICAgICAgeW91dHViZUZyYW1lLmlubmVySFRNTCA9IGVtYmVkO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIC8vIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpbmdzQ291bnRlciA9IChmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIG1heFN0cmluZykgPT4ge1xuICAgIHNpbmdzQ291bnRlckFjdGlvbihmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIG1heFN0cmluZyk7XG4gICAgZmllbGRDb250ZW5lci5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgIHNpbmdzQ291bnRlckFjdGlvbihmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIG1heFN0cmluZyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzaW5nc0NvdW50ZXJBY3Rpb24gPSAoZmllbGRDb250ZW5lciwgY291bnRlckNvbnRlbmVyLCBtYXhTdHJpbmcpID0+IHtcbiAgICBsZXQgc2luZ3NOdW1iZXIgPSBmaWVsZENvbnRlbmVyLnZhbHVlLmxlbmd0aDtcbiAgICBjb3VudGVyQ29udGVuZXIuaW5uZXJUZXh0ID0gc2luZ3NOdW1iZXI7XG4gICAgY29uc3Qgc3ViU3RyaW5nID0gZmllbGRDb250ZW5lci52YWx1ZS5zdWJzdHJpbmcoMCwgbWF4U3RyaW5nIC0gMSk7XG5cbiAgICBpZiAoc2luZ3NOdW1iZXIgPj0gbWF4U3RyaW5nKSB7XG4gICAgICAgIGZpZWxkQ29udGVuZXIudmFsdWUgPSBzdWJTdHJpbmc7XG4gICAgICAgIHNpbmdzTnVtYmVyID0gbWF4U3RyaW5nO1xuICAgIH1cbn07XG4iLCJmdW5jdGlvbiByZXNpemVJZnJhbWUob2JqKSB7XG4gIGNvbnNvbGUubG9nKFwib2JqXCIsIG9iaik7XG4gIG9iai5zdHlsZS5oZWlnaHQgPVxuICAgIG9iai5jb250ZW50V2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkSGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaW5nbGUtZGVzY3JpcHRpb25cIik7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBlbWJlZHMgPSB0aGlzLmNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvZW1iZWRcIik7XG5cbiAgICB0aGlzLmZldGNoT2VtYmVkKCk7XG4gICAgdGhpcy5wcmVwYXJlRW1iZWQoZW1iZWRzKTtcbiAgfVxuXG4gIGZldGNoT2VtYmVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvZW1iZWRcIik7XG4gIH1cbiAgcHJlcGFyZUVtYmVkKGVtYmVkcykge1xuICAgIGNvbnNvbGUubG9nKFwiZW1iZWRzXCIsIGVtYmVkcyk7XG4gICAgT2JqZWN0LmtleXMoZW1iZWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBlbWJlZCA9IGVtYmVkc1trZXldO1xuICAgICAgY29uc29sZS5sb2coXCJlbWJlZHRlc1wiLCBlbWJlZCk7XG4gICAgICBjb25zdCB1cmwgPSBlbWJlZC5nZXRBdHRyaWJ1dGUoXCJ1cmxcIik7XG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKHVybCk7XG4gICAgICBsZXQgcHJlcGFyZWRFbWJlZCA9IFwiXCI7XG4gICAgICBjb25zb2xlLmxvZyhcInR5cGVcIiwgdHlwZSk7XG4gICAgICBpZiAodHlwZSA9PSBcInlvdXR1YmVcIikge1xuICAgICAgICBwcmVwYXJlZEVtYmVkID0gdGhpcy5wcmVwYXJlWW91dHViZUVtYmVkKHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJlcGFyZWRcIiwgcHJlcGFyZWRFbWJlZCwgXCJlbVwiLCBlbWJlZCk7XG4gICAgICAgIC8vICBlbWJlZC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwcmVwYXJlZEVtYmVkLGVtYmVkKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInR3aXR0ZXJcIikge1xuICAgICAgICBwcmVwYXJlZEVtYmVkID0gdGhpcy5wcmVwYXJlVHdpdHRlckVtYmVkKHVybCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJmYWNlYm9va1ZpZGVvXCIpIHtcbiAgICAgICAgcHJlcGFyZWRFbWJlZCA9IHRoaXMucHJlcGFyZUZhY2Vib29rRW1iZWRWaWRlbyh1cmwpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiZmFjZWJvb2tQb3N0XCIpIHtcbiAgICAgICAgcHJlcGFyZWRFbWJlZCA9IHRoaXMucHJlcGFyZUZhY2Vib29rRW1iZWRQb3N0KHVybCk7XG4gICAgICB9XG5cbiAgICAgIGVtYmVkLmFwcGVuZENoaWxkKHByZXBhcmVkRW1iZWQpO1xuICAgIH0pO1xuICB9XG4gIHByZXBhcmVGYWNlYm9va0VtYmVkVmlkZW8odXJsKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNlbnRlci13cmFwXCI+PGRpdiBjbGFzcz1cImZiLXZpZGVvXCIgZGF0YS1ocmVmPVwiJHt1cmx9XCIgZGF0YS13aWR0aD1cIjUwMFwiIGRhdGEtc2hvdy10ZXh0PVwiZmFsc2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmIteGZibWwtcGFyc2UtaWdub3JlXCI+XG4gICAgICA8YmxvY2txdW90ZSBjaXRlPVwiJHt1cmx9XCI+XG4gICAgICAgIDxhIGhyZWY9XCIke3VybH1cIj5Ib3cgdG8gU2hhcmUgV2l0aCBKdXN0IEZyaWVuZHM8L2E+XG4gICAgICAgIDxwPkhvdyB0byBzaGFyZSB3aXRoIGp1c3QgZnJpZW5kcy48L3A+XG4gICAgICAgIFBvc3RlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZhY2Vib29rL1wiPkZhY2Vib29rPC9hPiBvbiBGcmlkYXksIERlY2VtYmVyIDUsIDIwMTRcbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgcHJlcGFyZUZhY2Vib29rRW1iZWRQb3N0KHVybCkge1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzdHlsZT1cImJhY2tncm91bmQ6d2hpdGU7XCIgc3JjPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvcG9zdC5waHA/aHJlZj0ke3ByZXBhcmVkVXJsfSZ3aWR0aD01MDBcIiB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjY1MFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7b3ZlcmZsb3c6aGlkZGVuXCIgc2Nyb2xsaW5nPVwibm9cIiBmcmFtZWJvcmRlcj1cIjBcIiAgYWxsb3c9XCJlbmNyeXB0ZWQtbWVkaWFcIj48L2lmcmFtZT5gO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG5cbiAgcHJlcGFyZVR3aXR0ZXJFbWJlZCh1cmwpIHtcbiAgICAvLyBjb25zdCB0d2l0dGVySUQgPSB0aGlzLmdldFR3aXR0ZXJJREZyb21VcmwodXJsKTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgLy8gZWwuaW5uZXJIVE1MID0gICBgPGlmcmFtZSBib3JkZXI9MCBmcmFtZWJvcmRlcj0wIGhlaWdodD01MDAgIHdpZHRoPTEwMCVcbiAgICAvLyBzcmM9XCJodHRwczovL3R3aXRmcmFtZS5jb20vc2hvdz91cmw9JHtwcmVwYXJlZFVybH1cIj48L2lmcmFtZT5gO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjZW50ZXItd3JhcFwiPjxibG9ja3F1b3RlIGNsYXNzPVwidHdpdHRlci10d2VldFwiIGRhdGEtbGFuZz1cInBsXCI+PGEgaHJlZj1cIiR7dXJsfVwiPjwvYT48L2Jsb2NrcXVvdGU+PC9kaXY+YDtcblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIC8vICAgZ2V0VHdpdHRlcklERnJvbVVybCh1cmwpIHtcbiAgLy8gICAgIGNvbnN0IHNwbGl0ZWQgPSB1cmwuc3BsaXQoXCIvXCIpO1xuICAvLyAgICAgY29uc3Qgc3BpbGVkTGVuZ3RoID0gc3BsaXRlZC5sZW5ndGg7XG4gIC8vICAgICByZXR1cm4gc3BsaXRlZFtzcGlsZWRMZW5ndGggLSAxXTtcbiAgLy8gICB9XG5cbiAgcHJlcGFyZVlvdXR1YmVFbWJlZCh1cmwpIHtcbiAgICBjb25zdCB5b3V0dWJlSUQgPSB0aGlzLmdldFlvdXR1YmVJREZyb21VcmwodXJsKTtcbiAgICBjb25zb2xlLmxvZyhcInl0SURcIiwgeW91dHViZUlEKTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsLmlubmVySFRNTCA9IGA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjM1MFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlEfVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IFxuICAgIGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+YDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBnZXRZb3V0dWJlSURGcm9tVXJsKHVybCkge1xuICAgIC8vIHZhciByZWdFeHAgPSAvXi4qKHlvdXR1XFwuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcbiAgICAvLyB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICAvLyBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09IDExKSB7XG4gICAgLy8gICByZXR1cm4gbWF0Y2hbMl07XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIC8vZXJyb3JcbiAgICAvLyB9XG4gICAgdmFyIHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiNcXCZcXD9dKikuKi87XG4gICAgdmFyIG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzddLmxlbmd0aCA9PSAxMSA/IG1hdGNoWzddIDogZmFsc2U7XG4gIH1cbiAgZ2V0VHlwZShlbWJlZCkge1xuICAgIGNvbnNvbGUubG9nKFwiZW1iZWRTdHJpbmdcIiwgZW1iZWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKGVtYmVkLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJ5b3VcIikpIHtcbiAgICAgIHJldHVybiBcInlvdXR1YmVcIjtcbiAgICB9IGVsc2UgaWYgKGVtYmVkLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJ0d2l0dGVyXCIpKSB7XG4gICAgICByZXR1cm4gXCJ0d2l0dGVyXCI7XG4gICAgfSBlbHNlIGlmIChlbWJlZC50b1N0cmluZygpLmluY2x1ZGVzKFwiZmFjZWJvb2tcIikgJiYgZW1iZWQudG9TdHJpbmcoKS5pbmNsdWRlcyhcInZpZGVvc1wiKSkge1xuICAgICAgcmV0dXJuIFwiZmFjZWJvb2tWaWRlb1wiO1xuICAgIH0gZWxzZSBpZiAoZW1iZWQudG9TdHJpbmcoKS5pbmNsdWRlcyhcImZhY2Vib29rXCIpKSB7XG4gICAgICByZXR1cm4gXCJmYWNlYm9va1Bvc3RcIjtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBOZXdQb3N0SGVscGVyIHtcbiAgLyogY29tbW9uICovXG4gIGdldEhvc3RuYW1lKCkge1xuICAgIHJldHVybiBgaHR0cDovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfToke3dpbmRvdy5sb2NhdGlvbi5wb3J0fWA7XG4gIH1cblxuICBjaGVja1VybElzSW1hZ2UodXJsKSB7XG4gICAgaWYgKHVybC5tYXRjaCgvXFwuKGpwZWd8anBnfHBuZykkLykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFcnJvcihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzW25hbWVdO1xuICB9XG5cbiAgc2V0RGF0YShuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVtuYW1lXSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0RGF0YShuYW1lKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhbGlkRmlsZUFkZGVkKCkge1xuICAgIGlmKHRoaXMuZ2V0RGF0YShcInRlbXBvbmFyeUltYWdlSURcIikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFsaWRJc3NldFRpdGxlT3JEZXNjcmlwdGlvbih0aXRsZSwgZGVzY3JpcHRpb24pIHt9XG5cbiAgZ2V0SW1hZ2VGaWxlKCkge1xuICAgIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3R5cGU9ZmlsZV1cIikuZmlsZXNbMF07XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICByZXR1cm4gZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgfVxuXG4gIHNob3dFcnJvckZyYW1lKG1zZywgdHlwZSkge1xuICAgIGNvbnN0IGVycm9yTXNnID0gdGhpcy5nZXRFcnJvcihtc2cpO1xuICAgIGNvbnN0IGVycm9yV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5maWVsZC1lcnJvci0tJHt0eXBlfWApO1xuICAgIGNvbnN0IGVycm9yRnJhbWUgPSBlcnJvcldyYXAucXVlcnlTZWxlY3RvcihgLmZpZWxkLWVycm9yX19mcmFtZS0tJHt0eXBlfWApO1xuXG4gICAgZXJyb3JGcmFtZS5pbm5lclRleHQgPSBlcnJvck1zZztcbiAgICBlcnJvcldyYXAuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgfVxuXG4gIGdldEVycm9yKG1zZykge1xuICAgIGNvbnN0IGVycm9ycyA9IHtcbiAgICAgIGltYWdlRXh0ZW5zaW9uRXJyb3I6IFwiWmHFgsSFY3pvbnkgcGxpayBtdXNpIG1pZcSHIHJvenN6ZXJ6ZW5pZSBqcGcgbHViIHBuZ1wiLFxuICAgICAgZmlsZVNpemVFcnJvcjogXCJXeWJyYW5lIHpkasSZY2llIGplc3QgemEgZHXFvGVcIixcbiAgICAgIHVua25vd25FcnJvcjogXCJDb8WbIHBvc3rFgm8gbmllIHRhay4gU3Byw7NidWogcG9ub3duaWUhXCIsXG4gICAgICB5b3V0dWJlRXJyb3I6IFwiUG9kYW55IGxpbmsgZG8gZmlsbXkgWW91dHViZSBqZXN0IG5pZXBvcHJhd255XCIsXG4gICAgICBlbXB0eUZpbGU6IFwiTXVzaXN6IGRvZGHEhyBqYWtpxZsgbWF0ZXJpYcWCXCIsXG4gICAgICBlbXB0eVRpdGxlOiBcIk11c2lzeiBkb2RhxIcgdHl0dcWCXCIsXG4gICAgICBub3RDb25maXJtOiBcIk11c2lzeiBwb3R3aWVyZHppxIcgcmVndWxhbWluXCIsXG4gICAgICB0aXRsZVRvb0xvbmc6IFwiVHl0dcWCIG1vxbxlIHphd2llcmHEhyBtYWtzaW11bSAyNTAgem5ha8Ozd1wiLFxuICAgICAgZGVzY3JpcHRpb25Ub29Mb25nR3JhcGhpYzogXCJPcGlzIGRsYSBncmFmaWtpIG1vxbxlIHphd2llcmHEhyBtYWtzaW11bSA3NTAgem5ha8Ozd1wiLFxuICAgICAgZGVzY3JpcHRpb25Ub29Mb25nUG9zdDogXCJPcGlzIGRsYSBwb3N0dSBtb8W8ZSB6YXdpZXJhxIcgbWFrc2ltdW0gMTAgMDAwIHpuYWvDs3dcIixcbiAgICAgIGNhcHRjaGE6IFwiTmllIGplc3RlxZsgY3rFgm93aWVraWVtP1wiXG4gICAgfTtcbiAgICByZXR1cm4gZXJyb3JzW21zZ107XG4gIH1cblxuICBoaWRlRXJyb3JGcmFtZSh0eXBlKSB7XG4gICAgY29uc3QgZXJyb3JXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZpZWxkLWVycm9yLS0ke3R5cGV9YCk7XG4gICAgY29uc3QgZXJyb3JGcmFtZSA9IGVycm9yV3JhcC5xdWVyeVNlbGVjdG9yKGAuZmllbGQtZXJyb3JfX2ZyYW1lLS0ke3R5cGV9YCk7XG4gICAgZXJyb3JXcmFwLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgZXJyb3JGcmFtZS5pbm5lclRleHQgPSBcIlwiO1xuICB9XG5cbiAgY2xlYXJBbGxFcnJvcnMoKSB7XG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZC1lcnJvclwiKTtcbiAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgZXJyb3IucXVlcnlTZWxlY3RvcihcIi5maWVsZC1lcnJvcl9fZnJhbWVcIikuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUltYWdlKGZpbGVVcGxvYWRlZCkge1xuICAgIHJldHVybiBgPGltZyBjbGFzcz0nJyBzcmM9XCIke3RoaXMuZ2V0Um91dGVUb1RlbXBvbmFyeUZpbGUoKX0ke2ZpbGVVcGxvYWRlZH1cIi8+YDtcbiAgfVxuXG4gIGNyZWF0ZVlvdXR1YmVFbWJlZCh5b3V0dWJlSUQpIHtcbiAgICByZXR1cm4gYDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3V0dWJlSUR9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xuICB9XG5cbiAgc2hvd1ByZWxvYWRlcigpIHtcbiAgICB0aGlzLnBvc3RQcmVsb2FkZXJzLmZvckVhY2gobG9hZGVyPT57XG4gICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pXG4gIH1cblxuICBoaWRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMucG9zdFByZWxvYWRlcnMuZm9yRWFjaChsb2FkZXI9PntcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuICB9XG5cbiAgZ2V0Um91dGVUb1RlbXBvbmFyeUZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SG9zdG5hbWUoKSArIFwiL3VwbG9hZC90ZW1wb25hcnktaW1hZ2UvXCI7XG4gIH1cblxuICBpbml0TWVuYWdlVHlwZVBvc3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHlwZS1kYXRhXCIpO1xuXG5cbiAgICBzZWxlY3RUeXBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG5cblxuICAgICAgdGhpcy5oaWRlQWxsQWN0aW9uRmllbGRzKCk7XG4gICAgICBjb25zdCB0eXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNob3dBY3Rpb25GaWVsZCh0eXBlKTtcblxuICAgICAgdGhpcy5zZXREYXRhKFwic2VsZWN0VHlwZVwiLCB0eXBlKTtcbiAgICAgIHRoaXMuY2xlYXJEYXRhQWZ0ZXJDaGFuZ2VUeXBlUG9zdCgpO1xuICAgICAgdGhpcy5jbGVhckNsaXBib2FyZCgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBnZXRDdXJyZW50VHlwZVBvc3QoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHlwZS1wb3N0XCIpLnZhbHVlO1xuICB9XG5cbiAgaGlkZUFsbEFjdGlvbkZpZWxkcygpIHtcbiAgICB0aGlzLnR5cGVQb3N0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0FjdGlvbkZpZWxkKHR5cGUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY3JlYXRlX19wb3N0LW9wdGlvbi0tJHt0eXBlfWApLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgXCJibG9ja1wiO1xuICB9XG5cbiAgY2xlYXJEYXRhQWZ0ZXJDaGFuZ2VUeXBlUG9zdCgpIHtcbiAgICBjb25zdCBsaW5rWW91dHViZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9fcG9zdC15b3V0dWJlXCIpO1xuICAgIGNvbnN0IGxpbmtVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fX3Bvc3QtbGlua1wiKTtcblxuICAgIGxpbmtZb3V0dWJlLnZhbHVlID0gXCJcIjtcbiAgICBsaW5rVXJsLnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnNldERhdGEoXCJmaWxlVXBsb2FkZWRcIiwgbnVsbCk7XG4gICAgdGhpcy5zZXREYXRhKFwidGVtcG9uYXJ5SW1hZ2VJRFwiLCBudWxsKTtcbiAgICB0aGlzLnNldERhdGEoXCJ5b3V0dWJlSURcIiwgbnVsbCk7XG5cbiAgICB0aGlzLmhpZGVFcnJvckZyYW1lKFwiZmlsZVwiKTtcbiAgfVxuXG4gIGNsZWFyQ2xpcGJvYXJkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlX19wb3N0LWNsaXBib2FyZFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgeW91dHViZVBhcnNlcih1cmwpIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbN10ubGVuZ3RoID09IDExKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbN107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjaGVja1VybElzSW1hZ2UgPSB1cmwgPT4ge1xuICBpZiAodXJsLm1hdGNoKC9cXC4oanBlZ3xqcGd8cG5nKSQvKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RyaW5nTWF4TGVuZ3RoID0gKHN0cmluZywgbnVtYmVyKSA9PiB7XG4gIGlmIChzdHJpbmcubGVuZ3RoIDw9IG51bWJlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgaXNWYWxpZFN0cmluZ01pbkxlbmd0aCA9IChzdHJpbmcsIG51bWJlcikgPT4ge1xuICBpZiAoc3RyaW5nLmxlbmd0aCA8IG51bWJlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IHlvdXR1YmVQYXJzZXIgPSB1cmwgPT4ge1xuICBsZXQgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcbiAgbGV0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4cCk7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFs3XS5sZW5ndGggPT0gMTEpIHtcbiAgICByZXR1cm4gbWF0Y2hbN107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZW1haWxWYWxpZCA9IGVtYWlsID0+IHtcbiAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVmFsaWQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsKTtcbiAgZm9ybURhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgcGFzc3dvcmQpO1xuICAvLyBkYXRhOiBmb3JtRGF0YSxcbiAgLy8gdHlwZTogXCJwb3N0XCIsXG4gIGZldGNoKFwiL2FwaS1sb2dpbi12YWxpZFwiLCB7XG4gICAgYm9keTogZm9ybURhdGEsXG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9KVxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByenlrxYJhZCAyOlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=