(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-single"],{

/***/ "./assets/js/entry/post-single.js":
/*!****************************************!*\
  !*** ./assets/js/entry/post-single.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_post_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helper/post/comment */ "./assets/js/helper/post/comment.js");
/* harmony import */ var _helper_post_comment_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../helper/post/comment-switch */ "./assets/js/helper/post/comment-switch.js");
/* harmony import */ var _helper_post_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/post/common */ "./assets/js/helper/post/common.js");
/* harmony import */ var _helper_post_vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/post/vote */ "./assets/js/helper/post/vote.js");
/* harmony import */ var _lib_Report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/Report */ "./assets/js/lib/Report.js");
/* harmony import */ var _helper_post_MorePosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helper/post/MorePosts */ "./assets/js/helper/post/MorePosts.js");
/* harmony import */ var _helper_post_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../helper/post/embed */ "./assets/js/helper/post/embed.js");







window.addEventListener("DOMContentLoaded", function (event) {
  new _helper_post_comment__WEBPACK_IMPORTED_MODULE_0__["Comment"](_helper_post_common__WEBPACK_IMPORTED_MODULE_2__["singsCounter"]);
  var counterContener = document.querySelector('.comment-new__textarea-new');
  var fieldContener = document.querySelector('.comment-new__counter--current-new');
  scrollToComment();
  new _helper_post_vote__WEBPACK_IMPORTED_MODULE_3__["Vote"]();
  new _lib_Report__WEBPACK_IMPORTED_MODULE_4__["default"]();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_2__["copyLink"])();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_2__["resizeGraphicFrame"])();
  new _helper_post_MorePosts__WEBPACK_IMPORTED_MODULE_5__["default"]();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_2__["showYoutubeFrame"])();
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_2__["showMore"])();
  Object(_helper_post_comment_switch__WEBPACK_IMPORTED_MODULE_1__["switchComment"])();
  new _helper_post_embed__WEBPACK_IMPORTED_MODULE_6__["default"]();
});
window.addEventListener('load', function () {
  Object(_helper_post_common__WEBPACK_IMPORTED_MODULE_2__["resizeGraphicFrame"])();
  console.log('load');
});

var scrollToComment = function scrollToComment() {
  var commentToScroll = document.querySelector('.comment-list__item-scroll');

  if (commentToScroll) {
    commentToScroll.classList.add('comment-list__item-selected');
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: commentToScroll.getBoundingClientRect().top + document.documentElement.scrollTop - 60
    });
  }
};

/***/ }),

/***/ "./assets/js/helper/post/MorePosts.js":
/*!********************************************!*\
  !*** ./assets/js/helper/post/MorePosts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MorePosts; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./assets/js/helper/post/common.js");
/* harmony import */ var _lib_Report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../lib/Report */ "./assets/js/lib/Report.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MorePosts =
/*#__PURE__*/
function () {
  function MorePosts() {
    _classCallCheck(this, MorePosts);

    this.loader = document.querySelector('.single-more__loader');
    this.container = document.querySelector('.single-more');
    this.containerReport = document.querySelector('.reports-container');
    this.isProcessing = true;
    this.currentPostID = document.querySelector('.single-main').id;
    this.clonePost = document.querySelector('.single-clone');
    this.cloneReport = document.querySelector('.report-clone');
    var loader = document.querySelector('.single-more__loader');
    this.limit = 1;
    this.initLoadMore();
  }

  _createClass(MorePosts, [{
    key: "initLoadMore",
    value: function initLoadMore() {
      var _this = this;

      window.onscroll = function (ev) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
          if (_this.isProcessing) {
            _this.isProcessing = false;

            _this.showLoader();

            _this.post();
          }
        }
      };
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
    key: "post",
    value: function post() {
      var _this2 = this;

      var formData = new FormData();
      formData.append("limit", this.limit);
      formData.append('currentPostID', this.currentPostID);
      fetch('/api-fetch-more-post', {
        method: 'post',
        body: formData
      }).then(function (data) {
        return data.json();
      }).then(function (data) {
        var posts = data.posts;

        if (posts.length > 0) {
          posts.forEach(function (post) {
            var clonePost = _this2.clonePost.cloneNode(true);

            clonePost.classList.remove('single-clone');
            clonePost.classList.remove('display-none');

            if (post.isGraphic) {
              clonePost = _this2.setValuesForGraphic(post, clonePost);
            } else if (post.isPost) {
              clonePost = _this2.setValuesForPost(post, clonePost);
            }

            clonePost = _this2.prepareCategories(post, clonePost);
            clonePost = _this2.prepareDate(post, clonePost);
            clonePost = _this2.prepareVote(post, clonePost);
            clonePost = _this2.prepareCopyLink(post, clonePost);
            clonePost = _this2.prepareReport(post, clonePost);
            clonePost = _this2.prepareComment(post, clonePost);
            clonePost = _this2.prepareSource(post, clonePost);
            clonePost = _this2.hideFrame(clonePost);
            clonePost = _this2.prepareFacebookShare(post, clonePost);

            _this2.container.appendChild(clonePost); // this.prepareAd();
            // this.container.appendChild(this.prepareAd());


            var preparedReport = _this2.prepareReportElement(post);

            _this2.containerReport.appendChild(preparedReport);
          });

          _this2.hideLoader();

          _this2.limit = _this2.limit + 3;
          _this2.isProcessing = true;
          _this2;
        } else {
          _this2.hideLoader();
        }
      })["catch"](function (error) {
        console.log('error', error);
      });
    }
  }, {
    key: "prepareAd",
    value: function prepareAd() {
      var inlineScript = document.createElement("script");
      inlineScript.type = "text/javascript";
      inlineScript.text = '<!--google_ad_client = "ca-pub-5159051873786027"; google_ad_slot = "4985087778"; data_ad_format= "auto"; data_full_width_responsive= "true"; //-->';
      this.container.appendChild(inlineScript);
      var externalScript = document.createElement("script");
      externalScript.type = "text/javascript";
      externalScript.src = "https://pagead2.googlesyndication.com/pagead/show_ads.js";
      this.container.appendChild(externalScript); //         newDiv.innerHTML =`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      // <!-- single post load more -->
      // <ins class="adsbygoogle"
      //      style="display:block"
      //      data-ad-client="ca-pub-5159051873786027"
      //      data-ad-slot="4985087778"
      //      data-ad-format="auto"
      //      data-full-width-responsive="true"></ins>
      // <script>
      //      (adsbygoogle = window.adsbygoogle || []).push({});
      // </script>`;
      //         return newDiv;
    }
  }, {
    key: "hideFrame",
    value: function hideFrame(clonePost) {
      var frame = clonePost.querySelector('.single-graphic__frame');

      if (frame) {
        frame.classList.add('display-none');
      }

      return clonePost;
    }
  }, {
    key: "prepareFacebookShare",
    value: function prepareFacebookShare(post, clonePost) {
      // const element = '<div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Udostępnij</a></div>';
      var url = encodeURIComponent(post.absoluteUrl);
      var element = "<a class=\"facebook-share\" href=\"https://www.facebook.com/sharer/sharer.php?u=".concat(url, "&t=").concat(post.title, "&app_id=2074756775960224\" \n   onclick=\"javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;\"\n   target=\"_blank\" title=\"Udost\u0119pnij\"><i class=\"fab fa-facebook-square\"></i> <span>Udost\u0119pnij</span>\n</a>");
      clonePost.querySelector('.single-bar__facebook').innerHTML = element;
      return clonePost;
    }
  }, {
    key: "prepareSource",
    value: function prepareSource(post, clonePost) {
      var sourceContainer = clonePost.querySelector('.single-source');
      var source = post.source;

      if (post.source.length > 0) {
        sourceContainer.classList.remove('display-none');

        if (post.source.includes("http")) {
          var stringForDisplay = post.source.length > 35 ? source.slice(0, 35) + '...' : source;
          sourceContainer.innerHTML = "\u017Br\xF3d\u0142o: <a href=\"".concat(post.source, "\">").concat(stringForDisplay, "</a>");
        } else {
          sourceContainer.innerText = "\u0179r\xF3d\u0142o: ".concat(source);
        }
      }

      return clonePost;
    }
  }, {
    key: "prepareComment",
    value: function prepareComment(post, clonePost) {
      clonePost.querySelector('.single-bar__comment-link').setAttribute('href', post.absoluteUrl);
      clonePost.querySelector('.single-bar__comment-number').innerText = post.commentNumber;
      return clonePost;
    }
  }, {
    key: "prepareReportElement",
    value: function prepareReportElement(post) {
      var cloneReport = this.cloneReport.cloneNode(true);
      cloneReport.classList.remove('.report-clone');
      cloneReport.dataset.id = post.id;
      cloneReport.id = "report-post-".concat(post.id);
      cloneReport.querySelector('.report-comment__content-text').innerText = post.title;
      cloneReport.querySelector('.report-comment__avatar').style.background = "url(".concat(post.imageUrl, ")");
      cloneReport.querySelector('.report-comment__avatar').style.backgroundSize = 'cover';
      cloneReport.querySelector('.report-comment__avatar').style.height = '45px';
      cloneReport.querySelector('.report-comment__avatar').style.width = '45px';
      var report = new _lib_Report__WEBPACK_IMPORTED_MODULE_1__["default"]();
      report.setEventsForReport(cloneReport);
      return cloneReport;
    }
  }, {
    key: "setValuesForPost",
    value: function setValuesForPost(post, clonePost) {
      clonePost.querySelector('.single-graphic').classList.add('display-none');
      var content = clonePost.querySelector('.single-insert__content');
      var newTitle = document.createElement("div");
      newTitle.className = 'single-title';
      var newTitleHref = document.createElement("a");
      newTitleHref.className = 'white';
      newTitleHref.setAttribute('href', post.absoluteUrl);
      newTitleHref.setAttribute('title', post.description);
      newTitleHref.innerText = post.title;
      newTitle.appendChild(newTitleHref);
      content.appendChild(newTitle);

      if (post.isImageFromLink || post.isImageFromDisc) {
        var newDiv = document.createElement("div");
        newDiv.classList.add('single-image__wrap');
        var newImg = document.createElement("img");
        newImg.setAttribute('src', post.imageUrl);
        newImg.setAttribute('title', post.title);
        newDiv.appendChild(newImg);
        content.appendChild(newDiv);
      } else if (post.isYoutubeLink) {
        var _newDiv = document.createElement("div");

        _newDiv.className = 'single-image__wrap single-image__wrap-youtube';
        _newDiv.dataset.id = post.youtubeID;
        _newDiv.style.background = "url(".concat(post.imageUrl, ") no-repeat center center");
        var newIcon = document.createElement("i");
        newIcon.className = "single-image__icon single-image__icon-youtube fas fa-play-circle";

        _newDiv.appendChild(newIcon);

        content.appendChild(_newDiv);
      }

      var newDescription = document.createElement("div");
      newDescription.classList.add('single-description');
      var description = post.description;

      if (description.length > 255) {
        if (description) {
          description = this.stripTags(description);
        }

        var firstPart = description.slice(0, 255);
        newDescription.innerHTML = firstPart + "<span class=\"single-description__dots\">...</span> \t\t\t\t<a  href=\"".concat(post.absoluteUrl, "\"class=\"single-description__more-redirect\">CZYTAJ DALEJ</a>"); // '<span class="single-description__more display-none">' + secondPart + '</span>';
      } else {
        newDescription.innerText = this.stripTags(description);
      }

      content.appendChild(newDescription);
      return clonePost;
    }
  }, {
    key: "stripTags",
    value: function stripTags(string) {
      return string.replace(/<([^>]+)>/g, '');
    }
  }, {
    key: "setValuesForGraphic",
    value: function setValuesForGraphic(post, clonePost) {
      clonePost.querySelector('.single-graphic__link').setAttribute('href', post.absoluteUrl);
      clonePost.querySelector('.single-graphic').style.maxWidth = post.temponaryImageWidth + 'px';
      clonePost.querySelector('.single-graphic img').setAttribute('src', post.imageUrl);
      return clonePost;
    }
  }, {
    key: "prepareCategories",
    value: function prepareCategories(post, clonePost) {
      var categories = post.categories;
      var container = clonePost.querySelector('.single-info__category-wrap');
      Object.keys(categories).forEach(function (key) {
        var newHref = document.createElement("a");
        newHref.className = 'single-info__category';
        newHref.setAttribute('href', categories[key]);
        newHref.innerText = key;
        container.appendChild(newHref);
      });
      return clonePost;
    }
  }, {
    key: "prepareDate",
    value: function prepareDate(post, clonePost) {
      var date = post.date;
      var dates = clonePost.querySelectorAll('.single-info__date');
      dates.forEach(function (d) {
        d.innerText = date;
      });
      return clonePost;
    }
  }, {
    key: "prepareVote",
    value: function prepareVote(post, clonePost) {
      var voteUp = clonePost.querySelector('.single-bar__vote--up');
      var voteDown = clonePost.querySelector('.single-bar__vote--down');
      var score = clonePost.querySelector('.single-bar__vote-score');
      score.innerText = post.voteScore;

      if (post.isLogged) {
        voteUp.classList.remove('access-block__init');
        voteUp.dataset.id = post.id;
        voteDown.classList.remove('access-block__init');
        voteDown.dataset.id = post.id;
        score.id = "score-".concat(post.id);
      } else {// voteUp.classList.remove('single-bar__vote');
        // voteDown.classList.remove('single-bar__vote');
      }

      return clonePost;
    }
  }, {
    key: "prepareCopyLink",
    value: function prepareCopyLink(post, clonePost) {
      var copyLinkInput = clonePost.querySelector('.single__copy-link');
      copyLinkInput.id = "url-" + post.id;
      copyLinkInput.value = post.absoluteUrl;
      var copyLinks = clonePost.querySelectorAll('.single-info__button--link');
      copyLinks.forEach(function (link) {
        link.dataset.id = post.id;
      });
      return clonePost;
    }
  }, {
    key: "prepareReport",
    value: function prepareReport(post, clonePost) {
      var report = clonePost.querySelector('.single-info__button--report');
      report.dataset.id = post.id;

      if (post.isLogged) {
        report.classList.remove('access-block__init');
      } else {
        report.classList.remove('single-info__button--report');
      }

      return clonePost;
    }
  }]);

  return MorePosts;
}();



