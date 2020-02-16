
import {
    copyLink,
    resizeGraphicFrame,
    showComment,
    showMobileInfo,
    showMore,
    showYoutubeFrame
} from "./../helper/post/common";
import {fbShare} from "../lib/facebook";
import {Vote} from "./../helper/post/vote";
import Report from "../lib/Report";

window.addEventListener("DOMContentLoaded", event => {
    const vote = new Vote();
    showYoutubeFrame();
    copyLink();
    showMore();
    new Report();
    showMobileInfo();
    resizeGraphicFrame();
});

window.addEventListener('load',()=>{
    resizeGraphicFrame();
});
