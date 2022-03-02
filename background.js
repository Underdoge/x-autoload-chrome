chrome.action.onClicked.addListener((tab) => {
    chrome.storage.local.get(['status'], function(result) {
        if(!result || result.status == "disabled"){
            chrome.storage.local.set({"status": "enabled"}, function() {
                chrome.action.setIcon({path: "/icons/icon16.png"});
              });
        } else {
            chrome.storage.local.set({"status": "disabled"}, function() {
                chrome.action.setIcon({path: "/icons/icon16_off.png"});
              });
        }
    });
});