/***/ }),

/***/ "./assets/js/helper/post/comment-helper.js":
/*!*************************************************!*\
  !*** ./assets/js/helper/post/comment-helper.js ***!
  \*************************************************/
/*! exports provided: CommentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentHelper", function() { return CommentHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommentHelper =
/*#__PURE__*/
function () {
  function CommentHelper() {
    _classCallCheck(this, CommentHelper);
  }

  _createClass(CommentHelper, [{
    key: "validTextarea",
    value: function validTextarea(text) {
      if (text.length < 1) {
        // this.showErrorFrameTextarea(errorFrame, "Komentarz jest pusty!");
        return false;
      } else if (text.length > 1000) {
        // this.showErrorFrameTextarea(errorFrame, "Komentarz jest za długi!");
        return false;
      } // this.hideErrorFrameTextarea(errorFrame);


      return true;
    }
  }, {
    key: "resetCurrentTextarea",
    value: function resetCurrentTextarea() {
      this.currentTextarea.value = "";
    }
  }, {
    key: "getReverseCommentBtn",
    value: function getReverseCommentBtn(currentBtn, type) {
      var reverseType = this.getReverseCommentType(type);
      return currentBtn.parentNode.parentNode.querySelector(".comment-list__vote".concat(reverseType));
    }
  }, {
    key: "getReverseCommentType",
    value: function getReverseCommentType(type) {
      return type == "up" ? "--down" : "--up";
    }
  }, {
    key: "getVoteCommentType",
    value: function getVoteCommentType(vote) {
      var type = '';

      if (vote.classList.contains('comment-list__vote--up')) {
        type = 'up';
      } else if (vote.classList.contains('comment-list__vote--down')) {
        type = 'down';
      }

      return type;
    }
  }, {
    key: "getVoteCommentScore",
    value: function getVoteCommentScore(vote) {
      return vote.parentNode.parentNode.querySelector('.comment-list__vote-score');
    }
  }, {
    key: "setVoteCommentScore",
    value: function setVoteCommentScore(score, value) {
      score.innerText = value;
    }
  }, {
    key: "showNewCommentReply",
    value: function showNewCommentReply(id, authorUsername) {
      var commentNew = document.querySelector("#comment-new-".concat(id));
      var textarea = commentNew.querySelector(".comment-new__textarea");
      commentNew.classList.remove("display-none");
      textarea.value = "@".concat(authorUsername, " ");
      textarea.focus();
    }
  }, {
    key: "prepareNewReplyComment",
    value: function prepareNewReplyComment(data) {
      var authorProfileUrl = data.authorProfileUrl,
          authorUsername = data.authorUsername,
          text = data.text,
          commentId = data.commentId,
          postId = data.postId;
      var item = document.createElement("div");
      item.innerHTML = "\n    \n    <div id=\"comment-reply-".concat(commentId, "\" class=\"comment-reply\">\n    <div class=\"comment-reply__list\">\n    </div>\n    \n    <div\n      id=\"comment-new-").concat(commentId, "\" class=\"comment-new comment-new--reply display-none\">\n      <div class=\"comment-new__error-wrap\">\n\t\t\t<div class=\"comment-new__error display-none\"></div>\n\t\t</div>\n      <div class=\"comment-new__avatar\" style=\"background:url('").concat(this.getAuthorAvatarUrl(), "');background-size: cover;\"></div>\n      <div class=\"comment-new__text\">\n        <textarea maxlength=\"500\" class=\"comment-new__textarea comment-new__textarea-reply\" placeholder=\"Zostaw komentarz...\"></textarea>\n        <div class=\"comment-new__action\">\n          <div class=\"comment-new__counter\">\n            <span class=\"comment-new__counter--current comment-new__counter--current-reply\">0</span>/1000</div>\n          <div data-id=\"").concat(postId, "\" data-comment-parent=\"").concat(commentId, "\" class=\"comment-new__button comment-new__button-reply\">Dodaj</div>\n        </div>\n      </div>\n    </div>");
      return item;
    }
  }, {
    key: "prepareItemComment",
    value: function prepareItemComment(data) {
      var isReply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var authorProfileUrl = data.authorProfileUrl,
          authorUsername = data.authorUsername,
          text = data.text,
          commentId = data.commentId,
          postId = data.postId,
          commentParentId = data.commentParentId;
      var item = document.createElement("div");
      var replyClass = isReply ? "comment-list__item--reply" : "";
      var html = "\n<div class=\"comment-list__item ".concat(replyClass, "\">\n    <div class=\"comment-list__item-avatar\" style=\"background:url('").concat(this.getAuthorAvatarUrl(), "');background-size: cover;\"></div>\n    <div class=\"comment-list__item-info\">\n        <div class=\"comment-list__item-author\">\n            <a class=\"comment-list__item-author\" href=\"").concat(authorProfileUrl, "\">").concat(authorUsername, "</a>\n             <span id=\"comment-score-").concat(commentId, "\" data-score=\"0\"\n                  class=\"comment-list__vote-score\">0</span>\n            teraz\n        </div>\n        <div class=\"comment-list__item-text\">").concat(text, "</div>\n        <div class=\"comment-list__item-action\">\n            <div class=\"comment-list__action--disable display-none\"></div>\n            <span data-id=\"").concat(commentId, "\" data-username=\"").concat(authorUsername, "\" data-comment-parent=\"").concat(commentParentId, "\"  class=\"comment-list__action-item comment-list__item-action--reply\">\n                <i class=\"fas fa-reply\"></i>\n                Odpowiedz</span>\n            \n                 <span data-comment=\"").concat(commentId, "\"\n                  class=\"comment-list__vote comment-list__vote--action comment-list__vote--up\">\n                    <i class=\"fas fa-angle-up  comment-list__vote--icon\"></i>\n                    </span>\n\n                <span data-comment=\"").concat(commentId, "\"\n                  class=\"comment-list__vote comment-list__vote--action  comment-list__vote--down\">\n                 <i class=\"fas fa-angle-down  comment-list__vote--icon\"></i>\n                </span>\n            <div class=\"comment-list__action--corner\">\n                <span data-comment=\"").concat(commentId, "\" class=\"comment-list__action-item comment-list__action-item--remove comment-list__remove\">\n                <i class=\"fas fa-times\"></i></span>\n            </div>\n        \n        </div>\n\n    </div>\n</div>\n\n");

      if (isReply == false) {
        var list = "<div id=\"comment-reply-".concat(commentId, "\" class=\"comment-reply\"><div class=\"comment-reply__list\"></div></div>");
        html = html.concat(list);
        item.innerHTML = html;
        return item;
      }

      item.innerHTML = html;
      return item;
    }
  }, {
    key: "getAuthorAvatarUrl",
    value: function getAuthorAvatarUrl() {
      return document.querySelector(".header-label__avatar").dataset.url;
    }
  }]);

  return CommentHelper;
}();

/***/ }),

/***/ "./assets/js/helper/post/comment-switch.js":
/*!*************************************************!*\
  !*** ./assets/js/helper/post/comment-switch.js ***!
  \*************************************************/
/*! exports provided: switchComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchComment", function() { return switchComment; });
var switchComment = function switchComment() {
  var switchWrap = document.querySelector('.single-comment__switch');
  var switchItems = document.querySelectorAll('.single-comment__switch-item');
  var navs = switchWrap.querySelectorAll(".single-comment__nav-item ");
  navs.forEach(function (nav) {
    nav.addEventListener("click", function (e) {
      var type = e.currentTarget.dataset.type;
      clearNavs(navs);
      clearSwitch(switchItems);
      switchWrap.querySelector(".single-comment__switch-".concat(type)).classList.remove('display-none');
      switchWrap.querySelector(".single-comment__nav-".concat(type)).classList.add('single-comment__nav-item--active');
      console.log('switch', switchWrap.querySelector(".single-comment__switch-".concat(type)));
    });
  });
};

var clearNavs = function clearNavs(navs) {
  navs.forEach(function (nav) {
    nav.classList.remove('single-comment__nav-item--active');
  });
};

var clearSwitch = function clearSwitch(switchItems) {
  switchItems.forEach(function (item) {
    item.classList.add('display-none');
  });
};

/***/ }),

