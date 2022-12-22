function convert() {
    let srcElm = document.getElementById("sorce");
    let time_hElm = document.getElementById("timecode_h");
    let time_mElm = document.getElementById("timecode_m");
    let time_sElm = document.getElementById("timecode_s");
    let resultElm = document.getElementById("result");

    console.log(time_hElm.value);
    console.log(time_mElm.value);
    console.log(time_sElm.value);

    let totalSec = (parseInt(time_hElm.value) * 3600) + (parseInt(time_mElm.value) * 60) + parseInt(time_sElm.value);
    let url = srcElm.value + "?t=" + totalSec;
    resultElm.textContent = url;
    resultElm.setAttribute('href', url);
}