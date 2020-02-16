/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)


require('../scss/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


import {Sort} from './lib/sort';
import {initSearcher} from './lib/searcher';
import ReportPost from './helper/post/report-post';
import ForgotPassword from './lib/forgot-password';
import {MobileMenu} from './lib/mobile-menu';
import ChangeUsername from "./helper/ChangeUsername";
import {accessBlock} from './lib/access-block'
import {acceptCookies} from "./lib/cookies";
import {collaboration} from "./lib/collaboration";
import {initFacebookLogin} from "./lib/facebook";
import {initWallVerticalSticky, toggleMobileBar} from "./lib/ads";

window.addEventListener('DOMContentLoaded', (event) => {
    accessBlock();
    initSearcher();
    new MobileMenu();
    new ForgotPassword();
    new ChangeUsername();
    acceptCookies();
    const sortDesktop = {
        typesListClass: 'header-sort__type',
        categoriesListClass: 'header-sort__category',
        aliasCheckboxCategory: 'checkbox-desktop-category',
        classActive: 'header-sort__item--active',
        sortType: 'sort-type-desktop',
        aliasCheckboxType: 'checkbox-desktop-type'
    };
    new Sort(sortDesktop);
    const sortMobile = {
        typesListClass: 'header-mobile__type',
        categoriesListClass: 'header-mobile__category',
        aliasCheckboxCategory: 'checkbox-mobile-category',
        classActive: 'header-mobile__sort-item--active',
        sortType: 'sort-type-mobile',
        aliasCheckboxType: 'checkbox-mobile-type'
    };
    new Sort(sortMobile);

    new ReportPost();
    initWallVerticalSticky();
    toggleMobileBar();
});


const accesBlock = () => {
    const initFrames = document.querySelectorAll('.access-block__init');
    initFrames.forEach((frame) => {
        frame.addEventListener('click', (event) => {
            event.preventDefault();

        })
    })
};


