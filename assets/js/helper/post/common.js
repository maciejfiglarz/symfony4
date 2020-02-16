



export const resizeGraphicFrame = () => {
    const frames = document.querySelectorAll('.single-graphic__frame');
    // document.addEventListener('load',()=>{
        resizeFrame(frames);
    // });
    console.log('resize');
    window.addEventListener('resize', function (event) {
        resizeFrame(frames);
    });

};

export const resizeFrame = (frames) => {

    frames.forEach((frame) => {
        resizeFrameSingle(frame)
    });

};

export const resizeFrameSingle = (frame) => {

    const defaultTitleFontSize = 24;
    const defaultDescriptionFontSize = 16;
    const defaultDescriptionMarginTop = 13;
    const defaultDescriptionLineHeight = 23;

    const oryginalHeight = frame.dataset.height;
    const oryginalWidth = frame.dataset.width;

    const currentHeight = frame.offsetHeight;
    const currentWidth = frame.offsetWidth;

    const title = frame.querySelector('.single-graphic__title ');
    const link = title.querySelector('a');
    const description = frame.querySelector('.single-graphic__description');
    const scale = currentWidth / oryginalWidth;

    console.log('scale',scale,oryginalWidth,oryginalHeight,currentWidth,currentHeight);

    frame.style.top = oryginalHeight * scale + 'px';
    frame.style.bottom = 'auto';
    (link ? link : title).style.fontSize = defaultTitleFontSize * scale + 'px';

    if(description){
        console.log('description',description);

        description.style.marginTop = defaultDescriptionMarginTop * scale + 'px';
        description.style.fontSize = defaultDescriptionFontSize * scale + 'px';
        description.style.lineHeight = defaultDescriptionLineHeight * scale + 'px';
    }


};
export const showMobileInfo = () => {

    document.querySelectorAll('.single-info__button--more').forEach((item) => {
        item.addEventListener('click', event => {
            const element = event.currentTarget;
            const icon = element.querySelector('i');
            const id = element.dataset.id;
            const singleBar = element.parentNode.parentNode.parentNode;
            const singleInfo = singleBar.querySelector(`#single-info-${id}`);
            const singleSource = singleBar.querySelector(`#single-source-${id}`);
            const singleWrap = singleBar.querySelector(`#single-wrap-${id}`);

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

    })
};

export const copyLink = () => {
    const list = document.querySelector('.container__list');
    list.addEventListener('click', (event) => {
        let element = event.target;
        if (element.tagName != 'DIV') {
            element = element.parentElement;
        }
        if (element.classList.contains('single-info__button--link')) {

            const id = element.dataset.id;

            const icon = element.querySelector('i');
            const text = element.querySelector('span');

            icon.className = '';
            icon.classList.add('fas');
            icon.classList.add('fa-copy');
            text.innerText = 'Skopiowano';

            const input = document.querySelector(`#url-${id}`);

            input.select();
            document.execCommand("copy");
            window.getSelection();
        }
    });
};
export const showMore = () => {
    // const btns = document.querySelectorAll('.single-description__more-button');
    const list = document.querySelector('.container__list');
    list.addEventListener('click', (event) => {
        let element = event.target;

        if (element.classList.contains('single-description__more-button')) {

            event.preventDefault();
            element.classList.add('display-none');
            const wrap = element.parentNode;
            wrap.querySelector('.single-description__more').classList.remove('display-none');
            wrap.querySelector('.single-description__dots').classList.add('display-none');

        }
    });
};

export const showYoutubeFrame = id => {

    const list = document.querySelector('.container__list');
    list.addEventListener('click', (event) => {
        let youtubeFrame = event.target;
        if (youtubeFrame.tagName != 'DIV') {
            youtubeFrame = youtubeFrame.parentElement;
        }
        if (youtubeFrame.classList.contains('single-image__wrap-youtube')) {
            const youtubeID = youtubeFrame.dataset.id;
            console.log(youtubeFrame, youtubeID);
            const embed = `<iframe width="100%" height="350" src="https://www.youtube.com/embed/${youtubeID}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            youtubeFrame.innerHTML = embed;
        }

    });

    // });
};

export const singsCounter = (fieldContener, counterContener, maxString) => {
    singsCounterAction(fieldContener, counterContener, maxString);
    fieldContener.addEventListener("keyup", e => {
        singsCounterAction(fieldContener, counterContener, maxString);
    });
};

const singsCounterAction = (fieldContener, counterContener, maxString) => {
    let singsNumber = fieldContener.value.length;
    counterContener.innerText = singsNumber;
    const subString = fieldContener.value.substring(0, maxString - 1);

    if (singsNumber >= maxString) {
        fieldContener.value = subString;
        singsNumber = maxString;
    }
};
