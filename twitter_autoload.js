var target = document.body;
var scrollPos = window.scrollY;
var status = "enabled";

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (status == "enabled" && scrollPos === 0 && mutation.target.className === "css-901oao css-bfa6kz r-1kihuf0 r-jwli3a r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0")
            mutation.target.click();
    });
});

var config = { childList: true, attributes: true, characterData: true, subtree: true };

observer.observe(target, config);

document.addEventListener('scroll', function(e) {
    scrollPos = window.scrollY;
    if (status == "enabled" && window.scrollY === 0 && document.getElementsByClassName('css-901oao css-bfa6kz r-1kihuf0 r-jwli3a r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0').length > 0)
        document.getElementsByClassName('css-901oao css-bfa6kz r-1kihuf0 r-jwli3a r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0')[0].click();
});

chrome.storage.onChanged.addListener(function (changes) {
    status = changes.status.newValue;
    if (status == "enabled" && window.scrollY === 0 && document.getElementsByClassName('css-901oao css-bfa6kz r-1kihuf0 r-jwli3a r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0').length > 0)
        document.getElementsByClassName('css-901oao css-bfa6kz r-1kihuf0 r-jwli3a r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0')[0].click();
})