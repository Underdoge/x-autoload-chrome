var target = document.body;
var scrollPos = window.scrollY;

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            if (mutation.target.getElementsByTagName("span").length > 0) {
                if(mutation.target.getElementsByTagName("span")[0].innerText.match("^Show [0-9]{1,2} posts")){
                    mutation.target.getElementsByTagName("span")[0].parentNode.parentNode.click();
                } else if (mutation.target.getElementsByTagName("span")[0].innerText.match("^Show 1 post")){
                    mutation.target.getElementsByTagName("span")[0].parentNode.parentNode.click();
                }
            }
        }
    });
});

var config = { childList: true, attributes: true, characterData: true, subtree: true };

observer.observe(target, config);

document.addEventListener('scroll', function(e) {
    scrollPos = window.scrollY;
    if (window.scrollY === 0 && document.getElementsByTagName("span").length > 0){
        const spans = document.getElementsByTagName("span");
        for (const item of spans){
            if (item.innerText.match("^Show [0-9]{1,2} posts"))
                item.click();
            else if (item.innerText.match("^Show 1 post"))
                item.click();
        }
    }
});
