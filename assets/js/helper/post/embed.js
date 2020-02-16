function resizeIframe(obj) {
  console.log("obj", obj);
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + "px";
}

export default class EmbedHelper {
  constructor() {
    this.content = document.querySelector(".single-description");
    if (this.content) {
      this.init();
    }
  }

  init() {
    const embeds = this.content.getElementsByTagName("oembed");

    this.fetchOembed();
    this.prepareEmbed(embeds);
  }

  fetchOembed() {
    return this.content.getElementsByTagName("oembed");
  }
  prepareEmbed(embeds) {
    console.log("embeds", embeds);
    Object.keys(embeds).forEach(key => {
      const embed = embeds[key];
      console.log("embedtes", embed);
      const url = embed.getAttribute("url");
      const type = this.getType(url);
      let preparedEmbed = "";
      console.log("type", type);
      if (type == "youtube") {
        preparedEmbed = this.prepareYoutubeEmbed(url);
        console.log("prepared", preparedEmbed, "em", embed);
        //  embed.parentNode.replaceChild(preparedEmbed,embed);
      } else if (type == "twitter") {
        preparedEmbed = this.prepareTwitterEmbed(url);
      } else if (type == "facebookVideo") {
        preparedEmbed = this.prepareFacebookEmbedVideo(url);
      } else if (type == "facebookPost") {
        preparedEmbed = this.prepareFacebookEmbedPost(url);
      }

      embed.appendChild(preparedEmbed);
    });
  }
  prepareFacebookEmbedVideo(url) {
    let el = document.createElement("div");
    el.innerHTML = `<div class="center-wrap"><div class="fb-video" data-href="${url}" data-width="500" data-show-text="false">
    <div class="fb-xfbml-parse-ignore">
      <blockquote cite="${url}">
        <a href="${url}">How to Share With Just Friends</a>
        <p>How to share with just friends.</p>
        Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
      </blockquote>
    </div>
  </div>
  </div>`;
    return el;
  }

  prepareFacebookEmbedPost(url) {
    const preparedUrl = encodeURIComponent(url);
    let el = document.createElement("div");
    el.innerHTML = `<iframe style="background:white;" src="https://www.facebook.com/plugins/post.php?href=${preparedUrl}&width=500" width="500" height="650" style="border:none;overflow:hidden" scrolling="no" frameborder="0"  allow="encrypted-media"></iframe>`;
    return el;
  }


  prepareTwitterEmbed(url) {
    // const twitterID = this.getTwitterIDFromUrl(url);
    let el = document.createElement("div");
    const preparedUrl = encodeURIComponent(url);
    // el.innerHTML =   `<iframe border=0 frameborder=0 height=500  width=100%
    // src="https://twitframe.com/show?url=${preparedUrl}"></iframe>`;

    el.innerHTML = `<div class="center-wrap"><blockquote class="twitter-tweet" data-lang="pl"><a href="${url}"></a></blockquote></div>`;

    return el;
  }

  //   getTwitterIDFromUrl(url) {
  //     const splited = url.split("/");
  //     const spiledLength = splited.length;
  //     return splited[spiledLength - 1];
  //   }

  prepareYoutubeEmbed(url) {
    const youtubeID = this.getYoutubeIDFromUrl(url);
    console.log("ytID", youtubeID);
    let el = document.createElement("div");
    el.innerHTML = `<iframe width="100%" height="350" src="https://www.youtube.com/embed/${youtubeID}" frameborder="0" allow="accelerometer; autoplay; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    return el;
  }

  getYoutubeIDFromUrl(url) {
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
  getType(embed) {
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
}
