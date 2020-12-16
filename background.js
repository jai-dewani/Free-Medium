let matches = [
    "medium.com",
    "towardsdatascience.com",
];

chrome.tabs.onCreated.addListener(function(tab){
    let {id, pendingUrl} = tab; 
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
