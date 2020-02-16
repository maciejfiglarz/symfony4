import {Comment} from './../helper/post/comment';
import {switchComment} from './../helper/post/comment-switch';
import {singsCounter, showYoutubeFrame, copyLink, showMobileInfo, resizeGraphicFrame, showMore} from "./../helper/post/common";
import {Vote} from "../helper/post/vote";
import Report from "../lib/Report";
import MorePosts from './../helper/post/MorePosts';
import EmbedHelper from './../helper/post/embed';
window.addEventListener("DOMContentLoaded", event => {
    new Comment(singsCounter);
    const counterContener = document.querySelector('.comment-new__textarea-new');
    const fieldContener = document.querySelector('.comment-new__counter--current-new');
    scrollToComment();
    new Vote();
    new Report();
    copyLink();
    resizeGraphicFrame();
    new MorePosts();
    showYoutubeFrame();
    showMore();
    switchComment();
    new EmbedHelper();
});


window.addEventListener('load',()=>{
    resizeGraphicFrame();
    console.log('load');
});


const scrollToComment = () => {
    const commentToScroll = document.querySelector('.comment-list__item-scroll');

    if (commentToScroll) {
        commentToScroll.classList.add('comment-list__item-selected');
        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: commentToScroll.getBoundingClientRect().top + document.documentElement.scrollTop - 60
        });
    }
};