(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-list~post-single"],{

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

/***/ "./assets/js/helper/post/vote.js":
/*!***************************************!*\
  !*** ./assets/js/helper/post/vote.js ***!
  \***************************************/
/*! exports provided: Vote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vote =
/*#__PURE__*/
function () {
  function Vote() {
    _classCallCheck(this, Vote);

    this.buttons = document.querySelectorAll(".single-bar__vote--action");
    this.votedClass = "single-bar__vote--voted";
    this.votedClassDisable = "single-bar__vote--disabled";
    this.type = "";
    this.initEvent();
    this.postUrl = "/vote/";
  }

  _createClass(Vote, [{
    key: "initEvent",
    value: function initEvent() {
      this.initClick();
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var element = event.target;

      if (element.tagName != 'DIV') {
        element = element.parentElement;
      }

      if (element.classList.contains('single-bar__vote')) {
        var btn = element;
        var score = btn.parentNode.querySelector(".single-bar__vote-score");
        var type = this.getType(btn);
        var reverseBtn = this.getReverseBtn(btn, type);
        var reverseType = this.getType(reverseBtn);
        var postID = btn.dataset.id;
        var newScore = parseInt(score.dataset.score);

        if (btn.classList.contains(this.votedClass)) {
          btn.classList.remove(this.votedClass);
          reverseBtn.classList.remove(this.votedClassDisable);
          this.post(this.prepareUrl(postID, 'remove'));
        } else {
          btn.classList.add(this.votedClass);
          btn.classList.remove(this.votedClassDisable);
          reverseBtn.classList.remove(this.votedClass);
          reverseBtn.classList.add(this.votedClassDisable);
          newScore = type == 'up' ? newScore + 1 : newScore - 1;
          this.post(this.prepareUrl(postID, type));
        }

        this.setNewScoreValue(postID, newScore);
      }
    }
  }, {
    key: "initClickVoted",
    value: function initClickVoted() {}
  }, {
    key: "initClick",
    value: function initClick() {
      var _this = this;

      var list = document.querySelector('.container__list');
      list.addEventListener('click', function (event) {
        _this.handleEvent(event);
      }); // this.buttons.forEach(btn => {
      //     btn.addEventListener("click", event => {
      //         const btn = event.currentTarget;
      //         const score = btn.parentNode.querySelector(".single-bar__vote-score");
      //         const type = this.getType(btn);
      //         const reverseBtn = this.getReverseBtn(btn, type);
      //         const reverseType = this.getType(reverseBtn);
      //         const postID = btn.dataset.id;
      //         let newScore = parseInt(score.dataset.score);
      //
      //         if (btn.classList.contains(this.votedClass)) {
      //             btn.classList.remove(this.votedClass);
      //             reverseBtn.classList.remove(this.votedClassDisable);
      //             this.post(this.prepareUrl(postID, 'remove'));
      //             console.log('vote', 'remove');
      //         } else {
      //             btn.classList.add(this.votedClass);
      //             btn.classList.remove(this.votedClassDisable);
      //
      //             reverseBtn.classList.remove(this.votedClass);
      //             reverseBtn.classList.add(this.votedClassDisable);
      //             newScore = type == 'up' ? newScore + 1 : newScore - 1;
      //             this.post(this.prepareUrl(postID, type));
      //             console.log('vote', type);
      //         }
      //
      //         this.setNewScoreValue(postID, newScore);
      //     });
      // });
    }
  }, {
    key: "prepareUrl",
    value: function prepareUrl(id, action) {
      return this.postUrl = "/vote/".concat(id, "/").concat(action);
    }
  }, {
    key: "getReverseBtn",
    value: function getReverseBtn(currentBtn, type) {
      var reverseType = this.getReverse(type);
      return currentBtn.parentNode.parentNode.querySelector(".single-bar__vote".concat(reverseType));
    }
  }, {
    key: "getReverse",
    value: function getReverse(type) {
      return type == "up" ? "--down" : "--up";
    }
  }, {
    key: "getType",
    value: function getType(btn) {
      var type = "";

      if (btn.classList.contains("single-bar__vote--up")) {
        type = "up";
      } else if (btn.classList.contains("single-bar__vote--down")) {
        type = "down";
      }

      return type;
    }
  }, {
    key: "setNewScoreValue",
    value: function setNewScoreValue(id, scoreValue) {
      var score = document.querySelector("#score-".concat(id));
      score.innerText = scoreValue;
    }
  }, {
    key: "post",
    value: function post(url) {
      // do zmiany na fetch
      $.ajax({
        url: url,
        data: [],
        type: "post",
        contentType: false,
        processData: false,
        cache: false,
        dataType: "json",
        beforeSend: function beforeSend() {},
        success: function success(data) {
          console.log(data);
        }
      });
    }
  }]);

  return Vote;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/lib/Report.js":
/*!*********************************!*\
  !*** ./assets/js/lib/Report.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Report; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Report =
/*#__PURE__*/
function () {
  function Report(sortDesktop) {
    _classCallCheck(this, Report);

    this.initReports = document.querySelectorAll('.report__init');
    this.reports = document.querySelectorAll('.report');
    this.postUrl = '/api-report';
    this.cover = document.querySelector('.cover');
    this.initReport();
  }

  _createClass(Report, [{
    key: "initReport",
    value: function initReport() {
      var _this = this;

      var list = document.querySelector('.container__list');
      list.addEventListener('click', function (event) {
        var element = event.target;

        if (element.tagName != 'DIV') {
          element = element.parentElement;
        }

        if (element.classList.contains('single-info__button--report')) {
          var button = element;
          var type = button.dataset.type;
          var id = button.dataset.id;
          button.classList.remove('display-none');
          document.querySelector("#report-".concat(type, "-").concat(id)).classList.remove('display-none');

          _this.cover.classList.remove('display-none');
        }
      });
      this.reports.forEach(function (report) {
        _this.setEventsForReport(report);
      });
    }
  }, {
    key: "setEventsForReport",
    value: function setEventsForReport(report) {
      this.eventReport(report);
      this.onlyOneSelected(report);
      this.closeReport(report);
    }
  }, {
    key: "eventReport",
    value: function eventReport(report) {
      var _this2 = this;

      report.querySelector('.report__button').addEventListener('click', function (event) {
        event.preventDefault();
        var report = event.currentTarget.parentNode.parentNode.parentNode;
        var type = report.dataset.type;
        var id = report.dataset.id;
        var checkboxes = report.querySelectorAll("input[type='checkbox']");
        var textarea = report.querySelector('textarea').value;
        var formData = new FormData();
        formData.append('type', type);
        formData.append('id', id);
        formData.append('other', textarea);
        checkboxes.forEach(function (checkbox) {
          formData.append(checkbox.value, checkbox.checked ? true : false);
        });

        _this2.post(_this2.postUrl, formData);

        _this2.resetReport(report);
      });
    }
  }, {
    key: "closeReport",
    value: function closeReport(report) {
      var _this3 = this;

      var close = report.querySelector('.report__close');
      close.addEventListener('click', function (event) {
        var report = event.currentTarget.parentNode;

        _this3.resetReport(report);
      });
    }
  }, {
    key: "resetReport",
    value: function resetReport(report) {
      var checkboxes = report.querySelectorAll("input[type='checkbox");
      var other = report.querySelector('textarea');
      var button = report.querySelector('.report__button');
      report.classList.add('display-none');
      this.clearAllCheckbox(checkboxes);
      other.classList.add('display-none');
      other.innerText = '';
      button.classList.add('display-none');
      this.cover.classList.add('display-none');
    }
  }, {
    key: "onlyOneSelected",
    value: function onlyOneSelected(report) {
      var _this4 = this;

      var checkboxes = report.querySelectorAll("input[type='checkbox");
      var button = report.querySelector('.report__button');
      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function (event) {
          _this4.clearAllCheckbox(checkboxes);

          var currentCheckbox = event.currentTarget;
          currentCheckbox.checked = true;
          var textarea = event.currentTarget.parentNode.parentNode.parentNode.querySelector('textarea');

          if (currentCheckbox.getAttribute('value') == 'isOther') {
            textarea.classList.remove('display-none');
          } else {
            textarea.classList.add('display-none');
          }

          button.classList.remove('display-none');
        });
      });
    }
  }, {
    key: "clearAllCheckbox",
    value: function clearAllCheckbox(checkboxes) {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  }, {
    key: "post",
    value: function post(url, formData) {
      // do zmiany na fetch
      $.ajax({
        url: url,
        data: formData,
        type: "post",
        contentType: false,
        processData: false,
        cache: false,
        dataType: "json",
        beforeSend: function beforeSend() {},
        success: function success(data) {}
      });
    }
  }]);

  return Report;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVyL3Bvc3QvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXIvcG9zdC92b3RlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saWIvUmVwb3J0LmpzIl0sIm5hbWVzIjpbInJlc2l6ZUdyYXBoaWNGcmFtZSIsImZyYW1lcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlc2l6ZUZyYW1lIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZvckVhY2giLCJmcmFtZSIsInJlc2l6ZUZyYW1lU2luZ2xlIiwiZGVmYXVsdFRpdGxlRm9udFNpemUiLCJkZWZhdWx0RGVzY3JpcHRpb25Gb250U2l6ZSIsImRlZmF1bHREZXNjcmlwdGlvbk1hcmdpblRvcCIsImRlZmF1bHREZXNjcmlwdGlvbkxpbmVIZWlnaHQiLCJvcnlnaW5hbEhlaWdodCIsImRhdGFzZXQiLCJoZWlnaHQiLCJvcnlnaW5hbFdpZHRoIiwid2lkdGgiLCJjdXJyZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY3VycmVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJsaW5rIiwiZGVzY3JpcHRpb24iLCJzY2FsZSIsInN0eWxlIiwidG9wIiwiYm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0Iiwic2hvd01vYmlsZUluZm8iLCJpdGVtIiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJpY29uIiwiaWQiLCJzaW5nbGVCYXIiLCJwYXJlbnROb2RlIiwic2luZ2xlSW5mbyIsInNpbmdsZVNvdXJjZSIsInNpbmdsZVdyYXAiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsImRpc3BsYXkiLCJyZW1vdmUiLCJhZGQiLCJjb3B5TGluayIsImxpc3QiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicGFyZW50RWxlbWVudCIsInRleHQiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJpbnB1dCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZ2V0U2VsZWN0aW9uIiwic2hvd01vcmUiLCJwcmV2ZW50RGVmYXVsdCIsIndyYXAiLCJzaG93WW91dHViZUZyYW1lIiwieW91dHViZUZyYW1lIiwieW91dHViZUlEIiwiZW1iZWQiLCJpbm5lckhUTUwiLCJzaW5nc0NvdW50ZXIiLCJmaWVsZENvbnRlbmVyIiwiY291bnRlckNvbnRlbmVyIiwibWF4U3RyaW5nIiwic2luZ3NDb3VudGVyQWN0aW9uIiwiZSIsInNpbmdzTnVtYmVyIiwidmFsdWUiLCJsZW5ndGgiLCJzdWJTdHJpbmciLCJzdWJzdHJpbmciLCJWb3RlIiwiYnV0dG9ucyIsInZvdGVkQ2xhc3MiLCJ2b3RlZENsYXNzRGlzYWJsZSIsInR5cGUiLCJpbml0RXZlbnQiLCJwb3N0VXJsIiwiaW5pdENsaWNrIiwiYnRuIiwic2NvcmUiLCJnZXRUeXBlIiwicmV2ZXJzZUJ0biIsImdldFJldmVyc2VCdG4iLCJyZXZlcnNlVHlwZSIsInBvc3RJRCIsIm5ld1Njb3JlIiwicGFyc2VJbnQiLCJwb3N0IiwicHJlcGFyZVVybCIsInNldE5ld1Njb3JlVmFsdWUiLCJoYW5kbGVFdmVudCIsImFjdGlvbiIsImN1cnJlbnRCdG4iLCJnZXRSZXZlcnNlIiwic2NvcmVWYWx1ZSIsInVybCIsIiQiLCJhamF4IiwiZGF0YSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjYWNoZSIsImRhdGFUeXBlIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJSZXBvcnQiLCJzb3J0RGVza3RvcCIsImluaXRSZXBvcnRzIiwicmVwb3J0cyIsImNvdmVyIiwiaW5pdFJlcG9ydCIsImJ1dHRvbiIsInJlcG9ydCIsInNldEV2ZW50c0ZvclJlcG9ydCIsImV2ZW50UmVwb3J0Iiwib25seU9uZVNlbGVjdGVkIiwiY2xvc2VSZXBvcnQiLCJjaGVja2JveGVzIiwidGV4dGFyZWEiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY2hlY2tib3giLCJjaGVja2VkIiwicmVzZXRSZXBvcnQiLCJjbG9zZSIsIm90aGVyIiwiY2xlYXJBbGxDaGVja2JveCIsImN1cnJlbnRDaGVja2JveCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUNwQyxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQWYsQ0FEb0MsQ0FFcEM7O0FBQ0lDLGFBQVcsQ0FBQ0gsTUFBRCxDQUFYLENBSGdDLENBSXBDOztBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBVUMsS0FBVixFQUFpQjtBQUMvQ0wsZUFBVyxDQUFDSCxNQUFELENBQVg7QUFDSCxHQUZEO0FBSUgsQ0FWTTtBQVlBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNILE1BQUQsRUFBWTtBQUVuQ0EsUUFBTSxDQUFDUyxPQUFQLENBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RCQyxxQkFBaUIsQ0FBQ0QsS0FBRCxDQUFqQjtBQUNILEdBRkQ7QUFJSCxDQU5NO0FBUUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDRCxLQUFELEVBQVc7QUFFeEMsTUFBTUUsb0JBQW9CLEdBQUcsRUFBN0I7QUFDQSxNQUFNQywwQkFBMEIsR0FBRyxFQUFuQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLEVBQXBDO0FBQ0EsTUFBTUMsNEJBQTRCLEdBQUcsRUFBckM7QUFFQSxNQUFNQyxjQUFjLEdBQUdOLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxNQUFyQztBQUNBLE1BQU1DLGFBQWEsR0FBR1QsS0FBSyxDQUFDTyxPQUFOLENBQWNHLEtBQXBDO0FB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QkFBVSxFQUFFLHNCQUFNLENBQ2pCLENBVEU7QUFVSEMsZUFBTyxFQUFFLGlCQUFBTixJQUFJLEVBQUksQ0FDaEI7QUFYRSxPQUFQO0FBYUgiLCJmaWxlIjoicG9zdC1saXN0fnBvc3Qtc2luZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5leHBvcnQgY29uc3QgcmVzaXplR3JhcGhpY0ZyYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtZ3JhcGhpY19fZnJhbWUnKTtcbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+e1xuICAgICAgICByZXNpemVGcmFtZShmcmFtZXMpO1xuICAgIC8vIH0pO1xuICAgIGNvbnNvbGUubG9nKCdyZXNpemUnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJlc2l6ZUZyYW1lKGZyYW1lcyk7XG4gICAgfSk7XG5cbn07XG5cbmV4cG9ydCBjb25zdCByZXNpemVGcmFtZSA9IChmcmFtZXMpID0+IHtcblxuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICByZXNpemVGcmFtZVNpbmdsZShmcmFtZSlcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZUZyYW1lU2luZ2xlID0gKGZyYW1lKSA9PiB7XG5cbiAgICBjb25zdCBkZWZhdWx0VGl0bGVGb250U2l6ZSA9IDI0O1xuICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbkZvbnRTaXplID0gMTY7XG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uTWFyZ2luVG9wID0gMTM7XG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uTGluZUhlaWdodCA9IDIzO1xuXG4gICAgY29uc3Qgb3J5Z2luYWxIZWlnaHQgPSBmcmFtZS5kYXRhc2V0LmhlaWdodDtcbiAgICBjb25zdCBvcnlnaW5hbFdpZHRoID0gZnJhbWUuZGF0YXNldC53aWR0aDtcblxuICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBmcmFtZS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgY3VycmVudFdpZHRoID0gZnJhbWUub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCB0aXRsZSA9IGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtZ3JhcGhpY19fdGl0bGUgJyk7XG4gICAgY29uc3QgbGluayA9IHRpdGxlLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtZ3JhcGhpY19fZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBzY2FsZSA9IGN1cnJlbnRXaWR0aCAvIG9yeWdpbmFsV2lkdGg7XG5cbiAgICBjb25zb2xlLmxvZygnc2NhbGUnLHNjYWxlLG9yeWdpbmFsV2lkdGgsb3J5Z2luYWxIZWlnaHQsY3VycmVudFdpZHRoLGN1cnJlbnRIZWlnaHQpO1xuXG4gICAgZnJhbWUuc3R5bGUudG9wID0gb3J5Z2luYWxIZWlnaHQgKiBzY2FsZSArICdweCc7XG4gICAgZnJhbWUuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgIChsaW5rID8gbGluayA6IHRpdGxlKS5zdHlsZS5mb250U2l6ZSA9IGRlZmF1bHRUaXRsZUZvbnRTaXplICogc2NhbGUgKyAncHgnO1xuXG4gICAgaWYoZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zb2xlLmxvZygnZGVzY3JpcHRpb24nLGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPSBkZWZhdWx0RGVzY3JpcHRpb25NYXJnaW5Ub3AgKiBzY2FsZSArICdweCc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmZvbnRTaXplID0gZGVmYXVsdERlc2NyaXB0aW9uRm9udFNpemUgKiBzY2FsZSArICdweCc7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmxpbmVIZWlnaHQgPSBkZWZhdWx0RGVzY3JpcHRpb25MaW5lSGVpZ2h0ICogc2NhbGUgKyAncHgnO1xuICAgIH1cblxuXG59O1xuZXhwb3J0IGNvbnN0IHNob3dNb2JpbGVJbmZvID0gKCkgPT4ge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS1pbmZvX19idXR0b24tLW1vcmUnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgY29uc3Qgc2luZ2xlQmFyID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZUluZm8gPSBzaW5nbGVCYXIucXVlcnlTZWxlY3RvcihgI3NpbmdsZS1pbmZvLSR7aWR9YCk7XG4gICAgICAgICAgICBjb25zdCBzaW5nbGVTb3VyY2UgPSBzaW5nbGVCYXIucXVlcnlTZWxlY3RvcihgI3NpbmdsZS1zb3VyY2UtJHtpZH1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVdyYXAgPSBzaW5nbGVCYXIucXVlcnlTZWxlY3RvcihgI3NpbmdsZS13cmFwLSR7aWR9YCk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2luZ2xlLWluZm9fX2J1dHRvbi0tdmlzYWJsZScpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpbmdsZS1pbmZvX19idXR0b24tLXZpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgIHNpbmdsZUluZm8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBzaW5nbGVTb3VyY2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgc2luZ2xlV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1pbmZvX19idXR0b24tZHJvcGljb24tLXJvdGF0ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlSW5mby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNpbmdsZVNvdXJjZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHNpbmdsZVdyYXAuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaW5nbGUtaW5mb19fYnV0dG9uLWRyb3BpY29uLS1yb3RhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBjb3B5TGluayA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fbGlzdCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgIT0gJ0RJVicpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaW5nbGUtaW5mb19fYnV0dG9uLS1saW5rJykpIHtcblxuICAgICAgICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWNvcHknKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1Nrb3Bpb3dhbm8nO1xuXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN1cmwtJHtpZH1gKTtcblxuICAgICAgICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3Qgc2hvd01vcmUgPSAoKSA9PiB7XG4gICAgLy8gY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtZGVzY3JpcHRpb25fX21vcmUtYnV0dG9uJyk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2xpc3QnKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2luZ2xlLWRlc2NyaXB0aW9uX19tb3JlLWJ1dHRvbicpKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdyYXAucXVlcnlTZWxlY3RvcignLnNpbmdsZS1kZXNjcmlwdGlvbl9fbW9yZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgd3JhcC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWRlc2NyaXB0aW9uX19kb3RzJykuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dZb3V0dWJlRnJhbWUgPSBpZCA9PiB7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fbGlzdCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHlvdXR1YmVGcmFtZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHlvdXR1YmVGcmFtZS50YWdOYW1lICE9ICdESVYnKSB7XG4gICAgICAgICAgICB5b3V0dWJlRnJhbWUgPSB5b3V0dWJlRnJhbWUucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeW91dHViZUZyYW1lLmNsYXNzTGlzdC5jb250YWlucygnc2luZ2xlLWltYWdlX193cmFwLXlvdXR1YmUnKSkge1xuICAgICAgICAgICAgY29uc3QgeW91dHViZUlEID0geW91dHViZUZyYW1lLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh5b3V0dWJlRnJhbWUsIHlvdXR1YmVJRCk7XG4gICAgICAgICAgICBjb25zdCBlbWJlZCA9IGA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjM1MFwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7eW91dHViZUlEfT9hdXRvcGxheT0xXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xuICAgICAgICAgICAgeW91dHViZUZyYW1lLmlubmVySFRNTCA9IGVtYmVkO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIC8vIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNpbmdzQ291bnRlciA9IChmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIG1heFN0cmluZykgPT4ge1xuICAgIHNpbmdzQ291bnRlckFjdGlvbihmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIG1heFN0cmluZyk7XG4gICAgZmllbGRDb250ZW5lci5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgIHNpbmdzQ291bnRlckFjdGlvbihmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIG1heFN0cmluZyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzaW5nc0NvdW50ZXJBY3Rpb24gPSAoZmllbGRDb250ZW5lciwgY291bnRlckNvbnRlbmVyLCBtYXhTdHJpbmcpID0+IHtcbiAgICBsZXQgc2luZ3NOdW1iZXIgPSBmaWVsZENvbnRlbmVyLnZhbHVlLmxlbmd0aDtcbiAgICBjb3VudGVyQ29udGVuZXIuaW5uZXJUZXh0ID0gc2luZ3NOdW1iZXI7XG4gICAgY29uc3Qgc3ViU3RyaW5nID0gZmllbGRDb250ZW5lci52YWx1ZS5zdWJzdHJpbmcoMCwgbWF4U3RyaW5nIC0gMSk7XG5cbiAgICBpZiAoc2luZ3NOdW1iZXIgPj0gbWF4U3RyaW5nKSB7XG4gICAgICAgIGZpZWxkQ29udGVuZXIudmFsdWUgPSBzdWJTdHJpbmc7XG4gICAgICAgIHNpbmdzTnVtYmVyID0gbWF4U3RyaW5nO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY2xhc3MgVm90ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2luZ2xlLWJhcl9fdm90ZS0tYWN0aW9uXCIpO1xuICAgICAgICB0aGlzLnZvdGVkQ2xhc3MgPSBcInNpbmdsZS1iYXJfX3ZvdGUtLXZvdGVkXCI7XG4gICAgICAgIHRoaXMudm90ZWRDbGFzc0Rpc2FibGUgPSBcInNpbmdsZS1iYXJfX3ZvdGUtLWRpc2FibGVkXCI7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gICAgICAgIHRoaXMucG9zdFVybCA9IFwiL3ZvdGUvXCI7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50KCkge1xuICAgICAgICB0aGlzLmluaXRDbGljaygpO1xuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgIT0gJ0RJVicpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpbmdsZS1iYXJfX3ZvdGUnKSkge1xuICAgICAgICAgICAgY29uc3QgYnRuID0gZWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JlID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5zaW5nbGUtYmFyX192b3RlLXNjb3JlXCIpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZShidG4pO1xuICAgICAgICAgICAgY29uc3QgcmV2ZXJzZUJ0biA9IHRoaXMuZ2V0UmV2ZXJzZUJ0bihidG4sIHR5cGUpO1xuICAgICAgICAgICAgY29uc3QgcmV2ZXJzZVR5cGUgPSB0aGlzLmdldFR5cGUocmV2ZXJzZUJ0bik7XG4gICAgICAgICAgICBjb25zdCBwb3N0SUQgPSBidG4uZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGxldCBuZXdTY29yZSA9IHBhcnNlSW50KHNjb3JlLmRhdGFzZXQuc2NvcmUpO1xuXG4gICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLnZvdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy52b3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICByZXZlcnNlQnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy52b3RlZENsYXNzRGlzYWJsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0KHRoaXMucHJlcGFyZVVybChwb3N0SUQsICdyZW1vdmUnKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodGhpcy52b3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZvdGVkQ2xhc3NEaXNhYmxlKTtcblxuICAgICAgICAgICAgICAgIHJldmVyc2VCdG4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZvdGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHJldmVyc2VCdG4uY2xhc3NMaXN0LmFkZCh0aGlzLnZvdGVkQ2xhc3NEaXNhYmxlKTtcbiAgICAgICAgICAgICAgICBuZXdTY29yZSA9IHR5cGUgPT0gJ3VwJyA/IG5ld1Njb3JlICsgMSA6IG5ld1Njb3JlIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QodGhpcy5wcmVwYXJlVXJsKHBvc3RJRCwgdHlwZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldE5ld1Njb3JlVmFsdWUocG9zdElELCBuZXdTY29yZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0Q2xpY2tWb3RlZCgpIHtcbiAgICB9XG5cbiAgICBpbml0Q2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19saXN0Jyk7XG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAvLyAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgYnRuID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBzY29yZSA9IGJ0bi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuc2luZ2xlLWJhcl9fdm90ZS1zY29yZVwiKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKGJ0bik7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcmV2ZXJzZUJ0biA9IHRoaXMuZ2V0UmV2ZXJzZUJ0bihidG4sIHR5cGUpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHJldmVyc2VUeXBlID0gdGhpcy5nZXRUeXBlKHJldmVyc2VCdG4pO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHBvc3RJRCA9IGJ0bi5kYXRhc2V0LmlkO1xuICAgICAgICAvLyAgICAgICAgIGxldCBuZXdTY29yZSA9IHBhcnNlSW50KHNjb3JlLmRhdGFzZXQuc2NvcmUpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudm90ZWRDbGFzcykpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy52b3RlZENsYXNzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV2ZXJzZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMudm90ZWRDbGFzc0Rpc2FibGUpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnBvc3QodGhpcy5wcmVwYXJlVXJsKHBvc3RJRCwgJ3JlbW92ZScpKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZvdGUnLCAncmVtb3ZlJyk7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodGhpcy52b3RlZENsYXNzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy52b3RlZENsYXNzRGlzYWJsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldmVyc2VCdG4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZvdGVkQ2xhc3MpO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXZlcnNlQnRuLmNsYXNzTGlzdC5hZGQodGhpcy52b3RlZENsYXNzRGlzYWJsZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5ld1Njb3JlID0gdHlwZSA9PSAndXAnID8gbmV3U2NvcmUgKyAxIDogbmV3U2NvcmUgLSAxO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnBvc3QodGhpcy5wcmVwYXJlVXJsKHBvc3RJRCwgdHlwZSkpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygndm90ZScsIHR5cGUpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldE5ld1Njb3JlVmFsdWUocG9zdElELCBuZXdTY29yZSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgcHJlcGFyZVVybChpZCwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wb3N0VXJsID0gYC92b3RlLyR7aWR9LyR7YWN0aW9ufWApO1xuICAgIH1cblxuICAgIGdldFJldmVyc2VCdG4oY3VycmVudEJ0biwgdHlwZSkge1xuICAgICAgICBjb25zdCByZXZlcnNlVHlwZSA9IHRoaXMuZ2V0UmV2ZXJzZSh0eXBlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLnNpbmdsZS1iYXJfX3ZvdGUke3JldmVyc2VUeXBlfWBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRSZXZlcnNlKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT0gXCJ1cFwiID8gXCItLWRvd25cIiA6IFwiLS11cFwiO1xuICAgIH1cblxuICAgIGdldFR5cGUoYnRuKSB7XG4gICAgICAgIGxldCB0eXBlID0gXCJcIjtcbiAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaW5nbGUtYmFyX192b3RlLS11cFwiKSkge1xuICAgICAgICAgICAgdHlwZSA9IFwidXBcIjtcbiAgICAgICAgfSBlbHNlIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2luZ2xlLWJhcl9fdm90ZS0tZG93blwiKSkge1xuICAgICAgICAgICAgdHlwZSA9IFwiZG93blwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIHNldE5ld1Njb3JlVmFsdWUoaWQsIHNjb3JlVmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2NvcmUtJHtpZH1gKTtcbiAgICAgICAgc2NvcmUuaW5uZXJUZXh0ID0gc2NvcmVWYWx1ZTtcbiAgICB9XG5cbiAgICBwb3N0KHVybCkge1xuICAgICAgICAvLyBkbyB6bWlhbnkgbmEgZmV0Y2hcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydCB7XG4gICAgY29uc3RydWN0b3Ioc29ydERlc2t0b3ApIHtcbiAgICAgICAgdGhpcy5pbml0UmVwb3J0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXBvcnRfX2luaXQnKTtcbiAgICAgICAgdGhpcy5yZXBvcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlcG9ydCcpO1xuICAgICAgICB0aGlzLnBvc3RVcmwgPSAnL2FwaS1yZXBvcnQnO1xuICAgICAgICB0aGlzLmNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyJyk7XG4gICAgICAgIHRoaXMuaW5pdFJlcG9ydCgpO1xuICAgIH1cblxuICAgIGluaXRSZXBvcnQoKSB7XG5cbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2xpc3QnKTtcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lICE9ICdESVYnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2luZ2xlLWluZm9fX2J1dHRvbi0tcmVwb3J0JykpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGJ1dHRvbi5kYXRhc2V0LnR5cGU7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBidXR0b24uZGF0YXNldC5pZDtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVwb3J0LSR7dHlwZX0tJHtpZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY292ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVwb3J0cy5mb3JFYWNoKHJlcG9ydCA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEV2ZW50c0ZvclJlcG9ydChyZXBvcnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRFdmVudHNGb3JSZXBvcnQocmVwb3J0KSB7XG4gICAgICAgIHRoaXMuZXZlbnRSZXBvcnQocmVwb3J0KTtcbiAgICAgICAgdGhpcy5vbmx5T25lU2VsZWN0ZWQocmVwb3J0KTtcbiAgICAgICAgdGhpcy5jbG9zZVJlcG9ydChyZXBvcnQpO1xuICAgIH1cblxuICAgIGV2ZW50UmVwb3J0KHJlcG9ydCkge1xuICAgICAgICByZXBvcnQucXVlcnlTZWxlY3RvcignLnJlcG9ydF9fYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVwb3J0ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSByZXBvcnQuZGF0YXNldC50eXBlO1xuICAgICAgICAgICAgY29uc3QgaWQgPSByZXBvcnQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSByZXBvcnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IHJlcG9ydC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgdHlwZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvdGhlcicsIHRleHRhcmVhKTtcblxuICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoY2hlY2tib3gudmFsdWUsIGNoZWNrYm94LmNoZWNrZWQgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucG9zdCh0aGlzLnBvc3RVcmwsIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRSZXBvcnQocmVwb3J0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VSZXBvcnQocmVwb3J0KSB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gcmVwb3J0LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnRfX2Nsb3NlJyk7XG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVwb3J0ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgdGhpcy5yZXNldFJlcG9ydChyZXBvcnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldFJlcG9ydChyZXBvcnQpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHJlcG9ydC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT0nY2hlY2tib3hcIik7XG4gICAgICAgIGNvbnN0IG90aGVyID0gcmVwb3J0LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJlcG9ydC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0X19idXR0b24nKTtcblxuICAgICAgICByZXBvcnQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIHRoaXMuY2xlYXJBbGxDaGVja2JveChjaGVja2JveGVzKTtcbiAgICAgICAgb3RoZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIG90aGVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIHRoaXMuY292ZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgfVxuXG4gICAgb25seU9uZVNlbGVjdGVkKHJlcG9ydCkge1xuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gcmVwb3J0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveFwiKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gcmVwb3J0LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnRfX2J1dHRvbicpO1xuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQWxsQ2hlY2tib3goY2hlY2tib3hlcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2hlY2tib3ggPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2hlY2tib3guZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09ICdpc090aGVyJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyQWxsQ2hlY2tib3goY2hlY2tib3hlcykge1xuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb3N0KHVybCwgZm9ybURhdGEpIHtcbiAgICAgICAgLy8gZG8gem1pYW55IG5hIGZldGNoXG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9