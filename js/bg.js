
function create_iframe() {
    console.log("hahaha");
    let srcElm = document.getElementById("sorce");
    const ID = extractVideoId(srcElm.value);
    console.log(ID);
    $("#iframe-wrapper").append('<iframe src="https://www.youtube.com/embed/' + ID + '" frameborder="1" sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals" allowfullscreen></iframe>')
}

function extractVideoId(url) {
    const pattern1 = /^https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/;
    const pattern2 = /^https:\/\/youtu\.be\/([\w-]+)\?si=/;
    const pattern3 = /^https:\/\/www\.youtube\.com\/embed\/([\w-]+)/;
    const pattern4 = /^https:\/\/www\.youtube\.com\/live\/([\w-]+)\?si=/;
    const pattern5 = /^https:\/\/m\.youtube\.com\/watch\?v=([\w-]+)/;
    let videoId = null;
  
    if (pattern1.test(url)) {
      videoId = url.match(pattern1)[1];
    } else if (pattern2.test(url)) {
      videoId = url.match(pattern2)[1];
    } else if (pattern3.test(url)) {
      videoId = url.match(pattern3)[1];
    } else if (pattern4.test(url)) {
      videoId = url.match(pattern4)[1];
    } else if (pattern5.test(url)){
      videoId = url.match(pattern5)[1];
    } else {
      return "ERROR";
    }
    console.log(videoId);
    return videoId;
}