let matches = [
    "medium.com",
    "towardsdatascience.com",
];

chrome.tabs.onCreated.addListener(function(tab){
    console.log("tab")
    let {id, pendingUrl} = tab; 
    console.log(id, pendingUrl);
    let flag = false;
    matches.forEach(url => {
        if(pendingUrl.match(url)!=null){
            flag = true;
        }
    })
    if(flag){
        chrome.tabs.remove(tab.id, function() {});
        chrome.windows.create({"url": pendingUrl, "incognito": true});
    }
})


chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(tabs);
    });
    
});