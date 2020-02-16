export class MobileMenu {
    constructor() {
        this.initBtn = document.querySelector('.header-mobile__init');
        this.initMobileMenuFrame = document.querySelector('.header-mobile__frame');
        this.actionItems = document.querySelectorAll('.header-mobile__item--action');
        this.close = document.querySelector('.header-mobile__close');
        this.init = document.querySelector('.header-mobile__init');

        this.initEvent();
    }

    initEvent() {
        this.initMobileMenu();
        this.initItemClick();
        this.initCloseClick();
        this.initShowClick();
    }

    initCloseClick() {
        this.close.addEventListener('click', () => {
            this.hideMobileMenu();
        });
    }
    initShowClick() {

        this.init.addEventListener('click', () => {
            this.showMobileMenu();
        });
    }

    showMobileMenu() {

        this.initMobileMenuFrame.classList.remove('display-none');
    }

    hideMobileMenu() {
        this.initMobileMenuFrame.classList.add('display-none');
    }


    initItemClick() {
        this.actionItems.forEach((item) => {
            item.addEventListener('click', event => {
                const element = event.target;
                element.classList.toggle('header-mobile__item--selected');
                const name = element.dataset.id;

                if (element.classList.contains('header-mobile__item--selected')) {
                    this.showChildWrap(name);
                    element.classList.add('header-mobile__item--selected');
                } else {
                    this.hideChildWrap(name);
                    element.classList.remove('header-mobile__item--selected');
                }
            });
        })
    }


    showChildWrap(name) {
        document.querySelector(`#child-${name}`).classList.remove('display-none');
    }

    hideChildWrap(name) {
        document.querySelector(`#child-${name}`).classList.add('display-none');
    }

    initMobileMenu() {
        this.initBtn.addEventListener('click', () => {
            this.initBtn.classList.toggle('header-mobile__init--active');
            if (this.initBtn.classList.contains('header-mobile__init--active')) {
                this.showMobileMenu();
            } else {
                this.hideMobileMenu();
            }
        });
    }


}