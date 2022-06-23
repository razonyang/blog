declare global {
    interface Window { adsbygoogle: any; }
}

setTimeout(function() {
    console.log(window.adsbygoogle);
    var adsbygoogle = window.adsbygoogle ? window.adsbygoogle : {};
    if (!adsbygoogle.loaded) {
        var d = document.createElement('div');
        d.style = 'position: fixed; z-index: 1100; background: black; color: red; width: 100%; height: 2rem; text-align: center; padding: .25rem .5rem; top: 0; display: flex; justify-content: center; align-items: center; font-weight:bold; text-transform: uppercase;';
        d.innerText = 'Please turn off the ad blcok.';
        document.body.prepend(d);
        var topAppBar = document.querySelector('.top-app-bar') as HTMLHtmlElement;
        topAppBar.style = 'top: 2rem;';

        document.querySelector('main').style = 'margin-top: calc(92px + 2rem);';
    }
}, 2000);