/***/ "./assets/js/helper/post/comment.js":
/*!******************************************!*\
  !*** ./assets/js/helper/post/comment.js ***!
  \******************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./assets/js/helper/post/common.js");
/* harmony import */ var _comment_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-helper */ "./assets/js/helper/post/comment-helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Comment =
/*#__PURE__*/
function (_CommentHelper) {
  _inherits(Comment, _CommentHelper);

  function Comment() {
    var _this;

    _classCallCheck(this, Comment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comment).call(this));
    _this.singsCounter = _common__WEBPACK_IMPORTED_MODULE_0__["singsCounter"];
    _this.newCommentMain = document.querySelector(".comment-new--main");
    _this.newButton = document.querySelector(".comment-new__button-new");
    _this.newTextarea = document.querySelector(".comment-new__textarea");
    _this.newCounter = document.querySelector(".comment-new__counter--current-new");
    _this.list = document.querySelector(".comment-list");
    _this.votedCommentClass = "comment-list__vote--voted";
    _this.currentNewComment = '';

    _this.initEvents();

    return _this;
  }

  _createClass(Comment, [{
    key: "initEvents",
    value: function initEvents() {
      this.initNewComment();
      this.initCounter();
      this.initEventItem();
      this.initEventRemoveComment();
    }
  }, {
    key: "initEventRemoveComment",
    value: function initEventRemoveComment() {
      var _this2 = this;

      var buttons = document.querySelectorAll('.comment-list__remove');
      buttons.forEach(function (btn) {
        _this2.eventRemoveComment(btn);
      });
    }
  }, {
    key: "eventRemoveComment",
    value: function eventRemoveComment(btn) {
      var _this3 = this;

      btn.addEventListener('click', function (event) {
        var element = event.currentTarget;
        var commentId = element.dataset.comment;
        var url = '/api-remove-comment';
        var actionDisable = element.parentNode.parentNode.querySelector('.comment-list__action--disable');
        var text = element.parentNode.parentNode.parentNode.querySelector('.comment-list__item-text');
        var votes = element.parentNode.parentNode.querySelectorAll('.comment-list__vote');
        actionDisable.classList.remove('display-none');
        text.classList.add('comment-list__item-text--ban');
        text.innerText = 'Treść tego komentarza została usunięta przez autora';
        votes.forEach(function (vote) {
          vote.classList.remove('comment-list__vote--voted');
        });
        var formData = new FormData();
        formData.append("commentId", commentId);

        _this3.post(url, formData, true);
      });
    }
  }, {
    key: "initEventItem",
    value: function initEventItem() {
      var _this4 = this;

      var items = document.querySelectorAll('.comment-list__item');
      items.forEach(function (itemComment) {
        var replyAction = itemComment.querySelector('.comment-list__item-action--reply');

        _this4.addEventClickToReplyAction(replyAction);

        _this4.eventVoteComment(itemComment);
      });
    }
  }, {
    key: "initCounter",
    value: function initCounter() {
      var _this5 = this;

      var newComments = document.querySelectorAll(".comment-new");
      newComments.forEach(function (newComment) {
        _this5.eventCounter(newComment);
      });
    }
  }, {
    key: "eventVoteComment",
    value: function eventVoteComment(itemComment) {
      var _this6 = this;

      var votes = itemComment.querySelectorAll('.comment-list__vote--action');
      votes.forEach(function (vote) {
        vote.addEventListener('click', function (event) {
          var element = event.currentTarget;

          _this6.voteComment(element);
        });
      });
    }
  }, {
    key: "voteComment",
    value: function voteComment(btn) {
      var url = '/api-vote-comment';
      var type = this.getVoteCommentType(btn);
      var reverseBtn = this.getReverseCommentBtn(btn, type);
      var commentId = btn.dataset.comment;
      var score = this.getVoteCommentScore(btn);
      var newScore = parseInt(score.dataset.score);
      var formData = new FormData();
      formData.append("commentId", commentId);
      formData.append("type", type);

      if (btn.classList.contains(this.votedCommentClass)) {
        btn.classList.remove(this.votedCommentClass);
        formData.append("type", 'remove');
      } else {
        btn.classList.add(this.votedCommentClass);
        reverseBtn.classList.remove(this.votedCommentClass);
        newScore = type == 'up' ? newScore + 1 : newScore - 1;
      }

      this.post(url, formData, true);
      this.setVoteCommentScore(score, newScore);
    }
  }, {
    key: "initNewComment",
    value: function initNewComment() {
      var _this7 = this;

      var commentNewList = document.querySelectorAll(".comment-new");
      commentNewList.forEach(function (newComment) {
        _this7.addEventForCommentNew(newComment);
      });
    }
  }, {
    key: "eventCounter",
    value: function eventCounter(newComment) {
      var counterContener = newComment.querySelector(".comment-new__counter--current");
      var fieldContener = newComment.querySelector("textarea");
      this.singsCounter(fieldContener, counterContener, 1000);
    }
  }, {
    key: "addEventForCommentNew",
    value: function addEventForCommentNew(newComment) {
      var _this8 = this;

      var newButton = newComment.querySelector('.comment-new__button');
      var textarea = newComment.querySelector('textarea');
      var url = "/api-add-new-comment";
      newButton.addEventListener('click', function (event) {
        var parentFrame = event.target.parentNode.parentNode.parentNode;
        var textarea = parentFrame.querySelector('textarea');
        var text = textarea.value;
        var postId = event.target.dataset.id;
        var commentParentId = event.target.dataset.commentParent;
        _this8.currentNewComment = parentFrame;
        _this8.currentTextarea = textarea;

        if (_this8.validTextarea(text)) {
          var formData = new FormData();
          formData.append("postId", postId);
          formData.append("text", text);
          formData.append("commentParentId", commentParentId);

          _this8.post(url, formData);

          parentFrame.querySelector('.comment-new__counter--current').innerText = '0';
        }
      });
    }
  }, {
    key: "post",
    value: function post(url, formData) {
      var _this9 = this;

      var isReply = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      $.ajax({
        url: url,
        data: formData,
        type: "post",
        contentType: false,
        processData: false,
        cache: false,
        dataType: "json",
        beforeSend: function beforeSend() {
          if (!isReply) {
            _this9.beforePost();
          }
        },
        success: function success(data) {
          if (!isReply) {
            _this9.afterPost(data);
          }
        }
      });
    }
  }, {
    key: "beforePost",
    value: function beforePost() {
      this.currentNewComment.style.opacity = "0.6";
    }
  }, {
    key: "afterPost",
    value: function afterPost(data) {
      var status = data.status,
          commentParentId = data.commentParentId;

      if (status) {
        if (!commentParentId) {
          var preparedItemComment = this.prepareItemComment(data);
          var newComment = this.prepareNewReplyComment(data);
          this.list.insertBefore(newComment, this.list.firstChild);
          this.eventCounter(newComment);
          this.list.insertBefore(preparedItemComment, this.list.firstChild);
          this.addEventForCommentNew(newComment);
          var replyAction = preparedItemComment.querySelector('.comment-list__item-action--reply');
          this.addEventClickToReplyAction(replyAction);
          this.eventVoteComment(preparedItemComment);
          this.eventRemoveComment(preparedItemComment.querySelector('.comment-list__remove'));
        } else {
          var commentReply = document.querySelector("#comment-reply-".concat(commentParentId)).querySelector(".comment-reply__list");

          var _preparedItemComment = this.prepareItemComment(data, true);

          commentReply.appendChild(_preparedItemComment, commentReply.firstChild);

          var _replyAction = _preparedItemComment.querySelector('.comment-list__item-action--reply');

          this.addEventClickToReplyAction(_replyAction);
          this.eventVoteComment(_preparedItemComment);
          this.eventRemoveComment(_preparedItemComment.querySelector('.comment-list__remove'));
        }
      }

      this.resetCurrentTextarea();
      this.currentTextarea.innerText = '';
      this.currentNewComment.style.opacity = "1";
    }
  }, {
    key: "addEventClickToReplyAction",
    value: function addEventClickToReplyAction(reply) {
      var _this10 = this;

      if (reply) {
        reply.addEventListener("click", function (event) {
          var commentId = event.target.dataset.id;
          var commentParentId = event.target.dataset.commentParent;
          var authorUsername = event.target.dataset.username;

          _this10.showNewCommentReply(commentParentId > 0 ? commentParentId : commentId, authorUsername);
        });
      }
    }
  }]);

  return Comment;
}(_comment_helper__WEBPACK_IMPORTED_MODULE_1__["CommentHelper"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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



/***/ })

},[["./assets/js/entry/post-single.js","runtime","vendors~app~post-list~post-new~post-single","post-list~post-single"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZW50cnkvcG9zdC1zaW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlci9wb3N0L01vcmVQb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVyL3Bvc3QvY29tbWVudC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlci9wb3N0L2NvbW1lbnQtc3dpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXIvcG9zdC9jb21tZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXIvcG9zdC9lbWJlZC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJDb21tZW50Iiwic2luZ3NDb3VudGVyIiwiY291bnRlckNvbnRlbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmllbGRDb250ZW5lciIsInNjcm9sbFRvQ29tbWVudCIsIlZvdGUiLCJSZXBvcnQiLCJjb3B5TGluayIsInJlc2l6ZUdyYXBoaWNGcmFtZSIsIk1vcmVQb3N0cyIsInNob3dZb3V0dWJlRnJhbWUiLCJzaG93TW9yZSIsInN3aXRjaENvbW1lbnQiLCJFbWJlZEhlbHBlciIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50VG9TY3JvbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwibGVmdCIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImxvYWRlciIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlcG9ydCIsImlzUHJvY2Vzc2luZyIsImN1cnJlbnRQb3N0SUQiLCJpZCIsImNsb25lUG9zdCIsImNsb25lUmVwb3J0IiwibGltaXQiLCJpbml0TG9hZE1vcmUiLCJvbnNjcm9sbCIsImV2IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxZIiwiYm9keSIsIm9mZnNldEhlaWdodCIsInNob3dMb2FkZXIiLCJwb3N0IiwicmVtb3ZlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsImRhdGEiLCJqc29uIiwicG9zdHMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2xvbmVOb2RlIiwiaXNHcmFwaGljIiwic2V0VmFsdWVzRm9yR3JhcGhpYyIsImlzUG9zdCIsInNldFZhbHVlc0ZvclBvc3QiLCJwcmVwYXJlQ2F0ZWdvcmllcyIsInByZXBhcmVEYXRlIiwicHJlcGFyZVZvdGUiLCJwcmVwYXJlQ29weUxpbmsiLCJwcmVwYXJlUmVwb3J0IiwicHJlcGFyZUNvbW1lbnQiLCJwcmVwYXJlU291cmNlIiwiaGlkZUZyYW1lIiwicHJlcGFyZUZhY2Vib29rU2hhcmUiLCJhcHBlbmRDaGlsZCIsInByZXBhcmVkUmVwb3J0IiwicHJlcGFyZVJlcG9ydEVsZW1lbnQiLCJoaWRlTG9hZGVyIiwiZXJyb3IiLCJpbmxpbmVTY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInRleHQiLCJleHRlcm5hbFNjcmlwdCIsInNyYyIsImZyYW1lIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYWJzb2x1dGVVcmwiLCJlbGVtZW50IiwidGl0bGUiLCJpbm5lckhUTUwiLCJzb3VyY2VDb250YWluZXIiLCJzb3VyY2UiLCJpbmNsdWRlcyIsInN0cmluZ0ZvckRpc3BsYXkiLCJzbGljZSIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImNvbW1lbnROdW1iZXIiLCJkYXRhc2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW1hZ2VVcmwiLCJiYWNrZ3JvdW5kU2l6ZSIsImhlaWdodCIsIndpZHRoIiwicmVwb3J0Iiwic2V0RXZlbnRzRm9yUmVwb3J0IiwiY29udGVudCIsIm5ld1RpdGxlIiwiY2xhc3NOYW1lIiwibmV3VGl0bGVIcmVmIiwiZGVzY3JpcHRpb24iLCJpc0ltYWdlRnJvbUxpbmsiLCJpc0ltYWdlRnJvbURpc2MiLCJuZXdEaXYiLCJuZXdJbWciLCJpc1lvdXR1YmVMaW5rIiwieW91dHViZUlEIiwibmV3SWNvbiIsIm5ld0Rlc2NyaXB0aW9uIiwic3RyaXBUYWdzIiwiZmlyc3RQYXJ0Iiwic3RyaW5nIiwicmVwbGFjZSIsIm1heFdpZHRoIiwidGVtcG9uYXJ5SW1hZ2VXaWR0aCIsImNhdGVnb3JpZXMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwibmV3SHJlZiIsImRhdGUiLCJkYXRlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkIiwidm90ZVVwIiwidm90ZURvd24iLCJzY29yZSIsInZvdGVTY29yZSIsImlzTG9nZ2VkIiwiY29weUxpbmtJbnB1dCIsInZhbHVlIiwiY29weUxpbmtzIiwibGluayIsIkNvbW1lbnRIZWxwZXIiLCJjdXJyZW50VGV4dGFyZWEiLCJjdXJyZW50QnRuIiwicmV2ZXJzZVR5cGUiLCJnZXRSZXZlcnNlQ29tbWVudFR5cGUiLCJwYXJlbnROb2RlIiwidm90ZSIsImNvbnRhaW5zIiwiYXV0aG9yVXNlcm5hbWUiLCJjb21tZW50TmV3IiwidGV4dGFyZWEiLCJmb2N1cyIsImF1dGhvclByb2ZpbGVVcmwiLCJjb21tZW50SWQiLCJwb3N0SWQiLCJpdGVtIiwiZ2V0QXV0aG9yQXZhdGFyVXJsIiwiaXNSZXBseSIsImNvbW1lbnRQYXJlbnRJZCIsInJlcGx5Q2xhc3MiLCJodG1sIiwibGlzdCIsImNvbmNhdCIsInN3aXRjaFdyYXAiLCJzd2l0Y2hJdGVtcyIsIm5hdnMiLCJuYXYiLCJlIiwiY3VycmVudFRhcmdldCIsImNsZWFyTmF2cyIsImNsZWFyU3dpdGNoIiwibmV3Q29tbWVudE1haW4iLCJuZXdCdXR0b24iLCJuZXdUZXh0YXJlYSIsIm5ld0NvdW50ZXIiLCJ2b3RlZENvbW1lbnRDbGFzcyIsImN1cnJlbnROZXdDb21tZW50IiwiaW5pdEV2ZW50cyIsImluaXROZXdDb21tZW50IiwiaW5pdENvdW50ZXIiLCJpbml0RXZlbnRJdGVtIiwiaW5pdEV2ZW50UmVtb3ZlQ29tbWVudCIsImJ1dHRvbnMiLCJidG4iLCJldmVudFJlbW92ZUNvbW1lbnQiLCJjb21tZW50IiwiYWN0aW9uRGlzYWJsZSIsInZvdGVzIiwiaXRlbXMiLCJpdGVtQ29tbWVudCIsInJlcGx5QWN0aW9uIiwiYWRkRXZlbnRDbGlja1RvUmVwbHlBY3Rpb24iLCJldmVudFZvdGVDb21tZW50IiwibmV3Q29tbWVudHMiLCJuZXdDb21tZW50IiwiZXZlbnRDb3VudGVyIiwidm90ZUNvbW1lbnQiLCJnZXRWb3RlQ29tbWVudFR5cGUiLCJyZXZlcnNlQnRuIiwiZ2V0UmV2ZXJzZUNvbW1lbnRCdG4iLCJnZXRWb3RlQ29tbWVudFNjb3JlIiwibmV3U2NvcmUiLCJwYXJzZUludCIsInNldFZvdGVDb21tZW50U2NvcmUiLCJjb21tZW50TmV3TGlzdCIsImFkZEV2ZW50Rm9yQ29tbWVudE5ldyIsInBhcmVudEZyYW1lIiwidGFyZ2V0IiwiY29tbWVudFBhcmVudCIsInZhbGlkVGV4dGFyZWEiLCIkIiwiYWpheCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJjYWNoZSIsImRhdGFUeXBlIiwiYmVmb3JlU2VuZCIsImJlZm9yZVBvc3QiLCJzdWNjZXNzIiwiYWZ0ZXJQb3N0Iiwib3BhY2l0eSIsInN0YXR1cyIsInByZXBhcmVkSXRlbUNvbW1lbnQiLCJwcmVwYXJlSXRlbUNvbW1lbnQiLCJwcmVwYXJlTmV3UmVwbHlDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImNvbW1lbnRSZXBseSIsInJlc2V0Q3VycmVudFRleHRhcmVhIiwicmVwbHkiLCJ1c2VybmFtZSIsInNob3dOZXdDb21tZW50UmVwbHkiLCJyZXNpemVJZnJhbWUiLCJvYmoiLCJjb250ZW50V2luZG93Iiwic2Nyb2xsSGVpZ2h0IiwiaW5pdCIsImVtYmVkcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZmV0Y2hPZW1iZWQiLCJwcmVwYXJlRW1iZWQiLCJlbWJlZCIsImdldEF0dHJpYnV0ZSIsImdldFR5cGUiLCJwcmVwYXJlZEVtYmVkIiwicHJlcGFyZVlvdXR1YmVFbWJlZCIsInByZXBhcmVUd2l0dGVyRW1iZWQiLCJwcmVwYXJlRmFjZWJvb2tFbWJlZFZpZGVvIiwicHJlcGFyZUZhY2Vib29rRW1iZWRQb3N0IiwiZWwiLCJwcmVwYXJlZFVybCIsImdldFlvdXR1YmVJREZyb21VcmwiLCJyZWdFeHAiLCJtYXRjaCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFVBQUFDLEtBQUssRUFBSTtBQUNqRCxNQUFJQyw0REFBSixDQUFZQyxnRUFBWjtBQUNBLE1BQU1DLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUF4QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9DQUF2QixDQUF0QjtBQUNBRSxpQkFBZTtBQUNmLE1BQUlDLHNEQUFKO0FBQ0EsTUFBSUMsbURBQUo7QUFDQUMsc0VBQVE7QUFDUkMsZ0ZBQWtCO0FBQ2xCLE1BQUlDLDhEQUFKO0FBQ0FDLDhFQUFnQjtBQUNoQkMsc0VBQVE7QUFDUkMsbUZBQWE7QUFDYixNQUFJQywwREFBSjtBQUNILENBZEQ7QUFpQkFsQixNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQStCLFlBQUk7QUFDL0JZLGdGQUFrQjtBQUNsQk0sU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNILENBSEQ7O0FBTUEsSUFBTVgsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCLE1BQU1ZLGVBQWUsR0FBR2YsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUF4Qjs7QUFFQSxNQUFJYyxlQUFKLEVBQXFCO0FBQ2pCQSxtQkFBZSxDQUFDQyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsNkJBQTlCO0FBQ0F2QixV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QSxhQUFPd0ksRUFBUDtBQUNEOzs7d0NBRW1CekssRyxFQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBSTRLLE1BQU0sR0FBRyw2RUFBYjtBQUNBLFVBQUlDLEtBQUssR0FBRzdLLEdBQUcsQ0FBQzZLLEtBQUosQ0FBVUQsTUFBVixDQUFaO0FBQ0EsYUFBT0MsS0FBSyxJQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVN6TSxNQUFULElBQW1CLEVBQTVCLEdBQWlDeU0sS0FBSyxDQUFDLENBQUQsQ0FBdEMsR0FBNEMsS0FBbkQ7QUFDRDs7OzRCQUNPWixLLEVBQU87QUFDYnJPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJvTyxLQUFLLENBQUNhLFFBQU4sRUFBM0I7O0FBQ0EsVUFBSWIsS0FBSyxDQUFDYSxRQUFOLEdBQWlCdEssUUFBakIsQ0FBMEIsS0FBMUIsQ0FBSixFQUFzQztBQUNwQyxlQUFPLFNBQVA7QUFDRCxPQUZELE1BRU8sSUFBSXlKLEtBQUssQ0FBQ2EsUUFBTixHQUFpQnRLLFFBQWpCLENBQTBCLFNBQTFCLENBQUosRUFBMEM7QUFDL0MsZUFBTyxTQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUl5SixLQUFLLENBQUNhLFFBQU4sR0FBaUJ0SyxRQUFqQixDQUEwQixVQUExQixLQUF5Q3lKLEtBQUssQ0FBQ2EsUUFBTixHQUFpQnRLLFFBQWpCLENBQTBCLFFBQTFCLENBQTdDLEVBQWtGO0FBQ3ZGLGVBQU8sZUFBUDtBQUNELE9BRk0sTUFFQSxJQUFJeUosS0FBSyxDQUFDYSxRQUFOLEdBQWlCdEssUUFBakIsQ0FBMEIsVUFBMUIsQ0FBSixFQUEyQztBQUNoRCxlQUFPLGNBQVA7QUFDRDtBQUNGIiwiZmlsZSI6InBvc3Qtc2luZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tZW50fSBmcm9tICcuLy4uL2hlbHBlci9wb3N0L2NvbW1lbnQnO1xuaW1wb3J0IHtzd2l0Y2hDb21tZW50fSBmcm9tICcuLy4uL2hlbHBlci9wb3N0L2NvbW1lbnQtc3dpdGNoJztcbmltcG9ydCB7c2luZ3NDb3VudGVyLCBzaG93WW91dHViZUZyYW1lLCBjb3B5TGluaywgc2hvd01vYmlsZUluZm8sIHJlc2l6ZUdyYXBoaWNGcmFtZSwgc2hvd01vcmV9IGZyb20gXCIuLy4uL2hlbHBlci9wb3N0L2NvbW1vblwiO1xuaW1wb3J0IHtWb3RlfSBmcm9tIFwiLi4vaGVscGVyL3Bvc3Qvdm90ZVwiO1xuaW1wb3J0IFJlcG9ydCBmcm9tIFwiLi4vbGliL1JlcG9ydFwiO1xuaW1wb3J0IE1vcmVQb3N0cyBmcm9tICcuLy4uL2hlbHBlci9wb3N0L01vcmVQb3N0cyc7XG5pbXBvcnQgRW1iZWRIZWxwZXIgZnJvbSAnLi8uLi9oZWxwZXIvcG9zdC9lbWJlZCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZXZlbnQgPT4ge1xuICAgIG5ldyBDb21tZW50KHNpbmdzQ291bnRlcik7XG4gICAgY29uc3QgY291bnRlckNvbnRlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbmV3X190ZXh0YXJlYS1uZXcnKTtcbiAgICBjb25zdCBmaWVsZENvbnRlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbmV3X19jb3VudGVyLS1jdXJyZW50LW5ldycpO1xuICAgIHNjcm9sbFRvQ29tbWVudCgpO1xuICAgIG5ldyBWb3RlKCk7XG4gICAgbmV3IFJlcG9ydCgpO1xuICAgIGNvcHlMaW5rKCk7XG4gICAgcmVzaXplR3JhcGhpY0ZyYW1lKCk7XG4gICAgbmV3IE1vcmVQb3N0cygpO1xuICAgIHNob3dZb3V0dWJlRnJhbWUoKTtcbiAgICBzaG93TW9yZSgpO1xuICAgIHN3aXRjaENvbW1lbnQoKTtcbiAgICBuZXcgRW1iZWRIZWxwZXIoKTtcbn0pO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+e1xuICAgIHJlc2l6ZUdyYXBoaWNGcmFtZSgpO1xuICAgIGNvbnNvbGUubG9nKCdsb2FkJyk7XG59KTtcblxuXG5jb25zdCBzY3JvbGxUb0NvbW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tbWVudFRvU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdF9faXRlbS1zY3JvbGwnKTtcblxuICAgIGlmIChjb21tZW50VG9TY3JvbGwpIHtcbiAgICAgICAgY29tbWVudFRvU2Nyb2xsLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtbGlzdF9faXRlbS1zZWxlY3RlZCcpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiBjb21tZW50VG9TY3JvbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtIDYwXG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwiaW1wb3J0IHtyZXNpemVGcmFtZVNpbmdsZX0gZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgUmVwb3J0IGZyb20gJy4vLi4vLi4vbGliL1JlcG9ydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vcmVQb3N0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1tb3JlX19sb2FkZXInKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLW1vcmUnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJSZXBvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0cy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRQb3N0SUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLW1haW4nKS5pZDtcbiAgICAgICAgdGhpcy5jbG9uZVBvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWNsb25lJyk7XG4gICAgICAgIHRoaXMuY2xvbmVSZXBvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0LWNsb25lJyk7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtbW9yZV9fbG9hZGVyJyk7XG4gICAgICAgIHRoaXMubGltaXQgPSAxO1xuICAgICAgICB0aGlzLmluaXRMb2FkTW9yZSgpO1xuICAgIH1cblxuICAgIGluaXRMb2FkTW9yZSgpIHtcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSA+PSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIDEwMCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dMb2FkZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cblxuICAgIGhpZGVMb2FkZXIoKSB7XG4gICAgICAgIHRoaXMubG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cblxuICAgIHBvc3QoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImxpbWl0XCIsIHRoaXMubGltaXQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2N1cnJlbnRQb3N0SUQnLCB0aGlzLmN1cnJlbnRQb3N0SUQpXG4gICAgICAgIGZldGNoKCcvYXBpLWZldGNoLW1vcmUtcG9zdCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gZGF0YS5wb3N0cztcblxuICAgICAgICAgICAgICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLmZvckVhY2gocG9zdCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbG9uZVBvc3QgPSB0aGlzLmNsb25lUG9zdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QuY2xhc3NMaXN0LnJlbW92ZSgnc2luZ2xlLWNsb25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QuaXNHcmFwaGljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVQb3N0ID0gdGhpcy5zZXRWYWx1ZXNGb3JHcmFwaGljKHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvc3QuaXNQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVQb3N0ID0gdGhpcy5zZXRWYWx1ZXNGb3JQb3N0KHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVDYXRlZ29yaWVzKHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVEYXRlKHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVWb3RlKHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVDb3B5TGluayhwb3N0LCBjbG9uZVBvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVQb3N0ID0gdGhpcy5wcmVwYXJlUmVwb3J0KHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVDb21tZW50KHBvc3QsIGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVTb3VyY2UocG9zdCwgY2xvbmVQb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lUG9zdCA9IHRoaXMuaGlkZUZyYW1lKGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZVBvc3QgPSB0aGlzLnByZXBhcmVGYWNlYm9va1NoYXJlKHBvc3QsY2xvbmVQb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lUG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByZXBhcmVBZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcmVwYXJlQWQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVwYXJlZFJlcG9ydCA9IHRoaXMucHJlcGFyZVJlcG9ydEVsZW1lbnQocG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lclJlcG9ydC5hcHBlbmRDaGlsZChwcmVwYXJlZFJlcG9ydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXQgPSB0aGlzLmxpbWl0ICsgMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmVwYXJlQWQgKCl7XG5cbiAgICAgICAgbGV0IGlubGluZVNjcmlwdCAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgaW5saW5lU2NyaXB0LnR5cGUgID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgaW5saW5lU2NyaXB0LnRleHQgID0gJzwhLS1nb29nbGVfYWRfY2xpZW50ID0gXCJjYS1wdWItNTE1OTA1MTg3Mzc4NjAyN1wiOyBnb29nbGVfYWRfc2xvdCA9IFwiNDk4NTA4Nzc3OFwiOyBkYXRhX2FkX2Zvcm1hdD0gXCJhdXRvXCI7IGRhdGFfZnVsbF93aWR0aF9yZXNwb25zaXZlPSBcInRydWVcIjsgLy8tLT4nXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGlubGluZVNjcmlwdCk7XG5cbiAgICAgICAgdmFyIGV4dGVybmFsU2NyaXB0ICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBleHRlcm5hbFNjcmlwdC50eXBlICA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICAgIGV4dGVybmFsU2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvc2hvd19hZHMuanNcIjtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZXh0ZXJuYWxTY3JpcHQpO1xuXG5cbi8vICAgICAgICAgbmV3RGl2LmlubmVySFRNTCA9YDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIj48L3NjcmlwdD5cbi8vIDwhLS0gc2luZ2xlIHBvc3QgbG9hZCBtb3JlIC0tPlxuLy8gPGlucyBjbGFzcz1cImFkc2J5Z29vZ2xlXCJcbi8vICAgICAgc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCJcbi8vICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNTE1OTA1MTg3Mzc4NjAyN1wiXG4vLyAgICAgIGRhdGEtYWQtc2xvdD1cIjQ5ODUwODc3NzhcIlxuLy8gICAgICBkYXRhLWFkLWZvcm1hdD1cImF1dG9cIlxuLy8gICAgICBkYXRhLWZ1bGwtd2lkdGgtcmVzcG9uc2l2ZT1cInRydWVcIj48L2lucz5cbi8vIDxzY3JpcHQ+XG4vLyAgICAgIChhZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSk7XG4vLyA8L3NjcmlwdD5gO1xuLy8gICAgICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH1cblxuICAgIGhpZGVGcmFtZShjbG9uZVBvc3QpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBjbG9uZVBvc3QucXVlcnlTZWxlY3RvcignLnNpbmdsZS1ncmFwaGljX19mcmFtZScpO1xuXG4gICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgZnJhbWUuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lUG9zdDtcbiAgICB9XG5cbiAgICBwcmVwYXJlRmFjZWJvb2tTaGFyZShwb3N0LGNsb25lUG9zdCl7XG4gICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSAnPGRpdiBjbGFzcz1cImZiLXNoYXJlLWJ1dHRvblwiIGRhdGEtaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zL1wiIGRhdGEtbGF5b3V0PVwiYnV0dG9uX2NvdW50XCIgZGF0YS1zaXplPVwic21hbGxcIj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9aHR0cHMlM0ElMkYlMkZkZXZlbG9wZXJzLmZhY2Vib29rLmNvbSUyRmRvY3MlMkZwbHVnaW5zJTJGJmFtcDtzcmM9c2RrcHJlcGFyc2VcIiBjbGFzcz1cImZiLXhmYm1sLXBhcnNlLWlnbm9yZVwiPlVkb3N0xJlwbmlqPC9hPjwvZGl2Pic7XG4gICAgICAgIGNvbnN0IHVybCA9IGVuY29kZVVSSUNvbXBvbmVudChwb3N0LmFic29sdXRlVXJsKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGA8YSBjbGFzcz1cImZhY2Vib29rLXNoYXJlXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfSZ0PSR7cG9zdC50aXRsZX0mYXBwX2lkPTIwNzQ3NTY3NzU5NjAyMjRcIiBcbiAgIG9uY2xpY2s9XCJqYXZhc2NyaXB0OndpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJycsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8scmVzaXphYmxlPXllcyxzY3JvbGxiYXJzPXllcyxoZWlnaHQ9MzAwLHdpZHRoPTYwMCcpO3JldHVybiBmYWxzZTtcIlxuICAgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJVZG9zdMSZcG5palwiPjxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiPjwvaT4gPHNwYW4+VWRvc3TEmXBuaWo8L3NwYW4+XG48L2E+YDtcblxuXG4gICAgICAgIGNsb25lUG9zdC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWJhcl9fZmFjZWJvb2snKS5pbm5lckhUTUwgPSBlbGVtZW50O1xuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxuXG4gICAgcHJlcGFyZVNvdXJjZShwb3N0LCBjbG9uZVBvc3QpIHtcbiAgICAgICAgY29uc3Qgc291cmNlQ29udGFpbmVyID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtc291cmNlJyk7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHBvc3Quc291cmNlO1xuICAgICAgICBpZiAocG9zdC5zb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc291cmNlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgaWYgKHBvc3Quc291cmNlLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvckRpc3BsYXkgPSBwb3N0LnNvdXJjZS5sZW5ndGggPiAzNSA/IHNvdXJjZS5zbGljZSgwLCAzNSkgKyAnLi4uJyA6IHNvdXJjZTtcbiAgICAgICAgICAgICAgICBzb3VyY2VDb250YWluZXIuaW5uZXJIVE1MID0gYMW7csOzZMWCbzogPGEgaHJlZj1cIiR7cG9zdC5zb3VyY2V9XCI+JHtzdHJpbmdGb3JEaXNwbGF5fTwvYT5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VDb250YWluZXIuaW5uZXJUZXh0ID0gYMW5csOzZMWCbzogJHtzb3VyY2V9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxuICAgIHByZXBhcmVDb21tZW50KHBvc3QsIGNsb25lUG9zdCkge1xuICAgICAgICBjbG9uZVBvc3QucXVlcnlTZWxlY3RvcignLnNpbmdsZS1iYXJfX2NvbW1lbnQtbGluaycpLnNldEF0dHJpYnV0ZSgnaHJlZicsIHBvc3QuYWJzb2x1dGVVcmwpO1xuICAgICAgICBjbG9uZVBvc3QucXVlcnlTZWxlY3RvcignLnNpbmdsZS1iYXJfX2NvbW1lbnQtbnVtYmVyJykuaW5uZXJUZXh0ID0gcG9zdC5jb21tZW50TnVtYmVyO1xuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxuICAgIHByZXBhcmVSZXBvcnRFbGVtZW50KHBvc3QpIHtcbiAgICAgICAgY29uc3QgY2xvbmVSZXBvcnQgPSB0aGlzLmNsb25lUmVwb3J0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY2xvbmVSZXBvcnQuY2xhc3NMaXN0LnJlbW92ZSgnLnJlcG9ydC1jbG9uZScpO1xuICAgICAgICBjbG9uZVJlcG9ydC5kYXRhc2V0LmlkID0gcG9zdC5pZDtcbiAgICAgICAgY2xvbmVSZXBvcnQuaWQgPSBgcmVwb3J0LXBvc3QtJHtwb3N0LmlkfWA7XG4gICAgICAgIGNsb25lUmVwb3J0LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnQtY29tbWVudF9fY29udGVudC10ZXh0JykuaW5uZXJUZXh0ID0gcG9zdC50aXRsZTtcbiAgICAgICAgY2xvbmVSZXBvcnQucXVlcnlTZWxlY3RvcignLnJlcG9ydC1jb21tZW50X19hdmF0YXInKS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3Bvc3QuaW1hZ2VVcmx9KWA7XG4gICAgICAgIGNsb25lUmVwb3J0LnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnQtY29tbWVudF9fYXZhdGFyJykuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICBjbG9uZVJlcG9ydC5xdWVyeVNlbGVjdG9yKCcucmVwb3J0LWNvbW1lbnRfX2F2YXRhcicpLnN0eWxlLmhlaWdodCA9ICc0NXB4JztcbiAgICAgICAgY2xvbmVSZXBvcnQucXVlcnlTZWxlY3RvcignLnJlcG9ydC1jb21tZW50X19hdmF0YXInKS5zdHlsZS53aWR0aCA9ICc0NXB4JztcbiAgICAgICAgY29uc3QgcmVwb3J0ID0gbmV3IFJlcG9ydCgpO1xuICAgICAgICByZXBvcnQuc2V0RXZlbnRzRm9yUmVwb3J0KGNsb25lUmVwb3J0KTtcbiAgICAgICAgcmV0dXJuIGNsb25lUmVwb3J0O1xuICAgIH1cblxuICAgIHNldFZhbHVlc0ZvclBvc3QocG9zdCwgY2xvbmVQb3N0KSB7XG5cbiAgICAgICAgY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtZ3JhcGhpYycpLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtaW5zZXJ0X19jb250ZW50Jyk7XG4gICAgICAgIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5ld1RpdGxlLmNsYXNzTmFtZSA9ICdzaW5nbGUtdGl0bGUnO1xuXG4gICAgICAgIGxldCBuZXdUaXRsZUhyZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbmV3VGl0bGVIcmVmLmNsYXNzTmFtZSA9ICd3aGl0ZSc7XG4gICAgICAgIG5ld1RpdGxlSHJlZi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwb3N0LmFic29sdXRlVXJsKTtcbiAgICAgICAgbmV3VGl0bGVIcmVmLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBwb3N0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3VGl0bGVIcmVmLmlubmVyVGV4dCA9IHBvc3QudGl0bGU7XG5cbiAgICAgICAgbmV3VGl0bGUuYXBwZW5kQ2hpbGQobmV3VGl0bGVIcmVmKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcblxuICAgICAgICBpZiAocG9zdC5pc0ltYWdlRnJvbUxpbmsgfHwgcG9zdC5pc0ltYWdlRnJvbURpc2MpIHtcbiAgICAgICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1pbWFnZV9fd3JhcCcpO1xuICAgICAgICAgICAgbGV0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwb3N0LmltYWdlVXJsKTtcbiAgICAgICAgICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcG9zdC50aXRsZSk7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcblxuICAgICAgICB9IGVsc2UgaWYgKHBvc3QuaXNZb3V0dWJlTGluaykge1xuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gJ3NpbmdsZS1pbWFnZV9fd3JhcCBzaW5nbGUtaW1hZ2VfX3dyYXAteW91dHViZSc7XG4gICAgICAgICAgICBuZXdEaXYuZGF0YXNldC5pZCA9IHBvc3QueW91dHViZUlEO1xuICAgICAgICAgICAgbmV3RGl2LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7cG9zdC5pbWFnZVVybH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyYDtcblxuICAgICAgICAgICAgbGV0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICAgIG5ld0ljb24uY2xhc3NOYW1lID0gXCJzaW5nbGUtaW1hZ2VfX2ljb24gc2luZ2xlLWltYWdlX19pY29uLXlvdXR1YmUgZmFzIGZhLXBsYXktY2lyY2xlXCI7XG4gICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3SWNvbik7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gcG9zdC5kZXNjcmlwdGlvbjsgXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPiAyNTUpIHtcblxuICAgICAgICAgICAgaWYoZGVzY3JpcHRpb24gKXtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMuc3RyaXBUYWdzKGRlc2NyaXB0aW9uKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZmlyc3RQYXJ0ID0gZGVzY3JpcHRpb24uc2xpY2UoMCwgMjU1KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV3RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZmlyc3RQYXJ0ICtcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJzaW5nbGUtZGVzY3JpcHRpb25fX2RvdHNcIj4uLi48L3NwYW4+IFx0XHRcdFx0PGEgIGhyZWY9XCIke3Bvc3QuYWJzb2x1dGVVcmx9XCJjbGFzcz1cInNpbmdsZS1kZXNjcmlwdGlvbl9fbW9yZS1yZWRpcmVjdFwiPkNaWVRBSiBEQUxFSjwvYT5gO1xuICAgICAgICAgICAgICAgIC8vICc8c3BhbiBjbGFzcz1cInNpbmdsZS1kZXNjcmlwdGlvbl9fbW9yZSBkaXNwbGF5LW5vbmVcIj4nICsgc2Vjb25kUGFydCArICc8L3NwYW4+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRoaXMuc3RyaXBUYWdzKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxuICAgIHN0cmlwVGFncyAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvPChbXj5dKyk+L2csJycpO1xuICAgICB9XG5cbiAgICBzZXRWYWx1ZXNGb3JHcmFwaGljKHBvc3QsIGNsb25lUG9zdCkge1xuICAgICAgICBjbG9uZVBvc3QucXVlcnlTZWxlY3RvcignLnNpbmdsZS1ncmFwaGljX19saW5rJykuc2V0QXR0cmlidXRlKCdocmVmJywgcG9zdC5hYnNvbHV0ZVVybCk7XG4gICAgICAgIGNsb25lUG9zdC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWdyYXBoaWMnKS5zdHlsZS5tYXhXaWR0aCA9IHBvc3QudGVtcG9uYXJ5SW1hZ2VXaWR0aCArICdweCc7XG4gICAgICAgIGNsb25lUG9zdC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLWdyYXBoaWMgaW1nJykuc2V0QXR0cmlidXRlKCdzcmMnLCBwb3N0LmltYWdlVXJsKTtcbiAgICAgICAgcmV0dXJuIGNsb25lUG9zdDtcbiAgICB9XG5cbiAgICBwcmVwYXJlQ2F0ZWdvcmllcyhwb3N0LCBjbG9uZVBvc3QpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHBvc3QuY2F0ZWdvcmllcztcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtaW5mb19fY2F0ZWdvcnktd3JhcCcpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGNhdGVnb3JpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdIcmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBuZXdIcmVmLmNsYXNzTmFtZSA9ICdzaW5nbGUtaW5mb19fY2F0ZWdvcnknO1xuICAgICAgICAgICAgbmV3SHJlZi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjYXRlZ29yaWVzW2tleV0pO1xuICAgICAgICAgICAgbmV3SHJlZi5pbm5lclRleHQgPSBrZXk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdIcmVmKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lUG9zdDtcbiAgICB9XG5cbiAgICBwcmVwYXJlRGF0ZShwb3N0LCBjbG9uZVBvc3QpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHBvc3QuZGF0ZTtcbiAgICAgICAgY29uc3QgZGF0ZXMgPSBjbG9uZVBvc3QucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS1pbmZvX19kYXRlJyk7XG4gICAgICAgIGRhdGVzLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBkLmlubmVyVGV4dCA9IGRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxuICAgIHByZXBhcmVWb3RlKHBvc3QsIGNsb25lUG9zdCkge1xuICAgICAgICBjb25zdCB2b3RlVXAgPSBjbG9uZVBvc3QucXVlcnlTZWxlY3RvcignLnNpbmdsZS1iYXJfX3ZvdGUtLXVwJyk7XG4gICAgICAgIGNvbnN0IHZvdGVEb3duID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtYmFyX192b3RlLS1kb3duJyk7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtYmFyX192b3RlLXNjb3JlJyk7XG4gICAgICAgIHNjb3JlLmlubmVyVGV4dCA9IHBvc3Qudm90ZVNjb3JlO1xuXG4gICAgICAgIGlmIChwb3N0LmlzTG9nZ2VkKSB7XG4gICAgICAgICAgICB2b3RlVXAuY2xhc3NMaXN0LnJlbW92ZSgnYWNjZXNzLWJsb2NrX19pbml0Jyk7XG4gICAgICAgICAgICB2b3RlVXAuZGF0YXNldC5pZCA9IHBvc3QuaWQ7XG5cbiAgICAgICAgICAgIHZvdGVEb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY2Vzcy1ibG9ja19faW5pdCcpO1xuICAgICAgICAgICAgdm90ZURvd24uZGF0YXNldC5pZCA9IHBvc3QuaWQ7XG4gICAgICAgICAgICBzY29yZS5pZCA9IGBzY29yZS0ke3Bvc3QuaWR9YDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdm90ZVVwLmNsYXNzTGlzdC5yZW1vdmUoJ3NpbmdsZS1iYXJfX3ZvdGUnKTtcbiAgICAgICAgICAgIC8vIHZvdGVEb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3NpbmdsZS1iYXJfX3ZvdGUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxuICAgIHByZXBhcmVDb3B5TGluayhwb3N0LCBjbG9uZVBvc3QpIHtcbiAgICAgICAgY29uc3QgY29weUxpbmtJbnB1dCA9IGNsb25lUG9zdC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlX19jb3B5LWxpbmsnKTtcbiAgICAgICAgY29weUxpbmtJbnB1dC5pZCA9IFwidXJsLVwiICsgcG9zdC5pZDtcbiAgICAgICAgY29weUxpbmtJbnB1dC52YWx1ZSA9IHBvc3QuYWJzb2x1dGVVcmw7XG5cbiAgICAgICAgY29uc3QgY29weUxpbmtzID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtaW5mb19fYnV0dG9uLS1saW5rJyk7XG4gICAgICAgIGNvcHlMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5kYXRhc2V0LmlkID0gcG9zdC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9uZVBvc3Q7XG4gICAgfVxuXG4gICAgcHJlcGFyZVJlcG9ydChwb3N0LCBjbG9uZVBvc3QpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0ID0gY2xvbmVQb3N0LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtaW5mb19fYnV0dG9uLS1yZXBvcnQnKTtcbiAgICAgICAgcmVwb3J0LmRhdGFzZXQuaWQgPSBwb3N0LmlkO1xuICAgICAgICBpZiAocG9zdC5pc0xvZ2dlZCkge1xuICAgICAgICAgICAgcmVwb3J0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjY2Vzcy1ibG9ja19faW5pdCcpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXBvcnQuY2xhc3NMaXN0LnJlbW92ZSgnc2luZ2xlLWluZm9fX2J1dHRvbi0tcmVwb3J0Jyk7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmVQb3N0O1xuICAgIH1cblxufVxuXG5cbiIsImV4cG9ydCBjbGFzcyBDb21tZW50SGVscGVyIHtcbiAgICB2YWxpZFRleHRhcmVhKHRleHQpIHtcblxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNob3dFcnJvckZyYW1lVGV4dGFyZWEoZXJyb3JGcmFtZSwgXCJLb21lbnRhcnogamVzdCBwdXN0eSFcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGV4dC5sZW5ndGggPiAxMDAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNob3dFcnJvckZyYW1lVGV4dGFyZWEoZXJyb3JGcmFtZSwgXCJLb21lbnRhcnogamVzdCB6YSBkxYJ1Z2khXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuaGlkZUVycm9yRnJhbWVUZXh0YXJlYShlcnJvckZyYW1lKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cbiAgICByZXNldEN1cnJlbnRUZXh0YXJlYSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGV4dGFyZWEudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICAgIGdldFJldmVyc2VDb21tZW50QnRuKGN1cnJlbnRCdG4sIHR5cGUpIHtcbiAgICAgICAgY29uc3QgcmV2ZXJzZVR5cGUgPSB0aGlzLmdldFJldmVyc2VDb21tZW50VHlwZSh0eXBlKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvbW1lbnQtbGlzdF9fdm90ZSR7cmV2ZXJzZVR5cGV9YFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFJldmVyc2VDb21tZW50VHlwZSh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlID09IFwidXBcIiA/IFwiLS1kb3duXCIgOiBcIi0tdXBcIjtcbiAgICB9XG5cbiAgICBnZXRWb3RlQ29tbWVudFR5cGUodm90ZSkge1xuICAgICAgICBsZXQgdHlwZSA9ICcnO1xuICAgICAgICBpZiAodm90ZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnQtbGlzdF9fdm90ZS0tdXAnKSkge1xuICAgICAgICAgICAgdHlwZSA9ICd1cCc7XG4gICAgICAgIH0gZWxzZSBpZiAodm90ZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnQtbGlzdF9fdm90ZS0tZG93bicpKSB7XG4gICAgICAgICAgICB0eXBlID0gJ2Rvd24nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIGdldFZvdGVDb21tZW50U2NvcmUodm90ZSkge1xuICAgICAgICByZXR1cm4gdm90ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdF9fdm90ZS1zY29yZScpO1xuICAgIH1cblxuICAgIHNldFZvdGVDb21tZW50U2NvcmUoc2NvcmUsIHZhbHVlKSB7XG4gICAgICAgIHNjb3JlLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNob3dOZXdDb21tZW50UmVwbHkoaWQsIGF1dGhvclVzZXJuYW1lKSB7XG5cbiAgICAgICAgY29uc3QgY29tbWVudE5ldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb21tZW50LW5ldy0ke2lkfWApO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGNvbW1lbnROZXcucXVlcnlTZWxlY3RvcihcIi5jb21tZW50LW5ld19fdGV4dGFyZWFcIik7XG4gICAgICAgIGNvbW1lbnROZXcuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBgQCR7YXV0aG9yVXNlcm5hbWV9IGA7XG4gICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJlcGFyZU5ld1JlcGx5Q29tbWVudChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHthdXRob3JQcm9maWxlVXJsLCBhdXRob3JVc2VybmFtZSwgdGV4dCwgY29tbWVudElkLCBwb3N0SWR9ID0gZGF0YTtcblxuICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYFxuICAgIFxuICAgIDxkaXYgaWQ9XCJjb21tZW50LXJlcGx5LSR7Y29tbWVudElkfVwiIGNsYXNzPVwiY29tbWVudC1yZXBseVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXJlcGx5X19saXN0XCI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdlxuICAgICAgaWQ9XCJjb21tZW50LW5ldy0ke2NvbW1lbnRJZH1cIiBjbGFzcz1cImNvbW1lbnQtbmV3IGNvbW1lbnQtbmV3LS1yZXBseSBkaXNwbGF5LW5vbmVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LW5ld19fZXJyb3Itd3JhcFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbW1lbnQtbmV3X19lcnJvciBkaXNwbGF5LW5vbmVcIj48L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LW5ld19fYXZhdGFyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOnVybCgnJHt0aGlzLmdldEF1dGhvckF2YXRhclVybCgpfScpO2JhY2tncm91bmQtc2l6ZTogY292ZXI7XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1uZXdfX3RleHRcIj5cbiAgICAgICAgPHRleHRhcmVhIG1heGxlbmd0aD1cIjUwMFwiIGNsYXNzPVwiY29tbWVudC1uZXdfX3RleHRhcmVhIGNvbW1lbnQtbmV3X190ZXh0YXJlYS1yZXBseVwiIHBsYWNlaG9sZGVyPVwiWm9zdGF3IGtvbWVudGFyei4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LW5ld19fYWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbmV3X19jb3VudGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtbmV3X19jb3VudGVyLS1jdXJyZW50IGNvbW1lbnQtbmV3X19jb3VudGVyLS1jdXJyZW50LXJlcGx5XCI+MDwvc3Bhbj4vMTAwMDwvZGl2PlxuICAgICAgICAgIDxkaXYgZGF0YS1pZD1cIiR7cG9zdElkfVwiIGRhdGEtY29tbWVudC1wYXJlbnQ9XCIke2NvbW1lbnRJZH1cIiBjbGFzcz1cImNvbW1lbnQtbmV3X19idXR0b24gY29tbWVudC1uZXdfX2J1dHRvbi1yZXBseVwiPkRvZGFqPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcHJlcGFyZUl0ZW1Db21tZW50KGRhdGEsIGlzUmVwbHkgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB7YXV0aG9yUHJvZmlsZVVybCwgYXV0aG9yVXNlcm5hbWUsIHRleHQsIGNvbW1lbnRJZCwgcG9zdElkLCBjb21tZW50UGFyZW50SWR9ID0gZGF0YTtcblxuICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJlcGx5Q2xhc3MgPSBpc1JlcGx5ID8gXCJjb21tZW50LWxpc3RfX2l0ZW0tLXJlcGx5XCIgOiBcIlwiO1xuICAgICAgICBsZXQgaHRtbCA9IGBcbjxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RfX2l0ZW0gJHtyZXBseUNsYXNzfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RfX2l0ZW0tYXZhdGFyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOnVybCgnJHt0aGlzLmdldEF1dGhvckF2YXRhclVybCgpfScpO2JhY2tncm91bmQtc2l6ZTogY292ZXI7XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdF9faXRlbS1pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RfX2l0ZW0tYXV0aG9yXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImNvbW1lbnQtbGlzdF9faXRlbS1hdXRob3JcIiBocmVmPVwiJHthdXRob3JQcm9maWxlVXJsfVwiPiR7YXV0aG9yVXNlcm5hbWV9PC9hPlxuICAgICAgICAgICAgIDxzcGFuIGlkPVwiY29tbWVudC1zY29yZS0ke2NvbW1lbnRJZH1cIiBkYXRhLXNjb3JlPVwiMFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbW1lbnQtbGlzdF9fdm90ZS1zY29yZVwiPjA8L3NwYW4+XG4gICAgICAgICAgICB0ZXJhelxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdF9faXRlbS10ZXh0XCI+JHt0ZXh0fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1saXN0X19pdGVtLWFjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdF9fYWN0aW9uLS1kaXNhYmxlIGRpc3BsYXktbm9uZVwiPjwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gZGF0YS1pZD1cIiR7Y29tbWVudElkfVwiIGRhdGEtdXNlcm5hbWU9XCIke2F1dGhvclVzZXJuYW1lfVwiIGRhdGEtY29tbWVudC1wYXJlbnQ9XCIke2NvbW1lbnRQYXJlbnRJZH1cIiAgY2xhc3M9XCJjb21tZW50LWxpc3RfX2FjdGlvbi1pdGVtIGNvbW1lbnQtbGlzdF9faXRlbS1hY3Rpb24tLXJlcGx5XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcmVwbHlcIj48L2k+XG4gICAgICAgICAgICAgICAgT2Rwb3dpZWR6PC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY29tbWVudD1cIiR7Y29tbWVudElkfVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbW1lbnQtbGlzdF9fdm90ZSBjb21tZW50LWxpc3RfX3ZvdGUtLWFjdGlvbiBjb21tZW50LWxpc3RfX3ZvdGUtLXVwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXVwICBjb21tZW50LWxpc3RfX3ZvdGUtLWljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY29tbWVudD1cIiR7Y29tbWVudElkfVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbW1lbnQtbGlzdF9fdm90ZSBjb21tZW50LWxpc3RfX3ZvdGUtLWFjdGlvbiAgY29tbWVudC1saXN0X192b3RlLS1kb3duXCI+XG4gICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd24gIGNvbW1lbnQtbGlzdF9fdm90ZS0taWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1saXN0X19hY3Rpb24tLWNvcm5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY29tbWVudD1cIiR7Y29tbWVudElkfVwiIGNsYXNzPVwiY29tbWVudC1saXN0X19hY3Rpb24taXRlbSBjb21tZW50LWxpc3RfX2FjdGlvbi1pdGVtLS1yZW1vdmUgY29tbWVudC1saXN0X19yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L2Rpdj5cblxuYDtcbiAgICAgICAgaWYgKGlzUmVwbHkgPT0gZmFsc2UpIHtcblxuXG4gICAgICAgICAgICBsZXQgbGlzdCA9IGA8ZGl2IGlkPVwiY29tbWVudC1yZXBseS0ke2NvbW1lbnRJZH1cIiBjbGFzcz1cImNvbW1lbnQtcmVwbHlcIj48ZGl2IGNsYXNzPVwiY29tbWVudC1yZXBseV9fbGlzdFwiPjwvZGl2PjwvZGl2PmA7XG4gICAgICAgICAgICBodG1sID0gaHRtbC5jb25jYXQobGlzdCk7XG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIGdldEF1dGhvckF2YXRhclVybCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5oZWFkZXItbGFiZWxfX2F2YXRhcmApLmRhdGFzZXQudXJsO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc3dpdGNoQ29tbWVudCA9ICgpID0+IHtcbiAgY29uc3Qgc3dpdGNoV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtY29tbWVudF9fc3dpdGNoJyk7XG4gIGNvbnN0IHN3aXRjaEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS1jb21tZW50X19zd2l0Y2gtaXRlbScpO1xuICBjb25zdCBuYXZzID0gc3dpdGNoV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpbmdsZS1jb21tZW50X19uYXYtaXRlbSBcIik7XG5cbiAgbmF2cy5mb3JFYWNoKG5hdiA9PiB7XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlO1xuICAgICAgY2xlYXJOYXZzKG5hdnMpO1xuICAgICAgY2xlYXJTd2l0Y2goc3dpdGNoSXRlbXMpO1xuICAgICAgc3dpdGNoV3JhcC5xdWVyeVNlbGVjdG9yKGAuc2luZ2xlLWNvbW1lbnRfX3N3aXRjaC0ke3R5cGV9YCkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgICBzd2l0Y2hXcmFwLnF1ZXJ5U2VsZWN0b3IoYC5zaW5nbGUtY29tbWVudF9fbmF2LSR7dHlwZX1gKS5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtY29tbWVudF9fbmF2LWl0ZW0tLWFjdGl2ZScpO1xuICAgICAgY29uc29sZS5sb2coJ3N3aXRjaCcsc3dpdGNoV3JhcC5xdWVyeVNlbGVjdG9yKGAuc2luZ2xlLWNvbW1lbnRfX3N3aXRjaC0ke3R5cGV9YCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuY29uc3QgY2xlYXJOYXZzID0obmF2cyk9PntcbiAgICBuYXZzLmZvckVhY2gobmF2ID0+IHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3NpbmdsZS1jb21tZW50X19uYXYtaXRlbS0tYWN0aXZlJyk7ICAgICAgICBcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNsZWFyU3dpdGNoID0oc3dpdGNoSXRlbXMpPT57XG4gICAgc3dpdGNoSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKTsgICAgICAgIFxuICAgIH0pO1xufTsiLCJpbXBvcnQge3NpbmdzQ291bnRlcn0gZnJvbSBcIi4vY29tbW9uXCI7XG5pbXBvcnQge0NvbW1lbnRIZWxwZXJ9IGZyb20gXCIuL2NvbW1lbnQtaGVscGVyXCI7XG5cblxuZXhwb3J0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBDb21tZW50SGVscGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaW5nc0NvdW50ZXIgPSBzaW5nc0NvdW50ZXI7XG4gICAgICAgIHRoaXMubmV3Q29tbWVudE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnQtbmV3LS1tYWluXCIpO1xuICAgICAgICB0aGlzLm5ld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudC1uZXdfX2J1dHRvbi1uZXdcIik7XG4gICAgICAgIHRoaXMubmV3VGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnQtbmV3X190ZXh0YXJlYVwiKTtcbiAgICAgICAgdGhpcy5uZXdDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmNvbW1lbnQtbmV3X19jb3VudGVyLS1jdXJyZW50LW5ld1wiXG4gICAgICAgICk7XG5cblxuICAgICAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnQtbGlzdFwiKTtcbiAgICAgICAgdGhpcy52b3RlZENvbW1lbnRDbGFzcyA9IFwiY29tbWVudC1saXN0X192b3RlLS12b3RlZFwiO1xuICAgICAgICB0aGlzLmN1cnJlbnROZXdDb21tZW50ID0gJyc7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuaW5pdE5ld0NvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5pbml0Q291bnRlcigpO1xuICAgICAgICB0aGlzLmluaXRFdmVudEl0ZW0oKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRSZW1vdmVDb21tZW50KCk7XG4gICAgfVxuXG4gICAgaW5pdEV2ZW50UmVtb3ZlQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWxpc3RfX3JlbW92ZScpO1xuICAgICAgICBidXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRSZW1vdmVDb21tZW50KGJ0bik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXZlbnRSZW1vdmVDb21tZW50KGJ0bikge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJZCA9IGVsZW1lbnQuZGF0YXNldC5jb21tZW50O1xuICAgICAgICAgICAgY29uc3QgdXJsID0gJy9hcGktcmVtb3ZlLWNvbW1lbnQnO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uRGlzYWJsZSA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3RfX2FjdGlvbi0tZGlzYWJsZScpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdF9faXRlbS10ZXh0Jyk7XG4gICAgICAgICAgICBjb25zdCB2b3RlcyA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWxpc3RfX3ZvdGUnKTtcblxuICAgICAgICAgICAgYWN0aW9uRGlzYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1saXN0X19pdGVtLXRleHQtLWJhbicpO1xuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSAnVHJlxZvEhyB0ZWdvIGtvbWVudGFyemEgem9zdGHFgmEgdXN1bmnEmXRhIHByemV6IGF1dG9yYSc7XG4gICAgICAgICAgICB2b3Rlcy5mb3JFYWNoKHZvdGUgPT4ge1xuICAgICAgICAgICAgICAgIHZvdGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tbWVudC1saXN0X192b3RlLS12b3RlZCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbW1lbnRJZFwiLCBjb21tZW50SWQpO1xuXG4gICAgICAgICAgICB0aGlzLnBvc3QodXJsLCBmb3JtRGF0YSwgdHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdEV2ZW50SXRlbSgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1saXN0X19pdGVtJyk7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbUNvbW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVwbHlBY3Rpb24gPSBpdGVtQ29tbWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0X19pdGVtLWFjdGlvbi0tcmVwbHknKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRDbGlja1RvUmVwbHlBY3Rpb24ocmVwbHlBY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5ldmVudFZvdGVDb21tZW50KGl0ZW1Db21tZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0Q291bnRlcigpIHtcbiAgICAgICAgY29uc3QgbmV3Q29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnQtbmV3XCIpO1xuICAgICAgICBuZXdDb21tZW50cy5mb3JFYWNoKG5ld0NvbW1lbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudENvdW50ZXIobmV3Q29tbWVudCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXZlbnRWb3RlQ29tbWVudChpdGVtQ29tbWVudCkge1xuICAgICAgICBjb25zdCB2b3RlcyA9IGl0ZW1Db21tZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWxpc3RfX3ZvdGUtLWFjdGlvbicpO1xuICAgICAgICB2b3Rlcy5mb3JFYWNoKHZvdGUgPT4ge1xuICAgICAgICAgICAgdm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRoaXMudm90ZUNvbW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdm90ZUNvbW1lbnQoYnRuKSB7XG5cbiAgICAgICAgY29uc3QgdXJsID0gJy9hcGktdm90ZS1jb21tZW50JztcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0Vm90ZUNvbW1lbnRUeXBlKGJ0bik7XG4gICAgICAgIGNvbnN0IHJldmVyc2VCdG4gPSB0aGlzLmdldFJldmVyc2VDb21tZW50QnRuKGJ0biwgdHlwZSk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRJZCA9IGJ0bi5kYXRhc2V0LmNvbW1lbnQ7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gdGhpcy5nZXRWb3RlQ29tbWVudFNjb3JlKGJ0bik7XG4gICAgICAgIGxldCBuZXdTY29yZSA9IHBhcnNlSW50KHNjb3JlLmRhdGFzZXQuc2NvcmUpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb21tZW50SWRcIiwgY29tbWVudElkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidHlwZVwiLCB0eXBlKTtcblxuXG4gICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMudm90ZWRDb21tZW50Q2xhc3MpKSB7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnZvdGVkQ29tbWVudENsYXNzKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInR5cGVcIiwgJ3JlbW92ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQodGhpcy52b3RlZENvbW1lbnRDbGFzcyk7XG4gICAgICAgICAgICByZXZlcnNlQnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy52b3RlZENvbW1lbnRDbGFzcyk7XG4gICAgICAgICAgICBuZXdTY29yZSA9IHR5cGUgPT0gJ3VwJyA/IG5ld1Njb3JlICsgMSA6IG5ld1Njb3JlIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc3QodXJsLCBmb3JtRGF0YSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0Vm90ZUNvbW1lbnRTY29yZShzY29yZSwgbmV3U2NvcmUpO1xuICAgIH1cblxuXG4gICAgaW5pdE5ld0NvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnROZXdMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21tZW50LW5ld1wiKTtcbiAgICAgICAgY29tbWVudE5ld0xpc3QuZm9yRWFjaChuZXdDb21tZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRGb3JDb21tZW50TmV3KG5ld0NvbW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGV2ZW50Q291bnRlcihuZXdDb21tZW50KSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXJDb250ZW5lciA9IG5ld0NvbW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmNvbW1lbnQtbmV3X19jb3VudGVyLS1jdXJyZW50XCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZmllbGRDb250ZW5lciA9IG5ld0NvbW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNpbmdzQ291bnRlcihmaWVsZENvbnRlbmVyLCBjb3VudGVyQ29udGVuZXIsIDEwMDApO1xuICAgIH1cblxuICAgIGFkZEV2ZW50Rm9yQ29tbWVudE5ldyhuZXdDb21tZW50KSB7XG4gICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IG5ld0NvbW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbmV3X19idXR0b24nKTtcbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBuZXdDb21tZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG5cblxuICAgICAgICBjb25zdCB1cmwgPSBcIi9hcGktYWRkLW5ldy1jb21tZW50XCI7XG4gICAgICAgIG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RnJhbWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IHBhcmVudEZyYW1lLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dGFyZWEudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwb3N0SWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRQYXJlbnRJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbW1lbnRQYXJlbnQ7XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudE5ld0NvbW1lbnQgPSBwYXJlbnRGcmFtZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRhcmVhID0gdGV4dGFyZWE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkVGV4dGFyZWEodGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBvc3RJZFwiLCBwb3N0SWQpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY29tbWVudFBhcmVudElkXCIsIGNvbW1lbnRQYXJlbnRJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0KHVybCwgZm9ybURhdGEpO1xuICAgICAgICAgICAgICAgIHBhcmVudEZyYW1lLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LW5ld19fY291bnRlci0tY3VycmVudCcpLmlubmVyVGV4dCA9ICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwb3N0KHVybCwgZm9ybURhdGEsIGlzUmVwbHkgPSBmYWxzZSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaXNSZXBseSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZVBvc3QoKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlclBvc3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiZWZvcmVQb3N0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnROZXdDb21tZW50LnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgIH1cblxuICAgIGFmdGVyUG9zdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHtzdGF0dXMsIGNvbW1lbnRQYXJlbnRJZH0gPSBkYXRhO1xuICAgICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoIWNvbW1lbnRQYXJlbnRJZCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlcGFyZWRJdGVtQ29tbWVudCA9IHRoaXMucHJlcGFyZUl0ZW1Db21tZW50KGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB0aGlzLnByZXBhcmVOZXdSZXBseUNvbW1lbnQoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuaW5zZXJ0QmVmb3JlKG5ld0NvbW1lbnQsIHRoaXMubGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50Q291bnRlcihuZXdDb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuaW5zZXJ0QmVmb3JlKHByZXBhcmVkSXRlbUNvbW1lbnQsIHRoaXMubGlzdC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50Rm9yQ29tbWVudE5ldyhuZXdDb21tZW50KTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbHlBY3Rpb24gPSBwcmVwYXJlZEl0ZW1Db21tZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3RfX2l0ZW0tYWN0aW9uLS1yZXBseScpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRDbGlja1RvUmVwbHlBY3Rpb24ocmVwbHlBY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRWb3RlQ29tbWVudChwcmVwYXJlZEl0ZW1Db21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UmVtb3ZlQ29tbWVudChwcmVwYXJlZEl0ZW1Db21tZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3RfX3JlbW92ZScpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50UmVwbHkgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI2NvbW1lbnQtcmVwbHktJHtjb21tZW50UGFyZW50SWR9YClcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudC1yZXBseV9fbGlzdFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXBhcmVkSXRlbUNvbW1lbnQgPSB0aGlzLnByZXBhcmVJdGVtQ29tbWVudChkYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjb21tZW50UmVwbHkuYXBwZW5kQ2hpbGQocHJlcGFyZWRJdGVtQ29tbWVudCwgY29tbWVudFJlcGx5LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbHlBY3Rpb24gPSBwcmVwYXJlZEl0ZW1Db21tZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3RfX2l0ZW0tYWN0aW9uLS1yZXBseScpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRDbGlja1RvUmVwbHlBY3Rpb24ocmVwbHlBY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRWb3RlQ29tbWVudChwcmVwYXJlZEl0ZW1Db21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UmVtb3ZlQ29tbWVudChwcmVwYXJlZEl0ZW1Db21tZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3RfX3JlbW92ZScpKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0Q3VycmVudFRleHRhcmVhKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFRleHRhcmVhLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmN1cnJlbnROZXdDb21tZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9XG5cbiAgICBhZGRFdmVudENsaWNrVG9SZXBseUFjdGlvbihyZXBseSkge1xuICAgICAgICBpZiAocmVwbHkpIHtcbiAgICAgICAgICAgIHJlcGx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudElkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudFBhcmVudElkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29tbWVudFBhcmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JVc2VybmFtZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05ld0NvbW1lbnRSZXBseShjb21tZW50UGFyZW50SWQgPiAwID8gY29tbWVudFBhcmVudElkIDogY29tbWVudElkLCBhdXRob3JVc2VybmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImZ1bmN0aW9uIHJlc2l6ZUlmcmFtZShvYmopIHtcbiAgY29uc29sZS5sb2coXCJvYmpcIiwgb2JqKTtcbiAgb2JqLnN0eWxlLmhlaWdodCA9XG4gICAgb2JqLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCArIFwicHhcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWRIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbmdsZS1kZXNjcmlwdGlvblwiKTtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGVtYmVkcyA9IHRoaXMuY29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9lbWJlZFwiKTtcblxuICAgIHRoaXMuZmV0Y2hPZW1iZWQoKTtcbiAgICB0aGlzLnByZXBhcmVFbWJlZChlbWJlZHMpO1xuICB9XG5cbiAgZmV0Y2hPZW1iZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9lbWJlZFwiKTtcbiAgfVxuICBwcmVwYXJlRW1iZWQoZW1iZWRzKSB7XG4gICAgY29uc29sZS5sb2coXCJlbWJlZHNcIiwgZW1iZWRzKTtcbiAgICBPYmplY3Qua2V5cyhlbWJlZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IGVtYmVkID0gZW1iZWRzW2tleV07XG4gICAgICBjb25zb2xlLmxvZyhcImVtYmVkdGVzXCIsIGVtYmVkKTtcbiAgICAgIGNvbnN0IHVybCA9IGVtYmVkLmdldEF0dHJpYnV0ZShcInVybFwiKTtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUodXJsKTtcbiAgICAgIGxldCBwcmVwYXJlZEVtYmVkID0gXCJcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgIGlmICh0eXBlID09IFwieW91dHViZVwiKSB7XG4gICAgICAgIHByZXBhcmVkRW1iZWQgPSB0aGlzLnByZXBhcmVZb3V0dWJlRW1iZWQodXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVwYXJlZFwiLCBwcmVwYXJlZEVtYmVkLCBcImVtXCIsIGVtYmVkKTtcbiAgICAgICAgLy8gIGVtYmVkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHByZXBhcmVkRW1iZWQsZW1iZWQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwidHdpdHRlclwiKSB7XG4gICAgICAgIHByZXBhcmVkRW1iZWQgPSB0aGlzLnByZXBhcmVUd2l0dGVyRW1iZWQodXJsKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImZhY2Vib29rVmlkZW9cIikge1xuICAgICAgICBwcmVwYXJlZEVtYmVkID0gdGhpcy5wcmVwYXJlRmFjZWJvb2tFbWJlZFZpZGVvKHVybCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJmYWNlYm9va1Bvc3RcIikge1xuICAgICAgICBwcmVwYXJlZEVtYmVkID0gdGhpcy5wcmVwYXJlRmFjZWJvb2tFbWJlZFBvc3QodXJsKTtcbiAgICAgIH1cblxuICAgICAgZW1iZWQuYXBwZW5kQ2hpbGQocHJlcGFyZWRFbWJlZCk7XG4gICAgfSk7XG4gIH1cbiAgcHJlcGFyZUZhY2Vib29rRW1iZWRWaWRlbyh1cmwpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY2VudGVyLXdyYXBcIj48ZGl2IGNsYXNzPVwiZmItdmlkZW9cIiBkYXRhLWhyZWY9XCIke3VybH1cIiBkYXRhLXdpZHRoPVwiNTAwXCIgZGF0YS1zaG93LXRleHQ9XCJmYWxzZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmYi14ZmJtbC1wYXJzZS1pZ25vcmVcIj5cbiAgICAgIDxibG9ja3F1b3RlIGNpdGU9XCIke3VybH1cIj5cbiAgICAgICAgPGEgaHJlZj1cIiR7dXJsfVwiPkhvdyB0byBTaGFyZSBXaXRoIEp1c3QgRnJpZW5kczwvYT5cbiAgICAgICAgPHA+SG93IHRvIHNoYXJlIHdpdGgganVzdCBmcmllbmRzLjwvcD5cbiAgICAgICAgUG9zdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZmFjZWJvb2svXCI+RmFjZWJvb2s8L2E+IG9uIEZyaWRheSwgRGVjZW1iZXIgNSwgMjAxNFxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwcmVwYXJlRmFjZWJvb2tFbWJlZFBvc3QodXJsKSB7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsLmlubmVySFRNTCA9IGA8aWZyYW1lIHN0eWxlPVwiYmFja2dyb3VuZDp3aGl0ZTtcIiBzcmM9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGx1Z2lucy9wb3N0LnBocD9ocmVmPSR7cHJlcGFyZWRVcmx9JndpZHRoPTUwMFwiIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNjUwXCIgc3R5bGU9XCJib3JkZXI6bm9uZTtvdmVyZmxvdzpoaWRkZW5cIiBzY3JvbGxpbmc9XCJub1wiIGZyYW1lYm9yZGVyPVwiMFwiICBhbGxvdz1cImVuY3J5cHRlZC1tZWRpYVwiPjwvaWZyYW1lPmA7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cblxuICBwcmVwYXJlVHdpdHRlckVtYmVkKHVybCkge1xuICAgIC8vIGNvbnN0IHR3aXR0ZXJJRCA9IHRoaXMuZ2V0VHdpdHRlcklERnJvbVVybCh1cmwpO1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICAvLyBlbC5pbm5lckhUTUwgPSAgIGA8aWZyYW1lIGJvcmRlcj0wIGZyYW1lYm9yZGVyPTAgaGVpZ2h0PTUwMCAgd2lkdGg9MTAwJVxuICAgIC8vIHNyYz1cImh0dHBzOi8vdHdpdGZyYW1lLmNvbS9zaG93P3VybD0ke3ByZXBhcmVkVXJsfVwiPjwvaWZyYW1lPmA7XG5cbiAgICBlbC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNlbnRlci13cmFwXCI+PGJsb2NrcXVvdGUgY2xhc3M9XCJ0d2l0dGVyLXR3ZWV0XCIgZGF0YS1sYW5nPVwicGxcIj48YSBocmVmPVwiJHt1cmx9XCI+PC9hPjwvYmxvY2txdW90ZT48L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgLy8gICBnZXRUd2l0dGVySURGcm9tVXJsKHVybCkge1xuICAvLyAgICAgY29uc3Qgc3BsaXRlZCA9IHVybC5zcGxpdChcIi9cIik7XG4gIC8vICAgICBjb25zdCBzcGlsZWRMZW5ndGggPSBzcGxpdGVkLmxlbmd0aDtcbiAgLy8gICAgIHJldHVybiBzcGxpdGVkW3NwaWxlZExlbmd0aCAtIDFdO1xuICAvLyAgIH1cblxuICBwcmVwYXJlWW91dHViZUVtYmVkKHVybCkge1xuICAgIGNvbnN0IHlvdXR1YmVJRCA9IHRoaXMuZ2V0WW91dHViZUlERnJvbVVybCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKFwieXRJRFwiLCB5b3V0dWJlSUQpO1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWwuaW5uZXJIVE1MID0gYDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzUwXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3V0dWJlSUR9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgXG4gICAgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGdldFlvdXR1YmVJREZyb21VcmwodXJsKSB7XG4gICAgLy8gdmFyIHJlZ0V4cCA9IC9eLiooeW91dHVcXC5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuICAgIC8vIHZhciBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgIC8vIGlmIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT0gMTEpIHtcbiAgICAvLyAgIHJldHVybiBtYXRjaFsyXTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy9lcnJvclxuICAgIC8vIH1cbiAgICB2YXIgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcbiAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbN10ubGVuZ3RoID09IDExID8gbWF0Y2hbN10gOiBmYWxzZTtcbiAgfVxuICBnZXRUeXBlKGVtYmVkKSB7XG4gICAgY29uc29sZS5sb2coXCJlbWJlZFN0cmluZ1wiLCBlbWJlZC50b1N0cmluZygpKTtcbiAgICBpZiAoZW1iZWQudG9TdHJpbmcoKS5pbmNsdWRlcyhcInlvdVwiKSkge1xuICAgICAgcmV0dXJuIFwieW91dHViZVwiO1xuICAgIH0gZWxzZSBpZiAoZW1iZWQudG9TdHJpbmcoKS5pbmNsdWRlcyhcInR3aXR0ZXJcIikpIHtcbiAgICAgIHJldHVybiBcInR3aXR0ZXJcIjtcbiAgICB9IGVsc2UgaWYgKGVtYmVkLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJmYWNlYm9va1wiKSAmJiBlbWJlZC50b1N0cmluZygpLmluY2x1ZGVzKFwidmlkZW9zXCIpKSB7XG4gICAgICByZXR1cm4gXCJmYWNlYm9va1ZpZGVvXCI7XG4gICAgfSBlbHNlIGlmIChlbWJlZC50b1N0cmluZygpLmluY2x1ZGVzKFwiZmFjZWJvb2tcIikpIHtcbiAgICAgIHJldHVybiBcImZhY2Vib29rUG9zdFwiO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==