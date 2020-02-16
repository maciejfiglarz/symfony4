export const initWallVerticalSticky = () => {

    const verticalAds = document.querySelector('.ads-wall__vertical');


    // window.addEventListener("scroll", function (event) {
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

export const toggleMobileBar = () => {
    const mobileBar = document.querySelector('.ads-mobile__bar');
    console.log('var',mobileBar);
    if (mobileBar) {

        setTimeout(function(){
            console.log('xxx',mobileBar);
            mobileBar.classList.add('ads-mobile__bar--animated');
        }, 3000);

    }
};