import {resizeFrameSingle} from './common'
import Report from './../../lib/Report';

export default class MorePosts {
    constructor() {
        this.loader = document.querySelector('.single-more__loader');
        this.container = document.querySelector('.single-more');
        this.containerReport = document.querySelector('.reports-container');
        this.isProcessing = true;
        this.currentPostID = document.querySelector('.single-main').id;
        this.clonePost = document.querySelector('.single-clone');
        this.cloneReport = document.querySelector('.report-clone');
        const loader = document.querySelector('.single-more__loader');
        this.limit = 1;
        this.initLoadMore();
    }

    initLoadMore() {
        window.onscroll = (ev) => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {

                if (this.isProcessing) {
                    this.isProcessing = false;
                    this.showLoader();
                    this.post();
                }

            }
        }
    }

    showLoader() {
        this.loader.classList.remove('display-none');
    }

    hideLoader() {
        this.loader.classList.add('display-none');
    }

    post() {
        const formData = new FormData();
        formData.append("limit", this.limit);
        formData.append('currentPostID', this.currentPostID)
        fetch('/api-fetch-more-post', {
            method: 'post',
            body: formData
        })
            .then(data => data.json())
            .then((data) => {
                const posts = data.posts;

                if (posts.length > 0) {
                    posts.forEach(post => {

                        let clonePost = this.clonePost.cloneNode(true);
                        clonePost.classList.remove('single-clone');
                        clonePost.classList.remove('display-none');


                        if (post.isGraphic) {
                            clonePost = this.setValuesForGraphic(post, clonePost);
                        } else if (post.isPost) {
                            clonePost = this.setValuesForPost(post, clonePost);
                        }
                        clonePost = this.prepareCategories(post, clonePost);
                        clonePost = this.prepareDate(post, clonePost);
                        clonePost = this.prepareVote(post, clonePost);
                        clonePost = this.prepareCopyLink(post, clonePost);
                        clonePost = this.prepareReport(post, clonePost);
                        clonePost = this.prepareComment(post, clonePost);
                        clonePost = this.prepareSource(post, clonePost);
                        clonePost = this.hideFrame(clonePost);
                        clonePost = this.prepareFacebookShare(post,clonePost);
                        this.container.appendChild(clonePost);
                        // this.prepareAd();
                        // this.container.appendChild(this.prepareAd());

                        let preparedReport = this.prepareReportElement(post);
                        this.containerReport.appendChild(preparedReport);

                    });

                    this.hideLoader();
                    this.limit = this.limit + 3;
                    this.isProcessing = true;
                    this
                } else {
                    this.hideLoader();
                }
            })
            .catch(function (error) {
                console.log('error', error);
            });
    }

    prepareAd (){

        let inlineScript   = document.createElement("script");
        inlineScript.type  = "text/javascript";
        inlineScript.text  = '<!--google_ad_client = "ca-pub-5159051873786027"; google_ad_slot = "4985087778"; data_ad_format= "auto"; data_full_width_responsive= "true"; //-->'
        this.container.appendChild(inlineScript);

        var externalScript   = document.createElement("script");
        externalScript.type  = "text/javascript";
        externalScript.src = "https://pagead2.googlesyndication.com/pagead/show_ads.js";
        this.container.appendChild(externalScript);


//         newDiv.innerHTML =`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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

    hideFrame(clonePost) {
        const frame = clonePost.querySelector('.single-graphic__frame');

        if (frame) {
            frame.classList.add('display-none');
        }
        return clonePost;
    }

    prepareFacebookShare(post,clonePost){
        // const element = '<div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Udostępnij</a></div>';
        const url = encodeURIComponent(post.absoluteUrl);
        const element = `<a class="facebook-share" href="https://www.facebook.com/sharer/sharer.php?u=${url}&t=${post.title}&app_id=2074756775960224" 
   onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
   target="_blank" title="Udostępnij"><i class="fab fa-facebook-square"></i> <span>Udostępnij</span>
</a>`;


        clonePost.querySelector('.single-bar__facebook').innerHTML = element;
        return clonePost;
    }


    prepareSource(post, clonePost) {
        const sourceContainer = clonePost.querySelector('.single-source');
        const source = post.source;
        if (post.source.length > 0) {
            sourceContainer.classList.remove('display-none');
            if (post.source.includes("http")) {
                const stringForDisplay = post.source.length > 35 ? source.slice(0, 35) + '...' : source;
                sourceContainer.innerHTML = `Żródło: <a href="${post.source}">${stringForDisplay}</a>`;
            } else {
                sourceContainer.innerText = `Źródło: ${source}`;
            }
        }
        return clonePost;
    }

    prepareComment(post, clonePost) {
        clonePost.querySelector('.single-bar__comment-link').setAttribute('href', post.absoluteUrl);
        clonePost.querySelector('.single-bar__comment-number').innerText = post.commentNumber;
        return clonePost;
    }

    prepareReportElement(post) {
        const cloneReport = this.cloneReport.cloneNode(true);
        cloneReport.classList.remove('.report-clone');
        cloneReport.dataset.id = post.id;
        cloneReport.id = `report-post-${post.id}`;
        cloneReport.querySelector('.report-comment__content-text').innerText = post.title;
        cloneReport.querySelector('.report-comment__avatar').style.background = `url(${post.imageUrl})`;
        cloneReport.querySelector('.report-comment__avatar').style.backgroundSize = 'cover';
        cloneReport.querySelector('.report-comment__avatar').style.height = '45px';
        cloneReport.querySelector('.report-comment__avatar').style.width = '45px';
        const report = new Report();
        report.setEventsForReport(cloneReport);
        return cloneReport;
    }

    setValuesForPost(post, clonePost) {

        clonePost.querySelector('.single-graphic').classList.add('display-none');
        const content = clonePost.querySelector('.single-insert__content');
        let newTitle = document.createElement("div");
        newTitle.className = 'single-title';

        let newTitleHref = document.createElement("a");
        newTitleHref.className = 'white';
        newTitleHref.setAttribute('href', post.absoluteUrl);
        newTitleHref.setAttribute('title', post.description);
        newTitleHref.innerText = post.title;

        newTitle.appendChild(newTitleHref);

        content.appendChild(newTitle);

        if (post.isImageFromLink || post.isImageFromDisc) {
            let newDiv = document.createElement("div");
            newDiv.classList.add('single-image__wrap');
            let newImg = document.createElement("img");
            newImg.setAttribute('src', post.imageUrl);
            newImg.setAttribute('title', post.title);
            newDiv.appendChild(newImg);
            content.appendChild(newDiv);

        } else if (post.isYoutubeLink) {
            let newDiv = document.createElement("div");
            newDiv.className = 'single-image__wrap single-image__wrap-youtube';
            newDiv.dataset.id = post.youtubeID;
            newDiv.style.background = `url(${post.imageUrl}) no-repeat center center`;

            let newIcon = document.createElement("i");
            newIcon.className = "single-image__icon single-image__icon-youtube fas fa-play-circle";
            newDiv.appendChild(newIcon);
            content.appendChild(newDiv);
        }

        let newDescription = document.createElement("div");
        newDescription.classList.add('single-description');
        let description = post.description; 
        if (description.length > 255) {

            if(description ){
                description = this.stripTags(description); 
            }
            let firstPart = description.slice(0, 255);
            
            newDescription.innerHTML = firstPart +
                `<span class="single-description__dots">...</span> 				<a  href="${post.absoluteUrl}"class="single-description__more-redirect">CZYTAJ DALEJ</a>`;
                // '<span class="single-description__more display-none">' + secondPart + '</span>';
        } else {
            newDescription.innerText = this.stripTags(description);
        }

        content.appendChild(newDescription);
        return clonePost;
    }

    stripTags (string) {
        return string.replace(/<([^>]+)>/g,'');
     }

    setValuesForGraphic(post, clonePost) {
        clonePost.querySelector('.single-graphic__link').setAttribute('href', post.absoluteUrl);
        clonePost.querySelector('.single-graphic').style.maxWidth = post.temponaryImageWidth + 'px';
        clonePost.querySelector('.single-graphic img').setAttribute('src', post.imageUrl);
        return clonePost;
    }

    prepareCategories(post, clonePost) {
        const categories = post.categories;
        const container = clonePost.querySelector('.single-info__category-wrap');

        Object.keys(categories).forEach(key => {
            let newHref = document.createElement("a");
            newHref.className = 'single-info__category';
            newHref.setAttribute('href', categories[key]);
            newHref.innerText = key;

            container.appendChild(newHref);
        });

        return clonePost;
    }

    prepareDate(post, clonePost) {
        const date = post.date;
        const dates = clonePost.querySelectorAll('.single-info__date');
        dates.forEach(d => {
            d.innerText = date;
        });
        return clonePost;
    }

    prepareVote(post, clonePost) {
        const voteUp = clonePost.querySelector('.single-bar__vote--up');
        const voteDown = clonePost.querySelector('.single-bar__vote--down');
        const score = clonePost.querySelector('.single-bar__vote-score');
        score.innerText = post.voteScore;

        if (post.isLogged) {
            voteUp.classList.remove('access-block__init');
            voteUp.dataset.id = post.id;

            voteDown.classList.remove('access-block__init');
            voteDown.dataset.id = post.id;
            score.id = `score-${post.id}`;

        } else {
            // voteUp.classList.remove('single-bar__vote');
            // voteDown.classList.remove('single-bar__vote');
        }
        return clonePost;
    }

    prepareCopyLink(post, clonePost) {
        const copyLinkInput = clonePost.querySelector('.single__copy-link');
        copyLinkInput.id = "url-" + post.id;
        copyLinkInput.value = post.absoluteUrl;

        const copyLinks = clonePost.querySelectorAll('.single-info__button--link');
        copyLinks.forEach(link => {
            link.dataset.id = post.id;
        });
        return clonePost;
    }

    prepareReport(post, clonePost) {
        const report = clonePost.querySelector('.single-info__button--report');
        report.dataset.id = post.id;
        if (post.isLogged) {
            report.classList.remove('access-block__init');
        }else {
            report.classList.remove('single-info__button--report');

        }
        return clonePost;
    }

}


